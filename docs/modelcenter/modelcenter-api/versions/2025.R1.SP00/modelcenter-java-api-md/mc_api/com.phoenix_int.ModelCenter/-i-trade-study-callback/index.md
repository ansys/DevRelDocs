# ITradeStudyCallback


interface [ITradeStudyCallback](index.md)

This is the interface used to connect a trade study plug-in to a ModelCenter instance.

## Functions

| Name | Summary |
|---|---|
| [dataCollectorCreated](data-collector-created.md) | abstract fun [dataCollectorCreated](data-collector-created.md)(tradeStudy: [TradeStudy2](../-trade-study2/index.md), dataCollector: [DataCollector](../-data-collector/index.md))<br>Called when the trade study creates a new data collector for it to use. |
| [runEnded](run-ended.md) | abstract fun [runEnded](run-ended.md)(tradeStudy: [TradeStudy2](../-trade-study2/index.md))<br>Called when the trade study has completed it's run. |
| [runStarting](run-starting.md) | abstract fun [runStarting](run-starting.md)(tradeStudy: [TradeStudy2](../-trade-study2/index.md)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Called when the trade study is about to start running. |
| [tradeStudyClosed](trade-study-closed.md) | abstract fun [tradeStudyClosed](trade-study-closed.md)(tradeStudy: [TradeStudy2](../-trade-study2/index.md))<br>Called to signal that the trade study has closed. |
