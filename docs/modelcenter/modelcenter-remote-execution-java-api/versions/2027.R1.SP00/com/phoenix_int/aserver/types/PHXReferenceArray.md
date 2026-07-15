# Class PHXReferenceArray


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXReferenceArray
```

**All Implemented Interfaces:**
- [IPHXAlwaysWriteable](./../IPHXAlwaysWriteable.md)

---
**Declaration:**

```java
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

```java
public PHXReferenceArray()
```

Constructor

## Method Detail

### getProperties

```java
public PHXRefArrayProperty[] getProperties()
```

Get-set function for MCRE

### setProperties

```java
public void setProperties(PHXRefArrayProperty[] p)
```

### getValues

```java
public double[] getValues()
```

Retrieves the current value of the variable

**Returns:**
- the value of the variable

### setValues

```java
public void setValues(double[] v)
```

Sets the value for the variable

**Parameters:**
- `v` - the value

### getReference

```java
public java.lang.String[] getReference()
```

Retrieves the current reference string. This is a client-supplied value describing what the reference value points to.

**Returns:**
- the reference string

### getReference

```java
public java.lang.String getReference(int i)
```

### setReference

```java
public void setReference(java.lang.String[] ref)
```

Sets the value for the reference string. This should only be called by the client application, e.g. ModelCenter.

**Parameters:**
- `ref` - the reference string

### setReference

```java
public void setReference(int i,
                         java.lang.String ref)
```

### getLength

```java
public int getLength()
```

Retrieves the number of references in the array

**Returns:**
- the number of references

### setLength

```java
public void setLength(int v)
```

Sets the number of references

**Parameters:**
- `v` - the number of references

### getAutoGrow

```java
public boolean getAutoGrow()
```

Retrieves the `autoGrow` value

**Returns:**
- `true` or `false`

### setAutoGrow

```java
public void setAutoGrow(boolean flag)
```

Sets the `autoGrow` value. If `true`, the client application is allowed to resize the array as needed.

**Parameters:**
- `flag` - `true` or `false`

### createRefProp

```java
public IPHXRefPropInfo createRefProp(java.lang.String name,
                                     java.lang.String type)
```

Adds a ref prop to the variable.

**Parameters:**
- `name` - the name of the property
- `type` - property type: "long", "double", "boolean", or "string"

### getRefPropValueDouble

```java
public double getRefPropValueDouble(java.lang.String name,
                                    int index)
                             throws PHXTypeMismatchException
```

Gets a value for a ref prop

**Parameters:**
- `name` - the name of the property
- `index` - the array element

**Returns:**
- the value of the property

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueLong

```java
public long getRefPropValueLong(java.lang.String name,
                                int index)
                         throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueBoolean

```java
public boolean getRefPropValueBoolean(java.lang.String name,
                                      int index)
                               throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueString

```java
public java.lang.String getRefPropValueString(java.lang.String name,
                                              int index)
                                       throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            double value)
                     throws PHXTypeMismatchException
```

Sets a value for a ref prop

**Parameters:**
- `name` - the name of the property
- `index` - the array element
- `value` - the value of the property

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            long value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            boolean value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            java.lang.String value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)
