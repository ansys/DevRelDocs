# Class PHXReferenceArray


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXReferenceArray
```

**All Implemented Interfaces:**
- [IPHXAlwaysWriteable](../IPHXAlwaysWriteable.md)

---
**Declaration:**

```
public class PHXReferenceArray
extends java.lang.Object
implements IPHXAlwaysWriteable
```

The type for references. This class matches up to references in ModelCenter. Users may define their own properties in addition to the value property.

- **value**: double[]
- **length**: int
- **autoGrow**: boolean
- **properties**: PHXRefArrayProperty[]
- **reference**: String[]

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXReferenceArray()`constructor |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `IPHXRefPropInfo` | `createRefProp(java.lang.String name, java.lang.String type)`<br>adds a ref prop to the variable. |
| `boolean` | `getAutoGrow()`<br>retrieves the autoGrow value |
| `int` | `getLength()`<br>retrieves the number of references in the array |
| `PHXRefArrayProperty[]` | `getProperties()`<br>get-set function for AServer |
| `java.lang.String[]` | `getReference()`<br>retrieves the current reference string. |
| `java.lang.String` | `getReference(int i)` |
| `boolean` | `getRefPropValueBoolean(java.lang.String name, int index)` |
| `double` | `getRefPropValueDouble(java.lang.String name, int index)`<br>gets a value for a ref prop |
| `long` | `getRefPropValueLong(java.lang.String name, int index)` |
| `java.lang.String` | `getRefPropValueString(java.lang.String name, int index)` |
| `double[]` | `getValues()`<br>retrieves the current value of the variable |
| `void` | `setAutoGrow(boolean flag)`<br>sets the autoGrow value. |
| `void` | `setLength(int v)`<br>sets the number of references |
| `void` | `setProperties(PHXRefArrayProperty[] p)` |
| `void` | `setReference(int i, java.lang.String ref)` |
| `void` | `setReference(java.lang.String[] ref)`<br>sets the value for the reference string. |
| `void` | `setRefPropValue(java.lang.String name, int index, boolean value)` |
| `void` | `setRefPropValue(java.lang.String name, int index, double value)`<br>sets a value for a ref prop |
| `void` | `setRefPropValue(java.lang.String name, int index, long value)` |
| `void` | `setRefPropValue(java.lang.String name, int index, java.lang.String value)` |
| `void` | `setValues(double[] v)`<br>sets the value for the variable |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXReferenceArray

```
public PHXReferenceArray()
```
constructor

## Method Detail

### getProperties

```
public PHXRefArrayProperty[] getProperties()
```
get-set function for MCRE

### setProperties

```
public void setProperties(PHXRefArrayProperty[] p)
```

### getValues

```
public double[] getValues()
```
retrieves the current value of the variable

**Returns:**
- the value of the variable

### setValues

```
public void setValues(double[] v)
```
sets the value for the variable

**Parameters:**
- `v` - the value

### getReference

```
public java.lang.String[] getReference()
```
retrieves the current reference string. This is a client-supplied value describing what the reference value points to.

**Returns:**
- the reference string

### getReference

```
public java.lang.String getReference(int i)
```

### setReference

```
public void setReference(java.lang.String[] ref)
```
sets the value for the reference string. This should only be called by the client application, e.g. ModelCenter.

**Parameters:**
- `ref` - the reference string

### setReference

```
public void setReference(int i,
                         java.lang.String ref)
```

### getLength

```
public int getLength()
```
retrieves the number of references in the array

**Returns:**
- the number of references

### setLength

```
public void setLength(int v)
```
sets the number of references

**Parameters:**
- `v` - the number of references

### getAutoGrow

```
public boolean getAutoGrow()
```
retrieves the `autoGrow` value

**Returns:**
- `true` or `false`

### setAutoGrow

```
public void setAutoGrow(boolean flag)
```
sets the `autoGrow` value. If `true`, the client application is allowed to resize the array as needed.

**Parameters:**
- `flag` - `true` or `false`

### createRefProp

```
public IPHXRefPropInfo createRefProp(java.lang.String name,
                                     java.lang.String type)
```
adds a ref prop to the variable.

**Parameters:**
- `name` - the name of the property
- `type` - property type: "long", "double", "boolean", or "string"

### getRefPropValueDouble

```
public double getRefPropValueDouble(java.lang.String name,
                                    int index)
                             throws PHXTypeMismatchException
```
gets a value for a ref prop

**Parameters:**
- `name` - the name of the property
- `index` - the array element

**Returns:**
- the value of the property

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueLong

```
public long getRefPropValueLong(java.lang.String name,
                                int index)
                         throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueBoolean

```
public boolean getRefPropValueBoolean(java.lang.String name,
                                      int index)
                               throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueString

```
public java.lang.String getRefPropValueString(java.lang.String name,
                                              int index)
                                       throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```
public void setRefPropValue(java.lang.String name,
                            int index,
                            double value)
                     throws PHXTypeMismatchException
```
sets a value for a ref prop

**Parameters:**
- `name` - the name of the property
- `index` - the array element
- `value` - the value of the property

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```
public void setRefPropValue(java.lang.String name,
                            int index,
                            long value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```
public void setRefPropValue(java.lang.String name,
                            int index,
                            boolean value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```
public void setRefPropValue(java.lang.String name,
                            int index,
                            java.lang.String value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)
