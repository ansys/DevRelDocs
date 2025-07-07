# TradeStudy2

public class [TradeStudy2](index.md) : [TradeStudy](../-trade-study/index.md)

This is the wrapper class that handles the native COM calls to a TradeStudy2 object.

#### Author

agardner, 08-2012

#### Inheritors

| |
|---|
| [TradeStudy3](../-trade-study3/index.md) |
| [TradeStudy3](../-trade-study3/index.md) |

## Functions

| Name | Summary |
|---|---|
| [addAnalyzerVariable](add-analyzer-variable.md) | public [addAnalyzerVariable](add-analyzer-variable.md)(formula: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), analyzerName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Call to add a variable from an analyzer product. |
| [clearAnalyzerVariables](clear-analyzer-variables.md) | public [clearAnalyzerVariables](clear-analyzer-variables.md)()<br>Remove all analyzer variables. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromString](from-string.md) | public [fromString](from-string.md)(setup: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Called to restore the state of a plug-in |
| [getSaveAllAnalyzerVariables](get-save-all-analyzer-variables.md) | public [getSaveAllAnalyzerVariables](get-save-all-analyzer-variables.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether all analyzer variables are saved in the data history when the trade study is run. |
| [getTradeStudyCallback](get-trade-study-callback.md) | public [getTradeStudyCallback](get-trade-study-callback.md)(): [ITradeStudyCallback](../-i-trade-study-callback/index.md)<br>Gets the trade study call back object. |
| [onEnd](on-end.md) | public [onEnd](on-end.md)()<br>Called when the plug-in is about to be deleted. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setSaveAllAnalyzerVariables](set-save-all-analyzer-variables.md) | public [setSaveAllAnalyzerVariables](set-save-all-analyzer-variables.md)(saveAll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets whether all analyzer variables are saved in the data history when the trade study is run. |
| [setTradeStudyCallback](set-trade-study-callback.md) | public [setTradeStudyCallback](set-trade-study-callback.md)(cb: [ITradeStudyCallback](../-i-trade-study-callback/index.md))<br>Sets the trade study call back object. |
| [show](show.md) | public [show](show.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Called to display the trade study. |
| [toString](to-string.md) | public [toString](to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Called to save the state of the plug-in. |
