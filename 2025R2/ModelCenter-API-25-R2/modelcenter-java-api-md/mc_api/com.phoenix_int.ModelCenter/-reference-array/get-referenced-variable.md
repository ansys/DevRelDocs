# getReferencedVariable


public [getReferencedVariable](get-referenced-variable.md)(arrayIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), varIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](../-variable/index.md)

gets the specified referenced variable

#### Return

the specified variable

#### Parameters



| | |
|---|---|
| arrayIndex | (0-based index) |
| varIndex | the variable index (0-based index) |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


public [getReferencedVariable](get-referenced-variable.md)(arrayIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](../-variable/index.md)

Convenience method to return the referenced variable. Should only be used if there is only one reference variable.

#### Return

the specified variable

#### Parameters



| | |
|---|---|
| arrayIndex | (0-based index) |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
