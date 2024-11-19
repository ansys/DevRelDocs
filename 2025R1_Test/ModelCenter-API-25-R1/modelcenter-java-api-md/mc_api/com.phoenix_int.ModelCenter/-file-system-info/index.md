//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[FileSystemInfo](index.md)

# FileSystemInfo


public class [FileSystemInfo](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a FileSystemInfo. The class is used by Java plug-ins to ModelCenter.

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getBaseName](get-base-name.md) | public [getBaseName](get-base-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the base filename, regardless of whether this is a version, file, or otherwise. |
| [getExists](get-exists.md) | public [getExists](get-exists.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the object exists. |
| [getIsValid](get-is-valid.md) | public [getIsValid](get-is-valid.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the object is valid. |
| [getIsWritable](get-is-writable.md) | public [getIsWritable](get-is-writable.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the object is writable (true) or read-only (false). |
| [getUrl](get-url.md) | public [getUrl](get-url.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the full URL of the object as a string. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
