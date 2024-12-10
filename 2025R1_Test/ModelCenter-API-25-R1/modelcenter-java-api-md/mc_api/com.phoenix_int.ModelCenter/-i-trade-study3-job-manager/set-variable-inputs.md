# setVariableInputs


abstract fun [setVariableInputs](set-variable-inputs.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), values: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;, runIndices: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;)

Set some/all inputs for a particular variable, across runs.

#### Parameters



| | |
|---|---|
| which | the variable to set (index or name) |
| values | the values to set |
| runIndices | the indices of the runs to set values for; if null, sets all |

#### Throws

| | |
|---|---|
| [IndexOutOfBoundsException](https://docs.oracle.com/javase/8/docs/api/java/lang/IndexOutOfBoundsException.html) | if the indices are not valid |
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the arguments are otherwise illegal |
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if an input cannot be set currently |
