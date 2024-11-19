//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[DataHistory](index.md)/[setRunValues](set-run-values.md)

# setRunValues


public [setRunValues](set-run-values.md)(run: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), values: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;, valid: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), modified: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

sets all values of a run as a single chunk.

#### Parameters



| | |
|---|---|
| run | the run id |
| values | values to set |
| valid | validity flag of the value |
| modified | modify flag of the value |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
