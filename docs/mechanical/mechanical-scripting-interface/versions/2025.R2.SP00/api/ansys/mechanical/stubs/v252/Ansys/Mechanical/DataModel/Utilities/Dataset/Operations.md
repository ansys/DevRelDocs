# `Operations`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Operations"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Dataset.Operations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class that provides methods to apply mathematical Operations (like Integration, Summation, Multiplication, etc.) to dataset object(s).
All operations throw an InvalidOperationException when an invalid dataset is passed in as an input.
An invalid dataset could be null dataset reference, dataset with either of the x or y values list empty or dataset with a mismatch in the size of its x and y values list.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| [`Addition`](#Operations.Addition)               | Addition method.                                                                                                              |
| [`Differentiation`](#Operations.Differentiation) | Performs differentiation using the central difference method on a dataset and returns the result as a new dataset.            |
| [`Division`](#Operations.Division)               | Performs a division operation on the y-values of the dividend dataset by the divisor and returns the result as a new dataset. |
| [`Integration`](#Operations.Integration)         | Performs integration using the trapezoidal rule on a dataset and returns the result as a new dataset.                         |
| [`Multiplication`](#Operations.Multiplication)   | Multiplication method.                                                                                                        |
| [`ScaleAxis`](#Operations.ScaleAxis)             | Scales the dataset values by a factor provided in the input for each axis.                                                    |
| [`ShiftAxis`](#Operations.ShiftAxis)             | Shifts the dataset values by a value provided in the input for each axis.                                                     |
| [`Subtraction`](#Operations.Subtraction)         | Performs a subtraction operation on the y-values of the subtrahend from the minuend and returns the result as a new dataset.  |

<a id="method-detail"></a>

## Method detail

<a id="Operations.Addition"></a>

### *classmethod* Operations.Addition(dataset_1: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), dataset_2: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), extra_datasets: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

Addition method.

<!-- !! processed by numpydoc !! -->

<a id="Operations.Differentiation"></a>

### *classmethod* Operations.Differentiation(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Performs differentiation using the central difference method on a dataset and returns the result as a new dataset.
The resultant dataset will be Dimensionless. (See documentation for more details)
An ArgumentException is thrown if the input dataset is either invalid or is non-differentiable.
```

<!-- !! processed by numpydoc !! -->

<a id="Operations.Division"></a>

### *classmethod* Operations.Division(dividend: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), divisor: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Performs a division operation on the y-values of the dividend dataset by the divisor and returns the result as a new dataset.
The resultant dataset contains the intersection of x-values from all the input datasets and the division of the corresponding y-values. (There is no interpolation done for any missing y-values.)
If all the input datasets are of the same Quantity type, internal unit conversions are done if needed, but the resultant dataset will be Dimensionless. (See documentation for more details)
If any of the input datasets have different Quantity types, no unit conversions are attempted, and the resultant dataset will be Dimensionless.
An ArgumentException is thrown if either one of the datasets is invalid.
An InvalidOperationException is thrown if there is no intersection between the x-values of the input datasets.
```

<!-- !! processed by numpydoc !! -->

<a id="Operations.Integration"></a>

### *classmethod* Operations.Integration(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Performs integration using the trapezoidal rule on a dataset and returns the result as a new dataset.
The resultant dataset will be Dimensionless. (See documentation for more details)
An ArgumentException is thrown if the input dataset is either invalid or contains less than two values.
```

<!-- !! processed by numpydoc !! -->

<a id="Operations.Multiplication"></a>

### *classmethod* Operations.Multiplication(dataset_1: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), dataset_2: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), extra_datasets: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

Multiplication method.

<!-- !! processed by numpydoc !! -->

<a id="Operations.ScaleAxis"></a>

### *classmethod* Operations.ScaleAxis(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), x_scale_factor: [float](https://docs.python.org/3/library/functions.html#float), y_scale_factor: [float](https://docs.python.org/3/library/functions.html#float)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Scales the dataset values by a factor provided in the input for each axis.
The new resultant dataset is returned as the output.
The resultant dataset will maintain the same Quantity and units as the input dataset.
An ArgumentException is thrown if the input dataset is invalid.
```

<!-- !! processed by numpydoc !! -->

<a id="Operations.ShiftAxis"></a>

### *classmethod* Operations.ShiftAxis(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), x_shift_value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), y_shift_value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Shifts the dataset values by a value provided in the input for each axis.
The new resultant dataset is returned as the output.
The resultant dataset will maintain the same Quantity and units as the input dataset.
An ArgumentException is thrown if the input dataset is invalid.
```

<!-- !! processed by numpydoc !! -->

<a id="Operations.Subtraction"></a>

### *classmethod* Operations.Subtraction(minuend: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), subtrahend: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Performs a subtraction operation on the y-values of the subtrahend from the minuend and returns the result as a new dataset.
The resultant dataset contains the intersection of x-values from all the input datasets and the subtraction of the corresponding y-values. (There is no interpolation done for any missing y-values.)
If all the input datasets are of the same Quantity type, internal unit conversions are done if needed, and the resultant dataset will also be of the same Quantity type.
If any of the input datasets have different Quantity types, no unit conversions are attempted, and the resultant dataset will be Dimensionless.
An ArgumentException is thrown if either one of the datasets is invalid.
An InvalidOperationException is thrown if there is no intersection between the x-values of the input datasets.
```

<!-- !! processed by numpydoc !! -->

