# TradeStudy3


public class [TradeStudy3](index.md) : [TradeStudy2](./../-trade-study2/index.md)

Class that wraps an ITradeStudy3PlugIn COM object.

#### Author

Dave

## Functions

| Name | Summary |
|---|---|
| [addAnalyzerVariable](./../-trade-study2/add-analyzer-variable.md) | public [addAnalyzerVariable](./../-trade-study2/add-analyzer-variable.md)(formula: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), analyzerName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Call to add a variable from an analyzer product. |
| [clearAnalyzerVariables](./../-trade-study2/clear-analyzer-variables.md) | public [clearAnalyzerVariables](./../-trade-study2/clear-analyzer-variables.md)()<br>Remove all analyzer variables. |
| [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromString](./../-trade-study2/from-string.md) | public [fromString](./../-trade-study2/from-string.md)(setup: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Called to restore the state of a plug-in |
| [getJobManager](get-job-manager.md) | public [getJobManager](get-job-manager.md)(): [ITradeStudy3JobManager](./../-i-trade-study3-job-manager/index.md) |
| [getSaveAllAnalyzerVariables](./../-trade-study2/get-save-all-analyzer-variables.md) | public [getSaveAllAnalyzerVariables](./../-trade-study2/get-save-all-analyzer-variables.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether all analyzer variables are saved in the data history when the trade study is run. |
| [getTradeStudyCallback](./../-trade-study2/get-trade-study-callback.md) | public [getTradeStudyCallback](./../-trade-study2/get-trade-study-callback.md)(): [ITradeStudyCallback](./../-i-trade-study-callback/index.md)<br>Gets the trade study call back object. |
| [onEnd](./../-trade-study2/on-end.md) | public [onEnd](./../-trade-study2/on-end.md)()<br>Called when the plug-in is about to be deleted. |
| [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setJobManager](set-job-manager.md) | public [setJobManager](set-job-manager.md)(jobManager: [ITradeStudy3JobManager](./../-i-trade-study3-job-manager/index.md)) |
| [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setSaveAllAnalyzerVariables](./../-trade-study2/set-save-all-analyzer-variables.md) | public [setSaveAllAnalyzerVariables](./../-trade-study2/set-save-all-analyzer-variables.md)(saveAll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets whether all analyzer variables are saved in the data history when the trade study is run. |
| [setTradeStudyCallback](./../-trade-study2/set-trade-study-callback.md) | public [setTradeStudyCallback](./../-trade-study2/set-trade-study-callback.md)(cb: [ITradeStudyCallback](./../-i-trade-study-callback/index.md))<br>Sets the trade study call back object. |
| [show](./../-trade-study2/show.md) | public [show](./../-trade-study2/show.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Called to display the trade study. |
| [toString](./../-trade-study2/to-string.md) | public [toString](./../-trade-study2/to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Called to save the state of the plug-in. |
