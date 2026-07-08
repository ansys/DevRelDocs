# IntersectionMask

<a id="ansys.meshing.prime.IntersectionMask"></a>

### *class* ansys.meshing.prime.IntersectionMask(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Scaffold parameters use intersection mask to define nature of intersection computation.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
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
| [`IntersectionMask.real`](ansys.meshing.prime.IntersectionMask.real.md#ansys.meshing.prime.IntersectionMask.real)                                              | the real part of a complex number                    |
| [`IntersectionMask.imag`](ansys.meshing.prime.IntersectionMask.imag.md#ansys.meshing.prime.IntersectionMask.imag)                                              | the imaginary part of a complex number               |
| [`IntersectionMask.numerator`](ansys.meshing.prime.IntersectionMask.numerator.md#ansys.meshing.prime.IntersectionMask.numerator)                               | the numerator of a rational number in lowest terms   |
| [`IntersectionMask.denominator`](ansys.meshing.prime.IntersectionMask.denominator.md#ansys.meshing.prime.IntersectionMask.denominator)                         | the denominator of a rational number in lowest terms |
| [`IntersectionMask.EDGEEDGE`](ansys.meshing.prime.IntersectionMask.EDGEEDGE.md#ansys.meshing.prime.IntersectionMask.EDGEEDGE)                                  | Performs edge to edge intersection.                  |
| [`IntersectionMask.FACEFACE`](ansys.meshing.prime.IntersectionMask.FACEFACE.md#ansys.meshing.prime.IntersectionMask.FACEFACE)                                  | Performs face to face intersection.                  |
| [`IntersectionMask.FACEFACEANDEDGEEDGE`](ansys.meshing.prime.IntersectionMask.FACEFACEANDEDGEEDGE.md#ansys.meshing.prime.IntersectionMask.FACEFACEANDEDGEEDGE) | Perform face to face and edge to edge intersections. |


<!-- vale on -->
