# SolverType

<a id="ansys.meshing.prime.SolverType"></a>

### *class* ansys.meshing.prime.SolverType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Type of solver.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SolverType.conjugate`](ansys.meshing.prime.SolverType.conjugate.md#ansys.meshing.prime.SolverType.conjugate)                                | Returns self, the complex conjugate of any int.                            |
| [`SolverType.bit_length`](ansys.meshing.prime.SolverType.bit_length.md#ansys.meshing.prime.SolverType.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`SolverType.bit_count`](ansys.meshing.prime.SolverType.bit_count.md#ansys.meshing.prime.SolverType.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`SolverType.to_bytes`](ansys.meshing.prime.SolverType.to_bytes.md#ansys.meshing.prime.SolverType.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`SolverType.from_bytes`](ansys.meshing.prime.SolverType.from_bytes.md#ansys.meshing.prime.SolverType.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`SolverType.as_integer_ratio`](ansys.meshing.prime.SolverType.as_integer_ratio.md#ansys.meshing.prime.SolverType.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SolverType.is_integer`](ansys.meshing.prime.SolverType.is_integer.md#ansys.meshing.prime.SolverType.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`SolverType.real`](ansys.meshing.prime.SolverType.real.md#ansys.meshing.prime.SolverType.real)                      | the real part of a complex number                    |
| [`SolverType.imag`](ansys.meshing.prime.SolverType.imag.md#ansys.meshing.prime.SolverType.imag)                      | the imaginary part of a complex number               |
| [`SolverType.numerator`](ansys.meshing.prime.SolverType.numerator.md#ansys.meshing.prime.SolverType.numerator)       | the numerator of a rational number in lowest terms   |
| [`SolverType.denominator`](ansys.meshing.prime.SolverType.denominator.md#ansys.meshing.prime.SolverType.denominator) | the denominator of a rational number in lowest terms |
| [`SolverType.FLUENT`](ansys.meshing.prime.SolverType.FLUENT.md#ansys.meshing.prime.SolverType.FLUENT)                | Solver type is Fluent.                               |
| [`SolverType.MAPDL`](ansys.meshing.prime.SolverType.MAPDL.md#ansys.meshing.prime.SolverType.MAPDL)                   | Solver type is MAPDL.                                |
<!-- vale on -->