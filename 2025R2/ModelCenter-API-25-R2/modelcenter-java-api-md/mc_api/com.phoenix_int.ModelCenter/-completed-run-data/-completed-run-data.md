# CompletedRunData


constructor(runIDs: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;, errorIDs: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;, errorMessages: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, variableValues: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;&gt;, endSequenceNumber: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), nextSequenceNumber: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Creates a new CompletedRunData object.

#### Parameters



| | |
|---|---|
| runIDs | an array of runIDs that have completed. |
| errorIDs | an array of errorIDs for each corresponding run in runIDs. A value of 0 indicates success, all other values indicate failure. |
| errorMessages | An array of error messages for each corresponding run in runIDs. |
| variableValues | A multi-dimensional array of variable values. The first index corresponds to each run in runIDs, the second index is for each variable in that run. |
| endSequenceNumber | the index of the last available completed run. |
| nextSequenceNumber | use this as the value of startSequenceNumber in the next subsequent call to getCompletedRunData. This value may be greater than (startSequenceNumber + runs) if a given run completed multiple times due to re-runs. |
