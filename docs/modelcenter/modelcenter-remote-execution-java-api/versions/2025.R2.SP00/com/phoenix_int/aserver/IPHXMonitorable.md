# Interface: IPHXMonitorable

**Package:** `com.phoenix_int.aserver`

**Known Implementing Classes**
- [`PHXRunShare`](PHXRunShare.md)

**Related Interfaces and Classes**
- [`IPHXComponent`](IPHXComponent.md), [`IPHXAnalysis`](IPHXAnalysis.md), [`IPHXDriver`](IPHXDriver.md), [`IPHXHaltableComponent`](IPHXHaltableComponent.md), [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md), [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md), [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md), [`PHXComponentBranch`](PHXComponentBranch.md), [`PHXComponentDescription`](PHXComponentDescription.md), [`PHXComponentVersion`](PHXComponentVersion.md), [`PHXGroup`](PHXGroup.md), [`PHXMethodDescriptor`](PHXMethodDescriptor.md), [`PHXPropertyDescriptor`](PHXPropertyDescriptor.md), [`PHXVariableInfo`](PHXVariableInfo.md), [`PHXDFTException`](PHXDFTException.md), [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md), [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md), [`PHXInvokeReturn`](PHXInvokeReturn.md), [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md), [`PHXInvalidNameException`](PHXInvalidNameException.md)

**Declaration**
```java
public interface IPHXMonitorable
```

This is the interface that analyses which provide information about running processes should implement.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Object` | `getMonitor(java.lang.String monitorName)`<br>Gets a specified monitor. |
| `java.lang.String[]` | `listMonitorableFiles()`<br>Lists all items that may be monitored for output as a component is running. |
| `PHXProcessInfo[]` | `listProcesses()`<br>Lists all the running processes associated with a component. |

## Method Detail

### listProcesses
```java
PHXProcessInfo[] listProcesses()
                        throws java.io.IOException
```

Lists all the running processes associated with a component.

**Throws:**
- `java.io.IOException` - If there was a problem reading information about running processes

### listMonitorableFiles
```java
java.lang.String[] listMonitorableFiles()
                                 throws java.io.IOException
```

Lists all items that may be monitored for output as a component is running. Note that this is normally in addition to any PHXRawFile output variables that your component exposes. Because of this, these names must not conflict with any variable names.

**Throws:**
- `java.io.IOException`

### getMonitor
```java
java.lang.Object getMonitor(java.lang.String monitorName)
                     throws PHXNoSuchObjectException
```

Gets a specified monitor. This method can return PHXRawFile objects to publish files for monitoring that don't appear as a regular variable, or PHXMonitorableStream objects to publish random streams of monitor data.

**Returns:**
- either a PHXRawFile or a PHXMonitorableStream object

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md)