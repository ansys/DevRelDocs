# TopoSearchField

<a id="ansys.meshing.prime.TopoSearchField"></a>

### *class* ansys.meshing.prime.TopoSearchField(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Toposearch diagnostic field.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`TopoSearchField.conjugate`](ansys.meshing.prime.TopoSearchField.conjugate.md#ansys.meshing.prime.TopoSearchField.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`TopoSearchField.bit_length`](ansys.meshing.prime.TopoSearchField.bit_length.md#ansys.meshing.prime.TopoSearchField.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`TopoSearchField.bit_count`](ansys.meshing.prime.TopoSearchField.bit_count.md#ansys.meshing.prime.TopoSearchField.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`TopoSearchField.to_bytes`](ansys.meshing.prime.TopoSearchField.to_bytes.md#ansys.meshing.prime.TopoSearchField.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`TopoSearchField.from_bytes`](ansys.meshing.prime.TopoSearchField.from_bytes.md#ansys.meshing.prime.TopoSearchField.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`TopoSearchField.as_integer_ratio`](ansys.meshing.prime.TopoSearchField.as_integer_ratio.md#ansys.meshing.prime.TopoSearchField.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`TopoSearchField.is_integer`](ansys.meshing.prime.TopoSearchField.is_integer.md#ansys.meshing.prime.TopoSearchField.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TopoSearchField.real`](ansys.meshing.prime.TopoSearchField.real.md#ansys.meshing.prime.TopoSearchField.real)                                                                                                       | the real part of a complex number                             |
| [`TopoSearchField.imag`](ansys.meshing.prime.TopoSearchField.imag.md#ansys.meshing.prime.TopoSearchField.imag)                                                                                                       | the imaginary part of a complex number                        |
| [`TopoSearchField.numerator`](ansys.meshing.prime.TopoSearchField.numerator.md#ansys.meshing.prime.TopoSearchField.numerator)                                                                                        | the numerator of a rational number in lowest terms            |
| [`TopoSearchField.denominator`](ansys.meshing.prime.TopoSearchField.denominator.md#ansys.meshing.prime.TopoSearchField.denominator)                                                                                  | the denominator of a rational number in lowest terms          |
| [`TopoSearchField.OVERLAPPINGTOPOFACES`](ansys.meshing.prime.TopoSearchField.OVERLAPPINGTOPOFACES.md#ansys.meshing.prime.TopoSearchField.OVERLAPPINGTOPOFACES)                                                       | Diagnoses overlapping or partially overlapping topofaces.     |
| [`TopoSearchField.INTERSECTINGTOPOFACES`](ansys.meshing.prime.TopoSearchField.INTERSECTINGTOPOFACES.md#ansys.meshing.prime.TopoSearchField.INTERSECTINGTOPOFACES)                                                    | Diagnoses intersecting topofaces.                             |
| [`TopoSearchField.SELFINTERSECTINGTOPOFACES`](ansys.meshing.prime.TopoSearchField.SELFINTERSECTINGTOPOFACES.md#ansys.meshing.prime.TopoSearchField.SELFINTERSECTINGTOPOFACES)                                        | Diagnoses topofaces with self intersecting bounding edges.    |
| [`TopoSearchField.BROKENLOOPTOPOFACES`](ansys.meshing.prime.TopoSearchField.BROKENLOOPTOPOFACES.md#ansys.meshing.prime.TopoSearchField.BROKENLOOPTOPOFACES)                                                          | Diagnoses topofaces with open or broken bounding edge loops.  |
| [`TopoSearchField.NOBOUNDARYLOOPTOPOFACES`](ansys.meshing.prime.TopoSearchField.NOBOUNDARYLOOPTOPOFACES.md#ansys.meshing.prime.TopoSearchField.NOBOUNDARYLOOPTOPOFACES)                                              | Diagnoses topofaces without bounding edges.                   |
| [`TopoSearchField.INVALIDBOUNDARYTOPOFACES`](ansys.meshing.prime.TopoSearchField.INVALIDBOUNDARYTOPOFACES.md#ansys.meshing.prime.TopoSearchField.INVALIDBOUNDARYTOPOFACES)                                           | Diagnoses topofaces with incorrect bounding edge orientation. |
| [`TopoSearchField.SMALLTOPOEDGES`](ansys.meshing.prime.TopoSearchField.SMALLTOPOEDGES.md#ansys.meshing.prime.TopoSearchField.SMALLTOPOEDGES)                                                                         | Diagnoses topofaces with small topoedges.                     |
| [`TopoSearchField.INCORRECTBOUNDARYORIENTATIONTOPOFACES`](ansys.meshing.prime.TopoSearchField.INCORRECTBOUNDARYORIENTATIONTOPOFACES.md#ansys.meshing.prime.TopoSearchField.INCORRECTBOUNDARYORIENTATIONTOPOFACES)    | Diagnoses topofaces with incorrect boundary orientations.     |
| [`TopoSearchField.INCONSISTENTNORMALORIENTATIONTOPOFACES`](ansys.meshing.prime.TopoSearchField.INCONSISTENTNORMALORIENTATIONTOPOFACES.md#ansys.meshing.prime.TopoSearchField.INCONSISTENTNORMALORIENTATIONTOPOFACES) | Diagnoses topofaces with inconsistent normal orientations.    |
| [`TopoSearchField.NUMBEROFFIELDS`](ansys.meshing.prime.TopoSearchField.NUMBEROFFIELDS.md#ansys.meshing.prime.TopoSearchField.NUMBEROFFIELDS)                                                                         | Diagnoses all topofaces.                                      |
<!-- vale on -->