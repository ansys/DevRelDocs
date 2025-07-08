# Class: PHXSimpleSelfManager

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXSimpleSelfManager
```

**Implemented Interfaces**
- [`IPHXSelfManager`](IPHXSelfManager.md), [`IPHXComponent`](IPHXComponent.md)

**Direct Known Subclasses:**
- [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md)

**Declaration**
```java
public class PHXSimpleSelfManager
extends java.lang.Object
implements IPHXSelfManager, IPHXComponent
```

This is a class that implements most of the functionality of a self-managing component. The class provides utility functions for storing variables. These variables are then served to ModelCenter Remote Execution automatically through the `listProperties`, `getValue`, and `setValue` functions.


## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXSimpleSelfManager()`   |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `protected void` | `addMethod(java.lang.String name)`<br>Relay function for addMethod(String name, boolean isVisible=true) |
| `protected void` | `addMethod(java.lang.String name, boolean isVisible)`<br>Relay function for addMethod(String name, String fullName = name, boolean isVisible) |
| `protected void` | `addMethod(java.lang.String name, java.lang.String fullName)`<br>Relay function for addMethod(String name, String fullName, boolean isVisible=true) |
| `protected void` | `addMethod(java.lang.String name, java.lang.String fullName, boolean isVisible)`<br>Relay function for addMethod(String name, String fullName, boolean isVisible, boolean downloadInputs = false) |
| `protected void` | `addMethod(java.lang.String name, java.lang.String fullName, boolean isVisible, boolean downloadInputs)`<br>Adds a method name to the object |
| `protected void` | `addVariable(PHXVariableInfo varInfo)`<br>Adds a variable information object to the manager |
| `protected void` | `addVariable(java.lang.String varName, boolean isInput, java.lang.Object var)`<br>Adds a variable object to the manager |
| `protected void` | `addVariable(java.lang.String groupName, PHXVariableInfo varInfo)`<br>Adds a variable information object to the manager |
| `protected void` | `addVariable(java.lang.String groupName, java.lang.String varName, boolean isInput, java.lang.Object var)`<br>Adds a variable object to the manager |
| `void` | `end()`<br>Notifies the driver that it has ended. |
| `void` | `forceSetValue(java.lang.String name, java.lang.String value)`<br>Sets the value for a variable regardless of whether it's an input or an output |
| `protected PHXGroup` | `getGroup(java.lang.String group)`<br>Retrieves a group. |
| `protected PHXGroup` | `getGroup2(java.lang.String group)`<br>Retrieves a group. |
| `protected PHXMethodDescriptor` | `getMethodDescriptor(java.lang.String name)`<br>Find the Method Descriptor associated with a given name |
| `PHXMethodDescriptor[]` | `getMethodDescriptors()`<br>Retrieves a set of method descriptors for this object |
| `PHXPropertyDescriptor[]` | `getPropertyDescriptors(java.lang.String name)`<br>Retrieves a set of property descriptors for the variables managed by this object or one of its subobjects |
| `PHXGroup` | `getRootGroup()`<br>Retrieves the root group |
| `java.lang.String` | `getValue(java.lang.String name)`<br>Retrieves the value for the appropriate variable |
| `java.lang.Object` | `getValue2(java.lang.String name)`<br>Retrieves the value for the appropriate variable |
| `java.lang.String` | `getVariableFullName(java.lang.Object var)`<br>Gets the name of a variable |
| `PHXVariableInfo` | `getVariableInfo(java.lang.Object var)`<br>Gets the information about a variable |
| `protected PHXVariableInfo` | `getVariableInfo(java.lang.String fullVarName)`<br>Retrieves a variable information object from the manager |
| `protected PHXVariableInfo` | `getVariableInfo(java.lang.String groupName, java.lang.String varName)`<br>Retrieves a variable information object from the manager |
| `protected PHXVariableInfo` | `getVariableInfo2(java.lang.String fullVarName)`<br>Retrieves a variable information object from the manager |
| `protected PHXVariableInfo` | `getVariableInfo2(java.lang.String groupName, java.lang.String varName)`<br>Retrieves a variable information object from the manager |
| `java.lang.String` | `invoke(java.lang.String methodName)`<br>Invokes a named method. |
| `PHXInvokeReturn` | `invoke2(java.lang.String methodName)`<br>Invokes a named method. |
| `protected PHXGroup` | `makeGroup(java.lang.String group)`<br>Creates a group. |
| `protected boolean` | `removeVariable(PHXVariableInfo varInfo)`<br>Removes a variable. |
| `void` | `setValue(java.lang.String name, java.lang.String value)`<br>Stores a value into the appropriate variable |
| `void` | `setValue2(java.lang.String name, PHXStringBuffer value)`<br>Stores a value into the appropriate variable |
| `void` | `setValueActual(java.lang.String name, java.lang.Object value)` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXSimpleSelfManager
```java
public PHXSimpleSelfManager()
```

## Method Detail

### addVariable
```java
protected void addVariable(java.lang.String groupName,
                           java.lang.String varName,
                           boolean isInput,
                           java.lang.Object var)
                    throws PHXNameAlreadyInUseException,
                           PHXInvalidNameException
```
adds a variable object to the manager

**Parameters:**
- `groupName` - the group to store the variable in. May be a dot-separated list of groups
- `varName` - the name of the variable
- `isInput` - true if the variable is an input
- `var` - the variable information to add

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### addVariable
```java
protected void addVariable(java.lang.String varName,
                           boolean isInput,
                           java.lang.Object var)
                    throws PHXNameAlreadyInUseException,
                           PHXInvalidNameException
```
adds a variable object to the manager

**Parameters:**
- `varName` - the name of the variable
- `isInput` - true if the variable is an input
- `var` - the variable information to add

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### addVariable
```java
protected void addVariable(PHXVariableInfo varInfo)
                    throws PHXNameAlreadyInUseException,
                           PHXInvalidNameException
```
adds a variable information object to the manager

**Parameters:**
- `varInfo` - the variable information object

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### addVariable
```java
protected void addVariable(java.lang.String groupName,
                           PHXVariableInfo varInfo)
                    throws PHXNameAlreadyInUseException,
                           PHXInvalidNameException
```
adds a variable information object to the manager

**Parameters:**
- `groupName` - the group to store the variable in. May be a dot-separated list of groups
- `varInfo` - the variable information object

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### removeVariable
```java
protected boolean removeVariable(PHXVariableInfo varInfo)
```
removes a variable. The groups will be searched for the matching variable.

**Parameters:**
- `varInfo` - the variable structure to remove

**Returns:**
- `false` if the variable was not found

### addMethod
```java
protected void addMethod(java.lang.String name,
                         java.lang.String fullName,
                         boolean isVisible,
                         boolean downloadInputs)
                  throws PHXNameAlreadyInUseException,
                         PHXInvalidNameException
```
adds a method name to the object

**Parameters:**
- `name` - the name of the method
- `fullName` - the human readable name
- `isVisible` - if `true`, the method is displayed using the `listMethods` command. Invoking is handled by the derived class, so it is up to it whether invisible methods may be invoked.
- `downloadInputs` - if `true`, signal calling application that input variable values need to be reread

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### getMethodDescriptor
```java
protected PHXMethodDescriptor getMethodDescriptor(java.lang.String name)
```
find the Method Descriptor associated with a given name

**Returns:**
- The [`PHXMethodDescriptor`](PHXMethodDescriptor.md), or null if not found.

### addMethod
```java
protected void addMethod(java.lang.String name,
                         java.lang.String fullName,
                         boolean isVisible)
                  throws PHXNameAlreadyInUseException,
                         PHXInvalidNameException
```
relay function for `addMethod( String name, String fullName, boolean isVisible, boolean downloadInputs = false )`

**Parameters:**
- `name` - the name of the method
- `fullName` - the human readable name
- `isVisible` - if `true`, the method is displayed using the `listMethods` command. Invoking is handled by the derived class, so it is up to it whether invisible methods may be invoked.

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### addMethod
```java
protected void addMethod(java.lang.String name,
                         boolean isVisible)
                  throws PHXNameAlreadyInUseException,
                         PHXInvalidNameException
```
relay function for `addMethod( String name, String fullName = name, boolean isVisible )`

**Parameters:**
- `name` - the name of the method

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### addMethod
```java
protected void addMethod(java.lang.String name,
                         java.lang.String fullName)
                  throws PHXNameAlreadyInUseException,
                         PHXInvalidNameException
```
relay function for `addMethod( String name, String fullName, boolean isVisible=true )`

**Parameters:**
- `name` - the name of the method

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### addMethod
```java
protected void addMethod(java.lang.String name)
                  throws PHXNameAlreadyInUseException,
                         PHXInvalidNameException
```
relay function for `addMethod( String name, boolean isVisible=true )`

**Parameters:**
- `name` - the name of the method

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### makeGroup
```java
protected PHXGroup makeGroup(java.lang.String group)
                      throws PHXNameAlreadyInUseException,
                             PHXInvalidNameException
```
creates a group. If the group already exists, it is just returned

**Parameters:**
- `group` - the name of the group. This name follows the dot-syntax format for the parent-child relationship

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) - thrown if the name is already in use
- [`PHXInvalidNameException`](PHXInvalidNameException.md) - thrown if the name has invalid characters

### getVariableFullName
```java
public java.lang.String getVariableFullName(java.lang.Object var)
                                     throws PHXNoSuchObjectException
```
gets the name of a variable

**Parameters:**
- `var` - the variable object

**Returns:**
- the name of the variable or null if not found

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md)

### getVariableInfo
```java
public PHXVariableInfo getVariableInfo(java.lang.Object var)
                                throws PHXNoSuchObjectException
```
gets the information about a variable

**Parameters:**
- `var` - the variable object

**Returns:**
- the [`PHXVariableInfo`](PHXVariableInfo.md) object associated with the variable

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified variable is not found

### getVariableInfo
```java
protected PHXVariableInfo getVariableInfo(java.lang.String fullVarName)
                                   throws PHXNoSuchObjectException
```
retrieves a variable information object from the manager

**Parameters:**
- `fullVarName` - The var name in format "group.group.name"

**Returns:**
- the associated `variableInfo` object

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified variable is not found

### getVariableInfo2
```java
protected PHXVariableInfo getVariableInfo2(java.lang.String fullVarName)
```
retrieves a variable information object from the manager

**Parameters:**
- `fullVarName` - The var name in format "group.group.name"

**Returns:**
- the associated `variableInfo` object or null if it doesn't exist.

### getVariableInfo
```java
protected PHXVariableInfo getVariableInfo(java.lang.String groupName,
                                          java.lang.String varName)
                                   throws PHXNoSuchObjectException
```
retrieves a variable information object from the manager

**Parameters:**
- `groupName` - the group to store the variable in. May be a dot-separated list of groups
- `varName` - the name of the variable information object

**Returns:**
- the associated `variableInfo` object

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified variable is not found

### getVariableInfo2
```java
protected PHXVariableInfo getVariableInfo2(java.lang.String groupName,
                                           java.lang.String varName)
```
retrieves a variable information object from the manager

**Parameters:**
- `groupName` - the group to store the variable in. May be a dot-separated list of groups
- `varName` - the name of the variable information object

**Returns:**
- the associated `variableInfo` object or null if not found

### getGroup
```java
protected PHXGroup getGroup(java.lang.String group)
                     throws PHXNoSuchObjectException
```
retrieves a group.

**Parameters:**
- `group` - the name of the group. This name follows the dot-syntax format for the parent-child relationship

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified group is not found

### getGroup2
```java
protected PHXGroup getGroup2(java.lang.String group)
```
retrieves a group.

**Parameters:**
- `group` - the name of the group. This name follows the dot-syntax format for the parent-child relationship

**Returns:**
- The [`PHXGroup`](PHXGroup.md) object, or null if not found.

### getRootGroup
```java
public PHXGroup getRootGroup()
```
retrieves the root group

**Returns:**
- the root group

### setValue
```java
public void setValue(java.lang.String name,
                     java.lang.String value)
              throws PHXNoSuchObjectException,
                     PHXNoSuchWriteableObjectException,
                     java.lang.Exception
```
stores a value into the appropriate variable

**Specified by:**
- `setValue` in interface [`IPHXSelfManager`](IPHXSelfManager.md)

**Parameters:**
- `name` - the name of the variable
- `value` - the value to store

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified object does not exist
- [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md) - thrown if the specified object cannot be written to
- `java.lang.Exception` - thrown if the value cannot be set

### setValue2
```java
public void setValue2(java.lang.String name,
                      PHXStringBuffer value)
               throws PHXNoSuchObjectException,
                      PHXNoSuchWriteableObjectException,
                      java.lang.Exception
```
stores a value into the appropriate variable

**Parameters:**
- `name` - the name of the variable
- `value` - the value to store

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified object does not exist
- [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md) - thrown if the specified object cannot be written to
- `java.lang.Exception` - thrown if the value cannot be set

### forceSetValue
```java
public void forceSetValue(java.lang.String name,
                          java.lang.String value)
                   throws PHXNoSuchObjectException,
                          java.lang.Exception
```
sets the value for a variable regardless of whether it's an input or an output

**Parameters:**
- `name` - the name of the variable
- `value` - the value to store

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified object does not exist
- `java.lang.Exception` - thrown if the value cannot be set

### setValueActual
```java
public void setValueActual(java.lang.String name,
                           java.lang.Object value)
                    throws PHXNoSuchObjectException,
                           PHXNoSuchWriteableObjectException,
                           java.lang.IllegalAccessException,
                           java.lang.reflect.InvocationTargetException
```

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md)
- [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md)
- `java.lang.IllegalAccessException`
- `java.lang.reflect.InvocationTargetException`

### getValue
```java
public java.lang.String getValue(java.lang.String name)
                          throws PHXNoSuchObjectException,
                                 java.lang.Exception
```
retrieves the value for the appropriate variable

**Specified by:**
- `getValue` in interface [`IPHXSelfManager`](IPHXSelfManager.md)

**Parameters:**
- `name` - the name of the variable

**Returns:**
- a String reprentation of the value

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified object does not exist
- `java.lang.Exception` - thrown if the value cannot be retrieved

### getValue2
```java
public java.lang.Object getValue2(java.lang.String name)
                           throws PHXNoSuchObjectException,
                                  java.lang.Exception
```
retrieves the value for the appropriate variable

**Parameters:**
- `name` - the name of the variable

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified object does not exist
- `java.lang.Exception` - thrown if the value cannot be retrieved

### getPropertyDescriptors
```java
public PHXPropertyDescriptor[] getPropertyDescriptors(java.lang.String name)
                                               throws PHXNoSuchObjectException,
                                                      java.lang.Exception
```
retrieves a set of property descriptors for the variables managed by this object or one of its subobjects

**Specified by:**
- `getPropertyDescriptors` in interface [`IPHXSelfManager`](IPHXSelfManager.md)

**Parameters:**
- `name` - the name of the object to retrieve the property descriptors. If the value is null, then the top level is searched.

**Returns:**
- an array of [`PHXPropertyDescriptors`](PHXPropertyDescriptors.md)

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified object does not exist
- `java.lang.Exception` - thrown if the properties cannot be retrieved

### getMethodDescriptors
```java
public PHXMethodDescriptor[] getMethodDescriptors()
                                           throws java.lang.Exception
```
retrieves a set of method descriptors for this object

**Specified by:**
- `getMethodDescriptors` in interface [`IPHXSelfManager`](IPHXSelfManager.md)

**Returns:**
- an array of `MethodDescriptors`

**Throws:**
- `java.lang.Exception` - thrown if the properties cannot be retrieved

### invoke
```java
public java.lang.String invoke(java.lang.String methodName)
                        throws java.lang.Exception
```
Invokes a named method.

**Specified by:**
- `invoke` in interface [`IPHXSelfManager`](IPHXSelfManager.md)

**Parameters:**
- `methodName` - the name of the method to invoke on obj

**Returns:**
- the return value from the invocation

**Throws:**
- `java.lang.Exception` - thrown if a problem occurs invoking the method

### invoke2
```java
public PHXInvokeReturn invoke2(java.lang.String methodName)
                        throws java.lang.Exception
```
Invokes a named method.

**Parameters:**
- `methodName` - the name of the method to invoke on obj

**Returns:**
- the return value from the invocation

**Throws:**
- `java.lang.Exception` - thrown if a problem occurs invoking the method

### end
```java
public void end()
         throws java.lang.Exception
```
Description copied from interface: [`IPHXComponent`](IPHXComponent.md)

Notifies the driver that it has ended. The driver should perform any necesary shutdown functions.

**Specified by:**
- `end` in interface [`IPHXComponent`](IPHXComponent.md)

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete succesfully
