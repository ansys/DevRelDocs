//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[setScreenUpdating](set-screen-updating.md)

# setScreenUpdating


abstract fun [setScreenUpdating](set-screen-updating.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

sets a flag indicating if the ModelCenter window should update due to Model changes. If this function is called multiple times with the flag set to false, screen updating will not be turned back on again until an equal number of calls are made with the value equal to true.

#### Parameters



| | |
|---|---|
| flag | false to turn updating off, true to turn it on |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
