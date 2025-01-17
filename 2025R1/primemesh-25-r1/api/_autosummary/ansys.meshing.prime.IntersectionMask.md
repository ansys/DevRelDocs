# IntersectionMask

<a id="ansys.meshing.prime.IntersectionMask"></a>

### *class* ansys.meshing.prime.IntersectionMask(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Scaffold parameters use intersection mask to define nature of intersection computation.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Name | Description |
| [`IntersectionMask.conjugate`](ansys.meshing.prime.IntersectionMask.conjugate.md#ansys.meshing.prime.IntersectionMask.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`IntersectionMask.bit_length`](ansys.meshing.prime.IntersectionMask.bit_length.md#ansys.meshing.prime.IntersectionMask.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`IntersectionMask.bit_count`](ansys.meshing.prime.IntersectionMask.bit_count.md#ansys.meshing.prime.IntersectionMask.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`IntersectionMask.to_bytes`](ansys.meshing.prime.IntersectionMask.to_bytes.md#ansys.meshing.prime.IntersectionMask.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`IntersectionMask.from_bytes`](ansys.meshing.prime.IntersectionMask.from_bytes.md#ansys.meshing.prime.IntersectionMask.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`IntersectionMask.as_integer_ratio`](ansys.meshing.prime.IntersectionMask.as_integer_ratio.md#ansys.meshing.prime.IntersectionMask.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`IntersectionMask.is_integer`](ansys.meshing.prime.IntersectionMask.is_integer.md#ansys.meshing.prime.IntersectionMask.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Name | Description |
| [`IntersectionMask.real`](ansys.meshing.prime.IntersectionMask.real.md#ansys.meshing.prime.IntersectionMask.real)                                              | the real part of a complex number                    |
| [`IntersectionMask.imag`](ansys.meshing.prime.IntersectionMask.imag.md#ansys.meshing.prime.IntersectionMask.imag)                                              | the imaginary part of a complex number               |
| [`IntersectionMask.numerator`](ansys.meshing.prime.IntersectionMask.numerator.md#ansys.meshing.prime.IntersectionMask.numerator)                               | the numerator of a rational number in lowest terms   |
| [`IntersectionMask.denominator`](ansys.meshing.prime.IntersectionMask.denominator.md#ansys.meshing.prime.IntersectionMask.denominator)                         | the denominator of a rational number in lowest terms |
| [`IntersectionMask.EDGEEDGE`](ansys.meshing.prime.IntersectionMask.EDGEEDGE.md#ansys.meshing.prime.IntersectionMask.EDGEEDGE)                                  | Performs edge to edge intersection.                  |
| [`IntersectionMask.FACEFACE`](ansys.meshing.prime.IntersectionMask.FACEFACE.md#ansys.meshing.prime.IntersectionMask.FACEFACE)                                  | Performs face to face intersection.                  |
| [`IntersectionMask.FACEFACEANDEDGEEDGE`](ansys.meshing.prime.IntersectionMask.FACEFACEANDEDGEEDGE.md#ansys.meshing.prime.IntersectionMask.FACEFACEANDEDGEEDGE) | Perform face to face and edge to edge intersections. |

<a id="examples-using-intersectionmask"></a>

## Examples using IntersectionMask

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
