# Interface: IPHXComponent

**Package:** `com.phoenix_int.aserver`

**Known Subinterfaces**
- [`IPHXAnalysis`](IPHXAnalysis.md), [`IPHXDriver`](IPHXDriver.md)

**Known Implementing Classes**
- [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md), [`PHXSimpleSelfManager2`](PHXSimpleSelfManager2.md), [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md)

**Related Classes**
- [`PHXComponentBranch`](PHXComponentBranch.md), [`PHXComponentDescription`](PHXComponentDescription.md), [`PHXComponentVersion`](PHXComponentVersion.md), [`PHXGroup`](PHXGroup.md), [`PHXMethodDescriptor`](PHXMethodDescriptor.md), [`PHXPropertyDescriptor`](PHXPropertyDescriptor.md), [`PHXVariableInfo`](PHXVariableInfo.md), [`PHXDFTException`](PHXDFTException.md), [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md), [`PHXNoSuchWriteableObjectException`](PHXNoSuchWriteableObjectException.md), [`PHXInvokeReturn`](PHXInvokeReturn.md), [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md), [`PHXInvalidNameException`](PHXInvalidNameException.md)

**Declaration**
```
public interface IPHXComponent
```

This is a common base interface for things served on ModelCenter Remote Execution.

In addition to the functions specified by this interface, the following static functions may also be defined to provide additional information about a component:

- `public static String getVersion()` — retrieves the version of the component.
- `public static String getAuthor()` — retrieves the author of the component.
- `public static String getDescription()` — retrieves a one-line description of the component.
- `public static String getHelpURL()` — retrieves a URL associated with the component.
- `public static String getKeywords()` — retrieves keywords associated with the component.
- `public static String getIconFile()` — retrieves the name of a 64x64 bmp file used to represent the component as an icon in graphical environments.

The above functions are used by the "describe" command in ModelCenter Remote Execution. If not defined, default values are used. The functions are all static so that they may be called without instantiating the component.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `end()`<br>Notifies the driver that it has ended. |

## Method Detail

### end
```
void end()
         throws java.lang.Exception
```
Notifies the driver that it has ended. The driver should perform any necessary shutdown functions.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully