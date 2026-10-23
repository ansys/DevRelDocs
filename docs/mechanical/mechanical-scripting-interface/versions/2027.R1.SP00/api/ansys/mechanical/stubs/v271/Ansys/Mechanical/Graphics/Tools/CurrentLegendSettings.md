# `CurrentLegendSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Tools.CurrentLegendSettings"></a>

#### *class* Ansys.Mechanical.Graphics.Tools.CurrentLegendSettings

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Represents a CurrentLegendSettings object. This object holds properties of the CurrentLegendSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`ExportLegend`](#CurrentLegendSettings.ExportLegend)                   | ExportLegend method.                                                    |
| [`GetBandColor`](#CurrentLegendSettings.GetBandColor)                   | Gets the color of the specified band.                                   |
| [`GetBandColorAuto`](#CurrentLegendSettings.GetBandColorAuto)           | Gets whether the specified band is set to Automatic or not.             |
| [`GetLowerBandValueAuto`](#CurrentLegendSettings.GetLowerBandValueAuto) | Gets whether the specified lower band value is set to Automatic or not. |
| [`GetLowerBound`](#CurrentLegendSettings.GetLowerBound)                 | Gets lower bound value of the specified band.                           |
| [`GetUpperBandValueAuto`](#CurrentLegendSettings.GetUpperBandValueAuto) | Gets whether the specified upper band value is set to Automatic or not. |
| [`GetUpperBound`](#CurrentLegendSettings.GetUpperBound)                 | Gets upper bound value of the specified band.                           |
| [`MakeCopy`](#CurrentLegendSettings.MakeCopy)                           | Makes a copy of the CurrentLegendSettings object.                       |
| [`Reset`](#CurrentLegendSettings.Reset)                                 | Resets all legend customizations into default values.                   |
| [`ResetColors`](#CurrentLegendSettings.ResetColors)                     | Resets all colors to default values.                                    |
| [`SetBandColor`](#CurrentLegendSettings.SetBandColor)                   | Sets the color of the specified band.                                   |
| [`SetBandColorAuto`](#CurrentLegendSettings.SetBandColorAuto)           | Sets the specified band to Automatic.                                   |
| [`SetLowerBandValueAuto`](#CurrentLegendSettings.SetLowerBandValueAuto) | SetLowerBandValueAuto method.                                           |
| [`SetLowerBound`](#CurrentLegendSettings.SetLowerBound)                 | Sets lower bound value of the specified band.                           |
| [`SetUpperBandValueAuto`](#CurrentLegendSettings.SetUpperBandValueAuto) | SetUpperBandValueAuto method.                                           |
| [`SetUpperBound`](#CurrentLegendSettings.SetUpperBound)                 | Sets upper bound value of the specified band.                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AllScientificNotation`](#CurrentLegendSettings.AllScientificNotation)   | Whether the result values are displayed in scientific notation.                                    |
| [`ColorScheme`](#CurrentLegendSettings.ColorScheme)                       | Color Scheme for the legend.                                                                       |
| [`Digits`](#CurrentLegendSettings.Digits)                                 | Number of significant digits(min:2, max:8).                                                        |
| [`HighFidelity`](#CurrentLegendSettings.HighFidelity)                     | Whether to replot and improve the synchronization of the result values.                            |
| [`IndependentBands`](#CurrentLegendSettings.IndependentBands)             | Gets or sets the LegendIndependentBandsType. The default value is LegendIndependentBandsType.None  |
| [`LogarithmicScale`](#CurrentLegendSettings.LogarithmicScale)             | Whether the result values are distributed in a Logarithmic scale.                                  |
| [`NumberOfBands`](#CurrentLegendSettings.NumberOfBands)                   | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend. |
| [`SemiTransparency`](#CurrentLegendSettings.SemiTransparency)             | Whether the legend is semi-transparent.                                                            |
| [`Subtitles`](#CurrentLegendSettings.Subtitles)                           | Subtitles property.                                                                                |
| [`Title`](#CurrentLegendSettings.Title)                                   | Title property.                                                                                    |
| [`Title2`](#CurrentLegendSettings.Title2)                                 | Title2 property.                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="CurrentLegendSettings.AllScientificNotation"></a>

### *property* CurrentLegendSettings.AllScientificNotation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.ColorScheme"></a>

### *property* CurrentLegendSettings.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Digits"></a>

### *property* CurrentLegendSettings.Digits *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Number of significant digits(min:2, max:8).

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.HighFidelity"></a>

### *property* CurrentLegendSettings.HighFidelity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.IndependentBands"></a>

### *property* CurrentLegendSettings.IndependentBands *: [Ansys.Mechanical.DataModel.Enums.LegendIndependentBandsType](../../DataModel/Enums/LegendIndependentBandsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LegendIndependentBandsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LegendIndependentBandsType. The default value is LegendIndependentBandsType.None

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.LogarithmicScale"></a>

### *property* CurrentLegendSettings.LogarithmicScale *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.NumberOfBands"></a>

### *property* CurrentLegendSettings.NumberOfBands *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SemiTransparency"></a>

### *property* CurrentLegendSettings.SemiTransparency *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Subtitles"></a>

### *property* CurrentLegendSettings.Subtitles *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Subtitles property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Title"></a>

### *property* CurrentLegendSettings.Title *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Title property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Title2"></a>

### *property* CurrentLegendSettings.Title2 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Title2 property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CurrentLegendSettings.ExportLegend"></a>

### CurrentLegendSettings.ExportLegend(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportLegend method.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetBandColor"></a>

### CurrentLegendSettings.GetBandColor(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetBandColorAuto"></a>

### CurrentLegendSettings.GetBandColorAuto(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetLowerBandValueAuto"></a>

### CurrentLegendSettings.GetLowerBandValueAuto(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the specified lower band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetLowerBound"></a>

### CurrentLegendSettings.GetLowerBound(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetUpperBandValueAuto"></a>

### CurrentLegendSettings.GetUpperBandValueAuto(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetUpperBound"></a>

### CurrentLegendSettings.GetUpperBound(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.MakeCopy"></a>

### CurrentLegendSettings.MakeCopy() → [Ansys.Mechanical.Graphics.Tools.LegendSettings](LegendSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Tools.LegendSettings)

Makes a copy of the CurrentLegendSettings object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Reset"></a>

### CurrentLegendSettings.Reset() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.ResetColors"></a>

### CurrentLegendSettings.ResetColors() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetBandColor"></a>

### CurrentLegendSettings.SetBandColor(index: [int](https://docs.python.org/3/builtins/functions.html#int), ColorValue: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetBandColorAuto"></a>

### CurrentLegendSettings.SetBandColorAuto(index: [int](https://docs.python.org/3/builtins/functions.html#int), val: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetLowerBandValueAuto"></a>

### CurrentLegendSettings.SetLowerBandValueAuto(index: [int](https://docs.python.org/3/builtins/functions.html#int), val: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetLowerBandValueAuto method.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetLowerBound"></a>

### CurrentLegendSettings.SetLowerBound(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetUpperBandValueAuto"></a>

### CurrentLegendSettings.SetUpperBandValueAuto(index: [int](https://docs.python.org/3/builtins/functions.html#int), val: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetUpperBandValueAuto method.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetUpperBound"></a>

### CurrentLegendSettings.SetUpperBound(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

