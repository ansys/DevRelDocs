# SmoothType

<a id="ansys.meshing.prime.SmoothType"></a>

### *class* ansys.meshing.prime.SmoothType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Indicates the the type of operation to be performed during the smooth dihedral face nodes operation.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SmoothType.conjugate`](ansys.meshing.prime.SmoothType.conjugate.md#ansys.meshing.prime.SmoothType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`SmoothType.bit_length`](ansys.meshing.prime.SmoothType.bit_length.md#ansys.meshing.prime.SmoothType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`SmoothType.bit_count`](ansys.meshing.prime.SmoothType.bit_count.md#ansys.meshing.prime.SmoothType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`SmoothType.to_bytes`](ansys.meshing.prime.SmoothType.to_bytes.md#ansys.meshing.prime.SmoothType.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`SmoothType.from_bytes`](ansys.meshing.prime.SmoothType.from_bytes.md#ansys.meshing.prime.SmoothType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`SmoothType.as_integer_ratio`](ansys.meshing.prime.SmoothType.as_integer_ratio.md#ansys.meshing.prime.SmoothType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SmoothType.is_integer`](ansys.meshing.prime.SmoothType.is_integer.md#ansys.meshing.prime.SmoothType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`SmoothType.real`](ansys.meshing.prime.SmoothType.real.md#ansys.meshing.prime.SmoothType.real)                      | the real part of a complex number                                     |
| [`SmoothType.imag`](ansys.meshing.prime.SmoothType.imag.md#ansys.meshing.prime.SmoothType.imag)                      | the imaginary part of a complex number                                |
| [`SmoothType.numerator`](ansys.meshing.prime.SmoothType.numerator.md#ansys.meshing.prime.SmoothType.numerator)       | the numerator of a rational number in lowest terms                    |
| [`SmoothType.denominator`](ansys.meshing.prime.SmoothType.denominator.md#ansys.meshing.prime.SmoothType.denominator) | the denominator of a rational number in lowest terms                  |
| [`SmoothType.SMOOTH`](ansys.meshing.prime.SmoothType.SMOOTH.md#ansys.meshing.prime.SmoothType.SMOOTH)                | Performs smoothing during the operation.                              |
| [`SmoothType.INFLATE`](ansys.meshing.prime.SmoothType.INFLATE.md#ansys.meshing.prime.SmoothType.INFLATE)             | Performs inflation during the operation.                              |
| [`SmoothType.AUTO`](ansys.meshing.prime.SmoothType.AUTO.md#ansys.meshing.prime.SmoothType.AUTO)                      | Performs smoothing using optimal node movements during the operation. |
<!-- vale on -->