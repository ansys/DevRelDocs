# Format


public class [Format](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class for formatting

#### Author

Fraley, 1-2004

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [doubleToEditableString](double-to-editable-string.md) | public [doubleToEditableString](double-to-editable-string.md)(val: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a double to its formatted string representation but with full precision for editing |
| [doubleToString](double-to-string.md) | public [doubleToString](double-to-string.md)(val: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a double to its formatted string representation |
| [getFormat](get-format.md) | public [getFormat](get-format.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Return to format's string representation |
| [longToEditableString](long-to-editable-string.md) | public [longToEditableString](long-to-editable-string.md)(val: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a long to its formatted string representation but with full precision for editing |
| [longToString](long-to-string.md) | public [longToString](long-to-string.md)(val: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a long to its formatted string representation |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setFormat](set-format.md) | public [setFormat](set-format.md)(format: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the format string |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [stringToDouble](string-to-double.md) | public [stringToDouble](string-to-double.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>Converts a string representing a number in the given format to a real number |
| [stringToLong](string-to-long.md) | public [stringToLong](string-to-long.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br>Converts a string representing a number in the given format to an integer number |
| [stringToString](string-to-string.md) | public [stringToString](string-to-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a string to its formatted string representation |
