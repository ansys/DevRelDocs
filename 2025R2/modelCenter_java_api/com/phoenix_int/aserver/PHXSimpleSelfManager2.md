# Class: PHXSimpleSelfManager2

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXSimpleSelfManager
    ↳ com.phoenix_int.aserver.PHXSimpleSelfManager2
```

**Implemented Interfaces**
- `IPHXComponent`, `IPHXSelfManager`, `IPHXSelfManager2`

**Direct Known Subclasses:**
- [PHXSimpleSelfManager3](../../../com/phoenix_int/aserver/PHXSimpleSelfManager3.html)

**Declaration**
```java
public class PHXSimpleSelfManager2
    extends PHXSimpleSelfManager
    implements IPHXSelfManager2
```

This class implements most of the functionality of a self-managing component. It provides utility functions for storing variables, which are then served to ModelCenter Remote Execution automatically through the listProperties, getValue, and setValue functions. This second iteration provides new functions for setValue and getValue capable of streaming large files and strings without loading them into memory via the PHXStringBuffer and PHXRawFile classes.

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXSimpleSelfManager2()`  |

## Method Summary

### Methods inherited from class com.phoenix_int.aserver.PHXSimpleSelfManager
`addMethod`, `addVariable`, `end`, `forceSetValue`, `getGroup`, `getGroup2`, `getMethodDescriptor`, `getMethodDescriptors`, `getPropertyDescriptors`, `getRootGroup`, `getValue`, `getValue2`, `getVariableFullName`, `getVariableInfo`, `invoke`, `invoke2`, `makeGroup`, `removeVariable`, `setValue`, `setValue2`, `setValueActual`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.IPHXSelfManager2
`getValue2`, `setValue2`

### Methods inherited from interface com.phoenix_int.aserver.IPHXSelfManager
`getMethodDescriptors`, `getPropertyDescriptors`, `getValue`, `invoke`, `setValue`

## Constructor Detail

### PHXSimpleSelfManager2
```java
public PHXSimpleSelfManager2()
```