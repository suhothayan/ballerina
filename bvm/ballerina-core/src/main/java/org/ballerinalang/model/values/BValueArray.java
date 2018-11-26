/*
*  Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
*  WSO2 Inc. licenses this file to you under the Apache License,
*  Version 2.0 (the "License"); you may not use this file except
*  in compliance with the License.
*  You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing,
*  software distributed under the License is distributed on an
*  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
*  KIND, either express or implied.  See the License for the
*  specific language governing permissions and limitations
*  under the License.
*/
package org.ballerinalang.model.values;

import org.ballerinalang.bre.bvm.CPU;
import org.ballerinalang.model.types.BArrayType;
import org.ballerinalang.model.types.BTupleType;
import org.ballerinalang.model.types.BType;
import org.ballerinalang.model.types.BTypes;
import org.ballerinalang.model.types.BUnionType;
import org.ballerinalang.model.types.TypeTags;
import org.ballerinalang.model.util.JsonGenerator;
import org.ballerinalang.persistence.serializable.SerializableState;
import org.ballerinalang.persistence.serializable.reftypes.Serializable;
import org.ballerinalang.persistence.serializable.reftypes.SerializableRefType;
import org.ballerinalang.persistence.serializable.reftypes.impl.SerializableBRefArray;
import org.ballerinalang.util.BLangConstants;
import org.ballerinalang.util.exceptions.BallerinaException;
import org.wso2.ballerinalang.compiler.util.BArrayState;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Map;
import java.util.StringJoiner;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

import static org.ballerinalang.model.util.FreezeUtils.handleInvalidUpdate;
import static org.ballerinalang.model.util.FreezeUtils.isOpenForFreeze;

/**
 * @since 0.985.0
 */
public class BValueArray extends BNewArray implements Serializable {

    BRefType<?>[] refValues;
    private long[] intValues;
    private int[] booleanValues;
    private byte[] byteValues;
    private double[] floatValues;
    private String[] stringValues;

    public BType elementType;

    //------------------------ Constructors -------------------------------------------------------------------

    public BValueArray(BRefType<?>[] values, BType type) {
        this.refValues = values;
        super.arrayType = type;
        this.size = values.length;
        if (type != null) {
            if (type.getTag() == TypeTags.ARRAY_TAG) {
                this.elementType = ((BArrayType) type).getElementType();
            } else {
                this.elementType = type;
            }
        }
    }

    public BValueArray(long[] values) {
        this.intValues = values;
        this.size = values.length;
        super.arrayType = new BArrayType(BTypes.typeInt);
        this.elementType = BTypes.typeInt;
    }

    public BValueArray(int[] values) {
        this.booleanValues = values;
        this.size = values.length;
        super.arrayType = new BArrayType(BTypes.typeBoolean);
        this.elementType = BTypes.typeBoolean;
    }

    public BValueArray(byte[] values) {
        this.byteValues = values;
        this.size = values.length;
        super.arrayType = new BArrayType(BTypes.typeByte, size);
        this.elementType = BTypes.typeByte;
    }

    public BValueArray(double[] values) {
        this.floatValues = values;
        this.size = values.length;
        super.arrayType = new BArrayType(BTypes.typeFloat);
        this.elementType = BTypes.typeFloat;
    }

    public BValueArray(String[] values) {
        this.stringValues = values;
        this.size = values.length;
        super.arrayType = new BArrayType(BTypes.typeString);
        this.elementType = BTypes.typeString;
    }

    public BValueArray(BType type) {
        if (type.getTag() == TypeTags.INT_TAG) {
            intValues = (long[]) newArrayInstance(Long.TYPE);
            super.arrayType = new BArrayType(BTypes.typeInt);
            this.elementType = BTypes.typeInt;
        } else if (type.getTag() == TypeTags.BOOLEAN_TAG) {
            booleanValues = (int[]) newArrayInstance(Integer.TYPE);
            super.arrayType = new BArrayType(BTypes.typeBoolean);
            this.elementType = BTypes.typeBoolean;
        } else if (type.getTag() == TypeTags.BYTE_TAG) {
            byteValues = (byte[]) newArrayInstance(Byte.TYPE);
            super.arrayType = new BArrayType(BTypes.typeByte, size);
            this.elementType = BTypes.typeByte;
        } else if (type.getTag() == TypeTags.FLOAT_TAG) {
            floatValues = (double[]) newArrayInstance(Double.TYPE);
            super.arrayType = new BArrayType(BTypes.typeFloat);
            this.elementType = BTypes.typeFloat;
        } else if (type.getTag() == TypeTags.STRING_TAG) {
            stringValues = (String[]) newArrayInstance(String.class);
            Arrays.fill(stringValues, BLangConstants.STRING_EMPTY_VALUE);
            super.arrayType = new BArrayType(BTypes.typeString);
            this.elementType = BTypes.typeString;
        } else {
            super.arrayType = type;
            if (type.getTag() == TypeTags.ARRAY_TAG) {
                BArrayType arrayType = (BArrayType) type;
                if (arrayType.getState() == BArrayState.CLOSED_SEALED) {
                    this.size = maxArraySize = arrayType.getSize();
                }
                refValues = (BRefType[]) newArrayInstance(BRefType.class);
                Arrays.fill(refValues, arrayType.getElementType().getZeroValue());
            } else if (type.getTag() == TypeTags.TUPLE_TAG) {
                BTupleType tupleType = (BTupleType) type;
                this.size = maxArraySize = tupleType.getTupleTypes().size();
                refValues = (BRefType[]) newArrayInstance(BRefType.class);
                AtomicInteger counter = new AtomicInteger(0);
                tupleType.getTupleTypes().forEach(memType ->
                        refValues[counter.getAndIncrement()] = memType.getEmptyValue());
            } else {
                refValues = (BRefType[]) newArrayInstance(BRefType.class);
                Arrays.fill(refValues, type.getEmptyValue());
            }
        }
    }

    public BValueArray() {
        refValues = (BRefType[]) newArrayInstance(BRefType.class);
    }

    public BValueArray(BType type, int size) {
        if (type.getTag() == TypeTags.INT_TAG) {
            if (size != -1) {
                this.size = maxArraySize = size;
            }
            intValues = (long[]) newArrayInstance(Long.TYPE);
            super.arrayType = new BArrayType(BTypes.typeInt, size);
            this.elementType = BTypes.typeInt;
        } else if (type.getTag() == TypeTags.BOOLEAN_TAG) {
            if (size != -1) {
                this.size = maxArraySize = size;
            }
            booleanValues = (int[]) newArrayInstance(Integer.TYPE);
            super.arrayType = new BArrayType(BTypes.typeBoolean, size);
            this.elementType = BTypes.typeBoolean;
        } else if (type.getTag() == TypeTags.BYTE_TAG) {
            if (size != -1) {
                this.size = maxArraySize = size;
            }
            byteValues = (byte[]) newArrayInstance(Byte.TYPE);
            super.arrayType = new BArrayType(BTypes.typeByte, size);
            this.elementType = BTypes.typeByte;
        } else if (type.getTag() == TypeTags.FLOAT_TAG) {
            if (size != -1) {
                this.size = maxArraySize = size;
            }
            floatValues = (double[]) newArrayInstance(Double.TYPE);
            super.arrayType = new BArrayType(BTypes.typeFloat, size);
            this.elementType = BTypes.typeFloat;
        } else if (type.getTag() == TypeTags.STRING_TAG) {
            if (size != -1) {
                this.size = maxArraySize = size;
            }
            stringValues = (String[]) newArrayInstance(String.class);
            Arrays.fill(stringValues, BLangConstants.STRING_EMPTY_VALUE);
            super.arrayType = new BArrayType(BTypes.typeString, size);
            this.elementType = BTypes.typeString;
        }
    }

    // -----------------------  get methods ----------------------------------------------------

    public BRefType<?> getRefValue(long index) {
        rangeCheckForGet(index, size);
        return refValues[(int) index];
    }

    public long getInt(long index) {
        rangeCheckForGet(index, size);
        return intValues[(int) index];
    }

    public int getBoolean(long index) {
        rangeCheckForGet(index, size);
        return booleanValues[(int) index];
    }

    public byte getByte(long index) {
        rangeCheckForGet(index, size);
        return byteValues[(int) index];
    }

    public double getFloat(long index) {
        rangeCheckForGet(index, size);
        return floatValues[(int) index];
    }

    public String getString(long index) {
        rangeCheckForGet(index, size);
        return stringValues[(int) index];
    }

    // ----------------------------  add methods --------------------------------------------------

    public void add(long index, BRefType<?> value) {
        synchronized (this) {
            if (freezeStatus.getState() != CPU.FreezeStatus.State.UNFROZEN) {
                handleInvalidUpdate(freezeStatus.getState());
            }
        }

        prepareForAdd(index, refValues.length);
        refValues[(int) index] = value;
    }

    public void add(long index, long value) {
        synchronized (this) {
            if (freezeStatus.getState() != CPU.FreezeStatus.State.UNFROZEN) {
                handleInvalidUpdate(freezeStatus.getState());
            }
        }

        prepareForAdd(index, intValues.length);
        intValues[(int) index] = value;
    }

    public void add(long index, int value) {
        if (elementType.getTag() == TypeTags.INT_TAG) {
            add(index, (long) value);
            return;
        }

        synchronized (this) {
            if (freezeStatus.getState() != CPU.FreezeStatus.State.UNFROZEN) {
                handleInvalidUpdate(freezeStatus.getState());
            }
        }

        prepareForAdd(index, booleanValues.length);
        booleanValues[(int) index] = value;
    }

    public void add(long index, byte value) {
        synchronized (this) {
            if (freezeStatus.getState() != CPU.FreezeStatus.State.UNFROZEN) {
                handleInvalidUpdate(freezeStatus.getState());
            }
        }

        prepareForAdd(index, byteValues.length);
        byteValues[(int) index] = value;
    }

    public void add(long index, double value) {
        synchronized (this) {
            if (freezeStatus.getState() != CPU.FreezeStatus.State.UNFROZEN) {
                handleInvalidUpdate(freezeStatus.getState());
            }
        }

        prepareForAdd(index, floatValues.length);
        floatValues[(int) index] = value;
    }

    public void add(long index, String value) {
        synchronized (this) {
            if (freezeStatus.getState() != CPU.FreezeStatus.State.UNFROZEN) {
                handleInvalidUpdate(freezeStatus.getState());
            }
        }

        prepareForAdd(index, stringValues.length);
        stringValues[(int) index] = value;
    }

    //-------------------------------------------------------------------------------------------------------------

    public void append(BRefType<?> value) {
        add(size, value);
    }

    @Override
    public BType getType() {
        return arrayType;
    }

    @Override
    public void stamp(BType type) {
        if (type.getTag() == TypeTags.TUPLE_TAG) {
            BRefType<?>[] arrayValues = this.getValues();
            for (int i = 0; i < this.size(); i++) {
                if (arrayValues[i] != null) {
                    arrayValues[i].stamp(((BTupleType) type).getTupleTypes().get(i));
                }
            }

        } else if (type.getTag() == TypeTags.JSON_TAG) {
            BRefType<?>[] arrayValues = this.getValues();
            for (int i = 0; i < this.size(); i++) {
                if (arrayValues[i] != null) {
                    arrayValues[i].stamp(type);
                }
            }
        } else if (type.getTag() == TypeTags.UNION_TAG) {
            for (BType memberType : ((BUnionType) type).getMemberTypes()) {
                if (CPU.checkIsLikeType(this, memberType)) {
                    this.stamp(memberType);
                    type = memberType;
                    break;
                }
            }
        } else if (type.getTag() != TypeTags.ANYDATA_TAG) {
            BType arrayElementType = ((BArrayType) type).getElementType();
            BRefType<?>[] arrayValues = this.getValues();
            for (int i = 0; i < this.size(); i++) {
                if (arrayValues[i] != null) {
                    arrayValues[i].stamp(arrayElementType);
                }
            }
        }

        this.arrayType = type;
    }

    @Override
    public void grow(int newLength) {
        if (elementType != null) {
            switch (elementType.getTag()) {
                case TypeTags.INT_TAG:
                    intValues = Arrays.copyOf(intValues, newLength);
                    break;
                case TypeTags.BOOLEAN_TAG:
                    booleanValues = Arrays.copyOf(booleanValues, newLength);
                    break;
                case TypeTags.BYTE_TAG:
                    byteValues = Arrays.copyOf(byteValues, newLength);
                    break;
                case TypeTags.FLOAT_TAG:
                    floatValues = Arrays.copyOf(floatValues, newLength);
                    break;
                case TypeTags.STRING_TAG:
                    stringValues = Arrays.copyOf(stringValues, newLength);
                    break;
                default:
                    refValues = Arrays.copyOf(refValues, newLength);
                    break;
            }
        } else {
            refValues = Arrays.copyOf(refValues, newLength);
        }
    }

    @Override
    public BValue copy(Map<BValue, BValue> refs) {
        if (isFrozen()) {
            return this;
        }

        if (refs.containsKey(this)) {
            return refs.get(this);
        }

        if (elementType != null) {
            if (elementType.getTag() == TypeTags.INT_TAG) {
                BValueArray intArray = new BValueArray(Arrays.copyOf(intValues, intValues.length));
                intArray.size = this.size;
                refs.put(this, intArray);
                return intArray;
            } else if (elementType.getTag() == TypeTags.BOOLEAN_TAG) {
                BValueArray booleanArray = new BValueArray(Arrays.copyOf(booleanValues, booleanValues.length));
                booleanArray.size = this.size;
                refs.put(this, booleanArray);
                return booleanArray;
            } else if (elementType.getTag() == TypeTags.BYTE_TAG) {
                BValueArray byteArray = new BValueArray(Arrays.copyOf(byteValues, byteValues.length));
                byteArray.size = this.size;
                refs.put(this, byteArray);
                return byteArray;
            } else if (elementType.getTag() == TypeTags.FLOAT_TAG) {
                BValueArray floatArray = new BValueArray(Arrays.copyOf(floatValues, floatValues.length));
                floatArray.size = size;
                refs.put(this, floatArray);
                return floatArray;
            } else if (elementType.getTag() == TypeTags.STRING_TAG) {
                BValueArray stringArray = new BValueArray(Arrays.copyOf(stringValues, stringValues.length));
                stringArray.size = this.size;
                refs.put(this, stringArray);
                return stringArray;
            }
        }

        BRefType<?>[] values = new BRefType[size];
        BValueArray refValueArray = new BValueArray(values, arrayType);
        refValueArray.size = this.size;
        refs.put(this, refValueArray);
        int bound = this.size;
        IntStream.range(0, bound)
                .forEach(i -> values[i] = this.refValues[i] == null ? null :
                        (BRefType<?>) this.refValues[i].copy(refs));
        return refValueArray;

    }

    @Override
    public String stringValue() {
        if (elementType != null) {
            if (elementType.getTag() == TypeTags.INT_TAG) {
                StringJoiner sj = new StringJoiner(", ", "[", "]");
                for (int i = 0; i < size; i++) {
                    sj.add(Long.toString(intValues[i]));
                }
                return sj.toString();
            } else if (elementType.getTag() == TypeTags.BOOLEAN_TAG) {
                StringJoiner sj = new StringJoiner(", ", "[", "]");
                for (int i = 0; i < size; i++) {
                    sj.add(Boolean.toString(booleanValues[i] == 1));
                }
                return sj.toString();
            } else if (elementType.getTag() == TypeTags.BYTE_TAG) {
                StringJoiner sj = new StringJoiner(", ", "[", "]");
                for (int i = 0; i < size; i++) {
                    sj.add(Integer.toString(Byte.toUnsignedInt(byteValues[i])));
                }
                return sj.toString();
            } else if (elementType.getTag() == TypeTags.FLOAT_TAG) {
                StringJoiner sj = new StringJoiner(", ", "[", "]");
                for (int i = 0; i < size; i++) {
                    sj.add(Double.toString(floatValues[i]));
                }
                return sj.toString();
            } else if (elementType.getTag() == TypeTags.STRING_TAG) {
                StringJoiner sj = new StringJoiner(", ", "[", "]");
                for (int i = 0; i < size; i++) {
                    sj.add("\"" + stringValues[i] + "\"");
                }
                return sj.toString();
            }
        }

        if (getElementType(arrayType).getTag() == TypeTags.JSON_TAG) {
            return getJSONString();
        }

        StringJoiner sj;
        if (arrayType != null && (arrayType.getTag() == TypeTags.TUPLE_TAG)) {
            sj = new StringJoiner(", ", "(", ")");
        } else {
            sj = new StringJoiner(", ", "[", "]");
        }

        for (int i = 0; i < size; i++) {
            if (refValues[i] != null) {
                sj.add((refValues[i].getType().getTag() == TypeTags.STRING_TAG)
                        ? ("\"" + refValues[i] + "\"") : refValues[i].stringValue());
            }
        }
        return sj.toString();
    }

    @Override
    public BValue getBValue(long index) {
        if (elementType != null) {
            if (elementType.getTag() == TypeTags.INT_TAG) {
                return new BInteger(getInt(index));
            } else if (elementType.getTag() == TypeTags.BOOLEAN_TAG) {
                return new BBoolean(getBoolean(index) == 1);
            } else if (elementType.getTag() == TypeTags.BYTE_TAG) {
                return new BByte(getByte(index));
            } else if (elementType.getTag() == TypeTags.FLOAT_TAG) {
                return new BFloat(getFloat(index));
            } else if (elementType.getTag() == TypeTags.STRING_TAG) {
                return new BString(getString(index));
            } else {
                return getRefValue(index);
            }
        }
        return getRefValue(index);
    }

    public BRefType<?>[] getValues() {
        return refValues;
    }

    public byte[] getBytes() {
        return byteValues.clone();
    }

    @SuppressWarnings("unchecked")
    public String[] getStringArray() {
        return stringValues;
    }

    @Override
    public String toString() {
        return stringValue();
    }

    private String getJSONString() {
        ByteArrayOutputStream byteOut = new ByteArrayOutputStream();
        JsonGenerator gen = new JsonGenerator(byteOut);
        try {
            gen.serialize(this);
            gen.flush();
        } catch (IOException e) {
            throw new BallerinaException("Error in converting JSON to a string: " + e.getMessage(), e);
        }
        return new String(byteOut.toByteArray());
    }

    private BType getElementType(BType type) {
        if (type.getTag() != TypeTags.ARRAY_TAG) {
            return type;
        }

        return getElementType(((BArrayType) type).getElementType());
    }

    @Override
    public SerializableRefType serialize(SerializableState state) {

        return new SerializableBRefArray(this, state);
    }

    @Override
    public void serialize(OutputStream outputStream) {
        if (elementType.getTag() == TypeTags.BYTE_TAG) {
            try {
                outputStream.write(byteValues);
            } catch (IOException e) {
                throw new BallerinaException("error occurred while writing the binary content to the output stream", e);
            }
        } else {
            try {
                outputStream.write(this.stringValue().getBytes(Charset.defaultCharset()));
            } catch (IOException e) {
                throw new BallerinaException("error occurred while serializing data", e);
            }
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public synchronized void attemptFreeze(CPU.FreezeStatus freezeStatus) {
        if (isOpenForFreeze(this.freezeStatus, freezeStatus)) {
            this.freezeStatus = freezeStatus;
            for (int i = 0; i < this.size; i++) {
                if (this.getRefValue(i) != null) {
                    this.getRefValue(i).attemptFreeze(freezeStatus);
                }
            }
        }
    }
}
