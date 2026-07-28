# addVariable


public [addVariable](add-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](./../-variable/index.md)

adds a variable to the assembly

#### Return

the new assembly

#### Parameters



| | |
|---|---|
| name | Name of the new variable to create. |
| type | Type of the new variable. Possible types are: double, int, string, file, double[], int[], boolean[], string[], quadfacet, surfaceofrevolution, nurbs, bspline, ruled, skinned, vrml, node |

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
