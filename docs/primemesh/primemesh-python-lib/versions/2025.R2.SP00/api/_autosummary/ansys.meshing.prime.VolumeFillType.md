# VolumeFillType

<a id="ansys.meshing.prime.VolumeFillType"></a>

### *class* ansys.meshing.prime.VolumeFillType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Types of volume fill options.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`VolumeFillType.conjugate`](ansys.meshing.prime.VolumeFillType.conjugate.md#ansys.meshing.prime.VolumeFillType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`VolumeFillType.bit_length`](ansys.meshing.prime.VolumeFillType.bit_length.md#ansys.meshing.prime.VolumeFillType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`VolumeFillType.bit_count`](ansys.meshing.prime.VolumeFillType.bit_count.md#ansys.meshing.prime.VolumeFillType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`VolumeFillType.to_bytes`](ansys.meshing.prime.VolumeFillType.to_bytes.md#ansys.meshing.prime.VolumeFillType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`VolumeFillType.from_bytes`](ansys.meshing.prime.VolumeFillType.from_bytes.md#ansys.meshing.prime.VolumeFillType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`VolumeFillType.as_integer_ratio`](ansys.meshing.prime.VolumeFillType.as_integer_ratio.md#ansys.meshing.prime.VolumeFillType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`VolumeFillType.is_integer`](ansys.meshing.prime.VolumeFillType.is_integer.md#ansys.meshing.prime.VolumeFillType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`VolumeFillType.real`](ansys.meshing.prime.VolumeFillType.real.md#ansys.meshing.prime.VolumeFillType.real)                      | the real part of a complex number                                                       |
| [`VolumeFillType.imag`](ansys.meshing.prime.VolumeFillType.imag.md#ansys.meshing.prime.VolumeFillType.imag)                      | the imaginary part of a complex number                                                  |
| [`VolumeFillType.numerator`](ansys.meshing.prime.VolumeFillType.numerator.md#ansys.meshing.prime.VolumeFillType.numerator)       | the numerator of a rational number in lowest terms                                      |
| [`VolumeFillType.denominator`](ansys.meshing.prime.VolumeFillType.denominator.md#ansys.meshing.prime.VolumeFillType.denominator) | the denominator of a rational number in lowest terms                                    |
| [`VolumeFillType.TET`](ansys.meshing.prime.VolumeFillType.TET.md#ansys.meshing.prime.VolumeFillType.TET)                         | Volume fill using tetrahedral cells.                                                    |
| [`VolumeFillType.POLY`](ansys.meshing.prime.VolumeFillType.POLY.md#ansys.meshing.prime.VolumeFillType.POLY)                      | Volume fill using polyhedral cells.                                                     |
| [`VolumeFillType.HEXCORETET`](ansys.meshing.prime.VolumeFillType.HEXCORETET.md#ansys.meshing.prime.VolumeFillType.HEXCORETET)    | Volume fill using hexahedral cells in the core and tetrahedral cells near the boundary. |
| [`VolumeFillType.HEXCOREPOLY`](ansys.meshing.prime.VolumeFillType.HEXCOREPOLY.md#ansys.meshing.prime.VolumeFillType.HEXCOREPOLY) | Volume fill using hexahedral cells in the core and polyhedral cells near the boundary.  |
<!-- vale on -->