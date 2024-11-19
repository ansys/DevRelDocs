//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[ITradeStudy3JobManager](index.md)/[addVariable](add-variable.md)

# addVariable


abstract fun [addVariable](add-variable.md)(equation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), displayName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), isInput: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

Add a variable.

#### Parameters



| | |
|---|---|
| equation | the equation |
| displayName | the display name |
| isInput | whether the variable is an input |

#### Throws

| | |
|---|---|
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the arguments are not valid |
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if a variable cannot be added right now |
