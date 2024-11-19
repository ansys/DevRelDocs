//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[Variable](index.md)/[setHasChanged](set-has-changed.md)

# setHasChanged


public [setHasChanged](set-has-changed.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

Boolean which indicates if the variable has changed since the last time the boolean was reset. Typically used only by Plug-Ins for their own variables (to avoid conflicting use by different Plug-Ins, macros, or tools). Set the value to false and it will automatically flip to true any time the value changes.

#### Parameters



| | |
|---|---|
| flag | has the variable changed |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
