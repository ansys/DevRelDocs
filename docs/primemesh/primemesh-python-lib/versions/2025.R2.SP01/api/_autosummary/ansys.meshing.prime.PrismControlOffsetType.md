# PrismControlOffsetType

<a id="ansys.meshing.prime.PrismControlOffsetType"></a>

### *class* ansys.meshing.prime.PrismControlOffsetType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Offset type for prism control.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`PrismControlOffsetType.conjugate`](ansys.meshing.prime.PrismControlOffsetType.conjugate.md#ansys.meshing.prime.PrismControlOffsetType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`PrismControlOffsetType.bit_length`](ansys.meshing.prime.PrismControlOffsetType.bit_length.md#ansys.meshing.prime.PrismControlOffsetType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`PrismControlOffsetType.bit_count`](ansys.meshing.prime.PrismControlOffsetType.bit_count.md#ansys.meshing.prime.PrismControlOffsetType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`PrismControlOffsetType.to_bytes`](ansys.meshing.prime.PrismControlOffsetType.to_bytes.md#ansys.meshing.prime.PrismControlOffsetType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`PrismControlOffsetType.from_bytes`](ansys.meshing.prime.PrismControlOffsetType.from_bytes.md#ansys.meshing.prime.PrismControlOffsetType.from_bytes)(/, bytes)            | Return the integer represented by the given array of bytes.                |
| [`PrismControlOffsetType.as_integer_ratio`](ansys.meshing.prime.PrismControlOffsetType.as_integer_ratio.md#ansys.meshing.prime.PrismControlOffsetType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`PrismControlOffsetType.is_integer`](ansys.meshing.prime.PrismControlOffsetType.is_integer.md#ansys.meshing.prime.PrismControlOffsetType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`PrismControlOffsetType.real`](ansys.meshing.prime.PrismControlOffsetType.real.md#ansys.meshing.prime.PrismControlOffsetType.real)                      | the real part of a complex number                                             |
| [`PrismControlOffsetType.imag`](ansys.meshing.prime.PrismControlOffsetType.imag.md#ansys.meshing.prime.PrismControlOffsetType.imag)                      | the imaginary part of a complex number                                        |
| [`PrismControlOffsetType.numerator`](ansys.meshing.prime.PrismControlOffsetType.numerator.md#ansys.meshing.prime.PrismControlOffsetType.numerator)       | the numerator of a rational number in lowest terms                            |
| [`PrismControlOffsetType.denominator`](ansys.meshing.prime.PrismControlOffsetType.denominator.md#ansys.meshing.prime.PrismControlOffsetType.denominator) | the denominator of a rational number in lowest terms                          |
| [`PrismControlOffsetType.UNIFORM`](ansys.meshing.prime.PrismControlOffsetType.UNIFORM.md#ansys.meshing.prime.PrismControlOffsetType.UNIFORM)             | Option to grow prism layers with uniform offset height based on first height. |
| [`PrismControlOffsetType.ASPECTRATIO`](ansys.meshing.prime.PrismControlOffsetType.ASPECTRATIO.md#ansys.meshing.prime.PrismControlOffsetType.ASPECTRATIO) | Option to grow prism layers based on first aspect ratio specified.            |
| [`PrismControlOffsetType.LASTRATIO`](ansys.meshing.prime.PrismControlOffsetType.LASTRATIO.md#ansys.meshing.prime.PrismControlOffsetType.LASTRATIO)       | Option to grow prism layers based on first height and last aspect ratio.      |
<!-- vale on -->