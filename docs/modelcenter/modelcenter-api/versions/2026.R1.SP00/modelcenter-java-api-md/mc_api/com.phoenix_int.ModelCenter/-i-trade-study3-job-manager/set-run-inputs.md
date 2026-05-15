# setRunInputs


abstract fun [setRunInputs](set-run-inputs.md)(runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), values: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;, which: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;)

Set some/all of the inputs for a given run.

#### Parameters



| | |
|---|---|
| runIndex | the run index |
| values | the values to set |
| which | which variables to set (indices or names), null for all |

#### Throws

| | |
|---|---|
| [IndexOutOfBoundsException](https://docs.oracle.com/javase/8/docs/api/java/lang/IndexOutOfBoundsException.html) | if the indices are not valid |
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the arguments are otherwise illegal |
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if an input cannot be set currently |
