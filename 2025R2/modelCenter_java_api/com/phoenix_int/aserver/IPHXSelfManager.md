# Interface: IPHXSelfManager

**Package:** `com.phoenix_int.aserver`

**Known Subinterfaces**
- [`IPHXSelfManager2`](IPHXSelfManager2.md), [`IPHXSelfManager3`](IPHXSelfManager3.md)

**Known Implementing Classes**
- [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md), [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md), [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md)

**Declaration**
```java
public interface IPHXSelfManager
```

This interface is for components that determine their properties at runtime. These types of components do not know what variables they have until they are started. Examples include wrappers that communicate with external programs—once the wrapper starts up, it loads a file into the external program. The external program then can be queried for its variables, which are then relayed through the analysis object. To handle this type of situation, a component should implement the functions provided by this interface. When present, the ModelCenter Remote Execution will call these functions. If an object does not implement this interface, the MCRE will use the default Bean mechanisms for interacting with the object.

**See Also:**
- [`IPHXComponent`](IPHXComponent.md), [`IPHXAnalysis`](IPHXAnalysis.md), [`IPHXDriver`](IPHXDriver.md)

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `PHXMethodDescriptor[]` | `getMethodDescriptors()`<br>Function for retrieving the methods of an object. |
| `PHXPropertyDescriptor[]` | `getPropertyDescriptors(java.lang.String name)`<br>Function for retrieving the properties of an object. |
| `java.lang.String` | `getValue(java.lang.String name)`<br>Function for retrieving a specified value. |
| `java.lang.String` | `invoke(java.lang.String methodName)`<br>Invokes the named method. |
| `void` | `setValue(java.lang.String name, java.lang.String value)`<br>Function for setting a specified value. |

## Method Detail

### getValue
```java
java.lang.String getValue(java.lang.String name)
    throws PHXNoSuchObjectException, java.lang.Exception
```
Function for retrieving a specified value.

**Parameters:**
- `name` - the value to retrieve

**Returns:**
- a String representation of the value

**Throws:**
- `PHXNoSuchObjectException` - thrown if the specified name does not exist
- `java.lang.Exception` - an exception that may occur

### setValue
```java
void setValue(java.lang.String name, java.lang.String value)
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

### getPropertyDescriptors
```java
PHXPropertyDescriptor[] getPropertyDescriptors(java.lang.String name)
    throws PHXNoSuchObjectException, java.lang.Exception
```
Function for retrieving the properties of an object.

**Parameters:**
- `name` - the object to retrieve descriptors for

**Returns:**
- an array of PHXPropertyDescriptors

**Throws:**
- `PHXNoSuchObjectException` - thrown if the specified name does not exist
- `java.lang.Exception` - an exception that may occur

### getMethodDescriptors
```java
PHXMethodDescriptor[] getMethodDescriptors()
    throws java.lang.Exception
```
Function for retrieving the methods of an object.

**Returns:**
- an array of MethodDescriptors

**Throws:**
- `java.lang.Exception` - an exception that may occur

### invoke
```java
java.lang.String invoke(java.lang.String methodName)
    throws java.lang.Exception
```
Invokes the named method.

**Parameters:**
- `methodName` - the name of the method to invoke on obj

**Returns:**
- the return value from the invocation

**Throws:**
- `java.lang.Exception` - an exception that may occur