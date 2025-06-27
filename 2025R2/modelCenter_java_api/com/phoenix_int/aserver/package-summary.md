# Package: com.phoenix_int.aserver

This package provides interfaces and classes for server-side components and infrastructure in the ModelCenter environment. It includes APIs for component execution, monitoring, run sharing, file management, and related server operations.

The `com.phoenix_int.aserver` package contains the following key interfaces and classes:


## Interface Summary
| Interface | Description |
|------|-------------|
| `IPHXAlwaysWriteable` | Interface for components that are always writeable. |
| `IPHXAnalysis` | Interface for analysis components. |
| `IPHXComponent` | Base interface for all server-side components. |
| `IPHXDriver` | Interface for driver components. |
| `IPHXHaltableComponent` | Interface for components that can be halted. |
| `IPHXMonitorable` | Interface for monitorable components. |
| `IPHXRunQueue` | Interface for managing run queues. |
| `IPHXSelfManager` | Interface for self-managing components. |
| `IPHXSelfManager2` | Extended self-manager interface. |
| `IPHXSelfManager3` | Further extended self-manager interface. |
| `IPHXSetupFromFile` | Interface for components that can be set up from a file. |

## Class Summary
| Class | Description |
|------|-------------|
| `PHXComponentBranch` | This class represents a branch on a revision history tree for a version controlled component. |
| `PHXComponentDescription` | A class for holding description information about an component class. |
| `PHXComponentVersion` | This class represents a version on a revision history tree for a version controlled component. |
| `PHXGroup` | A utility class for holding sub-variables. |
| `PHXInvokeReturn` | A utility class for holding return information from an invoked function. |
| `PHXMethodDescriptor` | A utility class used by PHXSelfManager to indicate which methods it can invoke. |
| `PHXPropertyDescriptor` | A utility class used by PHXSelfManager to indicate which properties it manages. |
| `PHXRunShare` | This class handles runshare capabilities for any component which needs it. |
| `PHXSimpleSelfManager` | This is a class that implements most of the functionality of a self-managing component. |
| `PHXSimpleSelfManager2` | This is a class that implements most of the functionality of a self-managing component. |
| `PHXSimpleSelfManager3` | This is a class that implements most of the functionality of a self-managing component. |
| `PHXVariableInfo` | This is a utility class for holding parsing information about a variable. |

## Exception Summary
| Exception | Description |
|-----------|-------------|
| `PHXDFTException` |  |
| `PHXInvalidNameException` | An exception that is thrown when trying to create a new object using an invalid name. |
| `PHXNameAlreadyInUseException` | An exception that is thrown when trying to create a new object with a name that already exists. |
| `PHXNoSuchObjectException` | An exception that is thrown when an object cannot be found. |
| `PHXNoSuchWriteableObjectException` | An exception that the PHXObjectManager throws when it can't find an object. |
| `ProcessHaltedException` | Exception indicating that the request cannot be handled because the associated process was halted. |

