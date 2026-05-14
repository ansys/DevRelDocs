# ScaffolderRepairMode

<a id="ansys.meshing.prime.ScaffolderRepairMode"></a>

### *class* ansys.meshing.prime.ScaffolderRepairMode(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Mode of Scaffolder repair to be used.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`ScaffolderRepairMode.conjugate`](ansys.meshing.prime.ScaffolderRepairMode.conjugate.md#ansys.meshing.prime.ScaffolderRepairMode.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`ScaffolderRepairMode.bit_length`](ansys.meshing.prime.ScaffolderRepairMode.bit_length.md#ansys.meshing.prime.ScaffolderRepairMode.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`ScaffolderRepairMode.bit_count`](ansys.meshing.prime.ScaffolderRepairMode.bit_count.md#ansys.meshing.prime.ScaffolderRepairMode.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`ScaffolderRepairMode.to_bytes`](ansys.meshing.prime.ScaffolderRepairMode.to_bytes.md#ansys.meshing.prime.ScaffolderRepairMode.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`ScaffolderRepairMode.from_bytes`](ansys.meshing.prime.ScaffolderRepairMode.from_bytes.md#ansys.meshing.prime.ScaffolderRepairMode.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`ScaffolderRepairMode.as_integer_ratio`](ansys.meshing.prime.ScaffolderRepairMode.as_integer_ratio.md#ansys.meshing.prime.ScaffolderRepairMode.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`ScaffolderRepairMode.is_integer`](ansys.meshing.prime.ScaffolderRepairMode.is_integer.md#ansys.meshing.prime.ScaffolderRepairMode.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`ScaffolderRepairMode.real`](ansys.meshing.prime.ScaffolderRepairMode.real.md#ansys.meshing.prime.ScaffolderRepairMode.real)                         | the real part of a complex number                                   |
| [`ScaffolderRepairMode.imag`](ansys.meshing.prime.ScaffolderRepairMode.imag.md#ansys.meshing.prime.ScaffolderRepairMode.imag)                         | the imaginary part of a complex number                              |
| [`ScaffolderRepairMode.numerator`](ansys.meshing.prime.ScaffolderRepairMode.numerator.md#ansys.meshing.prime.ScaffolderRepairMode.numerator)          | the numerator of a rational number in lowest terms                  |
| [`ScaffolderRepairMode.denominator`](ansys.meshing.prime.ScaffolderRepairMode.denominator.md#ansys.meshing.prime.ScaffolderRepairMode.denominator)    | the denominator of a rational number in lowest terms                |
| [`ScaffolderRepairMode.DEFAULT`](ansys.meshing.prime.ScaffolderRepairMode.DEFAULT.md#ansys.meshing.prime.ScaffolderRepairMode.DEFAULT)                | Repairs edges using the distance tolerance parameter.               |
| [`ScaffolderRepairMode.CONSERVATIVE`](ansys.meshing.prime.ScaffolderRepairMode.CONSERVATIVE.md#ansys.meshing.prime.ScaffolderRepairMode.CONSERVATIVE) | Repairs edges without considering the distance tolerance parameter. |
<!-- vale on -->