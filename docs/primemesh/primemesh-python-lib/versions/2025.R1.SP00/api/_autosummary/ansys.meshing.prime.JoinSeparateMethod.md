# JoinSeparateMethod

<a id="ansys.meshing.prime.JoinSeparateMethod"></a>

### *class* ansys.meshing.prime.JoinSeparateMethod(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Join separation method to handle separated overlapped zonelets.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`JoinSeparateMethod.conjugate`](ansys.meshing.prime.JoinSeparateMethod.conjugate.md#ansys.meshing.prime.JoinSeparateMethod.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`JoinSeparateMethod.bit_length`](ansys.meshing.prime.JoinSeparateMethod.bit_length.md#ansys.meshing.prime.JoinSeparateMethod.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`JoinSeparateMethod.bit_count`](ansys.meshing.prime.JoinSeparateMethod.bit_count.md#ansys.meshing.prime.JoinSeparateMethod.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`JoinSeparateMethod.to_bytes`](ansys.meshing.prime.JoinSeparateMethod.to_bytes.md#ansys.meshing.prime.JoinSeparateMethod.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`JoinSeparateMethod.from_bytes`](ansys.meshing.prime.JoinSeparateMethod.from_bytes.md#ansys.meshing.prime.JoinSeparateMethod.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`JoinSeparateMethod.as_integer_ratio`](ansys.meshing.prime.JoinSeparateMethod.as_integer_ratio.md#ansys.meshing.prime.JoinSeparateMethod.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`JoinSeparateMethod.is_integer`](ansys.meshing.prime.JoinSeparateMethod.is_integer.md#ansys.meshing.prime.JoinSeparateMethod.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`JoinSeparateMethod.real`](ansys.meshing.prime.JoinSeparateMethod.real.md#ansys.meshing.prime.JoinSeparateMethod.real)                      | the real part of a complex number                    |
| [`JoinSeparateMethod.imag`](ansys.meshing.prime.JoinSeparateMethod.imag.md#ansys.meshing.prime.JoinSeparateMethod.imag)                      | the imaginary part of a complex number               |
| [`JoinSeparateMethod.numerator`](ansys.meshing.prime.JoinSeparateMethod.numerator.md#ansys.meshing.prime.JoinSeparateMethod.numerator)       | the numerator of a rational number in lowest terms   |
| [`JoinSeparateMethod.denominator`](ansys.meshing.prime.JoinSeparateMethod.denominator.md#ansys.meshing.prime.JoinSeparateMethod.denominator) | the denominator of a rational number in lowest terms |
| [`JoinSeparateMethod.KEEPNONE`](ansys.meshing.prime.JoinSeparateMethod.KEEPNONE.md#ansys.meshing.prime.JoinSeparateMethod.KEEPNONE)          | Remove both overlapping zonelets after joining.      |
| [`JoinSeparateMethod.KEEPONE`](ansys.meshing.prime.JoinSeparateMethod.KEEPONE.md#ansys.meshing.prime.JoinSeparateMethod.KEEPONE)             | Keep one overlap zonelets after joining.             |
| [`JoinSeparateMethod.KEEPBOTH`](ansys.meshing.prime.JoinSeparateMethod.KEEPBOTH.md#ansys.meshing.prime.JoinSeparateMethod.KEEPBOTH)          | Keep both overlapping zonelets after joining.        |
<!-- vale on -->