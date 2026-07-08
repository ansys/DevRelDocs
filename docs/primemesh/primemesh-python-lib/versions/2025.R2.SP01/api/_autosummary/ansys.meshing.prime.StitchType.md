# StitchType

<a id="ansys.meshing.prime.StitchType"></a>

### *class* ansys.meshing.prime.StitchType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Stitch type depending on nature of surface boundary edges to be stitched.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`StitchType.conjugate`](ansys.meshing.prime.StitchType.conjugate.md#ansys.meshing.prime.StitchType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`StitchType.bit_length`](ansys.meshing.prime.StitchType.bit_length.md#ansys.meshing.prime.StitchType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`StitchType.bit_count`](ansys.meshing.prime.StitchType.bit_count.md#ansys.meshing.prime.StitchType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`StitchType.to_bytes`](ansys.meshing.prime.StitchType.to_bytes.md#ansys.meshing.prime.StitchType.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`StitchType.from_bytes`](ansys.meshing.prime.StitchType.from_bytes.md#ansys.meshing.prime.StitchType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`StitchType.as_integer_ratio`](ansys.meshing.prime.StitchType.as_integer_ratio.md#ansys.meshing.prime.StitchType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`StitchType.is_integer`](ansys.meshing.prime.StitchType.is_integer.md#ansys.meshing.prime.StitchType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`StitchType.real`](ansys.meshing.prime.StitchType.real.md#ansys.meshing.prime.StitchType.real)                      | the real part of a complex number                    |
| [`StitchType.imag`](ansys.meshing.prime.StitchType.imag.md#ansys.meshing.prime.StitchType.imag)                      | the imaginary part of a complex number               |
| [`StitchType.numerator`](ansys.meshing.prime.StitchType.numerator.md#ansys.meshing.prime.StitchType.numerator)       | the numerator of a rational number in lowest terms   |
| [`StitchType.denominator`](ansys.meshing.prime.StitchType.denominator.md#ansys.meshing.prime.StitchType.denominator) | the denominator of a rational number in lowest terms |
| [`StitchType.ALLALL`](ansys.meshing.prime.StitchType.ALLALL.md#ansys.meshing.prime.StitchType.ALLALL)                | Stitch surfaces at boundary edges.                   |
| [`StitchType.FREEFREE`](ansys.meshing.prime.StitchType.FREEFREE.md#ansys.meshing.prime.StitchType.FREEFREE)          | Stitch surfaces at free boundary edges.              |
<!-- vale on -->