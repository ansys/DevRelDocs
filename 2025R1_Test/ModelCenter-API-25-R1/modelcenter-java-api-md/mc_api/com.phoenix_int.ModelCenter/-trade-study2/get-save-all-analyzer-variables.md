//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[TradeStudy2](index.md)/[getSaveAllAnalyzerVariables](get-save-all-analyzer-variables.md)

# getSaveAllAnalyzerVariables


public [getSaveAllAnalyzerVariables](get-save-all-analyzer-variables.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Gets whether all analyzer variables are saved in the data history when the trade study is run. Only affects variables added using [addAnalyzerVariable](add-analyzer-variable.md), otherwise the global ModelCenter setting is used (as per usual). The default is false.

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | on error |
