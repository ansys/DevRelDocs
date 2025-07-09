# Class: PHXSimpleSelfManager2

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXSimpleSelfManager
    ↳ com.phoenix_int.aserver.PHXSimpleSelfManager2
```

**Implemented Interfaces**
- [`IPHXComponent`](IPHXComponent.md), [`IPHXSelfManager`](IPHXSelfManager.md), [`IPHXSelfManager2`](IPHXSelfManager2.md)

**Direct Known Subclasses:**
- [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md)

**Declaration**
```
public class PHXSimpleSelfManager2
extends PHXSimpleSelfManager
implements IPHXSelfManager2
```

This class implements most of the functionality of a self-managing component. It provides utility functions for storing variables, which are then served to ModelCenter Remote Execution automatically through the listProperties, getValue, and setValue functions. This second iteration provides new functions for setValue and getValue capable of streaming large files and strings without loading them into memory via the [`PHXStringBuffer`](types/PHXStringBuffer.md) and [`PHXRawFile`](types/PHXRawFile.md) classes.

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXSimpleSelfManager2()`  |

## Method Summary

### Methods inherited from class com.phoenix_int.aserver.[PHXSimpleSelfManager](PHXSimpleSelfManager.md)
`addMethod`, `addVariable`, `end`, `forceSetValue`, `getGroup`, `getGroup2`, `getMethodDescriptor`, `getMethodDescriptors`, `getPropertyDescriptors`, `getRootGroup`, `getValue`, `getValue2`, `getVariableFullName`, `getVariableInfo`, `invoke`, `invoke2`, `makeGroup`, `removeVariable`, `setValue`, `setValue2`, `setValueActual`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.[IPHXSelfManager2](IPHXSelfManager2.md)
`getValue2`, `setValue2`

### Methods inherited from interface com.phoenix_int.aserver.[IPHXSelfManager](IPHXSelfManager.md)
`getMethodDescriptors`, `getPropertyDescriptors`, `getValue`, `invoke`, `setValue`

## Constructor Detail

### PHXSimpleSelfManager2
```
public PHXSimpleSelfManager2()
```