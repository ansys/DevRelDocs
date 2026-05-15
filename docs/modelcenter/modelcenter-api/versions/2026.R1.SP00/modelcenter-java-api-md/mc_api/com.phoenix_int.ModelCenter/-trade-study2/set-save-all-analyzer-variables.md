# setSaveAllAnalyzerVariables


public [setSaveAllAnalyzerVariables](set-save-all-analyzer-variables.md)(saveAll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

Sets whether all analyzer variables are saved in the data history when the trade study is run. Only affects variables added using [addAnalyzerVariable](add-analyzer-variable.md), otherwise the global ModelCenter setting is used (as per usual). The default is false. NOTE: not fully supported in MC 10.2 - you can (and should) set this value as appropriate but setting to true may not have an effect until all of the requisite functionality is added.

#### Throws

| | |
|---|---|
| [ModelCenterException](./../-model-center-exception/index.md) | on error |
