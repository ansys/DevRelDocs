# EdgeConnectType

<a id="ansys.meshing.prime.EdgeConnectType"></a>

### *class* ansys.meshing.prime.EdgeConnectType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Edge connect type to define the type of connection between edges .

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`EdgeConnectType.conjugate`](ansys.meshing.prime.EdgeConnectType.conjugate.md#ansys.meshing.prime.EdgeConnectType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`EdgeConnectType.bit_length`](ansys.meshing.prime.EdgeConnectType.bit_length.md#ansys.meshing.prime.EdgeConnectType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`EdgeConnectType.bit_count`](ansys.meshing.prime.EdgeConnectType.bit_count.md#ansys.meshing.prime.EdgeConnectType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`EdgeConnectType.to_bytes`](ansys.meshing.prime.EdgeConnectType.to_bytes.md#ansys.meshing.prime.EdgeConnectType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`EdgeConnectType.from_bytes`](ansys.meshing.prime.EdgeConnectType.from_bytes.md#ansys.meshing.prime.EdgeConnectType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`EdgeConnectType.as_integer_ratio`](ansys.meshing.prime.EdgeConnectType.as_integer_ratio.md#ansys.meshing.prime.EdgeConnectType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`EdgeConnectType.is_integer`](ansys.meshing.prime.EdgeConnectType.is_integer.md#ansys.meshing.prime.EdgeConnectType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`EdgeConnectType.real`](ansys.meshing.prime.EdgeConnectType.real.md#ansys.meshing.prime.EdgeConnectType.real)                      | the real part of a complex number                                      |
| [`EdgeConnectType.imag`](ansys.meshing.prime.EdgeConnectType.imag.md#ansys.meshing.prime.EdgeConnectType.imag)                      | the imaginary part of a complex number                                 |
| [`EdgeConnectType.numerator`](ansys.meshing.prime.EdgeConnectType.numerator.md#ansys.meshing.prime.EdgeConnectType.numerator)       | the numerator of a rational number in lowest terms                     |
| [`EdgeConnectType.denominator`](ansys.meshing.prime.EdgeConnectType.denominator.md#ansys.meshing.prime.EdgeConnectType.denominator) | the denominator of a rational number in lowest terms                   |
| [`EdgeConnectType.NONE`](ansys.meshing.prime.EdgeConnectType.NONE.md#ansys.meshing.prime.EdgeConnectType.NONE)                      | Perform no connection.                                                 |
| [`EdgeConnectType.ALLTOALL`](ansys.meshing.prime.EdgeConnectType.ALLTOALL.md#ansys.meshing.prime.EdgeConnectType.ALLTOALL)          | Perform connections between any type of edges or faces.                |
| [`EdgeConnectType.FREETOALL`](ansys.meshing.prime.EdgeConnectType.FREETOALL.md#ansys.meshing.prime.EdgeConnectType.FREETOALL)       | Perform connections between free edges and any type of edges or faces. |
| [`EdgeConnectType.FREETOFREE`](ansys.meshing.prime.EdgeConnectType.FREETOFREE.md#ansys.meshing.prime.EdgeConnectType.FREETOFREE)    | Perform connections between free edges.                                |
<!-- vale on -->