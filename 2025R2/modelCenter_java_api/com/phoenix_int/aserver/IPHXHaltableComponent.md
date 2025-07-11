# Interface: IPHXHaltableComponent

**Package:** `com.phoenix_int.aserver`

**Related Interfaces and Classes**
- [`IPHXComponent`](IPHXComponent.md), [`IPHXAnalysis`](IPHXAnalysis.md), [`IPHXDriver`](IPHXDriver.md), [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md), [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md), [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md), [`PHXComponentBranch`](PHXComponentBranch.md), [`PHXComponentDescription`](PHXComponentDescription.md), [`PHXComponentVersion`](PHXComponentVersion.md), [`PHXGroup`](PHXGroup.md), [`PHXMethodDescriptor`](PHXMethodDescriptor.md), [`PHXPropertyDescriptor`](PHXPropertyDescriptor.md), [`PHXVariableInfo`](PHXVariableInfo.md), [`PHXDFTException`](PHXDFTException.md), [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md), [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md), [`PHXInvokeReturn`](PHXInvokeReturn.md), [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md), [`PHXInvalidNameException`](PHXInvalidNameException.md)

**Declaration**
```java
public interface IPHXHaltableComponent
```

This is a specialized interface for ModelCenter Remote Execution. If a component implements this interface, the MCRE will call this method if a connection is lost prior to ending the component. The method is useful to halt components that are currently running when a connection is lost.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `halt()`<br>Notifies the component to stop doing whatever it is currently doing. |

## Method Detail

### halt
```java
void halt()
   throws java.lang.Exception
```
Notifies the component to stop doing whatever it is currently doing.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully