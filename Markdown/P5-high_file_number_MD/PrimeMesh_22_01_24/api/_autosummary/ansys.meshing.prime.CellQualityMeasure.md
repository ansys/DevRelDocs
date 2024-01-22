<!-- vale off -->

# CellQualityMeasure

### *class* ansys.meshing.prime.CellQualityMeasure(value, names=None, \*, module=None, qualname=None, type=None, start=1, boundary=None)

The type of cell quality measures to check cell quality metrics.

<!-- !! processed by numpydoc !! -->

### Methods

| [`CellQualityMeasure.as_integer_ratio`](ansys.meshing.prime.CellQualityMeasure.as_integer_ratio.md#ansys.meshing.prime.CellQualityMeasure.as_integer_ratio)(/)   | Return integer ratio.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`CellQualityMeasure.bit_count`](ansys.meshing.prime.CellQualityMeasure.bit_count.md#ansys.meshing.prime.CellQualityMeasure.bit_count)(/)                        | Number of ones in the binary representation of the absolute value of self. |
| [`CellQualityMeasure.bit_length`](ansys.meshing.prime.CellQualityMeasure.bit_length.md#ansys.meshing.prime.CellQualityMeasure.bit_length)(/)                     | Number of bits necessary to represent self in binary.                      |
| [`CellQualityMeasure.conjugate`](ansys.meshing.prime.CellQualityMeasure.conjugate.md#ansys.meshing.prime.CellQualityMeasure.conjugate)                           | Returns self, the complex conjugate of any int.                            |
| [`CellQualityMeasure.from_bytes`](ansys.meshing.prime.CellQualityMeasure.from_bytes.md#ansys.meshing.prime.CellQualityMeasure.from_bytes)(/, bytes[, ...])       | Return the integer represented by the given array of bytes.                |
| [`CellQualityMeasure.to_bytes`](ansys.meshing.prime.CellQualityMeasure.to_bytes.md#ansys.meshing.prime.CellQualityMeasure.to_bytes)(/[, length, ...])            | Return an array of bytes representing an integer.                          |

### Attributes

| [`CellQualityMeasure.SKEWNESS`](ansys.meshing.prime.CellQualityMeasure.SKEWNESS.md#ansys.meshing.prime.CellQualityMeasure.SKEWNESS)                                     | The Skewness metric ranges between 0 (best) and 1 (worst).                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`CellQualityMeasure.ASPECTRATIO`](ansys.meshing.prime.CellQualityMeasure.ASPECTRATIO.md#ansys.meshing.prime.CellQualityMeasure.ASPECTRATIO)                            | The Aspect Ratio metric is greater than 1.                                    |
| [`CellQualityMeasure.FLUENTASPECTRATIO`](ansys.meshing.prime.CellQualityMeasure.FLUENTASPECTRATIO.md#ansys.meshing.prime.CellQualityMeasure.FLUENTASPECTRATIO)          | The Fluent aspect Ratio metric is greater than 1.                             |
| [`CellQualityMeasure.INVERSEORTHOGONAL`](ansys.meshing.prime.CellQualityMeasure.INVERSEORTHOGONAL.md#ansys.meshing.prime.CellQualityMeasure.INVERSEORTHOGONAL)          | The inverse orthogonal metric ranges between 0 (best) and 1 (worst).          |
| [`CellQualityMeasure.INVERSEORTHOGONAL_V2`](ansys.meshing.prime.CellQualityMeasure.INVERSEORTHOGONAL_V2.md#ansys.meshing.prime.CellQualityMeasure.INVERSEORTHOGONAL_V2) | The advanced inverse orthogonal metric ranges between 0 (best) and 1 (worst). |
| [`CellQualityMeasure.ELEMENTQUALITY`](ansys.meshing.prime.CellQualityMeasure.ELEMENTQUALITY.md#ansys.meshing.prime.CellQualityMeasure.ELEMENTQUALITY)                   | The Element Quality metric ranges between 0 (worst) and 1 (best).             |
| [`CellQualityMeasure.denominator`](ansys.meshing.prime.CellQualityMeasure.denominator.md#ansys.meshing.prime.CellQualityMeasure.denominator)                            | the denominator of a rational number in lowest terms                          |
| [`CellQualityMeasure.imag`](ansys.meshing.prime.CellQualityMeasure.imag.md#ansys.meshing.prime.CellQualityMeasure.imag)                                                 | the imaginary part of a complex number                                        |
| [`CellQualityMeasure.numerator`](ansys.meshing.prime.CellQualityMeasure.numerator.md#ansys.meshing.prime.CellQualityMeasure.numerator)                                  | the numerator of a rational number in lowest terms                            |
| [`CellQualityMeasure.real`](ansys.meshing.prime.CellQualityMeasure.real.md#ansys.meshing.prime.CellQualityMeasure.real)                                                 | the real part of a complex number                                             |
<!-- vale on -->
