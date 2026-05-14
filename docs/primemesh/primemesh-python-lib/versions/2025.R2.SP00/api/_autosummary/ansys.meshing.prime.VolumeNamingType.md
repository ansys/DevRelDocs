# VolumeNamingType

<a id="ansys.meshing.prime.VolumeNamingType"></a>

### *class* ansys.meshing.prime.VolumeNamingType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Indicate source types used to name volume zones.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`VolumeNamingType.conjugate`](ansys.meshing.prime.VolumeNamingType.conjugate.md#ansys.meshing.prime.VolumeNamingType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`VolumeNamingType.bit_length`](ansys.meshing.prime.VolumeNamingType.bit_length.md#ansys.meshing.prime.VolumeNamingType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`VolumeNamingType.bit_count`](ansys.meshing.prime.VolumeNamingType.bit_count.md#ansys.meshing.prime.VolumeNamingType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`VolumeNamingType.to_bytes`](ansys.meshing.prime.VolumeNamingType.to_bytes.md#ansys.meshing.prime.VolumeNamingType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`VolumeNamingType.from_bytes`](ansys.meshing.prime.VolumeNamingType.from_bytes.md#ansys.meshing.prime.VolumeNamingType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`VolumeNamingType.as_integer_ratio`](ansys.meshing.prime.VolumeNamingType.as_integer_ratio.md#ansys.meshing.prime.VolumeNamingType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`VolumeNamingType.is_integer`](ansys.meshing.prime.VolumeNamingType.is_integer.md#ansys.meshing.prime.VolumeNamingType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`VolumeNamingType.real`](ansys.meshing.prime.VolumeNamingType.real.md#ansys.meshing.prime.VolumeNamingType.real)                            | the real part of a complex number                             |
| [`VolumeNamingType.imag`](ansys.meshing.prime.VolumeNamingType.imag.md#ansys.meshing.prime.VolumeNamingType.imag)                            | the imaginary part of a complex number                        |
| [`VolumeNamingType.numerator`](ansys.meshing.prime.VolumeNamingType.numerator.md#ansys.meshing.prime.VolumeNamingType.numerator)             | the numerator of a rational number in lowest terms            |
| [`VolumeNamingType.denominator`](ansys.meshing.prime.VolumeNamingType.denominator.md#ansys.meshing.prime.VolumeNamingType.denominator)       | the denominator of a rational number in lowest terms          |
| [`VolumeNamingType.BYFACELABEL`](ansys.meshing.prime.VolumeNamingType.BYFACELABEL.md#ansys.meshing.prime.VolumeNamingType.BYFACELABEL)       | Option to use face label name as source to name volume zones. |
| [`VolumeNamingType.BYFACEZONE`](ansys.meshing.prime.VolumeNamingType.BYFACEZONE.md#ansys.meshing.prime.VolumeNamingType.BYFACEZONE)          | Option to use face zone name as source to name volume zones.  |
| [`VolumeNamingType.BYFACENORMALS`](ansys.meshing.prime.VolumeNamingType.BYFACENORMALS.md#ansys.meshing.prime.VolumeNamingType.BYFACENORMALS) | Option to use face normal as source to name volume zones.     |
<!-- vale on -->