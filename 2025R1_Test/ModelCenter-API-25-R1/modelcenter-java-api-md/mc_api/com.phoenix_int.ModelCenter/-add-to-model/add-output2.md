# addOutput2


public [addOutput2](add-output2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), classURL: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)

adds a pending output to the component 

 Valid types of variables are listed below. Add [] to the end of the type name to indicate an array of that type. 

- double - double
- int - integer
- string - string
- bool - boolean
- ref - reference
- file - A binary or ascii file.
- quad - Quad Facet Geometry, a geometry type composed of multiple quadrilaterals.
- sor - Surface of Revolution, a geometry type defined by a profile curve rotated about an axis.
- nurbs - A geometry type for NURBS.
- bspline - A geometry type for B-Spline curves.
- ruled - A geometry type for ruled surfaces.
- skinned - A geometry type for skinned surfaces.
- node - A geometry type for displaying multiple points in space.

#### Return

pointer to the variable object

#### Parameters



| | |
|---|---|
| name | the name of the variable |
| type | the type of the variable |
| classURL | class of the object variable. If an empty string is passed, PHXNonStrictType will be used. |
| value | the value of the variable |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
