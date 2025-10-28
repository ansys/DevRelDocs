# getRunIndex


public [getRunIndex](get-run-index.md)(names: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, values: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

Returns Data Explorer Run Index for the given design from the cache (Only works if cache is enabled.)

#### Return

index of design in design explorer if design found else -1

#### Parameters



| | |
|---|---|
| names | design variable names |
| values | design values corresponding to names |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
