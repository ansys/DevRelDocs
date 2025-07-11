# Class: PHXSimpleSelfManager3

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXSimpleSelfManager
    ↳ com.phoenix_int.aserver.PHXSimpleSelfManager2
      ↳ com.phoenix_int.aserver.PHXSimpleSelfManager3
```

**Implemented Interfaces**
- [`IPHXComponent`](IPHXComponent.md), com.phoenix_int.aserver.IPHXConnector, [`IPHXSelfManager`](IPHXSelfManager.md), [`IPHXSelfManager2`](IPHXSelfManager2.md), [`IPHXSelfManager3`](IPHXSelfManager3.md)

**Declaration**
```java
public class PHXSimpleSelfManager3
extends PHXSimpleSelfManager2
implements IPHXSelfManager3, com.phoenix_int.aserver.IPHXConnector
```

This class implements most of the functionality of a self-managing component. It provides utility functions for storing variables, which are then served to ModelCenter Remote Execution automatically through the listProperties, getValue, and setValue functions. This iteration provides new functions for setValue and getValue capable of streaming large files and strings without loading them into memory via the [`PHXStringBuffer`](util/PHXStringBuffer.md) and [`PHXRawFile`](types/PHXRawFile.md) classes. The third iteration adds a function for getting info from the user on invoked methods to determine things like whether input values should be read in again.

When extending this class, it may be worth investigating other interfaces to see which of them should also be implemented, such as:
- [IPHXSetupFromFile](IPHXSetupFromFile.md)
- IPHXFilteredWrapper
- IPHXAthenaAnalysis
- [IPHXHaltableComponent](IPHXHaltableComponent.md)
- [IPHXSelfManager2](IPHXSelfManager2.md)
- [IPHXMonitorable](../aserver/IPHXMonitorable.md)
- IPHXTraceListener
- IPHXTraceGenerator
- ILazyLoadComponent
- AutoCloseable

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXSimpleSelfManager3()`  |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| com.phoenix_int.aserver.ascore.PHXConnection | `getConnection()`<br>Gets the connection object |
| [`PHXRunShare`](PHXRunShare.md) | `getRunShare2()`<br>Return the run share object |
| void | `setConnection(com.phoenix_int.aserver.ascore.PHXConnection c)`<br>Sets the connection object |
| void | `setRunShare2(PHXRunShare rs)`<br>Sets the run share object |

### Methods inherited from class com.phoenix_int.aserver.[PHXSimpleSelfManager](PHXSimpleSelfManager.md)
`addMethod`, `addVariable`, `end`, `forceSetValue`, `getGroup`, `getGroup2`, `getMethodDescriptor`, `getMethodDescriptors`, `getPropertyDescriptors`, `getRootGroup`, `getValue`, `getValue2`, `getVariableFullName`, `getVariableInfo`, `invoke`, `invoke2`, `makeGroup`, `removeVariable`, `setValue`, `setValue2`, `setValueActual`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.[IPHXSelfManager3](IPHXSelfManager3.md)
`invoke2`

### Methods inherited from interface com.phoenix_int.aserver.[IPHXSelfManager2](IPHXSelfManager2.md)
`getValue2`, `setValue2`

### Methods inherited from interface com.phoenix_int.aserver.[IPHXSelfManager](IPHXSelfManager.md)
`getMethodDescriptors`, `getPropertyDescriptors`, `getValue`, `invoke`, `setValue`

## Constructor Detail

### PHXSimpleSelfManager3
```java
public PHXSimpleSelfManager3()
```

## Method Detail

### getRunShare2
```java
public PHXRunShare getRunShare2()
```
Return the run share object

### setRunShare2
```java
public void setRunShare2(PHXRunShare rs)
```
Sets the run share object

### setConnection
```java
public void setConnection(com.phoenix_int.aserver.ascore.PHXConnection c)
```
Sets the connection object

**Specified by:**
- `setConnection` in interface `com.phoenix_int.aserver.IPHXConnector`

### getConnection
```java
public com.phoenix_int.aserver.ascore.PHXConnection getConnection()
```
Gets the connection object

**Specified by:**
- `getConnection` in interface `com.phoenix_int.aserver.IPHXConnector`