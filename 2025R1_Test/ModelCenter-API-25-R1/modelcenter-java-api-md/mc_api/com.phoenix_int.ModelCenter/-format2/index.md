//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[Format2](index.md)

# Format2


public class [Format2](index.md)

This is the wrapper class for formatting. This second iteration does not use the COM API under the hood and is safe to use in some cases when COM is not.

#### Author

Gaurav, 2010

## Constructors

| | |
|---|---|
| [Format2](-format2.md) | constructor(strFormat: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))constructor() |

## Functions

| Name | Summary |
|---|---|
| [_setFormat](_set-format.md) | public [_setFormat](_set-format.md)(strFormat: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the format string |
| [doubleToEditableString](double-to-editable-string.md) | public [doubleToEditableString](double-to-editable-string.md)(val: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a double to its formatted string representation but with full precision for editing |
| [doubleToString](double-to-string.md) | public [doubleToString](double-to-string.md)(val: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a double to its formatted string representation |
| [longToEditableString](long-to-editable-string.md) | public [longToEditableString](long-to-editable-string.md)(val: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a long to its formatted string representation but with full precision for editing |
| [longToString](long-to-string.md) | public [longToString](long-to-string.md)(val: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a long to its formatted string representation |
| [stringToDouble](string-to-double.md) | public [stringToDouble](string-to-double.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>Converts a string representing a number in the given format to a real number |
| [stringToLong](string-to-long.md) | public [stringToLong](string-to-long.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br>Converts a string representing a number in the given format to an integer number |
| [stringToString](string-to-string.md) | public [stringToString](string-to-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts a string to its formatted string representation |
