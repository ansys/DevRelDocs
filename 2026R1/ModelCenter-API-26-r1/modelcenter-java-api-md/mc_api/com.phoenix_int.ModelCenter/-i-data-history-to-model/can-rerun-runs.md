# canRerunRuns


abstract fun [canRerunRuns](can-rerun-runs.md)(dataHistory: [DataHistory](./../-data-history/index.md), runIndexes: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Determine if the specified runs can be re-run. Returning FALSE means that the option should be disabled in any menus.

#### Return

TRUE if the runs can be re-run, false if not

#### Parameters



| | |
|---|---|
| dataHistory | the data history to check in regards to |
| runIndexes | an array of run indexes |
