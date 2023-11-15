<!-- vale off -->

# SizeFieldType

### *class* ansys.meshing.prime.SizeFieldType(value, names=None, \*, module=None, qualname=None, type=None, start=1, boundary=None)

The type of sizing field to be used to fetch element size at given location.

<!-- !! processed by numpydoc !! -->

### Methods

| [`SizeFieldType.as_integer_ratio`](ansys.meshing.prime.SizeFieldType.as_integer_ratio.md#ansys.meshing.prime.SizeFieldType.as_integer_ratio)(/)   | Return integer ratio.                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SizeFieldType.bit_count`](ansys.meshing.prime.SizeFieldType.bit_count.md#ansys.meshing.prime.SizeFieldType.bit_count)(/)                        | Number of ones in the binary representation of the absolute value of self. |
| [`SizeFieldType.bit_length`](ansys.meshing.prime.SizeFieldType.bit_length.md#ansys.meshing.prime.SizeFieldType.bit_length)(/)                     | Number of bits necessary to represent self in binary.                      |
| [`SizeFieldType.conjugate`](ansys.meshing.prime.SizeFieldType.conjugate.md#ansys.meshing.prime.SizeFieldType.conjugate)                           | Returns self, the complex conjugate of any int.                            |
| [`SizeFieldType.from_bytes`](ansys.meshing.prime.SizeFieldType.from_bytes.md#ansys.meshing.prime.SizeFieldType.from_bytes)(/, bytes[, ...])       | Return the integer represented by the given array of bytes.                |
| [`SizeFieldType.to_bytes`](ansys.meshing.prime.SizeFieldType.to_bytes.md#ansys.meshing.prime.SizeFieldType.to_bytes)(/[, length, ...])            | Return an array of bytes representing an integer.                          |

### Attributes

| [`SizeFieldType.GEOMETRIC`](ansys.meshing.prime.SizeFieldType.GEOMETRIC.md#ansys.meshing.prime.SizeFieldType.GEOMETRIC)                | Geometric size field.                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`SizeFieldType.VOLUMETRIC`](ansys.meshing.prime.SizeFieldType.VOLUMETRIC.md#ansys.meshing.prime.SizeFieldType.VOLUMETRIC)             | Uses precomputed variable size in volumetric space defined by size field.        |
| [`SizeFieldType.GEODESIC`](ansys.meshing.prime.SizeFieldType.GEODESIC.md#ansys.meshing.prime.SizeFieldType.GEODESIC)                   | Uses geodesic size field.                                                        |
| [`SizeFieldType.CONSTANT`](ansys.meshing.prime.SizeFieldType.CONSTANT.md#ansys.meshing.prime.SizeFieldType.CONSTANT)                   | Uses constant size at all locations of sizing field.                             |
| [`SizeFieldType.MESHEDGEODESIC`](ansys.meshing.prime.SizeFieldType.MESHEDGEODESIC.md#ansys.meshing.prime.SizeFieldType.MESHEDGEODESIC) | Computes size field using existing surface mesh sizes and diffuses geodesically. |
| [`SizeFieldType.denominator`](ansys.meshing.prime.SizeFieldType.denominator.md#ansys.meshing.prime.SizeFieldType.denominator)          | the denominator of a rational number in lowest terms                             |
| [`SizeFieldType.imag`](ansys.meshing.prime.SizeFieldType.imag.md#ansys.meshing.prime.SizeFieldType.imag)                               | the imaginary part of a complex number                                           |
| [`SizeFieldType.numerator`](ansys.meshing.prime.SizeFieldType.numerator.md#ansys.meshing.prime.SizeFieldType.numerator)                | the numerator of a rational number in lowest terms                               |
| [`SizeFieldType.real`](ansys.meshing.prime.SizeFieldType.real.md#ansys.meshing.prime.SizeFieldType.real)                               | the real part of a complex number                                                |
<!-- vale on -->
