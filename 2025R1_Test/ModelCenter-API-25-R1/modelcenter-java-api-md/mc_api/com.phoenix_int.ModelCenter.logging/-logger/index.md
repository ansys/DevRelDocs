# Logger


public class [Logger](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a Logger object.

#### Author

jdaley, 3-10

## Constructors

| | |
|---|---|
| [Logger](-logger.md) | constructor(id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), addRef: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>FOR INTERNAL USE ONLY |

## Functions

| Name | Summary |
|---|---|
| [debug](debug.md) | public [debug](debug.md)(msg: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Logs a message at the DEBUG level |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [error](error.md) | public [error](error.md)(msg: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Logs a message at the ERROR level |
| [info](info.md) | public [info](info.md)(msg: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Logs a message at the INFO level |
| [isDebugEnabled](is-debug-enabled.md) | public [isDebugEnabled](is-debug-enabled.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks if the DEBUG level is enabled |
| [isErrorEnabled](is-error-enabled.md) | public [isErrorEnabled](is-error-enabled.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks if the ERROR level is enabled |
| [isInfoEnabled](is-info-enabled.md) | public [isInfoEnabled](is-info-enabled.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks if the INFO level is enabled |
| [isWarnEnabled](is-warn-enabled.md) | public [isWarnEnabled](is-warn-enabled.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks if the WARN level is enabled |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [warn](warn.md) | public [warn](warn.md)(msg: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Logs a message at the WARN level |
