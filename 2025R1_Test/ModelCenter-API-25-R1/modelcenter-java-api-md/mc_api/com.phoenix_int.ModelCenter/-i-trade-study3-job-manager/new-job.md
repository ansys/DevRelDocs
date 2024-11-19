//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[ITradeStudy3JobManager](index.md)/[newJob](new-job.md)

# newJob


abstract fun [newJob](new-job.md)(numRuns: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Start setting up a new job.

#### Parameters



| | |
|---|---|
| numRuns | the number of runs to use |

#### Throws

| | |
|---|---|
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if a new job cannot be started right now |
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the number of runs is not valid |
