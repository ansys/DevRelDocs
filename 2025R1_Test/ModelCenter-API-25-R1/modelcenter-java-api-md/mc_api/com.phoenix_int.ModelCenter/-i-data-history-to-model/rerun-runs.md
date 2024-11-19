//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IDataHistoryToModel](index.md)/[rerunRuns](rerun-runs.md)

# rerunRuns


abstract fun [rerunRuns](rerun-runs.md)(dataHistory: [DataHistory](../-data-history/index.md), runIndexes: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;)

Notify that the user has requested to re-run a set of runs. Does not wait for the runs to complete. endRuns from PHXDataHistory will be called when completed.

#### Parameters



| | |
|---|---|
| dataHistory | the data history to read and write from |
| runIndexes | an array of run indexes |
