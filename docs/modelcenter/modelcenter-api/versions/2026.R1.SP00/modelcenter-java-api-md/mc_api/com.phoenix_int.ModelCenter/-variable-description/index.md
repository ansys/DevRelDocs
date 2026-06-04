# VariableDescription


public class [VariableDescription](index.md) : [PHXCOMObject](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a data item from a Data Collector. The class is used by Java plug-ins to ModelCenter.

#### Author

Woyak, 10-01

## Properties

| Name | Summary |
|---|---|
| [INPUT](-i-n-p-u-t.md) | val [INPUT](-i-n-p-u-t.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 0 |
| [OUTPUT](-o-u-t-p-u-t.md) | val [OUTPUT](-o-u-t-p-u-t.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 1 |

## Functions

| Name | Summary |
|---|---|
| [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getEquation](get-equation.md) | public [getEquation](get-equation.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>if the variable is a custom variable, this function returns the equation used to compute the value for the variable. |
| [getFullName](get-full-name.md) | public [getFullName](get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the full name of the variable, e.g. |
| [getName](get-name.md) | public [getName](get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the variable, e.g. |
| [getState](get-state.md) | public [getState](get-state.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the state of the variable, either PHXVariableDescription.INPUT or PHXVariableDescription.OUTPUT. |
| [getType](get-type.md) | public [getType](get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the type of the variable, e.g. |
| [getUnits](get-units.md) | public [getUnits](get-units.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the units of the variable, if any |
| [isCustom](is-custom.md) | public [isCustom](is-custom.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>indicates if the variable is a custom variable, i.e. |
| [isNumeric](is-numeric.md) | public [isNumeric](is-numeric.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>indicates if the variable is numeric or not |
| [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
