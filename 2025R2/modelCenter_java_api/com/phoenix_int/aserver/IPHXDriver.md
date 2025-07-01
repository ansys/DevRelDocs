# Interface: IPHXDriver

**Package:** `com.phoenix_int.aserver`

**Superinterfaces**
- [`IPHXComponent`](IPHXComponent.md)

**Related Classes**
- [`IPHXAnalysis`](IPHXAnalysis.md), [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md), [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md), [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md), [`PHXComponentBranch`](PHXComponentBranch.md), [`PHXComponentDescription`](PHXComponentDescription.md), [`PHXComponentVersion`](PHXComponentVersion.md), [`PHXGroup`](PHXGroup.md), [`PHXMethodDescriptor`](PHXMethodDescriptor.md), [`PHXPropertyDescriptor`](PHXPropertyDescriptor.md), [`PHXVariableInfo`](PHXVariableInfo.md), [`PHXDFTException`](PHXDFTException.md), [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md), [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md), [`PHXInvokeReturn`](PHXInvokeReturn.md), [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md), [`PHXInvalidNameException`](PHXInvalidNameException.md)

**Declaration**
```java
public interface IPHXDriver
    extends IPHXComponent
```

This is the interface that drivers managed by ModelCenter Remote Execution must implement.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `boolean` | `endIteration()`<br>Performs the second step for an iteration of a driver. |
| `void` | `initializeIterations()`<br>Initializes the driver to a starting state. |
| `void` | `startIteration()`<br>Performs the first step for an iteration of a driver. |

### Methods inherited from interface [`com.phoenix_int.aserver.IPHXComponent`](IPHXComponent.md)
`end`

## Method Detail

### initializeIterations
```java
void initializeIterations()
    throws java.lang.Exception
```
Initializes the driver to a starting state. This function will be called once before a series of step() calls will be made. The function should reset things like iteration counts to initial values.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully

### startIteration
```java
void startIteration()
    throws java.lang.Exception
```
Performs the first step for an iteration of a driver. The driver should set values for all output reference variables. The client application will load these values and compute new values for the input references.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully

### endIteration
```java
boolean endIteration()
    throws java.lang.Exception
```
Performs the second step for an iteration of a driver. Prior to calling this function, the client application will have set values for all input reference variables. The driver should use these values to determine the next iteration, if any.

Returns true if another iteration needs to be performed, false if the driver is complete.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully