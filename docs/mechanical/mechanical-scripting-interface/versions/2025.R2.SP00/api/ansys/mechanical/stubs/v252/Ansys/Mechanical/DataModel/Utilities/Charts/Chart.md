# `Chart`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.Chart"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.Chart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Chart is an object utilized by the Line Chart object to display charts and
customize them with the flexibility to allow modification to the data of the chart
to a certain extent.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`AddDataset`](#Chart.AddDataset)                                     | Adds a dataset to a chart, provided the data is valid.                     |
| [`GetDisplayOptionsForDataset`](#Chart.GetDisplayOptionsForDataset)   | Returns a reference to the dataset display options for a specific dataset. |
| [`GetLabelCollectionForDataset`](#Chart.GetLabelCollectionForDataset) | Returns a reference to the label collection for a specific dataset.        |
| [`RemoveDataset`](#Chart.RemoveDataset)                               | Removes a dataset from the chart.                                          |

### Properties

| Name | Description |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Datasets`](#Chart.Datasets)                       | Retrieves all datasets of a chart.                                                                   |
| [`NormalizeYAxis`](#Chart.NormalizeYAxis)           | Allows a normalized display of y-axis values, usually for cases where the axis has mixed quantities. |
| [`XAxisDisplayOptions`](#Chart.XAxisDisplayOptions) | Returns a reference to the x-axis display options of a chart.                                        |
| [`YAxisDisplayOptions`](#Chart.YAxisDisplayOptions) | Returns a reference to the y-axis display options of a chart.                                        |

<a id="property-detail"></a>

## Property detail

<a id="Chart.Datasets"></a>

### *property* Chart.Datasets *: List[[Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)] | [None](https://docs.python.org/3/library/constants.html#None)*

Retrieves all datasets of a chart.

<!-- !! processed by numpydoc !! -->

<a id="Chart.NormalizeYAxis"></a>

### *property* Chart.NormalizeYAxis *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Allows a normalized display of y-axis values, usually for cases where the axis has mixed quantities.
An InvalidOperationException will be thrown if attempting to set to False,
when the Y axis datasets have incompatible Quantity types and the UseAutomaticLimits property is also set to False.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxisDisplayOptions"></a>

### *property* Chart.XAxisDisplayOptions *: [Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions](AxisDisplayOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a reference to the x-axis display options of a chart.

<!-- !! processed by numpydoc !! -->

<a id="Chart.YAxisDisplayOptions"></a>

### *property* Chart.YAxisDisplayOptions *: [Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions](AxisDisplayOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a reference to the y-axis display options of a chart.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Chart.AddDataset"></a>

### Chart.AddDataset(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Adds a dataset to a chart, provided the data is valid.
Adding a name for the dataset is optional, the default name for the nth dataset added is “Series n”.
An InvalidOperationException is thrown if the dataset is either invalid, already added to the chart,
or contains non-positive values when the chart has IsLogarithmic enabled.
```

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetDisplayOptionsForDataset"></a>

### Chart.GetDisplayOptionsForDataset(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions](Dataset2DDisplayOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions)

Returns a reference to the dataset display options for a specific dataset.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetLabelCollectionForDataset"></a>

### Chart.GetLabelCollectionForDataset(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection](LabelCollection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection)

Returns a reference to the label collection for a specific dataset.

<!-- !! processed by numpydoc !! -->

<a id="Chart.RemoveDataset"></a>

### Chart.RemoveDataset(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes a dataset from the chart.

<!-- !! processed by numpydoc !! -->

