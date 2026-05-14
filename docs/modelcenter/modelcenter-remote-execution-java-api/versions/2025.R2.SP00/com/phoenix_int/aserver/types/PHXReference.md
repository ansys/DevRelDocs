# Class PHXReference


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXReference
```


**All Implemented Interfaces:**
- [IPHXAlwaysWriteable](IPHXAlwaysWriteable.md), [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md)

---

```java
public class PHXReference
extends java.lang.Object
implements IPHXAlwaysWriteable, IPHXType2
```

The type for references. This class matches up to references in ModelCenter. Users may define their own properties in addition to the value property.

- **value**: double
- **properties**: PHXRefProperty[]
- **reference**: String

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXReference()`constructor |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `PHXRefProperty` | `_getProperty(java.lang.String name)`<br>retrieves a named property |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `IPHXRefPropInfo` | `createRefProp(java.lang.String name, java.lang.String type)`<br>adds a property to the variable |
| `void` | `fromString(java.lang.String s)`<br>converts from a string |
| `void` | `fromString2(PHXStringBuffers)`<br>converts from a PHXStringBuffer |
| `java.lang.String` | `getDescription()` |
| `PHXRefProperty[]` | `getProperties()`<br>retrieves the properties of the variable |
| `java.lang.String` | `getReference()`<br>retrieves the current reference string. |
| `boolean` | `getRefPropValueBoolean(java.lang.String name)` |
| `double` | `getRefPropValueDouble(java.lang.String name)`<br>gets a value for a ref prop |
| `long` | `getRefPropValueLong(java.lang.String name)` |
| `java.lang.String` | `getRefPropValueString(java.lang.String name)` |
| `double` | `getValue()`<br>retrieves the current value of the variable |
| `void` | `setDescription(java.lang.String desc)` |
| `void` | `setProperties(PHXRefProperty[] v)` |
| `void` | `setReference(java.lang.String ref)`<br>sets the value for the reference string. |
| `void` | `setRefPropValue(java.lang.String name, boolean value)` |
| `void` | `setRefPropValue(java.lang.String name, double value)`<br>sets a value for a ref prop |
| `void` | `setRefPropValue(java.lang.String name, long value)` |
| `void` | `setRefPropValue(java.lang.String name, java.lang.String value)` |
| `void` | `setValue(double v)`<br>sets the value for the variable |
| `java.lang.String` | `toString()`<br>converts to a string |
| `PHXStringBuffer` | `toString2()`<br>converts to a PHXStringBuffer |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXReference

```java
public PHXReference()
```

Constructor

## Method Detail

### getValue

```java
public double getValue()
```

Retrieves the current value of the variable

**Returns:**
- the value of the variable

### setValue

```java
public void setValue(double v)
```

Sets the value for the variable

**Parameters:**
- `v` - the value

### getReference

```java
public java.lang.String getReference()
```

Retrieves the current reference string. This is a client-supplied value describing what the reference value points to.

**Returns:**
- the reference string

### setReference

```java
public void setReference(java.lang.String ref)
```

Sets the value for the reference string. This should only be called by the client application, e.g. ModelCenter.

**Parameters:**
- `ref` - the reference string

### getProperties

```java
public PHXRefProperty[] getProperties()
```

Retrieves the properties of the variable

**Returns:**
- the properties of the variable

### setProperties

```java
public void setProperties(PHXRefProperty[] v)
```

### createRefProp

```java
public IPHXRefPropInfo createRefProp(java.lang.String name,
                                     java.lang.String type)
```

Adds a property to the variable

**Parameters:**
- `name` - the name of the property
- `type` - property type: "long", "double", "boolean", or "string"

### getRefPropValueDouble

```java
public double getRefPropValueDouble(java.lang.String name)
                             throws PHXTypeMismatchException
```

Gets a value for a ref prop

**Parameters:**
- `name` - the name of the property

**Returns:**
- the value of the property

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueLong

```java
public long getRefPropValueLong(java.lang.String name)
                         throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueBoolean

```java
public boolean getRefPropValueBoolean(java.lang.String name)
                               throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### getRefPropValueString

```java
public java.lang.String getRefPropValueString(java.lang.String name)
                                       throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            double value)
                     throws PHXTypeMismatchException
```

Sets a value for a ref prop

**Parameters:**
- `name` - the name of the property
- `value` - the value of the property

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            long value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            boolean value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            java.lang.String value)
                     throws PHXTypeMismatchException
```


**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md)

### _getProperty

```java
public PHXRefProperty _getProperty(java.lang.String name)
```

Retrieves a named property

**Parameters:**
- `name` - the name of the property

**Returns:**
- the property matching the specified name

### toString2

```java
public PHXStringBuffer toString2()
```

Converts to a PHXStringBuffer

**Specified by:**
- `toString2` in interface [`IPHXType2`](IPHXType2.md)

**Returns:**
- a PHXStringBuffer

### toString

```java
public java.lang.String toString()
```

converts to a string

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a string

### fromString2

```java
public void fromString2(PHXStringBuffer s)
```

Converts from a PHXStringBuffer

**Specified by:**
- `fromString2` in interface [`IPHXType2`](IPHXType2.md)

**Parameters:**
- `s` - the PHXStringBuffer value

### fromString

```java
public void fromString(java.lang.String s)
```

Converts from a string

**Specified by:**
- `fromString` in interface [`IPHXType`](IPHXType.md)

**Parameters:**
- `s` - the string value

### getDescription

```java
public java.lang.String getDescription()
```

### setDescription

```java
public void setDescription(java.lang.String desc)
```

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Accept a Visitor.

**Specified by:**
- `Accept` in interface [`IPHXType2`](IPHXType2.md)

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.
