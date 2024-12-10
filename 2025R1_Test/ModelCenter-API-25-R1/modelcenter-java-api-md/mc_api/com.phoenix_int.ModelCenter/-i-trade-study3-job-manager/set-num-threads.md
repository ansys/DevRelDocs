# setNumThreads


abstract fun [setNumThreads](set-num-threads.md)(numThreads: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Get the number of threads that should be used for running in parallel; this is only a hint.

#### Parameters



| | |
|---|---|
| numThreads | the number of threads |

#### Throws

| | |
|---|---|
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the number of threads is invalid |
| [IllegalStateException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html) | if the value cannot currently be set |
