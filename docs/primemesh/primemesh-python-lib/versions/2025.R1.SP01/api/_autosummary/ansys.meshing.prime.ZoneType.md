# ZoneType

<a id="ansys.meshing.prime.ZoneType"></a>

### *class* ansys.meshing.prime.ZoneType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

ZoneType decides the type of zone.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`ZoneType.conjugate`](ansys.meshing.prime.ZoneType.conjugate.md#ansys.meshing.prime.ZoneType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`ZoneType.bit_length`](ansys.meshing.prime.ZoneType.bit_length.md#ansys.meshing.prime.ZoneType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`ZoneType.bit_count`](ansys.meshing.prime.ZoneType.bit_count.md#ansys.meshing.prime.ZoneType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`ZoneType.to_bytes`](ansys.meshing.prime.ZoneType.to_bytes.md#ansys.meshing.prime.ZoneType.to_bytes)(/[, length, byteorder, signed])   | Return an array of bytes representing an integer.                          |
| [`ZoneType.from_bytes`](ansys.meshing.prime.ZoneType.from_bytes.md#ansys.meshing.prime.ZoneType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`ZoneType.as_integer_ratio`](ansys.meshing.prime.ZoneType.as_integer_ratio.md#ansys.meshing.prime.ZoneType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`ZoneType.is_integer`](ansys.meshing.prime.ZoneType.is_integer.md#ansys.meshing.prime.ZoneType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`ZoneType.real`](ansys.meshing.prime.ZoneType.real.md#ansys.meshing.prime.ZoneType.real)                      | the real part of a complex number                    |
| [`ZoneType.imag`](ansys.meshing.prime.ZoneType.imag.md#ansys.meshing.prime.ZoneType.imag)                      | the imaginary part of a complex number               |
| [`ZoneType.numerator`](ansys.meshing.prime.ZoneType.numerator.md#ansys.meshing.prime.ZoneType.numerator)       | the numerator of a rational number in lowest terms   |
| [`ZoneType.denominator`](ansys.meshing.prime.ZoneType.denominator.md#ansys.meshing.prime.ZoneType.denominator) | the denominator of a rational number in lowest terms |
| [`ZoneType.EDGE`](ansys.meshing.prime.ZoneType.EDGE.md#ansys.meshing.prime.ZoneType.EDGE)                      | Denotes the zone is edge zone.                       |
| [`ZoneType.FACE`](ansys.meshing.prime.ZoneType.FACE.md#ansys.meshing.prime.ZoneType.FACE)                      | Denotes the zone is face zone.                       |
| [`ZoneType.VOLUME`](ansys.meshing.prime.ZoneType.VOLUME.md#ansys.meshing.prime.ZoneType.VOLUME)                | Denotes the zone is volume zone.                     |
<!-- vale on -->