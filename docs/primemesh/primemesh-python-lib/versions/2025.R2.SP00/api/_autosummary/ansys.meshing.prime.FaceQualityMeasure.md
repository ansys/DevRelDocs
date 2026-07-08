# FaceQualityMeasure

<a id="ansys.meshing.prime.FaceQualityMeasure"></a>

### *class* ansys.meshing.prime.FaceQualityMeasure(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

The type of face quality measures to check face quality metrics.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`FaceQualityMeasure.conjugate`](ansys.meshing.prime.FaceQualityMeasure.conjugate.md#ansys.meshing.prime.FaceQualityMeasure.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`FaceQualityMeasure.bit_length`](ansys.meshing.prime.FaceQualityMeasure.bit_length.md#ansys.meshing.prime.FaceQualityMeasure.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`FaceQualityMeasure.bit_count`](ansys.meshing.prime.FaceQualityMeasure.bit_count.md#ansys.meshing.prime.FaceQualityMeasure.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`FaceQualityMeasure.to_bytes`](ansys.meshing.prime.FaceQualityMeasure.to_bytes.md#ansys.meshing.prime.FaceQualityMeasure.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`FaceQualityMeasure.from_bytes`](ansys.meshing.prime.FaceQualityMeasure.from_bytes.md#ansys.meshing.prime.FaceQualityMeasure.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`FaceQualityMeasure.as_integer_ratio`](ansys.meshing.prime.FaceQualityMeasure.as_integer_ratio.md#ansys.meshing.prime.FaceQualityMeasure.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`FaceQualityMeasure.is_integer`](ansys.meshing.prime.FaceQualityMeasure.is_integer.md#ansys.meshing.prime.FaceQualityMeasure.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`FaceQualityMeasure.real`](ansys.meshing.prime.FaceQualityMeasure.real.md#ansys.meshing.prime.FaceQualityMeasure.real)                               | the real part of a complex number                                                                                                                                         |
| [`FaceQualityMeasure.imag`](ansys.meshing.prime.FaceQualityMeasure.imag.md#ansys.meshing.prime.FaceQualityMeasure.imag)                               | the imaginary part of a complex number                                                                                                                                    |
| [`FaceQualityMeasure.numerator`](ansys.meshing.prime.FaceQualityMeasure.numerator.md#ansys.meshing.prime.FaceQualityMeasure.numerator)                | the numerator of a rational number in lowest terms                                                                                                                        |
| [`FaceQualityMeasure.denominator`](ansys.meshing.prime.FaceQualityMeasure.denominator.md#ansys.meshing.prime.FaceQualityMeasure.denominator)          | the denominator of a rational number in lowest terms                                                                                                                      |
| [`FaceQualityMeasure.SKEWNESS`](ansys.meshing.prime.FaceQualityMeasure.SKEWNESS.md#ansys.meshing.prime.FaceQualityMeasure.SKEWNESS)                   | The Skewness metric ranges between 0 (worst) and 1 (best).                                                                                                                |
| [`FaceQualityMeasure.SIZECHANGE`](ansys.meshing.prime.FaceQualityMeasure.SIZECHANGE.md#ansys.meshing.prime.FaceQualityMeasure.SIZECHANGE)             | Size Change is the maximum ratio of the area of each neighboring face element to the area of face element when the area of the face element is smaller than the neighbor. |
| [`FaceQualityMeasure.ASPECTRATIO`](ansys.meshing.prime.FaceQualityMeasure.ASPECTRATIO.md#ansys.meshing.prime.FaceQualityMeasure.ASPECTRATIO)          | The Aspect Ratio metric is greater than 1.                                                                                                                                |
| [`FaceQualityMeasure.WARP`](ansys.meshing.prime.FaceQualityMeasure.WARP.md#ansys.meshing.prime.FaceQualityMeasure.WARP)                               | Face quality metric to check warping factor.                                                                                                                              |
| [`FaceQualityMeasure.ELEMENTQUALITY`](ansys.meshing.prime.FaceQualityMeasure.ELEMENTQUALITY.md#ansys.meshing.prime.FaceQualityMeasure.ELEMENTQUALITY) | The Element Quality metric ranges between 0 (worst) and 1 (best).                                                                                                         |
<!-- vale on -->