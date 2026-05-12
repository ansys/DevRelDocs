# LSDynaFileFormatType

<a id="ansys.meshing.prime.LSDynaFileFormatType"></a>

### *class* ansys.meshing.prime.LSDynaFileFormatType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Provides the format type to write the LS-DYNA file.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`LSDynaFileFormatType.conjugate`](ansys.meshing.prime.LSDynaFileFormatType.conjugate.md#ansys.meshing.prime.LSDynaFileFormatType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`LSDynaFileFormatType.bit_length`](ansys.meshing.prime.LSDynaFileFormatType.bit_length.md#ansys.meshing.prime.LSDynaFileFormatType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`LSDynaFileFormatType.bit_count`](ansys.meshing.prime.LSDynaFileFormatType.bit_count.md#ansys.meshing.prime.LSDynaFileFormatType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`LSDynaFileFormatType.to_bytes`](ansys.meshing.prime.LSDynaFileFormatType.to_bytes.md#ansys.meshing.prime.LSDynaFileFormatType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`LSDynaFileFormatType.from_bytes`](ansys.meshing.prime.LSDynaFileFormatType.from_bytes.md#ansys.meshing.prime.LSDynaFileFormatType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`LSDynaFileFormatType.as_integer_ratio`](ansys.meshing.prime.LSDynaFileFormatType.as_integer_ratio.md#ansys.meshing.prime.LSDynaFileFormatType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`LSDynaFileFormatType.is_integer`](ansys.meshing.prime.LSDynaFileFormatType.is_integer.md#ansys.meshing.prime.LSDynaFileFormatType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`LSDynaFileFormatType.real`](ansys.meshing.prime.LSDynaFileFormatType.real.md#ansys.meshing.prime.LSDynaFileFormatType.real)                      | the real part of a complex number                                          |
| [`LSDynaFileFormatType.imag`](ansys.meshing.prime.LSDynaFileFormatType.imag.md#ansys.meshing.prime.LSDynaFileFormatType.imag)                      | the imaginary part of a complex number                                     |
| [`LSDynaFileFormatType.numerator`](ansys.meshing.prime.LSDynaFileFormatType.numerator.md#ansys.meshing.prime.LSDynaFileFormatType.numerator)       | the numerator of a rational number in lowest terms                         |
| [`LSDynaFileFormatType.denominator`](ansys.meshing.prime.LSDynaFileFormatType.denominator.md#ansys.meshing.prime.LSDynaFileFormatType.denominator) | the denominator of a rational number in lowest terms                       |
| [`LSDynaFileFormatType.REGULAR`](ansys.meshing.prime.LSDynaFileFormatType.REGULAR.md#ansys.meshing.prime.LSDynaFileFormatType.REGULAR)             | Option to select 8-char width format to write ids for elements and nodes.  |
| [`LSDynaFileFormatType.I10`](ansys.meshing.prime.LSDynaFileFormatType.I10.md#ansys.meshing.prime.LSDynaFileFormatType.I10)                         | Option to select 10-char width format to write ids for elements and nodes. |
<!-- vale on -->