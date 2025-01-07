# PartCreationType

<a id="ansys.meshing.prime.PartCreationType"></a>

### *class* ansys.meshing.prime.PartCreationType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Part Creation Type decides whether to create a part per CAD Model, Assembly, Part, Body.

<!-- !! processed by numpydoc !! -->

### Methods

| [`PartCreationType.conjugate`](ansys.meshing.prime.PartCreationType.conjugate.md#ansys.meshing.prime.PartCreationType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`PartCreationType.bit_length`](ansys.meshing.prime.PartCreationType.bit_length.md#ansys.meshing.prime.PartCreationType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`PartCreationType.bit_count`](ansys.meshing.prime.PartCreationType.bit_count.md#ansys.meshing.prime.PartCreationType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`PartCreationType.to_bytes`](ansys.meshing.prime.PartCreationType.to_bytes.md#ansys.meshing.prime.PartCreationType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`PartCreationType.from_bytes`](ansys.meshing.prime.PartCreationType.from_bytes.md#ansys.meshing.prime.PartCreationType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`PartCreationType.as_integer_ratio`](ansys.meshing.prime.PartCreationType.as_integer_ratio.md#ansys.meshing.prime.PartCreationType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`PartCreationType.is_integer`](ansys.meshing.prime.PartCreationType.is_integer.md#ansys.meshing.prime.PartCreationType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| [`PartCreationType.real`](ansys.meshing.prime.PartCreationType.real.md#ansys.meshing.prime.PartCreationType.real)                      | the real part of a complex number                    |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`PartCreationType.imag`](ansys.meshing.prime.PartCreationType.imag.md#ansys.meshing.prime.PartCreationType.imag)                      | the imaginary part of a complex number               |
| [`PartCreationType.numerator`](ansys.meshing.prime.PartCreationType.numerator.md#ansys.meshing.prime.PartCreationType.numerator)       | the numerator of a rational number in lowest terms   |
| [`PartCreationType.denominator`](ansys.meshing.prime.PartCreationType.denominator.md#ansys.meshing.prime.PartCreationType.denominator) | the denominator of a rational number in lowest terms |
| [`PartCreationType.MODEL`](ansys.meshing.prime.PartCreationType.MODEL.md#ansys.meshing.prime.PartCreationType.MODEL)                   | Denotes a part per CAD Model.                        |
| [`PartCreationType.ASSEMBLY`](ansys.meshing.prime.PartCreationType.ASSEMBLY.md#ansys.meshing.prime.PartCreationType.ASSEMBLY)          | Denotes a part per CAD Assembly.                     |
| [`PartCreationType.PART`](ansys.meshing.prime.PartCreationType.PART.md#ansys.meshing.prime.PartCreationType.PART)                      | Denotes a part per CAD Part.                         |
| [`PartCreationType.BODY`](ansys.meshing.prime.PartCreationType.BODY.md#ansys.meshing.prime.PartCreationType.BODY)                      | Denotes a part per CAD Body.                         |

<a id="examples-using-partcreationtype"></a>

## Examples using PartCreationType

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
