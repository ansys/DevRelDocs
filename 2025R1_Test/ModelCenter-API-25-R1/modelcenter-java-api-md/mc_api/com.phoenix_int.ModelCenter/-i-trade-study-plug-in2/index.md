# ITradeStudyPlugIn2

interface [ITradeStudyPlugIn2](index.md) : [ITradeStudyPlugIn](../-i-trade-study-plug-in/index.md)

This is the interface that must be implemented by all Java trade study plug-ins for ModelCenter that can be used with OEM Analyzer tools.

#### Inheritors

| |
|---|
| [ITradeStudyPlugIn3](../-i-trade-study-plug-in3/index.md) |
| [ITradeStudyPlugIn3](../-i-trade-study-plug-in3/index.md) |

## Functions

| Name | Summary |
|---|---|
| [addAnalyzerVariable](add-analyzer-variable.md) | abstract fun [addAnalyzerVariable](add-analyzer-variable.md)(formula: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), analyzerName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Call to add a variable from an analyzer product. |
| [clearAnalyzerVariables](clear-analyzer-variables.md) | abstract fun [clearAnalyzerVariables](clear-analyzer-variables.md)()<br>Remove all analyzer variables. |
| [construct](../-i-trade-study-plug-in/construct.md) | abstract fun [construct](../-i-trade-study-plug-in/construct.md)(mc: [ModelCenter](../-model-center/index.md), atm: [AddToModel](../-add-to-model/index.md))<br>called when the plug-in is launched from ModelCenter |
| [fromString](../-i-trade-study-plug-in/from-string.md) | abstract fun [fromString](../-i-trade-study-plug-in/from-string.md)(state: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Called to restore the state of a Plug-In. |
| [getSaveAllAnalyzerVariables](get-save-all-analyzer-variables.md) | abstract fun [getSaveAllAnalyzerVariables](get-save-all-analyzer-variables.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether all analyzer variables are saved in the data history when the trade study is run. |
| [getTradeStudyCallback](get-trade-study-callback.md) | abstract fun [getTradeStudyCallback](get-trade-study-callback.md)(): [ITradeStudyCallback](../-i-trade-study-callback/index.md)<br>Gets the trade study call back object. |
| [onEnd](on-end.md) | abstract fun [onEnd](on-end.md)()<br>Called when the plug-in is about to be deleted. |
| [setSaveAllAnalyzerVariables](set-save-all-analyzer-variables.md) | abstract fun [setSaveAllAnalyzerVariables](set-save-all-analyzer-variables.md)(saveAll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets whether all analyzer variables are saved in the data history when the trade study is run. |
| [setTradeStudyCallback](set-trade-study-callback.md) | abstract fun [setTradeStudyCallback](set-trade-study-callback.md)(tcb: [ITradeStudyCallback](../-i-trade-study-callback/index.md))<br>Sets the trade study call back object. |
| [show](../-i-trade-study-plug-in/show.md) | abstract fun [show](../-i-trade-study-plug-in/show.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>called to display the plug-in |
