======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXReference
- java.lang.Object
- - com.phoenix_int.aserver.types.PHXReference
- **All Implemented Interfaces:**
: [IPHXAlwaysWriteable](../../../../com/phoenix_int/aserver/IPHXAlwaysWriteable.html),[IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html)

---

```java
public class PHXReference
extends java.lang.Object
implements IPHXAlwaysWriteable, IPHXType2
```
The Phoenix type for references. This class matches up to
 references in ModelCenter. Users may define their own
 properties in addition to the value property.
- **value**: double
- **properties**: PHXRefProperty[]
- **reference**: String
**Author:**
: Woyak- ======== NESTED CLASS SUMMARY ========
- ### Nested Class Summary

- ### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`
======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXReference()`constructor |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `PHXRefProperty` | `_getProperty(java.lang.String name)`retrieves a named property |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `IPHXRefPropInfo` | `createRefProp(java.lang.String name,
             java.lang.String type)`adds a property to the variable |
| `void` | `fromString(java.lang.String s)`converts from a string |
| `void` | `fromString2(PHXStringBuffers)`converts from a PHXStringBuffer |
| `java.lang.String` | `getDescription()` |
| `PHXRefProperty[]` | `getProperties()`retrieves the properties of the variable |
| `java.lang.String` | `getReference()`retrieves the current reference string. |
| `boolean` | `getRefPropValueBoolean(java.lang.String name)` |
| `double` | `getRefPropValueDouble(java.lang.String name)`gets a value for a ref prop |
| `long` | `getRefPropValueLong(java.lang.String name)` |
| `java.lang.String` | `getRefPropValueString(java.lang.String name)` |
| `double` | `getValue()`retrieves the current value of the variable |
| `void` | `setDescription(java.lang.String desc)` |
| `void` | `setProperties(PHXRefProperty[] v)` |
| `void` | `setReference(java.lang.String ref)`sets the value for the reference string. |
| `void` | `setRefPropValue(java.lang.String name,
               boolean value)` |
| `void` | `setRefPropValue(java.lang.String name,
               double value)`sets a value for a ref prop |
| `void` | `setRefPropValue(java.lang.String name,
               long value)` |
| `void` | `setRefPropValue(java.lang.String name,
               java.lang.String value)` |
| `void` | `setValue(double v)`sets the value for the variable |
| `java.lang.String` | `toString()`converts to a string |
| `PHXStringBuffer` | `toString2()`converts to a PHXStringBuffer |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXReference

```java
public PHXReference()
```
constructor
============ METHOD DETAIL ==========
- ### Method Detail

- #### getValue

```java
public double getValue()
```
retrieves the current value of the variable
**Returns:**
: the value of the variable

- #### setValue

```java
public void setValue(double v)
```
sets the value for the variable
**Parameters:**
: `v`- the value

- #### getReference

```java
public java.lang.String getReference()
```
retrieves the current reference string. This is a client-supplied
 value describing what the reference value points to.
**Returns:**
: the reference string

- #### setReference

```java
public void setReference(java.lang.String ref)
```
sets the value for the reference string. This should only be
 called by the client application, e.g. ModelCenter.
**Parameters:**
: `ref`- the reference string

- #### getProperties

```java
public PHXRefProperty[] getProperties()
```
retrieves the properties of the variable
**Returns:**
: the properties of the variable

- #### setProperties

```java
public void setProperties(PHXRefProperty[] v)
```

- #### createRefProp

```java
public IPHXRefPropInfo createRefProp(java.lang.String name,
                                     java.lang.String type)
```
adds a property to the variable
**Parameters:**
: `name`- the name of the property
: `type`- property type: "long", "double", "boolean", or "string"

- #### getRefPropValueDouble

```java
public double getRefPropValueDouble(java.lang.String name)
                             throws PHXTypeMismatchException
```
gets a value for a ref prop
**Parameters:**
: `name`- the name of the property
**Returns:**
: the value of the property
**Throws:**
: `PHXTypeMismatchException`

- #### getRefPropValueLong

```java
public long getRefPropValueLong(java.lang.String name)
                         throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### getRefPropValueBoolean

```java
public boolean getRefPropValueBoolean(java.lang.String name)
                               throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### getRefPropValueString

```java
public java.lang.String getRefPropValueString(java.lang.String name)
                                       throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            double value)
                     throws PHXTypeMismatchException
```
sets a value for a ref prop
**Parameters:**
: `name`- the name of the property
: `value`- the value of the property
**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            long value)
                     throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            boolean value)
                     throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            java.lang.String value)
                     throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### _getProperty

```java
public PHXRefProperty _getProperty(java.lang.String name)
```
retrieves a named property
**Parameters:**
: `name`- the name of the property
**Returns:**
: the property matching the specified name

- #### toString2

```java
public PHXStringBuffer toString2()
```
converts to a PHXStringBuffer
**Specified by:**
: `toString2`in interface`IPHXType2`
**Returns:**
: a PHXStringBuffer

- #### toString

```java
public java.lang.String toString()
```
converts to a string
**Specified by:**
: `toString`in interface`IPHXType`
**Overrides:**
: `toString`in class`java.lang.Object`
**Returns:**
: a string

- #### fromString2

```java
public void fromString2(PHXStringBuffer s)
```
converts from a PHXStringBuffer
**Specified by:**
: `fromString2`in interface`IPHXType2`
**Parameters:**
: `s`- the PHXStringBuffer value

- #### fromString

```java
public void fromString(java.lang.String s)
```
converts from a string
**Specified by:**
: `fromString`in interface`IPHXType`
**Parameters:**
: `s`- the string value

- #### getDescription

```java
public java.lang.String getDescription()
```

- #### setDescription

```java
public void setDescription(java.lang.String desc)
```

- #### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```
Accept a Visitor.
**Specified by:**
: `Accept`in interface`IPHXType2`
**Type Parameters:**
: `T`- Type of the result of the visit.
**Parameters:**
: `visitor`- The visitor to accept.
**Returns:**
: The results of the visit.
========= END OF CLASS DATA =========