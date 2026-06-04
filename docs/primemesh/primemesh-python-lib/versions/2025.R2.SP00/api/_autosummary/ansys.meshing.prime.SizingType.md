# SizingType

<a id="ansys.meshing.prime.SizingType"></a>

### *class* ansys.meshing.prime.SizingType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Sizing type decides the type of size control.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SizingType.conjugate`](ansys.meshing.prime.SizingType.conjugate.md#ansys.meshing.prime.SizingType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`SizingType.bit_length`](ansys.meshing.prime.SizingType.bit_length.md#ansys.meshing.prime.SizingType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`SizingType.bit_count`](ansys.meshing.prime.SizingType.bit_count.md#ansys.meshing.prime.SizingType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`SizingType.to_bytes`](ansys.meshing.prime.SizingType.to_bytes.md#ansys.meshing.prime.SizingType.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`SizingType.from_bytes`](ansys.meshing.prime.SizingType.from_bytes.md#ansys.meshing.prime.SizingType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`SizingType.as_integer_ratio`](ansys.meshing.prime.SizingType.as_integer_ratio.md#ansys.meshing.prime.SizingType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SizingType.is_integer`](ansys.meshing.prime.SizingType.is_integer.md#ansys.meshing.prime.SizingType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`SizingType.real`](ansys.meshing.prime.SizingType.real.md#ansys.meshing.prime.SizingType.real)                      | the real part of a complex number                     |
| [`SizingType.imag`](ansys.meshing.prime.SizingType.imag.md#ansys.meshing.prime.SizingType.imag)                      | the imaginary part of a complex number                |
| [`SizingType.numerator`](ansys.meshing.prime.SizingType.numerator.md#ansys.meshing.prime.SizingType.numerator)       | the numerator of a rational number in lowest terms    |
| [`SizingType.denominator`](ansys.meshing.prime.SizingType.denominator.md#ansys.meshing.prime.SizingType.denominator) | the denominator of a rational number in lowest terms  |
| [`SizingType.CURVATURE`](ansys.meshing.prime.SizingType.CURVATURE.md#ansys.meshing.prime.SizingType.CURVATURE)       | Denotes the size control type is curvature.           |
| [`SizingType.PROXIMITY`](ansys.meshing.prime.SizingType.PROXIMITY.md#ansys.meshing.prime.SizingType.PROXIMITY)       | Denotes the size control type is proximity.           |
| [`SizingType.HARD`](ansys.meshing.prime.SizingType.HARD.md#ansys.meshing.prime.SizingType.HARD)                      | Denotes the size control type is hard.                |
| [`SizingType.SOFT`](ansys.meshing.prime.SizingType.SOFT.md#ansys.meshing.prime.SizingType.SOFT)                      | Denotes the size control type is soft.                |
| [`SizingType.MESHED`](ansys.meshing.prime.SizingType.MESHED.md#ansys.meshing.prime.SizingType.MESHED)                | Denotes the size control type is meshed.              |
| [`SizingType.BOI`](ansys.meshing.prime.SizingType.BOI.md#ansys.meshing.prime.SizingType.BOI)                         | Denotes the size control type is body of influence.   |
| [`SizingType.SOI`](ansys.meshing.prime.SizingType.SOI.md#ansys.meshing.prime.SizingType.SOI)                         | Denotes the size control type is sphere of influence. |
<!-- vale on -->