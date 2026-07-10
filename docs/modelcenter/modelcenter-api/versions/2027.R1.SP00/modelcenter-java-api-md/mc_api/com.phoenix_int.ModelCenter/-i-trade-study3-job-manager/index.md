# ITradeStudy3JobManager


interface [ITradeStudy3JobManager](index.md) : [ITradeStudy3JobInfo](./../-i-trade-study3-job-info/index.md)

Job manager for ITradeStudyPlugIn3

#### Author

Dave

## Functions

| Name | Summary |
|---|---|
| [addVariable](add-variable.md) | abstract fun [addVariable](add-variable.md)(equation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), displayName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), isInput: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Add a variable. |
| [canNewJob](can-new-job.md) | abstract fun [canNewJob](can-new-job.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Get whether a new job could be started now. |
| [clear](clear.md) | abstract fun [clear](clear.md)()<br>Clear the job manager. |
| [getDataHistory](get-data-history.md) | abstract fun [getDataHistory](get-data-history.md)(): [DataHistory](./../-data-history/index.md)<br>Get the data history associated with this job manager. |
| [getMetaDataProvider](get-meta-data-provider.md) | abstract fun [getMetaDataProvider](get-meta-data-provider.md)(): [IVariableMetaDataProvider](./../-i-variable-meta-data-provider/index.md)<br>Get the variable metadata provider. |
| [getNumRuns](./../-i-trade-study3-job-info/get-num-runs.md) | abstract fun [getNumRuns](./../-i-trade-study3-job-info/get-num-runs.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of runs. |
| [getNumThreads](get-num-threads.md) | abstract fun [getNumThreads](get-num-threads.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of threads that should be used for running in parallel; this is only a hint. |
| [getNumVariables](./../-i-trade-study3-job-info/get-num-variables.md) | abstract fun [getNumVariables](./../-i-trade-study3-job-info/get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of variables. |
| [getRunInParallel](get-run-in-parallel.md) | abstract fun [getRunInParallel](get-run-in-parallel.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Get whether runs should be in parallel; this is only a hint. |
| [getSupportsParallelExecution](get-supports-parallel-execution.md) | abstract fun [getSupportsParallelExecution](get-supports-parallel-execution.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Get whether this job manager supports parallel execution. |
| [getValidateAll](get-validate-all.md) | abstract fun [getValidateAll](get-validate-all.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Get whether all outputs will be validated. |
| [getVariableDisplayName](./../-i-trade-study3-job-info/get-variable-display-name.md) | abstract fun [getVariableDisplayName](./../-i-trade-study3-job-info/get-variable-display-name.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the display name for the variable with the specified index. |
| [getVariableEquation](./../-i-trade-study3-job-info/get-variable-equation.md) | abstract fun [getVariableEquation](./../-i-trade-study3-job-info/get-variable-equation.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the equation for the variable with the specified index. |
| [isDesignVariable](./../-i-trade-study3-job-info/is-design-variable.md) | abstract fun [isDesignVariable](./../-i-trade-study3-job-info/is-design-variable.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is the specified variable a design variable? |
| [isInput](./../-i-trade-study3-job-info/is-input.md) | abstract fun [isInput](./../-i-trade-study3-job-info/is-input.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is the specified variable an input? |
| [newJob](new-job.md) | abstract fun [newJob](new-job.md)(numRuns: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>Start setting up a new job. |
| [runJobAsync](run-job-async.md) | abstract fun [runJobAsync](run-job-async.md)(): [ITradeStudy3JobResult](./../-i-trade-study3-job-result/index.md)<br>Start the job. |
| [setDataHistory](set-data-history.md) | abstract fun [setDataHistory](set-data-history.md)(dataHistory: [DataHistory](./../-data-history/index.md))<br>Set the data history associated with this job manager. |
| [setInput](set-input.md) | abstract fun [setInput](set-input.md)(runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>Set an input. |
| [setNumThreads](set-num-threads.md) | abstract fun [setNumThreads](set-num-threads.md)(numThreads: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>Get the number of threads that should be used for running in parallel; this is only a hint. |
| [setRunInParallel](set-run-in-parallel.md) | abstract fun [setRunInParallel](set-run-in-parallel.md)(runInParallel: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set whether runs should be in parallel; this is only a hint. |
| [setRunInputs](set-run-inputs.md) | abstract fun [setRunInputs](set-run-inputs.md)(runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), values: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;, which: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;)<br>Set some/all of the inputs for a given run. |
| [setValidateAll](set-validate-all.md) | abstract fun [setValidateAll](set-validate-all.md)(validateAll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Get whether all outputs will be validated. |
| [setVariableInputs](set-variable-inputs.md) | abstract fun [setVariableInputs](set-variable-inputs.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), values: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;, runIndices: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;)<br>Set some/all inputs for a particular variable, across runs. |
