# `ReadOnlyChart`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.ReadOnlyChart"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.ReadOnlyChart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

ReadOnlyChart is used by objects to display data as a chart.
The data itself is treated as read only and cannot be modified.
Additional options are provided to customize the presentation of the data itself.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`GetDisplayOptionsForDataset`](#ReadOnlyChart.GetDisplayOptionsForDataset)   | Returns a reference to the dataset display options for a specific dataset.   |
| [`GetLabelCollectionForDataset`](#ReadOnlyChart.GetLabelCollectionForDataset) | Returns a reference to the label collection for a specific dataset.          |

### Properties

| Name | Description |
|-------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Datasets`](#ReadOnlyChart.Datasets)                       | Retrieves all datasets of a chart.                                                                   |
| [`NormalizeYAxis`](#ReadOnlyChart.NormalizeYAxis)           | Allows a normalized display of y-axis values, usually for cases where the axis has mixed quantities. |
| [`XAxisDisplayOptions`](#ReadOnlyChart.XAxisDisplayOptions) | Returns a reference to the x-axis display options of a chart.                                        |
| [`YAxisDisplayOptions`](#ReadOnlyChart.YAxisDisplayOptions) | Returns a reference to the y-axis display options of a chart.                                        |

<a id="property-detail"></a>

## Property detail

<a id="ReadOnlyChart.Datasets"></a>

### *property* ReadOnlyChart.Datasets *: List[[Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)] | [None](https://docs.python.org/3/library/constants.html#None)*

Retrieves all datasets of a chart.

<!-- !! processed by numpydoc !! -->

<a id="ReadOnlyChart.NormalizeYAxis"></a>

### *property* ReadOnlyChart.NormalizeYAxis *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Allows a normalized display of y-axis values, usually for cases where the axis has mixed quantities.
An InvalidOperationException will be thrown if attempting to set to False,
when the Y axis datasets have incompatible Quantity types and the UseAutomaticLimits property is also set to False.

<!-- !! processed by numpydoc !! -->

<a id="ReadOnlyChart.XAxisDisplayOptions"></a>

### *property* ReadOnlyChart.XAxisDisplayOptions *: [Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions](AxisDisplayOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a reference to the x-axis display options of a chart.

<!-- !! processed by numpydoc !! -->

<a id="ReadOnlyChart.YAxisDisplayOptions"></a>

### *property* ReadOnlyChart.YAxisDisplayOptions *: [Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions](AxisDisplayOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a reference to the y-axis display options of a chart.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ReadOnlyChart.GetDisplayOptionsForDataset"></a>

### ReadOnlyChart.GetDisplayOptionsForDataset(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions](Dataset2DDisplayOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions)

Returns a reference to the dataset display options for a specific dataset.

<!-- !! processed by numpydoc !! -->

<a id="ReadOnlyChart.GetLabelCollectionForDataset"></a>

### ReadOnlyChart.GetLabelCollectionForDataset(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../Dataset/Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection](LabelCollection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection)

Returns a reference to the label collection for a specific dataset.

<!-- !! processed by numpydoc !! -->

