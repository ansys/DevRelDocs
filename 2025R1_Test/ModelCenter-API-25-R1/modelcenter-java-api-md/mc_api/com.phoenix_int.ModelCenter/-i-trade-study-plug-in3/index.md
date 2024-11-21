# ITradeStudyPlugIn3


interface [ITradeStudyPlugIn3](index.md) : [ITradeStudyPlugIn2](../-i-trade-study-plug-in2/index.md)

Trade Study Plug-In 3

#### Author

Dave

## Functions

| Name | Summary |
|---|---|
| [addAnalyzerVariable](../-i-trade-study-plug-in2/add-analyzer-variable.md) | abstract fun [addAnalyzerVariable](../-i-trade-study-plug-in2/add-analyzer-variable.md)(formula: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), analyzerName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Call to add a variable from an analyzer product. |
| [clearAnalyzerVariables](../-i-trade-study-plug-in2/clear-analyzer-variables.md) | abstract fun [clearAnalyzerVariables](../-i-trade-study-plug-in2/clear-analyzer-variables.md)()<br>Remove all analyzer variables. |
| [construct](../-i-trade-study-plug-in/construct.md) | abstract fun [construct](../-i-trade-study-plug-in/construct.md)(mc: [ModelCenter](../-model-center/index.md), atm: [AddToModel](../-add-to-model/index.md))<br>called when the plug-in is launched from ModelCenter |
| [fromString](../-i-trade-study-plug-in/from-string.md) | abstract fun [fromString](../-i-trade-study-plug-in/from-string.md)(state: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Called to restore the state of a Plug-In. |
| [getJobManager](get-job-manager.md) | abstract fun [getJobManager](get-job-manager.md)(): [ITradeStudy3JobManager](../-i-trade-study3-job-manager/index.md)<br>Get the job manager object; null if none. |
| [getSaveAllAnalyzerVariables](../-i-trade-study-plug-in2/get-save-all-analyzer-variables.md) | abstract fun [getSaveAllAnalyzerVariables](../-i-trade-study-plug-in2/get-save-all-analyzer-variables.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether all analyzer variables are saved in the data history when the trade study is run. |
| [getTradeStudyCallback](../-i-trade-study-plug-in2/get-trade-study-callback.md) | abstract fun [getTradeStudyCallback](../-i-trade-study-plug-in2/get-trade-study-callback.md)(): [ITradeStudyCallback](../-i-trade-study-callback/index.md)<br>Gets the trade study call back object. |
| [onEnd](../-i-trade-study-plug-in2/on-end.md) | abstract fun [onEnd](../-i-trade-study-plug-in2/on-end.md)()<br>Called when the plug-in is about to be deleted. |
| [setJobManager](set-job-manager.md) | abstract fun [setJobManager](set-job-manager.md)(jobManager: [ITradeStudy3JobManager](../-i-trade-study3-job-manager/index.md))<br>Set the job manager object; null if none. |
| [setSaveAllAnalyzerVariables](../-i-trade-study-plug-in2/set-save-all-analyzer-variables.md) | abstract fun [setSaveAllAnalyzerVariables](../-i-trade-study-plug-in2/set-save-all-analyzer-variables.md)(saveAll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets whether all analyzer variables are saved in the data history when the trade study is run. |
| [setTradeStudyCallback](../-i-trade-study-plug-in2/set-trade-study-callback.md) | abstract fun [setTradeStudyCallback](../-i-trade-study-plug-in2/set-trade-study-callback.md)(tcb: [ITradeStudyCallback](../-i-trade-study-callback/index.md))<br>Sets the trade study call back object. |
| [show](../-i-trade-study-plug-in/show.md) | abstract fun [show](../-i-trade-study-plug-in/show.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>called to display the plug-in |
