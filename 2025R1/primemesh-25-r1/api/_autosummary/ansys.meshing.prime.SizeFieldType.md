# SizeFieldType

<a id="ansys.meshing.prime.SizeFieldType"></a>

### *class* ansys.meshing.prime.SizeFieldType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

The type of sizing field to be used to fetch element size at given location.

<!-- !! processed by numpydoc !! -->

### Methods

| [`SizeFieldType.conjugate`](ansys.meshing.prime.SizeFieldType.conjugate.md#ansys.meshing.prime.SizeFieldType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SizeFieldType.bit_length`](ansys.meshing.prime.SizeFieldType.bit_length.md#ansys.meshing.prime.SizeFieldType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`SizeFieldType.bit_count`](ansys.meshing.prime.SizeFieldType.bit_count.md#ansys.meshing.prime.SizeFieldType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`SizeFieldType.to_bytes`](ansys.meshing.prime.SizeFieldType.to_bytes.md#ansys.meshing.prime.SizeFieldType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`SizeFieldType.from_bytes`](ansys.meshing.prime.SizeFieldType.from_bytes.md#ansys.meshing.prime.SizeFieldType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`SizeFieldType.as_integer_ratio`](ansys.meshing.prime.SizeFieldType.as_integer_ratio.md#ansys.meshing.prime.SizeFieldType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SizeFieldType.is_integer`](ansys.meshing.prime.SizeFieldType.is_integer.md#ansys.meshing.prime.SizeFieldType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| [`SizeFieldType.real`](ansys.meshing.prime.SizeFieldType.real.md#ansys.meshing.prime.SizeFieldType.real)                               | the real part of a complex number                                         |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`SizeFieldType.imag`](ansys.meshing.prime.SizeFieldType.imag.md#ansys.meshing.prime.SizeFieldType.imag)                               | the imaginary part of a complex number                                    |
| [`SizeFieldType.numerator`](ansys.meshing.prime.SizeFieldType.numerator.md#ansys.meshing.prime.SizeFieldType.numerator)                | the numerator of a rational number in lowest terms                        |
| [`SizeFieldType.denominator`](ansys.meshing.prime.SizeFieldType.denominator.md#ansys.meshing.prime.SizeFieldType.denominator)          | the denominator of a rational number in lowest terms                      |
| [`SizeFieldType.GEOMETRIC`](ansys.meshing.prime.SizeFieldType.GEOMETRIC.md#ansys.meshing.prime.SizeFieldType.GEOMETRIC)                | Geometric size field.                                                     |
| [`SizeFieldType.VOLUMETRIC`](ansys.meshing.prime.SizeFieldType.VOLUMETRIC.md#ansys.meshing.prime.SizeFieldType.VOLUMETRIC)             | Uses precomputed variable size in volumetric space defined by size field. |
| [`SizeFieldType.GEODESIC`](ansys.meshing.prime.SizeFieldType.GEODESIC.md#ansys.meshing.prime.SizeFieldType.GEODESIC)                   | Uses geodesic size field.                                                 |
| [`SizeFieldType.CONSTANT`](ansys.meshing.prime.SizeFieldType.CONSTANT.md#ansys.meshing.prime.SizeFieldType.CONSTANT)                   | Uses constant size at all locations of sizing field.                      |
| [`SizeFieldType.MESHEDGEODESIC`](ansys.meshing.prime.SizeFieldType.MESHEDGEODESIC.md#ansys.meshing.prime.SizeFieldType.MESHEDGEODESIC) | The type is applicable when remeshing already meshed surfaces.            |

<a id="examples-using-sizefieldtype"></a>

## Examples using SizeFieldType

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
