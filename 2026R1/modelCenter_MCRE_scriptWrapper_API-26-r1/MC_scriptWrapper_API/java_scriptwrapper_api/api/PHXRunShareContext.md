# Class: PHXRunShareContext

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXRunShare
    ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXRunShareContext
```

**Implemented Interfaces**

- `IPHXMonitorable`, `com.phoenix_int.aserver.trace.IPHXTraceGenerator`

--- 
**Declaration**

```java
public class PHXRunShareContext
extends PHXRunShare
```

This class handles runshare capabilities for any component which needs it. It can create temp directories, deal w/ auto-copy and auto-delete of important files, return errors and block until it is safe to run. It also handles providing monitors for stdout and stderr as well as for monitoring started processes.

This class can only handle one single process running at a time. If you need to run multiple processes, use multiple instances of this class. You can use this same object over and over by calling `lock()` and `unlock()` multiple times.

## Nested Class Summary

### Nested classes/interfaces inherited from class com.phoenix_int.aserver.PHXRunShare
`PHXRunShare.RunInfo` 

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.PHXRunShare 
`DEL_AUTO, DEL_FALSE, DEL_TRUE, MODE_ERROR, MODE_NONE, MODE_SHARE, MODE_WAIT` 

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXRunShareContext(java.lang.String baseDir, java.lang.String wrapperID)` |

## Method Summary

### Methods inherited from class com.phoenix_int.aserver.PHXRunShare
`addFileToCopy`, `addRunDirChangedListener`, `addTraceListener`, `cleanTempDir`, `finalize`, `getAutoChangeDir`, `getAutoDelete`, `getBaseDirectory`, `getDictionary`, `getDirectory`, `getIgnoreErrors`, `getMode`, `getMonitor`, `getShell`, `getWrapperID`, `halt`, `listMonitorableFiles`, `listProcesses`, `lock`, `removeRunDirChangedListener`, `removeTraceListener`, `reset`, `run`, `run2`, `setAutoChangeDir`, `setAutoDelete`, `setDictionary`, `setDirectTransfer`, `setFilesToCopy`, `setIgnoreErrors`, `setMode`, `setRunDirectory`, `setRunReplacer`, `setShell`, `timeout`, `unlock` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXRunShareContext

```java
public PHXRunShareContext(java.lang.String baseDir,
                          java.lang.String wrapperID)
```

**Parameters:**

- `baseDir` - The directory on disk where the files associated w/ this component are located.
- `wrapperID` - A unique ID which identifies this component. This is used to synchronize runshare access across multiple instances of the same component. Typically the full path on disk to the component's main file is used for this ID.