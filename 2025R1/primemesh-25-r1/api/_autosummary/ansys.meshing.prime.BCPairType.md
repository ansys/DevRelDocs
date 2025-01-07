# BCPairType

<a id="ansys.meshing.prime.BCPairType"></a>

### *class* ansys.meshing.prime.BCPairType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Option to specify boundary condition pair type.

<!-- !! processed by numpydoc !! -->

### Methods

| [`BCPairType.conjugate`](ansys.meshing.prime.BCPairType.conjugate.md#ansys.meshing.prime.BCPairType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`BCPairType.bit_length`](ansys.meshing.prime.BCPairType.bit_length.md#ansys.meshing.prime.BCPairType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`BCPairType.bit_count`](ansys.meshing.prime.BCPairType.bit_count.md#ansys.meshing.prime.BCPairType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`BCPairType.to_bytes`](ansys.meshing.prime.BCPairType.to_bytes.md#ansys.meshing.prime.BCPairType.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`BCPairType.from_bytes`](ansys.meshing.prime.BCPairType.from_bytes.md#ansys.meshing.prime.BCPairType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`BCPairType.as_integer_ratio`](ansys.meshing.prime.BCPairType.as_integer_ratio.md#ansys.meshing.prime.BCPairType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`BCPairType.is_integer`](ansys.meshing.prime.BCPairType.is_integer.md#ansys.meshing.prime.BCPairType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| [`BCPairType.real`](ansys.meshing.prime.BCPairType.real.md#ansys.meshing.prime.BCPairType.real)                      | the real part of a complex number                          |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`BCPairType.imag`](ansys.meshing.prime.BCPairType.imag.md#ansys.meshing.prime.BCPairType.imag)                      | the imaginary part of a complex number                     |
| [`BCPairType.numerator`](ansys.meshing.prime.BCPairType.numerator.md#ansys.meshing.prime.BCPairType.numerator)       | the numerator of a rational number in lowest terms         |
| [`BCPairType.denominator`](ansys.meshing.prime.BCPairType.denominator.md#ansys.meshing.prime.BCPairType.denominator) | the denominator of a rational number in lowest terms       |
| [`BCPairType.FACE`](ansys.meshing.prime.BCPairType.FACE.md#ansys.meshing.prime.BCPairType.FACE)                      | Option to specify face zonelet as boundary condition pair. |
| [`BCPairType.EDGE`](ansys.meshing.prime.BCPairType.EDGE.md#ansys.meshing.prime.BCPairType.EDGE)                      | Option to specify edge zonelet as boundary condition pair. |

<a id="examples-using-bcpairtype"></a>

## Examples using BCPairType

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
