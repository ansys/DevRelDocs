# GlobalParameters


public class [GlobalParameters](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

Global Parameters is a hashtable of values that can be set via the ModelCenter API and used for any purpose the client desires. As a rule of practice to avoid conflicts, parameters should be named with a namespace prefix and a colon, such as &quot;phx:CenterLinkServer&quot;. Global Parameters have a boolean flag which indicates whether the value should be passed along to external components, such as Analysis Server tools. Global parameters are saved at the ModelCenter level and as such are not stored across ModelCenter being closed/reopened, but are kept across file close/new file open in a single session.

#### Author

Sharp

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getCount](get-count.md) | public [getCount](get-count.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Returns the number of global parameters set |
| [getValue](get-value.md) | public [getValue](get-value.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>public [getValue](get-value.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Gets the value of a global parameter |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [remove](remove.md) | public [remove](remove.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>public [remove](remove.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Removes a global parameter |
| [setExportToRemoteComponents](set-export-to-remote-components.md) | public [setExportToRemoteComponents](set-export-to-remote-components.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), export: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>public [setExportToRemoteComponents](set-export-to-remote-components.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), export: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets the flag that determines if a global parameter should be exported to all remote components. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setValue](set-value.md) | public [setValue](set-value.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>public [setValue](set-value.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>Sets the value of a global parameter. |
