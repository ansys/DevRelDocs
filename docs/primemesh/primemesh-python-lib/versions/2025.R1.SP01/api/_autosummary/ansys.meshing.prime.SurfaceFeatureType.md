# SurfaceFeatureType

<a id="ansys.meshing.prime.SurfaceFeatureType"></a>

### *class* ansys.meshing.prime.SurfaceFeatureType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Type of face edges considered as features.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`SurfaceFeatureType.conjugate`](ansys.meshing.prime.SurfaceFeatureType.conjugate.md#ansys.meshing.prime.SurfaceFeatureType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`SurfaceFeatureType.bit_length`](ansys.meshing.prime.SurfaceFeatureType.bit_length.md#ansys.meshing.prime.SurfaceFeatureType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`SurfaceFeatureType.bit_count`](ansys.meshing.prime.SurfaceFeatureType.bit_count.md#ansys.meshing.prime.SurfaceFeatureType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`SurfaceFeatureType.to_bytes`](ansys.meshing.prime.SurfaceFeatureType.to_bytes.md#ansys.meshing.prime.SurfaceFeatureType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`SurfaceFeatureType.from_bytes`](ansys.meshing.prime.SurfaceFeatureType.from_bytes.md#ansys.meshing.prime.SurfaceFeatureType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`SurfaceFeatureType.as_integer_ratio`](ansys.meshing.prime.SurfaceFeatureType.as_integer_ratio.md#ansys.meshing.prime.SurfaceFeatureType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`SurfaceFeatureType.is_integer`](ansys.meshing.prime.SurfaceFeatureType.is_integer.md#ansys.meshing.prime.SurfaceFeatureType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`SurfaceFeatureType.real`](ansys.meshing.prime.SurfaceFeatureType.real.md#ansys.meshing.prime.SurfaceFeatureType.real)                                                             | the real part of a complex number                                                                  |
| [`SurfaceFeatureType.imag`](ansys.meshing.prime.SurfaceFeatureType.imag.md#ansys.meshing.prime.SurfaceFeatureType.imag)                                                             | the imaginary part of a complex number                                                             |
| [`SurfaceFeatureType.numerator`](ansys.meshing.prime.SurfaceFeatureType.numerator.md#ansys.meshing.prime.SurfaceFeatureType.numerator)                                              | the numerator of a rational number in lowest terms                                                 |
| [`SurfaceFeatureType.denominator`](ansys.meshing.prime.SurfaceFeatureType.denominator.md#ansys.meshing.prime.SurfaceFeatureType.denominator)                                        | the denominator of a rational number in lowest terms                                               |
| [`SurfaceFeatureType.NONE`](ansys.meshing.prime.SurfaceFeatureType.NONE.md#ansys.meshing.prime.SurfaceFeatureType.NONE)                                                             | None of face edges are considered as feature.                                                      |
| [`SurfaceFeatureType.ZONEBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.ZONEBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.ZONEBOUNDARY)                                     | Face edges at zone boundary are considered as feature.                                             |
| [`SurfaceFeatureType.FEATURE`](ansys.meshing.prime.SurfaceFeatureType.FEATURE.md#ansys.meshing.prime.SurfaceFeatureType.FEATURE)                                                    | Face edges with normal angle more than threshold are considered as feature.                        |
| [`SurfaceFeatureType.FEATUREORZONEBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONEBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONEBOUNDARY)          | Face edges at zone boundary or with normal angle more than threshold are considered as feature.    |
| [`SurfaceFeatureType.ZONELETBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.ZONELETBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.ZONELETBOUNDARY)                            | Face edges at zonelet boundary are considered as feature.                                          |
| [`SurfaceFeatureType.FEATUREORZONELETBOUNDARY`](ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONELETBOUNDARY.md#ansys.meshing.prime.SurfaceFeatureType.FEATUREORZONELETBOUNDARY) | Face edges at zonelet boundary or with normal angle more than threshold are considered as feature. |
<!-- vale on -->