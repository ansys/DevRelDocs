# Class: PHXMethodDescriptor

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXMethodDescriptor
```

**Declaration**
```
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
```
public PHXMethodDescriptor()
```

### PHXMethodDescriptor
```
public PHXMethodDescriptor(java.lang.String name)
```

### PHXMethodDescriptor
```
public PHXMethodDescriptor(java.lang.String name, 
                           java.lang.String fullName)
```

### PHXMethodDescriptor
```
public PHXMethodDescriptor(java.lang.String name, 
                           java.lang.String fullName, 
                           boolean downloadInputs)
```

## Method Detail

### getDownloadInputs
```
public boolean getDownloadInputs()
```

### setDownloadInputs
```
public void setDownloadInputs(boolean di)
```

### getFullName
```
public java.lang.String getFullName()
```

### setFullName
```
public void setFullName(java.lang.String fullName)
```

### getName
```
public java.lang.String getName()
```

### setName
```
public void setName(java.lang.String name)
```

### toString3
```
public java.lang.String toString3()
```

### toString2
```
public java.lang.String toString2()
```

### toString
```
public java.lang.String toString()
```
**Overrides:**
- `toString` in class `java.lang.Object`

### fromString
```
public static PHXMethodDescriptor fromString(java.lang.String str)
```
