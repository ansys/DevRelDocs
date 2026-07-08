# FuseType

<a id="ansys.meshing.prime.FuseType"></a>

### *class* ansys.meshing.prime.FuseType(\*values)

Type of fuse operation to perform.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`FuseType.conjugate`](ansys.meshing.prime.FuseType.conjugate.md#ansys.meshing.prime.FuseType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`FuseType.bit_length`](ansys.meshing.prime.FuseType.bit_length.md#ansys.meshing.prime.FuseType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`FuseType.bit_count`](ansys.meshing.prime.FuseType.bit_count.md#ansys.meshing.prime.FuseType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`FuseType.to_bytes`](ansys.meshing.prime.FuseType.to_bytes.md#ansys.meshing.prime.FuseType.to_bytes)(/[, length, byteorder, signed])   | Return an array of bytes representing an integer.                          |
| [`FuseType.from_bytes`](ansys.meshing.prime.FuseType.from_bytes.md#ansys.meshing.prime.FuseType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`FuseType.as_integer_ratio`](ansys.meshing.prime.FuseType.as_integer_ratio.md#ansys.meshing.prime.FuseType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`FuseType.is_integer`](ansys.meshing.prime.FuseType.is_integer.md#ansys.meshing.prime.FuseType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`FuseType.real`](ansys.meshing.prime.FuseType.real.md#ansys.meshing.prime.FuseType.real)                                  | the real part of a complex number                          |
| [`FuseType.imag`](ansys.meshing.prime.FuseType.imag.md#ansys.meshing.prime.FuseType.imag)                                  | the imaginary part of a complex number                     |
| [`FuseType.numerator`](ansys.meshing.prime.FuseType.numerator.md#ansys.meshing.prime.FuseType.numerator)                   | the numerator of a rational number in lowest terms         |
| [`FuseType.denominator`](ansys.meshing.prime.FuseType.denominator.md#ansys.meshing.prime.FuseType.denominator)             | the denominator of a rational number in lowest terms       |
| [`FuseType.SURFACEONLY`](ansys.meshing.prime.FuseType.SURFACEONLY.md#ansys.meshing.prime.FuseType.SURFACEONLY)             | Fuses surface overlaps based on input parameters.          |
| [`FuseType.SURFACEANDEDGES`](ansys.meshing.prime.FuseType.SURFACEANDEDGES.md#ansys.meshing.prime.FuseType.SURFACEANDEDGES) | Fuses surface and edge overlaps based on input parameters. |
| [`FuseType.EDGESONLY`](ansys.meshing.prime.FuseType.EDGESONLY.md#ansys.meshing.prime.FuseType.EDGESONLY)                   | Fuses edge overlaps based on input parameters.             |
| [`FuseType.FREEEDGESONLY`](ansys.meshing.prime.FuseType.FREEEDGESONLY.md#ansys.meshing.prime.FuseType.FREEEDGESONLY)       | Fuses free edge overlaps based on input parameters.        |
<!-- vale on -->