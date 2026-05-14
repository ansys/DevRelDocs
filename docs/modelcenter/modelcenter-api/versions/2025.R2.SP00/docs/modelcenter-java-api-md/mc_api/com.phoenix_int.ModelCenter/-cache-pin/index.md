# CachePin


public class [CachePin](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a CachePin. The class is used by Java plug-ins to ModelCenter.

## Functions

| Name | Summary |
|---|---|
| [checkinOnFlush](checkin-on-flush.md) | public [checkinOnFlush](checkin-on-flush.md)(messsage: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Checkin with the specified message when the file is unpinned. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getLocalPath](get-local-path.md) | public [getLocalPath](get-local-path.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the local path of the file in the cache. |
| [getUrl](get-url.md) | public [getUrl](get-url.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the original URI of the resource. |
| [isValid](is-valid.md) | public [isValid](is-valid.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is this object pinning a file? |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [releasePin](release-pin.md) | public [releasePin](release-pin.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Unpin the current file if a file is pinned. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
