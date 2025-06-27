# Class: PHXScriptWrapperObject

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXScriptWrapperObject
```

**Declaration**

```java
public class PHXScriptWrapperObject
extends java.lang.Object
```

This object is passed to Script Wrapper scripts and provides the "wrapper" global object which provides runtime services for the wrapper.

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXScriptWrapperObject(com.phoenix_int.aserver.util.scriptwrapper.PHXScriptWrapper wrapper)`<br>Constructs a wrapper object from a ScriptWrapper instance. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addAutoClose(java.io.Closeable file)`<br>Add the opened file to the file Handlers list |
| `void` | `addConsoleVariables()` |
| `void` | `addFileInfo(PHXRowFieldFile rff, java.lang.String fileName, ParseableFile.Mode mode)` |
| `void` | `addMethod(java.lang.String methodName)` <br>Publicizes a method to our clients. |
| `void` | `addMethod(java.lang.String methodName, boolean downloadInputs)` <br>Publicizes a method to our clients. |
| `void` | `addMethod(java.lang.String methodName, java.lang.String fullName)` <br>Publicizes a method to our clients. |
| `void` | `addMethod(java.lang.String methodName, java.lang.String fullName, boolean downloadInputs)` <br>Publicizes a method to our clients. |
| `IPHXType` | `addVariable(java.lang.String name, java.lang.String type, boolean isInput)` <br>Adds a variable to this component. |
| `void` | `backupFile(java.lang.String varName, java.lang.String fileName)` <br>Backup the file on disk. |
| `void` | `defaultExecutableMapping(java.lang.String name, java.lang.String location)` |
| `void` | `deleteFile(java.lang.String varName, java.lang.String fileName)` <br>Deletes the given file variable's file |
| `com.phoenix_int.aserver.ascore.PHXConnection` | `getConnection()` <br>gets the connection object |
| `java.util.Map<java.lang.String,java.lang.String>` | `getDictionary()` <br>Gets context information for the incoming connection that is running this wrapper. |
| `java.lang.String` | `getDirectory()` <br>Returns the directory where this component was loaded from |
| `java.lang.String` | `getRunDirectory()` <br>Returns the current "run" directory, which is the same as getDirectory() unless run sharing is being used. |
| `PHXRunShareContext` | `getRunShare()` <br>Returns the `PHXRunShareContext` object used for process control and monitoring with this component |
| `IPHXType` | `getVariable(java.lang.String name)` <br>Returns a reference to the named variable. |
| `void` | `parseFile(java.lang.String varName, java.lang.String fileName, boolean throwParseError)` <br>Read the given file variable from the specified file |
| `void` | `removeAutoClose(java.io.Closeable file)` <br>Remove the file from the file Handlers list |
| `void` | `removeVariable(java.lang.String name)` <br>Dynamically removes a variable from this component |
| `void` | `requireAnalysisServerVersion(int majorVersion, int minorVersion)` <br>Verifies we're running a compatible version of ModelCenter Remote Execution |
| `void` | `setBinary(java.lang.String varName)` <br>Make a given file variable binary |
| `void` | `setConnection(com.phoenix_int.aserver.ascore.PHXConnection c)` <br>sets the connection object |
| `void` | `sleep(long millisecs)` <br>sleeps for a period of time |
| `void` | `trace(java.lang.String msg)` <br>Prints a string to the trace window |
| `void` | `updateConsoleVariables()` |
| `void` | `writeFile(java.lang.String varName, java.lang.String fileName)` <br>Write the given file variable out to the specified file |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXScriptWrapperObject

```java
public PHXScriptWrapperObject(com.phoenix_int.aserver.util.scriptwrapper.PHXScriptWrapper wrapper)
```
Constructs a wrapper object from a ScriptWrapper instance.

## Method Detail

### addMethod

```java
public void addMethod(java.lang.String methodName)
               throws PHXNameAlreadyInUseException,
                      PHXInvalidNameException
```
Publicizes a method to our clients. There must be a method defined in the script by this name. Clients of MCRE will be able to call this method

**Parameters:**

- `methodName` - The name of the method to publicize

**Throws:**

- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`

### addMethod

```java
public void addMethod(java.lang.String methodName,
                      java.lang.String fullName)
               throws PHXNameAlreadyInUseException,
                      PHXInvalidNameException
```
Publicizes a method to our clients. There must be a method defined in the script by this name. Clients of MCRE will be able to call this method

**Parameters:**

- `methodName` - The name of the method to publicize.
- `fullName` - A human readable name to show in GUI programs for this method. For example, ModelCenter will show this in the right click menu of a component.

**Throws:**

- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`

### addMethod

```java
public void addMethod(java.lang.String methodName,
                      boolean downloadInputs)
               throws PHXNameAlreadyInUseException,
                      PHXInvalidNameException
```
Publicizes a method to our clients. There must be a method defined in the script by this name. Clients of MCRE will be able to call this method

**Parameters:**

- `methodName` - The name of the method to publicize.
- `downloadInputs` - Hint passed to the client on whether the inputs should be downloaded after the method is run.

**Throws:**

- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`

### addMethod

```java
public void addMethod(java.lang.String methodName,
                      java.lang.String fullName,
                      boolean downloadInputs)
               throws PHXNameAlreadyInUseException,
                      PHXInvalidNameException
```
Publicizes a method to our clients. There must be a method defined in the script by this name. Clients of MCRE will be able to call this method

**Parameters:**

- `methodName` - The name of the method to publicize.
- `fullName` - A human readable name to show in GUI programs for this method. For example, ModelCenter will show this in the right click menu of a component.
- `downloadInputs` - Hint passed to the client on whether the inputs should be downloaded after the method is run.

**Throws:**

- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`

### addVariable

```java
public IPHXType addVariable(java.lang.String name,
                            java.lang.String type,
                            boolean isInput)
                     throws PHXNameAlreadyInUseException,
                            PHXInvalidNameException,
                            PHXInvalidTypeException
```
Adds a variable to this component. Returns a reference to the new variable. Valid types are:

| Type | Aliases | Associated PHXType |
| --- | --- | --- |
| double | real | PHXDouble |
| integer | int,long | PHXLong |
| string | str | PHXString |
| boolean | bool | PHXBoolean |
| geometry | geom | PHXGeometry |
| file |  | PHXRawFile |

All types except `PHXGeometry` and `PHXRawFile` may be made into arrays by adding [] at the end of the type string. In that case, the associated `PHX<type>Array` class is used to represent a resizable, multi-dimensional array.

**Parameters:**

- `name` - The full name of the new variable. May include group specification with '.'.
- `type` - The type of variable to create. Use the same type strings as for the variable: statemensts at the top of the ScriptWrapper.
- `isInput` - If true, the variable will be an input, if false, it will be an output.

**Throws:**

- `PHXNameAlreadyInUseException` - Thrown if there is already a variable by that name.
- `PHXInvalidNameException` - Thrown if the name uses invalid characters like space.
- `PHXInvalidTypeException` - Thrown if the type string is not understood

### getVariable

```java
public IPHXType getVariable(java.lang.String name)
                     throws PHXNoSuchObjectException
```
Returns a reference to the named variable.

**Throws:**

- `PHXNoSuchObjectException`

### removeVariable

```java
public void removeVariable(java.lang.String name)
                    throws PHXNoSuchObjectException
```
Dynamically removes a variable from this component

**Throws:**

- `PHXNoSuchObjectException`

### addConsoleVariables

```java
public void addConsoleVariables()
                         throws PHXNameAlreadyInUseException,
                                PHXInvalidNameException,
                                PHXInvalidTypeException
```

**Throws:**

- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`
- `PHXInvalidTypeException`

### updateConsoleVariables

```java
public void updateConsoleVariables()
                            throws PHXNoSuchObjectException
```

**Throws:**

- `PHXNoSuchObjectException`

### getDirectory

```java
public java.lang.String getDirectory()
```
Returns the directory where this component was loaded from

### getRunShare

```java
public PHXRunShareContext getRunShare()
```
Returns the PHXRunShareContext object used for process control and monitoring with this component

### getRunDirectory

```java
public java.lang.String getRunDirectory()
```
Returns the current "run" directory, which is the same as `getDirectory()` unless run sharing is being used.

### sleep

```java
public void sleep(long millisecs)
```
sleeps for a period of time

**Parameters:**

- `millisecs` - the amount of time to sleep

### getConnection

```java
public com.phoenix_int.aserver.ascore.PHXConnection getConnection()
```
gets the connection object

### setConnection

```java
public void setConnection(com.phoenix_int.aserver.ascore.PHXConnection c)
```
sets the connection object

### getDictionary

```java
public java.util.Map<java.lang.String,java.lang.String> getDictionary()
```
Gets context information for the incoming connection that is running this wrapper. Currently only for internal use.

**Returns:**

- a Map of string/value pairs giving context information about the environment inside which the component is running.

### setBinary

```java
public void setBinary(java.lang.String varName)
               throws PHXInvalidTypeException,
                      PHXNoSuchObjectException
```
Make a given file variable binary

**Parameters:**

- `varName` - the name of the file variable

**Throws:**

- `PHXInvalidTypeException`
- `PHXNoSuchObjectException`

### writeFile

```java
public void writeFile(java.lang.String varName,
                      java.lang.String fileName)
               throws PHXInvalidTypeException,
                      PHXNoSuchObjectException,
                      java.io.IOException
```
Write the given file variable out to the specified file

**Parameters:**

- `varName` - the name of the file variable
- `fileName` - the name of the target file

**Throws:**

- `PHXInvalidTypeException`
- `PHXNoSuchObjectException`
- `java.io.IOException`

### parseFile

```java
public void parseFile(java.lang.String varName,
                      java.lang.String fileName,
                      boolean throwParseError)
               throws PHXInvalidTypeException,
                      PHXNoSuchObjectException,
                      java.io.IOException
```
Read the given file variable from the specified file

**Parameters:**

- `varName` - the name of the file variable
- `fileName` - the name of the target file

**Throws:**

- `PHXInvalidTypeException`
- `PHXNoSuchObjectException`
- `java.io.IOException`

### deleteFile

```java
public void deleteFile(java.lang.String varName,
                       java.lang.String fileName)
                throws PHXInvalidTypeException,
                       PHXNoSuchObjectException,
                       java.io.IOException
```
Deletes the given file variable's file

**Parameters:**

- `varName` - the name of the file variable
- `fileName` - the name of the target file

**Throws:**

- `PHXInvalidTypeException`
- `PHXNoSuchObjectException`
- `java.io.IOException`

### backupFile

```java
public void backupFile(java.lang.String varName,
                       java.lang.String fileName)
                throws PHXInvalidTypeException,
                       PHXNoSuchObjectException,
                       java.io.IOException
```
Backup the file on disk. File is at the same location with ".bac" appended to the end. If a file by that name already exists, it is deleted prior to moving.

**Parameters:**

- `varName` - the name of the file variable
- `fileName` - the name of the target file

**Throws:**

- `PHXInvalidTypeException`
- `PHXNoSuchObjectException`
- `java.io.IOException`

### defaultExecutableMapping

```java
public void defaultExecutableMapping(java.lang.String name,
                                     java.lang.String location)
```

### trace

```java
public void trace(java.lang.String msg)
```
Prints a string to the trace window

**Parameters:**

- `msg` - the message to print

### requireAnalysisServerVersion

```java
public void requireAnalysisServerVersion(int majorVersion,
                                         int minorVersion)
                                  throws PHXVersionException
```
Verifies we're running a compatible version of ModelCenter Remote Execution

**Parameters:**

- `majorVersion` - required major version
- `minorVersion` - required minor version

**Throws:**

- `PHXVersionException`

### addAutoClose

```java
public void addAutoClose(java.io.Closeable file)
```
Add the opened file to the file Handlers list

**Parameters:**

- `file` - the closeable file

### removeAutoClose

```java
public void removeAutoClose(java.io.Closeable file)
```
Remove the file from the file Handlers list

**Parameters:**

- `file` - the closeable file

### addFileInfo

```java
public void addFileInfo(PHXRowFieldFile rff,
                        java.lang.String fileName,
                        ParseableFile.Mode mode)
```