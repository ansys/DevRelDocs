# EdgeMergeControl

<a id="ansys.meshing.prime.EdgeMergeControl"></a>

### *class* ansys.meshing.prime.EdgeMergeControl(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Specifies type of edge pairs to be merged during scaffold operation.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`EdgeMergeControl.conjugate`](ansys.meshing.prime.EdgeMergeControl.conjugate.md#ansys.meshing.prime.EdgeMergeControl.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`EdgeMergeControl.bit_length`](ansys.meshing.prime.EdgeMergeControl.bit_length.md#ansys.meshing.prime.EdgeMergeControl.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`EdgeMergeControl.bit_count`](ansys.meshing.prime.EdgeMergeControl.bit_count.md#ansys.meshing.prime.EdgeMergeControl.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`EdgeMergeControl.to_bytes`](ansys.meshing.prime.EdgeMergeControl.to_bytes.md#ansys.meshing.prime.EdgeMergeControl.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`EdgeMergeControl.from_bytes`](ansys.meshing.prime.EdgeMergeControl.from_bytes.md#ansys.meshing.prime.EdgeMergeControl.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`EdgeMergeControl.as_integer_ratio`](ansys.meshing.prime.EdgeMergeControl.as_integer_ratio.md#ansys.meshing.prime.EdgeMergeControl.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`EdgeMergeControl.is_integer`](ansys.meshing.prime.EdgeMergeControl.is_integer.md#ansys.meshing.prime.EdgeMergeControl.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`EdgeMergeControl.real`](ansys.meshing.prime.EdgeMergeControl.real.md#ansys.meshing.prime.EdgeMergeControl.real)                      | the real part of a complex number                    |
| [`EdgeMergeControl.imag`](ansys.meshing.prime.EdgeMergeControl.imag.md#ansys.meshing.prime.EdgeMergeControl.imag)                      | the imaginary part of a complex number               |
| [`EdgeMergeControl.numerator`](ansys.meshing.prime.EdgeMergeControl.numerator.md#ansys.meshing.prime.EdgeMergeControl.numerator)       | the numerator of a rational number in lowest terms   |
| [`EdgeMergeControl.denominator`](ansys.meshing.prime.EdgeMergeControl.denominator.md#ansys.meshing.prime.EdgeMergeControl.denominator) | the denominator of a rational number in lowest terms |
| [`EdgeMergeControl.ALLTOALL`](ansys.meshing.prime.EdgeMergeControl.ALLTOALL.md#ansys.meshing.prime.EdgeMergeControl.ALLTOALL)          | Allows to merge all types of edges.                  |
| [`EdgeMergeControl.FREETOALL`](ansys.meshing.prime.EdgeMergeControl.FREETOALL.md#ansys.meshing.prime.EdgeMergeControl.FREETOALL)       | Allows to merge only free edges into all edges.      |
| [`EdgeMergeControl.FREETOFREE`](ansys.meshing.prime.EdgeMergeControl.FREETOFREE.md#ansys.meshing.prime.EdgeMergeControl.FREETOFREE)    | Allows to merge free edge into other free edge only. |
<!-- vale on -->