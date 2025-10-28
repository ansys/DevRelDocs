# SaveContext


public class [SaveContext](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

Class for generically saving and loading files in ModelCenter.

#### Author

Boutwell, 1/2014

## Functions

| Name | Summary |
|---|---|
| [close](close.md) | public [close](close.md)()<br>***************************************************************************** Closes the save context. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getSaveLocation](get-save-location.md) | public [getSaveLocation](get-save-location.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>***************************************************************************** Gets the disk location this save context saves. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [restoreFile](restore-file.md) | public [restoreFile](restore-file.md)(fileID: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), targetLocation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>***************************************************************************** Restores the file by ID to the given location. |
| [restoreFileStream](restore-file-stream.md) | public [restoreFileStream](restore-file-stream.md)(fileID: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>***************************************************************************** Gets a stream that can be used for restoring a file saved into the context with the given ID. |
| [saveFile](save-file.md) | public [saveFile](save-file.md)(sourceLocation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), context: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>***************************************************************************** Save a file into the context. |
| [saveFileStream](save-file-stream.md) | public [saveFileStream](save-file-stream.md)(context: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>***************************************************************************** Gets a stream that can be used for saving a file to the context. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
