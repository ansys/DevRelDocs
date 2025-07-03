# IDataHistoryToModel


interface [IDataHistoryToModel](index.md)

The Data History to Model connector is the piece that connects a Data History to a ModelCenter instance, for the purpose of restoring a run or re-running runs. It allows a user to override the default behaviors of the &quot;Save to Model&quot; and &quot;Rerun Runs&quot; capabilities of Data Explorer.

## Functions

| Name | Summary |
|---|---|
| [canRerunRuns](can-rerun-runs.md) | abstract fun [canRerunRuns](can-rerun-runs.md)(dataHistory: [DataHistory](../-data-history/index.md), runIndexes: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Determine if the specified runs can be re-run. |
| [canSaveToModel](can-save-to-model.md) | abstract fun [canSaveToModel](can-save-to-model.md)(dataHistory: [DataHistory](../-data-history/index.md), runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Determine if a run could be saved to the model; returning FALSE means that option should be disabled in any menus. |
| [closeDataHistory](close-data-history.md) | abstract fun [closeDataHistory](close-data-history.md)(dataHistory: [DataHistory](../-data-history/index.md))<br>Notify that the user is attempting to close the given data history. |
| [rerunRuns](rerun-runs.md) | abstract fun [rerunRuns](rerun-runs.md)(dataHistory: [DataHistory](../-data-history/index.md), runIndexes: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;)<br>Notify that the user has requested to re-run a set of runs. |
| [saveToModel](save-to-model.md) | abstract fun [saveToModel](save-to-model.md)(dataHistory: [DataHistory](../-data-history/index.md), runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>Notify that a user has requested to save the indicated run to the model. |
