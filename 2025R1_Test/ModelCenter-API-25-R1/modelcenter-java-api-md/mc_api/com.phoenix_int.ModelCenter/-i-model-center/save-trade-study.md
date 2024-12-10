# saveTradeStudy


abstract fun [saveTradeStudy](save-trade-study.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), fileType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), dataExplorer: [DataExplorer](../-data-explorer/index.md))

Save the trade study inside of the Data Explorer

#### Parameters



| | |
|---|---|
| uri | the URI to save the trade study to |
| fileType | the file format for the trade study |
| dataExplorer | a pointer to the Data Explorer from which to save |

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | if an argument is invalid or if an error occurs while saving |
