# SizeFieldType



### *class* ansys.meshing.prime.SizeFieldType(value)

The type of sizing field to be used to fetch element size at given location.

<!-- !! processed by numpydoc !! -->

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`SizeFieldType.GEOMETRIC`](ansys.meshing.prime.SizeFieldType.GEOMETRIC.md#ansys.meshing.prime.SizeFieldType.GEOMETRIC)                | Geometric size field.                                                            |
| [`SizeFieldType.VOLUMETRIC`](ansys.meshing.prime.SizeFieldType.VOLUMETRIC.md#ansys.meshing.prime.SizeFieldType.VOLUMETRIC)             | Uses precomputed variable size in volumetric space defined by size field.        |
| [`SizeFieldType.GEODESIC`](ansys.meshing.prime.SizeFieldType.GEODESIC.md#ansys.meshing.prime.SizeFieldType.GEODESIC)                   | Uses geodesic size field.                                                        |
| [`SizeFieldType.CONSTANT`](ansys.meshing.prime.SizeFieldType.CONSTANT.md#ansys.meshing.prime.SizeFieldType.CONSTANT)                   | Uses constant size at all locations of sizing field.                             |
| [`SizeFieldType.MESHEDGEODESIC`](ansys.meshing.prime.SizeFieldType.MESHEDGEODESIC.md#ansys.meshing.prime.SizeFieldType.MESHEDGEODESIC) | Computes size field using existing surface mesh sizes and diffuses geodesically. |

