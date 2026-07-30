# setRunOnlyMode


abstract fun [setRunOnlyMode](set-run-only-mode.md)(shouldBeInRunOnly: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

Sets the status of ModelCenter being in Run-Only Mode to the specified value. 

 Note: This function can only be called if it is the first function to be called on a new ModelCenter object; otherwise, it will throw an exception. This is to ensure that the correct ModelCenter license is checked out. 

#### Parameters



| | |
|---|---|
| shouldBeInRunOnly | true if ModelCenter should be in Run-Only Mode; otherwise, false |
