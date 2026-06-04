# FlowDirection

<a id="ansys.meshing.prime.FlowDirection"></a>

### *class* ansys.meshing.prime.FlowDirection(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Flow or wake direction for BOI creation.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`FlowDirection.conjugate`](ansys.meshing.prime.FlowDirection.conjugate.md#ansys.meshing.prime.FlowDirection.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`FlowDirection.bit_length`](ansys.meshing.prime.FlowDirection.bit_length.md#ansys.meshing.prime.FlowDirection.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`FlowDirection.bit_count`](ansys.meshing.prime.FlowDirection.bit_count.md#ansys.meshing.prime.FlowDirection.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`FlowDirection.to_bytes`](ansys.meshing.prime.FlowDirection.to_bytes.md#ansys.meshing.prime.FlowDirection.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`FlowDirection.from_bytes`](ansys.meshing.prime.FlowDirection.from_bytes.md#ansys.meshing.prime.FlowDirection.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`FlowDirection.as_integer_ratio`](ansys.meshing.prime.FlowDirection.as_integer_ratio.md#ansys.meshing.prime.FlowDirection.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`FlowDirection.is_integer`](ansys.meshing.prime.FlowDirection.is_integer.md#ansys.meshing.prime.FlowDirection.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`FlowDirection.real`](ansys.meshing.prime.FlowDirection.real.md#ansys.meshing.prime.FlowDirection.real)                      | the real part of a complex number                           |
| [`FlowDirection.imag`](ansys.meshing.prime.FlowDirection.imag.md#ansys.meshing.prime.FlowDirection.imag)                      | the imaginary part of a complex number                      |
| [`FlowDirection.numerator`](ansys.meshing.prime.FlowDirection.numerator.md#ansys.meshing.prime.FlowDirection.numerator)       | the numerator of a rational number in lowest terms          |
| [`FlowDirection.denominator`](ansys.meshing.prime.FlowDirection.denominator.md#ansys.meshing.prime.FlowDirection.denominator) | the denominator of a rational number in lowest terms        |
| [`FlowDirection.X`](ansys.meshing.prime.FlowDirection.X.md#ansys.meshing.prime.FlowDirection.X)                               | Flow or wake inflation in the X direction for BOI creation. |
| [`FlowDirection.Y`](ansys.meshing.prime.FlowDirection.Y.md#ansys.meshing.prime.FlowDirection.Y)                               | Flow or wake inflation in the Y direction for BOI creation. |
| [`FlowDirection.Z`](ansys.meshing.prime.FlowDirection.Z.md#ansys.meshing.prime.FlowDirection.Z)                               | Flow or wake inflation in the Z direction for BOI creation. |
<!-- vale on -->