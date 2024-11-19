//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[ModelCenter](index.md)/[createAssemblyVariable](create-assembly-variable.md)

# createAssemblyVariable


public [createAssemblyVariable](create-assembly-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), parent: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)

creates an assembly variable

#### Return

a Variable object

#### Parameters



| | |
|---|---|
| name | Name of the new variable to create. |
| type | Type of the new variable. Possible types are: double, int, string, file, double[], int[], boolean[], string[], quadfacet, surfaceofrevolution, nurbs, bspline, ruled, skinned, vrml, node |
| parent | the name of the parent assembly |
