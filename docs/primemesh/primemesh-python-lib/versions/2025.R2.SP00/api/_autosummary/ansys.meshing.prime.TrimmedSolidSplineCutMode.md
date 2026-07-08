# TrimmedSolidSplineCutMode

<a id="ansys.meshing.prime.TrimmedSolidSplineCutMode"></a>

### *class* ansys.meshing.prime.TrimmedSolidSplineCutMode(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Types of Cut modes used to generate Cartesian grid representing subdomains of trimmed solid spline.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`TrimmedSolidSplineCutMode.conjugate`](ansys.meshing.prime.TrimmedSolidSplineCutMode.conjugate.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`TrimmedSolidSplineCutMode.bit_length`](ansys.meshing.prime.TrimmedSolidSplineCutMode.bit_length.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`TrimmedSolidSplineCutMode.bit_count`](ansys.meshing.prime.TrimmedSolidSplineCutMode.bit_count.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`TrimmedSolidSplineCutMode.to_bytes`](ansys.meshing.prime.TrimmedSolidSplineCutMode.to_bytes.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.to_bytes)(/[, ...])                  | Return an array of bytes representing an integer.                          |
| [`TrimmedSolidSplineCutMode.from_bytes`](ansys.meshing.prime.TrimmedSolidSplineCutMode.from_bytes.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.from_bytes)(/, bytes)            | Return the integer represented by the given array of bytes.                |
| [`TrimmedSolidSplineCutMode.as_integer_ratio`](ansys.meshing.prime.TrimmedSolidSplineCutMode.as_integer_ratio.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`TrimmedSolidSplineCutMode.is_integer`](ansys.meshing.prime.TrimmedSolidSplineCutMode.is_integer.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`TrimmedSolidSplineCutMode.real`](ansys.meshing.prime.TrimmedSolidSplineCutMode.real.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.real)                      | the real part of a complex number                                                                  |
| [`TrimmedSolidSplineCutMode.imag`](ansys.meshing.prime.TrimmedSolidSplineCutMode.imag.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.imag)                      | the imaginary part of a complex number                                                             |
| [`TrimmedSolidSplineCutMode.numerator`](ansys.meshing.prime.TrimmedSolidSplineCutMode.numerator.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.numerator)       | the numerator of a rational number in lowest terms                                                 |
| [`TrimmedSolidSplineCutMode.denominator`](ansys.meshing.prime.TrimmedSolidSplineCutMode.denominator.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.denominator) | the denominator of a rational number in lowest terms                                               |
| [`TrimmedSolidSplineCutMode.HYBRID`](ansys.meshing.prime.TrimmedSolidSplineCutMode.HYBRID.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.HYBRID)                | This is faster mode and may defeature the input mesh to represent each subdomain.                  |
| [`TrimmedSolidSplineCutMode.EXACT`](ansys.meshing.prime.TrimmedSolidSplineCutMode.EXACT.md#ansys.meshing.prime.TrimmedSolidSplineCutMode.EXACT)                   | This mode guarantees to represent the exact input mesh for each subdomain without any defeaturing. |
<!-- vale on -->