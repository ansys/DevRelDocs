# addAnalyzerVariable


public [addAnalyzerVariable](add-analyzer-variable.md)(formula: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), analyzerName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

Call to add a variable from an analyzer product. If there are any analyzer variables, the plugin should only accept analyzer variables as trade study parameters.

#### Parameters



| | |
|---|---|
| formula | the formula of the variable or expression in the ModelCenter model |
| analyzerName | the name of the variable used by the analyzer product; if not specified, the formula is used instead. The plugin should only display and accept analyzer names. |

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | on error |
