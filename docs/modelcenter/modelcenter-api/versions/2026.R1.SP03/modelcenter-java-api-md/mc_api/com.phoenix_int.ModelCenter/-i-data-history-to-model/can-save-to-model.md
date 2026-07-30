# canSaveToModel


abstract fun [canSaveToModel](can-save-to-model.md)(dataHistory: [DataHistory](./../-data-history/index.md), runIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Determine if a run could be saved to the model; returning FALSE means that option should be disabled in any menus.

#### Return

TRUE if the run could be saved, FALSE if not

#### Parameters



| | |
|---|---|
| dataHistory | the data history to check in regards to |
| runIndex | the index of the run to check |
