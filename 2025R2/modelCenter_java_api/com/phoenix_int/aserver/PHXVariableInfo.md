# Class: PHXVariableInfo

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXVariableInfo
```

**Declaration**
```java
public class PHXVariableInfo
    extends java.lang.Object
```

This is a utility class for holding parsing information about a variable.

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXVariableInfo()`<br>Creates an uninitialized object. |
| `PHXVariableInfo(java.lang.String name, boolean input, java.lang.Object var)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getName()` |
| `java.lang.String` | `getType()` |
| `java.lang.Object` | `getVariable()` |
| `void` | `initialize(java.lang.String name, boolean input, java.lang.Object var)`<br>Initializes the variable |
| `boolean` | `isInput()` |
| `void` | `setVariable(java.lang.Object var)` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXVariableInfo
```java
public PHXVariableInfo()
```
Creates an uninitialized object. Initialize must be called before any of the methods will work properly.

### PHXVariableInfo
```java
public PHXVariableInfo(java.lang.String name, boolean input, java.lang.Object var)
    throws PHXInvalidNameException
```
**Parameters:**
- `name` - the name of the variable
- `input` - true if the variable is an input, false if an output
- `var` - the actual variable
**Throws:**
- `PHXInvalidNameException` - thrown if the name contains invalid characters

## Method Detail

### initialize
```java
public void initialize(java.lang.String name, boolean input, java.lang.Object var)
    throws PHXInvalidNameException
```
Initializes the variable
**Parameters:**
- `name` - the name of the variable
- `input` - true if the variable is an input, false if an output
- `var` - the actual variable

**Throws:**
- `PHXInvalidNameException` - thrown if the name contains invalid characters

### getName
```java
public java.lang.String getName()
```

### isInput
```java
public boolean isInput()
```

### getVariable
```java
public java.lang.Object getVariable()
```

### setVariable
```java
public void setVariable(java.lang.Object var)
```

### getType
```java
public java.lang.String getType()
```