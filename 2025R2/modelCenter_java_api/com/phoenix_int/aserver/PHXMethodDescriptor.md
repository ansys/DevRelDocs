# Class: PHXMethodDescriptor

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXMethodDescriptor
```

**Declaration**
```java
public class PHXMethodDescriptor
extends java.lang.Object
```

A utility class used by [`PHXSelfManager`](PHXSelfManager.md) to indicate which methods it can invoke. Also used by [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md), [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md), and [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md).

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXMethodDescriptor()` |
| `PHXMethodDescriptor(java.lang.String name)` |
| `PHXMethodDescriptor(java.lang.String name, java.lang.String fullName)` |
| `PHXMethodDescriptor(java.lang.String name, java.lang.String fullName, boolean downloadInputs)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static PHXMethodDescriptor` | `fromString(java.lang.String str)` |
| `boolean` | `getDownloadInputs()` |
| `java.lang.String` | `getFullName()` |
| `java.lang.String` | `getName()` |
| `void` | `setDownloadInputs(boolean di)` |
| `void` | `setFullName(java.lang.String fullName)` |
| `void` | `setName(java.lang.String name)` |
| `java.lang.String` | `toString()` |
| `java.lang.String` | `toString2()` |
| `java.lang.String` | `toString3()` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXMethodDescriptor
```java
public PHXMethodDescriptor()
```

### PHXMethodDescriptor
```java
public PHXMethodDescriptor(java.lang.String name)
```

### PHXMethodDescriptor
```java
public PHXMethodDescriptor(java.lang.String name, java.lang.String fullName)
```

### PHXMethodDescriptor
```java
public PHXMethodDescriptor(java.lang.String name, java.lang.String fullName, boolean downloadInputs)
```

## Method Detail

### getDownloadInputs
```java
public boolean getDownloadInputs()
```

### setDownloadInputs
```java
public void setDownloadInputs(boolean di)
```

### getFullName
```java
public java.lang.String getFullName()
```

### setFullName
```java
public void setFullName(java.lang.String fullName)
```

### getName
```java
public java.lang.String getName()
```

### setName
```java
public void setName(java.lang.String name)
```

### toString3
```java
public java.lang.String toString3()
```

### toString2
```java
public java.lang.String toString2()
```

### toString
```java
public java.lang.String toString()
```
**Overrides:**
- `toString` in class `java.lang.Object`

### fromString
```java
public static PHXMethodDescriptor fromString(java.lang.String str)
```

### See Also
- [`PHXSelfManager`](PHXSelfManager.md)
- [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md)
- [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md)
- [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md)
- [`PHXInvokeReturn`](PHXInvokeReturn.md)
- [`PHXGroup`](PHXGroup.md)