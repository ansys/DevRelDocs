# HexCoreTransitionLayerType

<a id="ansys.meshing.prime.HexCoreTransitionLayerType"></a>

### *class* ansys.meshing.prime.HexCoreTransitionLayerType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Handle size transition of hex cells.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`HexCoreTransitionLayerType.conjugate`](ansys.meshing.prime.HexCoreTransitionLayerType.conjugate.md#ansys.meshing.prime.HexCoreTransitionLayerType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`HexCoreTransitionLayerType.bit_length`](ansys.meshing.prime.HexCoreTransitionLayerType.bit_length.md#ansys.meshing.prime.HexCoreTransitionLayerType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`HexCoreTransitionLayerType.bit_count`](ansys.meshing.prime.HexCoreTransitionLayerType.bit_count.md#ansys.meshing.prime.HexCoreTransitionLayerType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`HexCoreTransitionLayerType.to_bytes`](ansys.meshing.prime.HexCoreTransitionLayerType.to_bytes.md#ansys.meshing.prime.HexCoreTransitionLayerType.to_bytes)(/[, ...])                  | Return an array of bytes representing an integer.                          |
| [`HexCoreTransitionLayerType.from_bytes`](ansys.meshing.prime.HexCoreTransitionLayerType.from_bytes.md#ansys.meshing.prime.HexCoreTransitionLayerType.from_bytes)(/, bytes)            | Return the integer represented by the given array of bytes.                |
| [`HexCoreTransitionLayerType.as_integer_ratio`](ansys.meshing.prime.HexCoreTransitionLayerType.as_integer_ratio.md#ansys.meshing.prime.HexCoreTransitionLayerType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`HexCoreTransitionLayerType.is_integer`](ansys.meshing.prime.HexCoreTransitionLayerType.is_integer.md#ansys.meshing.prime.HexCoreTransitionLayerType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`HexCoreTransitionLayerType.real`](ansys.meshing.prime.HexCoreTransitionLayerType.real.md#ansys.meshing.prime.HexCoreTransitionLayerType.real)                         | the real part of a complex number                                                           |
| [`HexCoreTransitionLayerType.imag`](ansys.meshing.prime.HexCoreTransitionLayerType.imag.md#ansys.meshing.prime.HexCoreTransitionLayerType.imag)                         | the imaginary part of a complex number                                                      |
| [`HexCoreTransitionLayerType.numerator`](ansys.meshing.prime.HexCoreTransitionLayerType.numerator.md#ansys.meshing.prime.HexCoreTransitionLayerType.numerator)          | the numerator of a rational number in lowest terms                                          |
| [`HexCoreTransitionLayerType.denominator`](ansys.meshing.prime.HexCoreTransitionLayerType.denominator.md#ansys.meshing.prime.HexCoreTransitionLayerType.denominator)    | the denominator of a rational number in lowest terms                                        |
| [`HexCoreTransitionLayerType.HANGINGNODES`](ansys.meshing.prime.HexCoreTransitionLayerType.HANGINGNODES.md#ansys.meshing.prime.HexCoreTransitionLayerType.HANGINGNODES) | Allow different size hexes to be neighbors.                                                 |
| [`HexCoreTransitionLayerType.DELETESMALL`](ansys.meshing.prime.HexCoreTransitionLayerType.DELETESMALL.md#ansys.meshing.prime.HexCoreTransitionLayerType.DELETESMALL)    | Remove neighboring hexes of different size by deleting a layer of smaller cells.            |
| [`HexCoreTransitionLayerType.DELETELARGE`](ansys.meshing.prime.HexCoreTransitionLayerType.DELETELARGE.md#ansys.meshing.prime.HexCoreTransitionLayerType.DELETELARGE)    | Remove neighboring hexes of different size by deleting a layer of larger cells.             |
| [`HexCoreTransitionLayerType.DELETEBOTH`](ansys.meshing.prime.HexCoreTransitionLayerType.DELETEBOTH.md#ansys.meshing.prime.HexCoreTransitionLayerType.DELETEBOTH)       | Remove neighboring hexes of different size by deleting both smaller and larger cell layers. |
<!-- vale on -->