# ITradeStudy3JobResult


interface [ITradeStudy3JobResult](index.md) : [ITradeStudy3JobInfo](../-i-trade-study3-job-info/index.md)

Result of executing a job.

#### Author

Dave

## Functions

| Name | Summary |
|---|---|
| [cancelAsync](cancel-async.md) | abstract fun [cancelAsync](cancel-async.md)()<br>Cancel the operation asynchronously. |
| [getDataHistory](get-data-history.md) | abstract fun [getDataHistory](get-data-history.md)(): [DataHistory](../-data-history/index.md)<br>Get the data history being used. |
| [getNumRuns](../-i-trade-study3-job-info/get-num-runs.md) | abstract fun [getNumRuns](../-i-trade-study3-job-info/get-num-runs.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of runs. |
| [getNumVariables](../-i-trade-study3-job-info/get-num-variables.md) | abstract fun [getNumVariables](../-i-trade-study3-job-info/get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of variables. |
| [getVariableDisplayName](../-i-trade-study3-job-info/get-variable-display-name.md) | abstract fun [getVariableDisplayName](../-i-trade-study3-job-info/get-variable-display-name.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the display name for the variable with the specified index. |
| [getVariableEquation](../-i-trade-study3-job-info/get-variable-equation.md) | abstract fun [getVariableEquation](../-i-trade-study3-job-info/get-variable-equation.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the equation for the variable with the specified index. |
| [isCanceled](is-canceled.md) | abstract fun [isCanceled](is-canceled.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Get whether the job has been canceled. |
| [isDesignVariable](../-i-trade-study3-job-info/is-design-variable.md) | abstract fun [isDesignVariable](../-i-trade-study3-job-info/is-design-variable.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is the specified variable a design variable? |
| [isInput](../-i-trade-study3-job-info/is-input.md) | abstract fun [isInput](../-i-trade-study3-job-info/is-input.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is the specified variable an input? |
| [isRunning](is-running.md) | abstract fun [isRunning](is-running.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Get whether the job is still running. |
| [waitForCompletion](wait-for-completion.md) | abstract fun [waitForCompletion](wait-for-completion.md)()<br>Wait for the operation to terminate. |
