# FuseOption

<a id="ansys.meshing.prime.FuseOption"></a>

### *class* ansys.meshing.prime.FuseOption(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Type to specify treatment of surfaces for fusing.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`FuseOption.conjugate`](ansys.meshing.prime.FuseOption.conjugate.md#ansys.meshing.prime.FuseOption.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`FuseOption.bit_length`](ansys.meshing.prime.FuseOption.bit_length.md#ansys.meshing.prime.FuseOption.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`FuseOption.bit_count`](ansys.meshing.prime.FuseOption.bit_count.md#ansys.meshing.prime.FuseOption.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`FuseOption.to_bytes`](ansys.meshing.prime.FuseOption.to_bytes.md#ansys.meshing.prime.FuseOption.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`FuseOption.from_bytes`](ansys.meshing.prime.FuseOption.from_bytes.md#ansys.meshing.prime.FuseOption.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`FuseOption.as_integer_ratio`](ansys.meshing.prime.FuseOption.as_integer_ratio.md#ansys.meshing.prime.FuseOption.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`FuseOption.is_integer`](ansys.meshing.prime.FuseOption.is_integer.md#ansys.meshing.prime.FuseOption.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [`FuseOption.real`](ansys.meshing.prime.FuseOption.real.md#ansys.meshing.prime.FuseOption.real)                         | the real part of a complex number                                                                                         |
| [`FuseOption.imag`](ansys.meshing.prime.FuseOption.imag.md#ansys.meshing.prime.FuseOption.imag)                         | the imaginary part of a complex number                                                                                    |
| [`FuseOption.numerator`](ansys.meshing.prime.FuseOption.numerator.md#ansys.meshing.prime.FuseOption.numerator)          | the numerator of a rational number in lowest terms                                                                        |
| [`FuseOption.denominator`](ansys.meshing.prime.FuseOption.denominator.md#ansys.meshing.prime.FuseOption.denominator)    | the denominator of a rational number in lowest terms                                                                      |
| [`FuseOption.NONE`](ansys.meshing.prime.FuseOption.NONE.md#ansys.meshing.prime.FuseOption.NONE)                         | No action to be taken for surfaces being fused.                                                                           |
| [`FuseOption.TRIMONESIDE`](ansys.meshing.prime.FuseOption.TRIMONESIDE.md#ansys.meshing.prime.FuseOption.TRIMONESIDE)    | Delete faces to be fused on one side and merge nodes to be fused at middle locations (works only within a single part).   |
| [`FuseOption.TRIMTWOSIDES`](ansys.meshing.prime.FuseOption.TRIMTWOSIDES.md#ansys.meshing.prime.FuseOption.TRIMTWOSIDES) | Delete faces to be fused on both sides and merge nodes to be fused at middle locations (works only within a single part). |
<!-- vale on -->