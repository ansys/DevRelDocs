# PHXDEKeepalive


open inner class [PHXDEKeepalive](index.md) : [PHXCOMObject](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [release](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
