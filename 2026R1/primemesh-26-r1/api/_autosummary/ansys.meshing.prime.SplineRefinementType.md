# SplineRefinementType

<a id="ansys.meshing.prime.SplineRefinementType"></a>

### *class* ansys.meshing.prime.SplineRefinementType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Type of spline refinement. Currently, supports h-refinement and p-refinement.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SplineRefinementType.conjugate`](ansys.meshing.prime.SplineRefinementType.conjugate.md#ansys.meshing.prime.SplineRefinementType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`SplineRefinementType.bit_length`](ansys.meshing.prime.SplineRefinementType.bit_length.md#ansys.meshing.prime.SplineRefinementType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`SplineRefinementType.bit_count`](ansys.meshing.prime.SplineRefinementType.bit_count.md#ansys.meshing.prime.SplineRefinementType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`SplineRefinementType.to_bytes`](ansys.meshing.prime.SplineRefinementType.to_bytes.md#ansys.meshing.prime.SplineRefinementType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`SplineRefinementType.from_bytes`](ansys.meshing.prime.SplineRefinementType.from_bytes.md#ansys.meshing.prime.SplineRefinementType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`SplineRefinementType.as_integer_ratio`](ansys.meshing.prime.SplineRefinementType.as_integer_ratio.md#ansys.meshing.prime.SplineRefinementType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SplineRefinementType.is_integer`](ansys.meshing.prime.SplineRefinementType.is_integer.md#ansys.meshing.prime.SplineRefinementType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`SplineRefinementType.real`](ansys.meshing.prime.SplineRefinementType.real.md#ansys.meshing.prime.SplineRefinementType.real)                      | the real part of a complex number                    |
| [`SplineRefinementType.imag`](ansys.meshing.prime.SplineRefinementType.imag.md#ansys.meshing.prime.SplineRefinementType.imag)                      | the imaginary part of a complex number               |
| [`SplineRefinementType.numerator`](ansys.meshing.prime.SplineRefinementType.numerator.md#ansys.meshing.prime.SplineRefinementType.numerator)       | the numerator of a rational number in lowest terms   |
| [`SplineRefinementType.denominator`](ansys.meshing.prime.SplineRefinementType.denominator.md#ansys.meshing.prime.SplineRefinementType.denominator) | the denominator of a rational number in lowest terms |
| [`SplineRefinementType.H`](ansys.meshing.prime.SplineRefinementType.H.md#ansys.meshing.prime.SplineRefinementType.H)                               | H refinement of spline.                              |
| [`SplineRefinementType.P`](ansys.meshing.prime.SplineRefinementType.P.md#ansys.meshing.prime.SplineRefinementType.P)                               | P refinement of spline.                              |
<!-- vale on -->