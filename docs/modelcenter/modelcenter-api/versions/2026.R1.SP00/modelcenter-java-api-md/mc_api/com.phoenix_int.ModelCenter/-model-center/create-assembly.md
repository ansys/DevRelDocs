# createAssembly


public [createAssembly](create-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), parent: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](./../-assembly/index.md)

creates an assembly

#### Return

an Assembly object

#### Parameters



| | |
|---|---|
| name | the name of the assembly to be created |
| parent | the name of the parent assembly |


public [createAssembly](create-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), parent: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), assemblyType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](./../-assembly/index.md)

creates an assembly

#### Return

an Assembly object

#### Parameters



| | |
|---|---|
| name | the name of the assembly to be created |
| parent | the name of the parent assembly |
| assemblyType | the type of assembly to create: ASSEMBLY_TYPE_ASSEMBLY - traditional ModelCenter assembly The following additional assembly types are available in ModelCenter process models (i.e. modelType == MODEL_TYPE_PROCESS) ASSEMBLY_TYPE_SEQUENCE - sequential flow ASSEMBLY_TYPE_IF - if-then-else flow ASSEMBLY_TYPE_FOR_EACH - loop over a data array |
