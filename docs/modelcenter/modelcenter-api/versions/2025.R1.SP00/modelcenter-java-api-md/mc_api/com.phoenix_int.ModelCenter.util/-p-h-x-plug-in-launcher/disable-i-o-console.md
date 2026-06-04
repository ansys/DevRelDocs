# disableIOConsole


public [disableIOConsole](disable-i-o-console.md)(discardOutput: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

 Prevents a [PHXIOConsole](../-p-h-x-i-o-console/index.md) from ever being created and optionally redirects [err](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#err--) and [out](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#out--) to the bit bucket. This is a convenience method for headless apps (and specifically JNI apps) which are not using the console. 

 After calling this method, feel free to re-redirect the console or error stream elsewhere, secure in the knowledge that ModelCenter.jar will not attempt to steal them again and pipe them to [PHXIOConsole](../-p-h-x-i-o-console/index.md). 

#### Parameters



| | |
|---|---|
| discardOutput | whether to redirect [out](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#out--) and [err](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#err--) to the bit bucket; if false, they are untouched |

#### Throws

| | |
|---|---|
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if [getDummyFrame](get-dummy-frame.md) has already been called and the IO console created |
