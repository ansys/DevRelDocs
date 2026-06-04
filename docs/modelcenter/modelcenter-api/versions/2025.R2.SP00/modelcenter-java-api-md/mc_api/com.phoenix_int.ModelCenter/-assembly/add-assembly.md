# addAssembly


public [addAssembly](add-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)

adds a sub-assembly

#### Return

the new assembly

#### Parameters



| | |
|---|---|
| name | the new assembly name |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


public [addAssembly](add-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), assemblyType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)

adds a sub-assembly of the specified type

#### Return

the new assembly

#### Parameters



| | |
|---|---|
| name | the new assembly name |
| assemblyType | the type of assembly to create: ASSEMBLY_TYPE_ASSEMBLY - traditional ModelCenter assembly The following additional assembly types are available in ModelCenter process models (i.e. modelType == MODEL_TYPE_PROCESS) ASSEMBLY_TYPE_SEQUENCE - sequential flow ASSEMBLY_TYPE_IF - if-then-else flow ASSEMBLY_TYPE_FOR_EACH - loop over a data array |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
