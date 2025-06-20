# `AxisDisplayOptions`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class that exposes methods/properties to customize the display of a chart axis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [`CopySettingsFrom`](#AxisDisplayOptions.CopySettingsFrom)   | Copies the settings used in the input AxisDisplayOptions reference to the AxisDisplayOptions calling this method.   |

### Properties

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------------------------|
| [`AxisLabel`](#AxisDisplayOptions.AxisLabel)                   | Gets or sets the axis label.                                    |
| [`IsLogarithmic`](#AxisDisplayOptions.IsLogarithmic)           | Gets or sets whether the axis is logarithmic.                   |
| [`LowerLimit`](#AxisDisplayOptions.LowerLimit)                 | Gets the default lower limit of the axis range.                 |
| [`MaximumLimit`](#AxisDisplayOptions.MaximumLimit)             | Gets or sets the Maximum limit used for the chart display.      |
| [`MinimumLimit`](#AxisDisplayOptions.MinimumLimit)             | Gets or sets the Minimum limit used for the chart display.      |
| [`ShowGridLines`](#AxisDisplayOptions.ShowGridLines)           | Gets or sets the visibility of the axis gridlines.              |
| [`UpperLimit`](#AxisDisplayOptions.UpperLimit)                 | Gets the default higher limit of the axis range.                |
| [`UseAutomaticLimits`](#AxisDisplayOptions.UseAutomaticLimits) | Gets or sets whether axis limits are automatic or user-defined. |

<a id="property-detail"></a>

## Property detail

<a id="AxisDisplayOptions.AxisLabel"></a>

### *property* AxisDisplayOptions.AxisLabel *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the axis label.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.IsLogarithmic"></a>

### *property* AxisDisplayOptions.IsLogarithmic *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the axis is logarithmic.
A NotSupportedException is thrown if a dataset contains a non-positive value on the chosen axis.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.LowerLimit"></a>

### *property* AxisDisplayOptions.LowerLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the default lower limit of the axis range.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.MaximumLimit"></a>

### *property* AxisDisplayOptions.MaximumLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum limit used for the chart display.
If UseAutomaticLimits is True, a NotSupportedException is thrown on the setter.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.MinimumLimit"></a>

### *property* AxisDisplayOptions.MinimumLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum limit used for the chart display.
If UseAutomaticLimits is True, a NotSupportedException is thrown on the setter.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.ShowGridLines"></a>

### *property* AxisDisplayOptions.ShowGridLines *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the visibility of the axis gridlines.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.UpperLimit"></a>

### *property* AxisDisplayOptions.UpperLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the default higher limit of the axis range.

<!-- !! processed by numpydoc !! -->

<a id="AxisDisplayOptions.UseAutomaticLimits"></a>

### *property* AxisDisplayOptions.UseAutomaticLimits *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether axis limits are automatic or user-defined.
When True, the MinimumLimit and MaximumLimit will be set to the LowerLimit and UpperLimit respectively.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AxisDisplayOptions.CopySettingsFrom"></a>

### AxisDisplayOptions.CopySettingsFrom(display_options_original: [Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions](#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.AxisDisplayOptions)) → [None](https://docs.python.org/3/library/constants.html#None)

Copies the settings used in the input AxisDisplayOptions reference to the AxisDisplayOptions calling this method.

<!-- !! processed by numpydoc !! -->

