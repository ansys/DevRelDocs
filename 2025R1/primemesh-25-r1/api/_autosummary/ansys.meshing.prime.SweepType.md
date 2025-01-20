# SweepType

<a id="ansys.meshing.prime.SweepType"></a>

### *class* ansys.meshing.prime.SweepType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Provides the Sweep Mesh Decomposition type.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SweepType.conjugate`](ansys.meshing.prime.SweepType.conjugate.md#ansys.meshing.prime.SweepType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`SweepType.bit_length`](ansys.meshing.prime.SweepType.bit_length.md#ansys.meshing.prime.SweepType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`SweepType.bit_count`](ansys.meshing.prime.SweepType.bit_count.md#ansys.meshing.prime.SweepType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`SweepType.to_bytes`](ansys.meshing.prime.SweepType.to_bytes.md#ansys.meshing.prime.SweepType.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`SweepType.from_bytes`](ansys.meshing.prime.SweepType.from_bytes.md#ansys.meshing.prime.SweepType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`SweepType.as_integer_ratio`](ansys.meshing.prime.SweepType.as_integer_ratio.md#ansys.meshing.prime.SweepType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SweepType.is_integer`](ansys.meshing.prime.SweepType.is_integer.md#ansys.meshing.prime.SweepType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [`SweepType.real`](ansys.meshing.prime.SweepType.real.md#ansys.meshing.prime.SweepType.real)                                        | the real part of a complex number                                                                   |
| [`SweepType.imag`](ansys.meshing.prime.SweepType.imag.md#ansys.meshing.prime.SweepType.imag)                                        | the imaginary part of a complex number                                                              |
| [`SweepType.numerator`](ansys.meshing.prime.SweepType.numerator.md#ansys.meshing.prime.SweepType.numerator)                         | the numerator of a rational number in lowest terms                                                  |
| [`SweepType.denominator`](ansys.meshing.prime.SweepType.denominator.md#ansys.meshing.prime.SweepType.denominator)                   | the denominator of a rational number in lowest terms                                                |
| [`SweepType.STANDARD`](ansys.meshing.prime.SweepType.STANDARD.md#ansys.meshing.prime.SweepType.STANDARD)                            | Multizone create mapped and swept blocks if possible (should be default).                           |
| [`SweepType.THINSWEEP`](ansys.meshing.prime.SweepType.THINSWEEP.md#ansys.meshing.prime.SweepType.THINSWEEP)                         | Creates swept blocks on thin wall geometries.                                                       |
| [`SweepType.MEDIALAXIS`](ansys.meshing.prime.SweepType.MEDIALAXIS.md#ansys.meshing.prime.SweepType.MEDIALAXIS)                      | Creates swept blocks on axisymmetric sweepable geometries.                                          |
| [`SweepType.PROGRAMCONTROLLED`](ansys.meshing.prime.SweepType.PROGRAMCONTROLLED.md#ansys.meshing.prime.SweepType.PROGRAMCONTROLLED) | Multizone chooses the best decomposition method based on geometry analysis and decomposition tries. |
<!-- vale on -->