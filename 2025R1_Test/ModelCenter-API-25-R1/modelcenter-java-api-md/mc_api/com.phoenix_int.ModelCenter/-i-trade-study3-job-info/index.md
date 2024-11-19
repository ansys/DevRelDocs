//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[ITradeStudy3JobInfo](index.md)

# ITradeStudy3JobInfo

interface [ITradeStudy3JobInfo](index.md)

Base interface for ITradeStudy3 job info and results

#### Author

Dave

#### Inheritors

| |
|---|
| [ITradeStudy3JobManager](../-i-trade-study3-job-manager/index.md) |
| [ITradeStudy3JobResult](../-i-trade-study3-job-result/index.md) |
| [ITradeStudy3JobManager](../-i-trade-study3-job-manager/index.md) |
| [ITradeStudy3JobResult](../-i-trade-study3-job-result/index.md) |

## Functions

| Name | Summary |
|---|---|
| [getNumRuns](get-num-runs.md) | abstract fun [getNumRuns](get-num-runs.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of runs. |
| [getNumVariables](get-num-variables.md) | abstract fun [getNumVariables](get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Get the number of variables. |
| [getVariableDisplayName](get-variable-display-name.md) | abstract fun [getVariableDisplayName](get-variable-display-name.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the display name for the variable with the specified index. |
| [getVariableEquation](get-variable-equation.md) | abstract fun [getVariableEquation](get-variable-equation.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the equation for the variable with the specified index. |
| [isDesignVariable](is-design-variable.md) | abstract fun [isDesignVariable](is-design-variable.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is the specified variable a design variable? |
| [isInput](is-input.md) | abstract fun [isInput](is-input.md)(which: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is the specified variable an input? |
