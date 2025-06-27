======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXReferenceArray
- java.lang.Object
- - com.phoenix_int.aserver.types.PHXReferenceArray
- **All Implemented Interfaces:**
: [IPHXAlwaysWriteable](../../../../com/phoenix_int/aserver/IPHXAlwaysWriteable.html)

---

```java
public class PHXReferenceArray
extends java.lang.Object
implements IPHXAlwaysWriteable
```
The Phoenix type for references. This class matches up to
 references in ModelCenter. Users may define their own
 properties in addition to the value property.
- **value**: double[]
- **length**: int
- **autoGrow**: boolean
- **properties**: PHXRefArrayProperty[]
- **reference**: String[]
**Author:**
: Woyak- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXReferenceArray()`constructor |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `IPHXRefPropInfo` | `createRefProp(java.lang.String name,
             java.lang.String type)`adds a ref prop to the variable. |
| `boolean` | `getAutoGrow()`retrieves the autoGrow value |
| `int` | `getLength()`retrieves the number of references in the array |
| `PHXRefArrayProperty[]` | `getProperties()`get-set function for AServer |
| `java.lang.String[]` | `getReference()`retrieves the current reference string. |
| `java.lang.String` | `getReference(int i)` |
| `boolean` | `getRefPropValueBoolean(java.lang.String name,
                      int index)` |
| `double` | `getRefPropValueDouble(java.lang.String name,
                     int index)`gets a value for a ref prop |
| `long` | `getRefPropValueLong(java.lang.String name,
                   int index)` |
| `java.lang.String` | `getRefPropValueString(java.lang.String name,
                     int index)` |
| `double[]` | `getValues()`retrieves the current value of the variable |
| `void` | `setAutoGrow(boolean flag)`sets the autoGrow value. |
| `void` | `setLength(int v)`sets the number of references |
| `void` | `setProperties(PHXRefArrayProperty[] p)` |
| `void` | `setReference(int i,
            java.lang.String ref)` |
| `void` | `setReference(java.lang.String[] ref)`sets the value for the reference string. |
| `void` | `setRefPropValue(java.lang.String name,
               int index,
               boolean value)` |
| `void` | `setRefPropValue(java.lang.String name,
               int index,
               double value)`sets a value for a ref prop |
| `void` | `setRefPropValue(java.lang.String name,
               int index,
               long value)` |
| `void` | `setRefPropValue(java.lang.String name,
               int index,
               java.lang.String value)` |
| `void` | `setValues(double[] v)`sets the value for the variable |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXReferenceArray

```java
public PHXReferenceArray()
```
constructor
============ METHOD DETAIL ==========
- ### Method Detail

- #### getProperties

```java
public PHXRefArrayProperty[] getProperties()
```
get-set function for AServer

- #### setProperties

```java
public void setProperties(PHXRefArrayProperty[] p)
```

- #### getValues

```java
public double[] getValues()
```
retrieves the current value of the variable
**Returns:**
: the value of the variable

- #### setValues

```java
public void setValues(double[] v)
```
sets the value for the variable
**Parameters:**
: `v`- the value

- #### getReference

```java
public java.lang.String[] getReference()
```
retrieves the current reference string. This is a client-supplied
 value describing what the reference value points to.
**Returns:**
: the reference string

- #### getReference

```java
public java.lang.String getReference(int i)
```

- #### setReference

```java
public void setReference(java.lang.String[] ref)
```
sets the value for the reference string. This should only be
 called by the client application, e.g. ModelCenter.
**Parameters:**
: `ref`- the reference string

- #### setReference

```java
public void setReference(int i,
                         java.lang.String ref)
```

- #### getLength

```java
public int getLength()
```
retrieves the number of references in the array
**Returns:**
: the number of references

- #### setLength

```java
public void setLength(int v)
```
sets the number of references
**Parameters:**
: `v`- the number of references

- #### getAutoGrow

```java
public boolean getAutoGrow()
```
retrieves the autoGrow value
**Returns:**
: true or false

- #### setAutoGrow

```java
public void setAutoGrow(boolean flag)
```
sets the autoGrow value. If true, the client application
 is allowed to resize the array as needed.
**Parameters:**
: `flag`- true or false

- #### createRefProp

```java
public IPHXRefPropInfo createRefProp(java.lang.String name,
                                     java.lang.String type)
```
adds a ref prop to the variable.
**Parameters:**
: `name`- the name of the property
: `type`- property type: "long", "double", "boolean", or "string"

- #### getRefPropValueDouble

```java
public double getRefPropValueDouble(java.lang.String name,
                                    int index)
                             throws PHXTypeMismatchException
```
gets a value for a ref prop
**Parameters:**
: `name`- the name of the property
: `index`- the array element
**Returns:**
: the value of the property
**Throws:**
: `PHXTypeMismatchException`

- #### getRefPropValueLong

```java
public long getRefPropValueLong(java.lang.String name,
                                int index)
                         throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### getRefPropValueBoolean

```java
public boolean getRefPropValueBoolean(java.lang.String name,
                                      int index)
                               throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### getRefPropValueString

```java
public java.lang.String getRefPropValueString(java.lang.String name,
                                              int index)
                                       throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            double value)
                     throws PHXTypeMismatchException
```
sets a value for a ref prop
**Parameters:**
: `name`- the name of the property
: `index`- the array element
: `value`- the value of the property
**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            long value)
                     throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            boolean value)
                     throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`

- #### setRefPropValue

```java
public void setRefPropValue(java.lang.String name,
                            int index,
                            java.lang.String value)
                     throws PHXTypeMismatchException
```

**Throws:**
: `PHXTypeMismatchException`
========= END OF CLASS DATA =========