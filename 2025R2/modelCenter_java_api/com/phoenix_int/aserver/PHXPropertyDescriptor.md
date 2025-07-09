# Class: PHXPropertyDescriptor

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXPropertyDescriptor
```

**Declaration**
```
public class PHXPropertyDescriptor
extends java.lang.Object
```

A utility class used by [PHXSimpleSelfManager](PHXSimpleSelfManager.md), [PHXSimpleSelfManager2](PHXSimpleSelfManager2.md), and [PHXSimpleSelfManager3](PHXSimpleSelfManager3.md) to indicate which properties it manages.


## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXPropertyDescriptor()`<br>Creates a property descriptor with all values set to "unknown" |
| `PHXPropertyDescriptor(java.beans.PropertyDescriptor prop)` |
| `PHXPropertyDescriptor(java.beans.PropertyDescriptor prop, java.lang.Object parent)` |
| `PHXPropertyDescriptor(java.lang.String name, java.lang.Object object, boolean canSet, boolean canGet)` |
| `PHXPropertyDescriptor(java.lang.String name, java.lang.String type, boolean canSet, boolean canGet)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static void` | `asPropertyDescriptor(java.lang.StringBuffer out, java.lang.String name, java.lang.String type, boolean canSet, boolean canGet)`<br>Stringify the property descriptor data. |
| `java.lang.String` | `asValueDescriptor()`<br>Converts the property to a machine-readable format. |
| `static void` | `asValueDescriptor(java.lang.StringBuffer out, java.lang.String name, java.lang.String type, boolean canSet, boolean canGet, java.lang.String value)`<br>Stringify the value descriptor data. |
| `void` | `asValueDescriptor2([util/PHXStringBuffer](util/PHXStringBuffer.md) out)`<br>Converts the property to a readable format. |
| `void` | `asValueDescriptor3([util/PHXStringBuffer](util/PHXStringBuffer.md) out)`<br>Converts the property to a readable format. |
| `boolean` | `getCanGet()`<br>Determines if the property can be retrieved. |
| `boolean` | `getCanSet()`<br>Determines if the property can be modified. |
| `java.lang.String` | `getName()`<br>Retrieves the property name. |
| `java.lang.Object` | `getSource()` |
| `java.lang.String` | `getType()`<br>Retrieves the type of the property as a string. |
| `java.lang.Class` | `getTypeClass()`<br>Retrieves the type of the property as a Class object. |
| `java.lang.String` | `getValue()` |
| `[util/PHXStringBuffer](util/PHXStringBuffer.md)` | `getValue2()` |
| `[util/PHXStringBuffer](util/PHXStringBuffer.md)` | `getValue3()` |
| `void` | `setCanGet(boolean flag)`<br>Sets whether the property can be retrieved. |
| `void` | `setCanSet(boolean flag)`<br>Sets whether the property can be modified. |
| `java.lang.String` | `toString()`<br>Converts the property to a readable format. |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXPropertyDescriptor
```
public PHXPropertyDescriptor()
```
Creates a property descriptor with all values set to "unknown".

### PHXPropertyDescriptor
```
public PHXPropertyDescriptor(java.beans.PropertyDescriptor prop)
```
**Parameters:**
- `prop` - the PropertyDescriptor

### PHXPropertyDescriptor
```
public PHXPropertyDescriptor(java.lang.String name, 
                             java.lang.String type, 
                             boolean canSet, 
                             boolean canGet)
```
**Parameters:**
- `name` - the name of the property
- `type` - the property type
- `canGet` - true if the property is readable
- `canSet` - true if the property is writeable

### PHXPropertyDescriptor
```
public PHXPropertyDescriptor(java.lang.String name, 
                             java.lang.Object object, 
                             boolean canSet, 
                             boolean canGet)
```
**Parameters:**
- `name` - the name of the property
- `object` - the property
- `canGet` - true if the property is readable
- `canSet` - true if the property is writeable

### PHXPropertyDescriptor
```
public PHXPropertyDescriptor(java.beans.PropertyDescriptor prop, 
                             java.lang.Object parent)
                      throws java.lang.IllegalArgumentException
```
**Parameters:**
- `prop` - the PropertyDescriptor
- `parent` - the parent object - used to retrieve the actual object for prop if prop is an array (so that the array length can be determined). May be null.

**Throws:**
- `java.lang.IllegalArgumentException`

## Method Detail

### getCanGet
```
public boolean getCanGet()
```
Determines if the property can be retrieved.

**Returns:**
- true if the property can be retrieved

### setCanGet
```
public void setCanGet(boolean flag)
```
Sets whether the property can be retrieved.

**Parameters:**
- `flag` - true if the property can be retrieved

### getCanSet
```
public boolean getCanSet()
```
Determines if the property can be modified.

**Returns:**
- true if the property can be modified

### setCanSet
```
public void setCanSet(boolean flag)
```
Sets whether the property can be modified.

**Parameters:**
- `flag` - true if the property can be modified

### getName
```
public java.lang.String getName()
```
Retrieves the property name.

**Returns:**
- the name of the property

### getType
```
public java.lang.String getType()
```
Retrieves the type of the property as a string.

**Returns:**
- the type of the property as a String

### getTypeClass
```
public java.lang.Class getTypeClass()
```
Retrieves the type of the property as a Class object.

**Returns:**
- the type of the property as a Class object

### getValue
```
public java.lang.String getValue()
```

### getValue2
```
public PHXStringBuffer getValue2()
    throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### getValue3
```
public PHXStringBuffer getValue3()
    throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### getSource
```
public java.lang.Object getSource()
```

### toString
```
public java.lang.String toString()
```
Converts the property to a readable format.

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- the property in String format

### asValueDescriptor
```
public java.lang.String asValueDescriptor()
```
Converts the property to a machine-readable format.

**Returns:**
- the property in String format

### asValueDescriptor2
```
public void asValueDescriptor2(PHXStringBuffer out)
                        throws java.io.IOException
```
Converts the property to a readable format. Returns a [util/PHXStringBuffer](util/PHXStringBuffer.md) for performance.

**Parameters:**
- `out` - a buffer for the method to use to store the property in String format

**Throws:**
- `java.io.IOException`

### asValueDescriptor3
```
public void asValueDescriptor3(PHXStringBuffer out)
                        throws java.io.IOException
```
Converts the property to a readable format. Returns a [util/PHXStringBuffer](util/PHXStringBuffer.md) for performance.

**Parameters:**
- `out` - a buffer for the method to use to store the property in String format

**Throws:**
- `java.io.IOException`

### asPropertyDescriptor
```
public static void asPropertyDescriptor(java.lang.StringBuffer out, 
                                        java.lang.String name, 
                                        java.lang.String type, 
                                        boolean canSet, 
                                        boolean canGet)
```
Stringify the property descriptor data.

**Parameters:**
- `out` - the buffer to write to
- `name` - the property name
- `type` - the property type
- `canSet` - whether the property can be set
- `canGet` - whether the property can be read

### asValueDescriptor
```
public static void asValueDescriptor(java.lang.StringBuffer out, 
                                     java.lang.String name, 
                                     java.lang.String type, 
                                     boolean canSet, 
                                     boolean canGet, 
                                     java.lang.String value)
```
Stringify the value descriptor data.

**Parameters:**
- `out` - the buffer to write to
- `name` - the property name
- `type` - the property type
- `canSet` - whether the property can be set
- `canGet` - whether the property can be read
- `value` - the value to write