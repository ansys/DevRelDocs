# `CurrentLegendSettings`

<a id="ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.Tools.CurrentLegendSettings"></a>

#### *class* Ansys.Mechanical.Graphics.Tools.CurrentLegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a CurrentLegendSettings object. This object holds properties of the CurrentLegendSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
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
| [`SetLowerBound`](#CurrentLegendSettings.SetLowerBound)                 | Sets lower bound value of the specified band.                           |
| [`SetUpperBound`](#CurrentLegendSettings.SetUpperBound)                 | Sets upper bound value of the specified band.                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AllScientificNotation`](#CurrentLegendSettings.AllScientificNotation)   | Whether the result values are displayed in scientific notation.                                    |
| [`ColorScheme`](#CurrentLegendSettings.ColorScheme)                       | Color Scheme for the legend.                                                                       |
| [`Digits`](#CurrentLegendSettings.Digits)                                 | Number of significant digits(min:2, max:8).                                                        |
| [`HighFidelity`](#CurrentLegendSettings.HighFidelity)                     | Whether to replot and improve the synchronization of the result values.                            |
| [`LogarithmicScale`](#CurrentLegendSettings.LogarithmicScale)             | Whether the result values are distributed in a Logarithmic scale.                                  |
| [`NumberOfBands`](#CurrentLegendSettings.NumberOfBands)                   | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend. |
| [`SemiTransparency`](#CurrentLegendSettings.SemiTransparency)             | Whether the legend is semi-transparent.                                                            |

<a id="property-detail"></a>

## Property detail

<a id="CurrentLegendSettings.AllScientificNotation"></a>

### *property* CurrentLegendSettings.AllScientificNotation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.ColorScheme"></a>

### *property* CurrentLegendSettings.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Digits"></a>

### *property* CurrentLegendSettings.Digits *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of significant digits(min:2, max:8).

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.HighFidelity"></a>

### *property* CurrentLegendSettings.HighFidelity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.LogarithmicScale"></a>

### *property* CurrentLegendSettings.LogarithmicScale *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.NumberOfBands"></a>

### *property* CurrentLegendSettings.NumberOfBands *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SemiTransparency"></a>

### *property* CurrentLegendSettings.SemiTransparency *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CurrentLegendSettings.GetBandColor"></a>

### CurrentLegendSettings.GetBandColor(index: System.Int32)

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetBandColorAuto"></a>

### CurrentLegendSettings.GetBandColorAuto(index: System.Int32)

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetLowerBandValueAuto"></a>

### CurrentLegendSettings.GetLowerBandValueAuto(index: System.Int32)

Gets whether the specified lower band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetLowerBound"></a>

### CurrentLegendSettings.GetLowerBound(index: System.Int32)

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetUpperBandValueAuto"></a>

### CurrentLegendSettings.GetUpperBandValueAuto(index: System.Int32)

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.GetUpperBound"></a>

### CurrentLegendSettings.GetUpperBound(index: System.Int32)

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.MakeCopy"></a>

### CurrentLegendSettings.MakeCopy()

Makes a copy of the CurrentLegendSettings object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.Reset"></a>

### CurrentLegendSettings.Reset()

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.ResetColors"></a>

### CurrentLegendSettings.ResetColors()

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetBandColor"></a>

### CurrentLegendSettings.SetBandColor(index: System.Int32, ColorValue: System.UInt32)

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetBandColorAuto"></a>

### CurrentLegendSettings.SetBandColorAuto(index: System.Int32, val: System.Boolean)

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetLowerBound"></a>

### CurrentLegendSettings.SetLowerBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="CurrentLegendSettings.SetUpperBound"></a>

### CurrentLegendSettings.SetUpperBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

