# isDesignVariable


abstract fun [isDesignVariable](is-design-variable.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Is the specified variable a design variable?

#### Return

true if yes, false if no

#### Parameters



| | |
|---|---|
| which | the name or index of the variable to get |

#### Throws

| | |
|---|---|
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the name is not valid |
| [IndexOutOfBoundsException](https://docs.oracle.com/javase/8/docs/api/java/lang/IndexOutOfBoundsException.html) | if an index is invalid |
