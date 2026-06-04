# BodyQueryType

<a id="ansys.meshing.prime.BodyQueryType"></a>

### *class* ansys.meshing.prime.BodyQueryType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Indicates type of entity to query in part.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`BodyQueryType.conjugate`](ansys.meshing.prime.BodyQueryType.conjugate.md#ansys.meshing.prime.BodyQueryType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`BodyQueryType.bit_length`](ansys.meshing.prime.BodyQueryType.bit_length.md#ansys.meshing.prime.BodyQueryType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`BodyQueryType.bit_count`](ansys.meshing.prime.BodyQueryType.bit_count.md#ansys.meshing.prime.BodyQueryType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`BodyQueryType.to_bytes`](ansys.meshing.prime.BodyQueryType.to_bytes.md#ansys.meshing.prime.BodyQueryType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`BodyQueryType.from_bytes`](ansys.meshing.prime.BodyQueryType.from_bytes.md#ansys.meshing.prime.BodyQueryType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`BodyQueryType.as_integer_ratio`](ansys.meshing.prime.BodyQueryType.as_integer_ratio.md#ansys.meshing.prime.BodyQueryType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`BodyQueryType.is_integer`](ansys.meshing.prime.BodyQueryType.is_integer.md#ansys.meshing.prime.BodyQueryType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`BodyQueryType.real`](ansys.meshing.prime.BodyQueryType.real.md#ansys.meshing.prime.BodyQueryType.real)                      | the real part of a complex number                       |
| [`BodyQueryType.imag`](ansys.meshing.prime.BodyQueryType.imag.md#ansys.meshing.prime.BodyQueryType.imag)                      | the imaginary part of a complex number                  |
| [`BodyQueryType.numerator`](ansys.meshing.prime.BodyQueryType.numerator.md#ansys.meshing.prime.BodyQueryType.numerator)       | the numerator of a rational number in lowest terms      |
| [`BodyQueryType.denominator`](ansys.meshing.prime.BodyQueryType.denominator.md#ansys.meshing.prime.BodyQueryType.denominator) | the denominator of a rational number in lowest terms    |
| [`BodyQueryType.ALL`](ansys.meshing.prime.BodyQueryType.ALL.md#ansys.meshing.prime.BodyQueryType.ALL)                         | Returns all entities in part.                           |
| [`BodyQueryType.FREE`](ansys.meshing.prime.BodyQueryType.FREE.md#ansys.meshing.prime.BodyQueryType.FREE)                      | Returns only free entities in part.                     |
| [`BodyQueryType.NONFREE`](ansys.meshing.prime.BodyQueryType.NONFREE.md#ansys.meshing.prime.BodyQueryType.NONFREE)             | Returns entities associated with non-free body in part. |
<!-- vale on -->