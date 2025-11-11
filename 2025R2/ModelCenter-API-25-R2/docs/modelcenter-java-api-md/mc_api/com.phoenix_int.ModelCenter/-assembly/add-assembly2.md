# addAssembly2


public [addAssembly2](add-assembly2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), xPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), yPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Assembly](index.md)

adds a sub-assembly

#### Return

the new assembly

#### Parameters



| | |
|---|---|
| name | the new assembly name |
| xPos | x-coordinate to add the assembly at (in its parent area) |
| yPos | y-coordinate to add the assembly at (in its parent area) |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


public [addAssembly2](add-assembly2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), xPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), yPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), assemblyType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)

adds a sub-assembly of the specified type

#### Return

the new assembly

#### Parameters



| | |
|---|---|
| name | the new assembly name |
| xPos | x-coordinate to add the assembly at (in its parent area) |
| yPos | y-coordinate to add the assembly at (in its parent area) |
| assemblyType | the type of assembly to create:ASSEMBLY_TYPE_ASSEMBLY - traditional ModelCenter assemblyThe following additional assembly types are available in ModelCenter process models(i.e. modelType == MODEL_TYPE_PROCESS)ASSEMBLY_TYPE_SEQUENCE - sequential flowASSEMBLY_TYPE_IF - if-then-else flowASSEMBLY_TYPE_FOR_EACH - loop over a data array |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
