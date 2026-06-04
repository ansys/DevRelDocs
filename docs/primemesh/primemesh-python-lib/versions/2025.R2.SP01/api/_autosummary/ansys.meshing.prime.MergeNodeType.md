# MergeNodeType

<a id="ansys.meshing.prime.MergeNodeType"></a>

### *class* ansys.meshing.prime.MergeNodeType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Type of nodes to be merged.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`MergeNodeType.conjugate`](ansys.meshing.prime.MergeNodeType.conjugate.md#ansys.meshing.prime.MergeNodeType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`MergeNodeType.bit_length`](ansys.meshing.prime.MergeNodeType.bit_length.md#ansys.meshing.prime.MergeNodeType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`MergeNodeType.bit_count`](ansys.meshing.prime.MergeNodeType.bit_count.md#ansys.meshing.prime.MergeNodeType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`MergeNodeType.to_bytes`](ansys.meshing.prime.MergeNodeType.to_bytes.md#ansys.meshing.prime.MergeNodeType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`MergeNodeType.from_bytes`](ansys.meshing.prime.MergeNodeType.from_bytes.md#ansys.meshing.prime.MergeNodeType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`MergeNodeType.as_integer_ratio`](ansys.meshing.prime.MergeNodeType.as_integer_ratio.md#ansys.meshing.prime.MergeNodeType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`MergeNodeType.is_integer`](ansys.meshing.prime.MergeNodeType.is_integer.md#ansys.meshing.prime.MergeNodeType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`MergeNodeType.real`](ansys.meshing.prime.MergeNodeType.real.md#ansys.meshing.prime.MergeNodeType.real)                      | the real part of a complex number                    |
| [`MergeNodeType.imag`](ansys.meshing.prime.MergeNodeType.imag.md#ansys.meshing.prime.MergeNodeType.imag)                      | the imaginary part of a complex number               |
| [`MergeNodeType.numerator`](ansys.meshing.prime.MergeNodeType.numerator.md#ansys.meshing.prime.MergeNodeType.numerator)       | the numerator of a rational number in lowest terms   |
| [`MergeNodeType.denominator`](ansys.meshing.prime.MergeNodeType.denominator.md#ansys.meshing.prime.MergeNodeType.denominator) | the denominator of a rational number in lowest terms |
| [`MergeNodeType.ALLALL`](ansys.meshing.prime.MergeNodeType.ALLALL.md#ansys.meshing.prime.MergeNodeType.ALLALL)                | Merge any type of nodes with any type of nodes.      |
| [`MergeNodeType.FREEFREE`](ansys.meshing.prime.MergeNodeType.FREEFREE.md#ansys.meshing.prime.MergeNodeType.FREEFREE)          | Merge only free nodes with free nodes.               |
<!-- vale on -->