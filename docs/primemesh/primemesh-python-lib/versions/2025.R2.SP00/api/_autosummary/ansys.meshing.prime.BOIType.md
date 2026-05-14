# BOIType

<a id="ansys.meshing.prime.BOIType"></a>

### *class* ansys.meshing.prime.BOIType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

BOI type for BOI creation.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`BOIType.conjugate`](ansys.meshing.prime.BOIType.conjugate.md#ansys.meshing.prime.BOIType.conjugate)                                   | Returns self, the complex conjugate of any int.                            |
| [`BOIType.bit_length`](ansys.meshing.prime.BOIType.bit_length.md#ansys.meshing.prime.BOIType.bit_length)(/)                             | Number of bits necessary to represent self in binary.                      |
| [`BOIType.bit_count`](ansys.meshing.prime.BOIType.bit_count.md#ansys.meshing.prime.BOIType.bit_count)(/)                                | Number of ones in the binary representation of the absolute value of self. |
| [`BOIType.to_bytes`](ansys.meshing.prime.BOIType.to_bytes.md#ansys.meshing.prime.BOIType.to_bytes)(/[, length, byteorder, signed])      | Return an array of bytes representing an integer.                          |
| [`BOIType.from_bytes`](ansys.meshing.prime.BOIType.from_bytes.md#ansys.meshing.prime.BOIType.from_bytes)(/, bytes[, byteorder, signed]) | Return the integer represented by the given array of bytes.                |
| [`BOIType.as_integer_ratio`](ansys.meshing.prime.BOIType.as_integer_ratio.md#ansys.meshing.prime.BOIType.as_integer_ratio)(/)           | Return a pair of integers, whose ratio is equal to the original int.       |
| [`BOIType.is_integer`](ansys.meshing.prime.BOIType.is_integer.md#ansys.meshing.prime.BOIType.is_integer)(/)                             | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`BOIType.real`](ansys.meshing.prime.BOIType.real.md#ansys.meshing.prime.BOIType.real)                            | the real part of a complex number                    |
| [`BOIType.imag`](ansys.meshing.prime.BOIType.imag.md#ansys.meshing.prime.BOIType.imag)                            | the imaginary part of a complex number               |
| [`BOIType.numerator`](ansys.meshing.prime.BOIType.numerator.md#ansys.meshing.prime.BOIType.numerator)             | the numerator of a rational number in lowest terms   |
| [`BOIType.denominator`](ansys.meshing.prime.BOIType.denominator.md#ansys.meshing.prime.BOIType.denominator)       | the denominator of a rational number in lowest terms |
| [`BOIType.OFFSETBOX`](ansys.meshing.prime.BOIType.OFFSETBOX.md#ansys.meshing.prime.BOIType.OFFSETBOX)             | Box BOI type for BOI creation.                       |
| [`BOIType.OFFSETSURFACE`](ansys.meshing.prime.BOIType.OFFSETSURFACE.md#ansys.meshing.prime.BOIType.OFFSETSURFACE) | Surface BOI type for BOI creation.                   |
<!-- vale on -->