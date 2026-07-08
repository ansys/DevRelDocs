# setInput


abstract fun [setInput](set-input.md)(runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))

Set an input.

#### Parameters



| | |
|---|---|
| runIndex | the run index |
| which | the variable to set (index or name) |
| value | the value to set |

#### Throws

| | |
|---|---|
| [IndexOutOfBoundsException](https://docs.oracle.com/javase/8/docs/api/java/lang/IndexOutOfBoundsException.html) | if the indices are not valid |
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the arguments are otherwise illegal |
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if an input cannot be set currently |
