# Class: PHXInvokeReturn

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXInvokeReturn
```

**Declaration**
```
public class PHXInvokeReturn
extends java.lang.Object
```

A utility class for holding return information from an invoked function. It's used to capture additional return information such as whether all variable values should be retrieved after invocation, and can easily be extended for future needs in this vein.

To use this class, simply return it from a method defined on a [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md).

**See Also:**
- [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md)
- [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md)
- [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md)
- [`PHXGroup`](PHXGroup.md)

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXInvokeReturn()` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `boolean` | `getDownloadInputs()`<br>Retrieves whether the invocation should trigger a redownloading of input values. |
| `java.lang.String` | `getReturnString()`<br>Retrieves the return string for the custom method. |
| `void` | `setDownloadInputs(boolean downloadInputs)`<br>Set whether input values should be redownloaded after the invocation. |
| `void` | `setReturnString(java.lang.String returnStr)`<br>Sets the return string for the custom method. |
| `java.lang.String` | `toString()`<br>Handle converting this class to a string in XML format. |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXInvokeReturn
```
public PHXInvokeReturn()
```

## Method Detail

### getReturnString
```
public java.lang.String getReturnString()
```
Retrieves the return string for the custom method.

**Returns:**
- the return string

### setReturnString
```
public void setReturnString(java.lang.String returnStr)
```
Sets the return string for the custom method.

**Parameters:**
- `returnStr` - the return string

### getDownloadInputs
```
public boolean getDownloadInputs()
```
Retrieves whether the invocation should trigger a redownloading of input values.

**Returns:**
- should the input values be redownloaded after the invocation?

### setDownloadInputs
```
public void setDownloadInputs(boolean downloadInputs)
```
Set whether input values should be redownloaded after the invocation.

**Parameters:**
- `downloadInputs` - Sends a hint to the client as to whether input values should be re-downloaded after the invocation.

### toString
```
public java.lang.String toString()
```
Handle converting this class to a string in XML format.

**Overrides:**
- `toString` in class `java.lang.Object`