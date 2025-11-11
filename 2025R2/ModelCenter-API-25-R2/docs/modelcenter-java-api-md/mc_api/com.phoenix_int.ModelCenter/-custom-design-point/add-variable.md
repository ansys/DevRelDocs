# addVariable


public [addVariable](add-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), equation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), isNumeric: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), isValid: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), isInput: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), units: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

Adds a variable to the custom design point

#### Parameters



| | |
|---|---|
| name | the Data Collector name of the variable(can be anything) |
| equation | the equation(usually full ModelCenter variable name) |
| isNumeric | whether or not the variable is numeric |
| isValid | whether or not the variable is valid for this run |
| isInput | whether or not this variable is an input |
| type | the variable's type, i.e. &quot;double&quot; |
| units | the units of the variable |
| value | the value of the variable for this run |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
