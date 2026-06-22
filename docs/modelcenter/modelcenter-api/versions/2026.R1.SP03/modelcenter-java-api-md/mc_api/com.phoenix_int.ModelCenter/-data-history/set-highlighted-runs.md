# setHighlightedRuns


public [setHighlightedRuns](set-highlighted-runs.md)(selectedRunIndices: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)&gt;)

Specify the set of currently highlighted run indices. Note: This will overwrite the existing highlighted runs.

#### Parameters



| | |
|---|---|
| selectedRunIndices | the set of run indices to highlight, specified by either a single integer, numeric string, array of integers, or array of numeric strings. Specifying an empty or null value will remove all highlighted run indices. |

#### Throws

| | |
|---|---|
| [ModelCenterException](./../-model-center-exception/index.md) | if something goes wrong setting the highlighted runs |
