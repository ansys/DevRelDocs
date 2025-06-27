# Interface: IPHXSelfManager2

**Package:** `com.phoenix_int.aserver`

**Superinterfaces**
- `IPHXSelfManager`

**Known Subinterfaces**
- `IPHXSelfManager3`

**Known Implementing Classes**
- `PHXSimpleSelfManager2`, `PHXSimpleSelfManager3`

**Declaration**
```java
public interface IPHXSelfManager2
    extends IPHXSelfManager
```

This interface extends IPHXSelfManager and provides new get and set functions which provide better performance than the original.

**See Also:**
- `IPHXSelfManager`

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Object` | `getValue2(java.lang.String name)`<br>Function for retrieving a specified value. |
| `void` | `setValue2(java.lang.String name, PHXStringBuffer value)`<br>Function for setting a specified value. |

### Methods inherited from interface `com.phoenix_int.aserver.IPHXSelfManager`
`getMethodDescriptors`, `getPropertyDescriptors`, `getValue`, `invoke`, `setValue`

## Method Detail

### getValue2
```java
java.lang.Object getValue2(java.lang.String name)
    throws PHXNoSuchObjectException, java.lang.Exception
```
Function for retrieving a specified value.

**Parameters:**
- `name` - the value to retrieve

**Returns:**
- The value to be returned as any type of java Object.

**Throws:**
- `PHXNoSuchObjectException` - thrown if the specified name does not exist
- `java.lang.Exception` - an exception that may occur

### setValue2
```java
void setValue2(java.lang.String name, PHXStringBuffer value)
    throws PHXNoSuchObjectException, PHXNoSuchWriteableObjectException, java.lang.Exception
```
Function for setting a specified value.

**Parameters:**
- `name` - the value to retrieve
- `value` - the String representation of the value to set

**Throws:**
- `PHXNoSuchObjectException` - thrown if the specified name does not exist
- `PHXNoSuchWriteableObjectException` - thrown if the specified name cannot be modified
- `java.lang.Exception` - an exception that may occur