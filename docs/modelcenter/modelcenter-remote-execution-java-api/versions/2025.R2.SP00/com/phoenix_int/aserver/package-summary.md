# Package: com.phoenix_int.aserver

This package provides interfaces and classes for server-side components and infrastructure in the ModelCenter environment. It includes APIs for component execution, monitoring, run sharing, file management, and related server operations.

The `com.phoenix_int.aserver` package contains the following key interfaces and classes:


## Interface Summary
| Interface | Description |
|------|-------------|
| [`IPHXAlwaysWriteable`](IPHXAlwaysWriteable.md) | Interface for components that are always writeable. |
| [`IPHXAnalysis`](IPHXAnalysis.md) | Interface for analysis components. |
| [`IPHXComponent`](IPHXComponent.md) | Base interface for all server-side components. |
| [`IPHXDriver`](IPHXDriver.md) | Interface for driver components. |
| [`IPHXHaltableComponent`](IPHXHaltableComponent.md) | Interface for components that can be halted. |
| [`IPHXMonitorable`](IPHXMonitorable.md) | Interface for monitorable components. |
| [`IPHXRunQueue`](IPHXRunQueue.md) | Interface for managing run queues. |
| [`IPHXSelfManager`](IPHXSelfManager.md) | Interface for self-managing components. |
| [`IPHXSelfManager2`](IPHXSelfManager2.md) | Extended self-manager interface. |
| [`IPHXSelfManager3`](IPHXSelfManager3.md) | Further extended self-manager interface. |
| [`IPHXSetupFromFile`](IPHXSetupFromFile.md) | Interface for components that can be set up from a file. |

## Class Summary
| Class | Description |
|------|-------------|
| [`PHXComponentBranch`](PHXComponentBranch.md) | This class represents a branch on a revision history tree for a version controlled component. |
| [`PHXComponentDescription`](PHXComponentDescription.md) | A class for holding description information about an component class. |
| [`PHXComponentVersion`](PHXComponentVersion.md) | This class represents a version on a revision history tree for a version controlled component. |
| [`PHXGroup`](PHXGroup.md) | A utility class for holding sub-variables. |
| [`PHXInvokeReturn`](PHXInvokeReturn.md) | A utility class for holding return information from an invoked function. |
| [`PHXMethodDescriptor`](PHXMethodDescriptor.md) | A utility class used by PHXSelfManager to indicate which methods it can invoke. |
| [`PHXPropertyDescriptor`](PHXPropertyDescriptor.md) | A utility class used by PHXSelfManager to indicate which properties it manages. |
| [`PHXRunShare`](PHXRunShare.md) | This class handles runshare capabilities for any component which needs it. |
| [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md) | This is a class that implements most of the functionality of a self-managing component. |
| [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md) | This is a class that implements most of the functionality of a self-managing component. |
| [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md) | This is a class that implements most of the functionality of a self-managing component. |
| [`PHXVariableInfo`](PHXVariableInfo.md) | This is a utility class for holding parsing information about a variable. |

## Exception Summary
| Exception | Description |
|-----------|-------------|
| [`PHXDFTException`](PHXDFTException.md) |  |
| [`PHXInvalidNameException`](PHXInvalidNameException.md) | An exception that is thrown when trying to create a new object using an invalid name. |
| [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md) | An exception that is thrown when trying to create a new object with a name that already exists. |
| [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) | An exception that is thrown when an object cannot be found. |
| [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md) | An exception that the PHXObjectManager throws when it can't find an object. |
| [`ProcessHaltedException`](ProcessHaltedException.md) | Exception indicating that the request cannot be handled because the associated process was halted. |

