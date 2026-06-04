# CdbAnalysisType

<a id="ansys.meshing.prime.CdbAnalysisType"></a>

### *class* ansys.meshing.prime.CdbAnalysisType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Provides the MAPDL CDB analysis type.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`CdbAnalysisType.conjugate`](ansys.meshing.prime.CdbAnalysisType.conjugate.md#ansys.meshing.prime.CdbAnalysisType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`CdbAnalysisType.bit_length`](ansys.meshing.prime.CdbAnalysisType.bit_length.md#ansys.meshing.prime.CdbAnalysisType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`CdbAnalysisType.bit_count`](ansys.meshing.prime.CdbAnalysisType.bit_count.md#ansys.meshing.prime.CdbAnalysisType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`CdbAnalysisType.to_bytes`](ansys.meshing.prime.CdbAnalysisType.to_bytes.md#ansys.meshing.prime.CdbAnalysisType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`CdbAnalysisType.from_bytes`](ansys.meshing.prime.CdbAnalysisType.from_bytes.md#ansys.meshing.prime.CdbAnalysisType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`CdbAnalysisType.as_integer_ratio`](ansys.meshing.prime.CdbAnalysisType.as_integer_ratio.md#ansys.meshing.prime.CdbAnalysisType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`CdbAnalysisType.is_integer`](ansys.meshing.prime.CdbAnalysisType.is_integer.md#ansys.meshing.prime.CdbAnalysisType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`CdbAnalysisType.real`](ansys.meshing.prime.CdbAnalysisType.real.md#ansys.meshing.prime.CdbAnalysisType.real)                                              | the real part of a complex number                            |
| [`CdbAnalysisType.imag`](ansys.meshing.prime.CdbAnalysisType.imag.md#ansys.meshing.prime.CdbAnalysisType.imag)                                              | the imaginary part of a complex number                       |
| [`CdbAnalysisType.numerator`](ansys.meshing.prime.CdbAnalysisType.numerator.md#ansys.meshing.prime.CdbAnalysisType.numerator)                               | the numerator of a rational number in lowest terms           |
| [`CdbAnalysisType.denominator`](ansys.meshing.prime.CdbAnalysisType.denominator.md#ansys.meshing.prime.CdbAnalysisType.denominator)                         | the denominator of a rational number in lowest terms         |
| [`CdbAnalysisType.NONE`](ansys.meshing.prime.CdbAnalysisType.NONE.md#ansys.meshing.prime.CdbAnalysisType.NONE)                                              | Option to select no analysis type.                           |
| [`CdbAnalysisType.OUTERPANELSTIFFNESS`](ansys.meshing.prime.CdbAnalysisType.OUTERPANELSTIFFNESS.md#ansys.meshing.prime.CdbAnalysisType.OUTERPANELSTIFFNESS) | Option to select Outer Panel Stiffness as CDB analysis type. |
| [`CdbAnalysisType.BELGIAN`](ansys.meshing.prime.CdbAnalysisType.BELGIAN.md#ansys.meshing.prime.CdbAnalysisType.BELGIAN)                                     | Option to select Belgian as CDB analysis type.               |
| [`CdbAnalysisType.SEATRETRACTOR`](ansys.meshing.prime.CdbAnalysisType.SEATRETRACTOR.md#ansys.meshing.prime.CdbAnalysisType.SEATRETRACTOR)                   | Option to select Seat Retractor as CDB analysis type.        |
<!-- vale on -->