## Class: AnalysisVariableValue

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.v2.AnalysisVariableValue
```

--- 

**Declaration**

```
public class AnalysisVariableValue
extends java.lang.Object
```

Class representing a variable value.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `AnalysisVariableValue(java.lang.String name, boolean isInput, java.lang.String type, java.lang.Object value, boolean isUrl)`<br>Constructor. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getName()`<br>Get the variable name. |
| `java.lang.String` | `getType()`<br>Get the type of the variable. |
| `java.lang.String` | `getUrl()`<br>Get the URL of the variable, or null if none. |
| `java.lang.Object` | `getValue()`<br>Get the value of the variable (null if URL). |
| `boolean` | `isBinary()`<br>Get whether this is binary data. |
| `boolean` | `isInput()`<br>Get whether this is an input. |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### AnalysisVariableValue

```
public AnalysisVariableValue(java.lang.String name,
                             boolean isInput,
                             java.lang.String type,
                             java.lang.Object value,
                             boolean isUrl)
                      throws java.lang.NullPointerException
```
Constructor.

**Parameters:**
- `name` - the variable name
- `isInput` - whether this variable is an input
- `type` - the type of the variable, if specified
- `value` - the value of the variable (or the URL); use byte[] for binary data
- `isUrl` - whether this is a URL

**Throws:**
- `java.lang.NullPointerException` - if name or value is null
- `java.lang.IllegalArgumentException` - if isBinary and isUrl are both true

## Method Detail

### getName

```
public java.lang.String getName()
```
Get the variable name.

### isInput

```
public boolean isInput()
```
Get whether this is an input.

### isBinary

```
public boolean isBinary()
```
Get whether this is binary data.

### getUrl

```
public java.lang.String getUrl()
```
Get the URL of the variable, or null if none.

### getType

```
public java.lang.String getType()
```
Get the type of the variable.

### getValue

```
public java.lang.Object getValue()
```
Get the value of the variable (null if URL). Typically a `String` for text values or a `byte[]` for binary.