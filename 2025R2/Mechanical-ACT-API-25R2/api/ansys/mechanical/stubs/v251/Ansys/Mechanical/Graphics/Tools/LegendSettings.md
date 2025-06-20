# `LegendSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Tools.LegendSettings"></a>

#### *class* Ansys.Mechanical.Graphics.Tools.LegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a LegendSettings object. This object holds properties of the Standalone LegendSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`GetBandColor`](#LegendSettings.GetBandColor)                   | Gets the color of the specified band.                                   |
| [`GetBandColorAuto`](#LegendSettings.GetBandColorAuto)           | Gets whether the specified band is set to Automatic or not.             |
| [`GetLowerBandValueAuto`](#LegendSettings.GetLowerBandValueAuto) | Gets whether the lower specified band value is set to Automatic or not. |
| [`GetLowerBound`](#LegendSettings.GetLowerBound)                 | Gets lower bound value of the specified band.                           |
| [`GetUpperBandValueAuto`](#LegendSettings.GetUpperBandValueAuto) | Gets whether the specified upper band value is set to Automatic or not. |
| [`GetUpperBound`](#LegendSettings.GetUpperBound)                 | Gets upper bound value of the specified band.                           |
| [`Reset`](#LegendSettings.Reset)                                 | Resets all legend customizations into default values.                   |
| [`ResetColors`](#LegendSettings.ResetColors)                     | Resets all colors to default values.                                    |
| [`SetBandColor`](#LegendSettings.SetBandColor)                   | Sets the color of the specified band.                                   |
| [`SetBandColorAuto`](#LegendSettings.SetBandColorAuto)           | Sets the specified band to Automatic.                                   |
| [`SetLowerBound`](#LegendSettings.SetLowerBound)                 | Sets lower bound value of the specified band.                           |
| [`SetUpperBound`](#LegendSettings.SetUpperBound)                 | Sets upper bound value of the specified band.                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AllScientificNotation`](#LegendSettings.AllScientificNotation)   | Whether the result values are displayed in scientific notation.                                    |
| [`ColorScheme`](#LegendSettings.ColorScheme)                       | Color Scheme for the legend.                                                                       |
| [`Digits`](#LegendSettings.Digits)                                 | Number of significant digits (min:2 , max:8).                                                      |
| [`HighFidelity`](#LegendSettings.HighFidelity)                     | Whether to replot and improve the synchronization of the result values.                            |
| [`LogarithmicScale`](#LegendSettings.LogarithmicScale)             | Whether the result values are distributed in a Logarithmic scale.                                  |
| [`NumberOfBands`](#LegendSettings.NumberOfBands)                   | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend. |
| [`SemiTransparency`](#LegendSettings.SemiTransparency)             | Whether the legend is semi-transparent.                                                            |
| [`Unit`](#LegendSettings.Unit)                                     | The unit for the legend.                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="LegendSettings.AllScientificNotation"></a>

### *property* LegendSettings.AllScientificNotation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.ColorScheme"></a>

### *property* LegendSettings.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.Digits"></a>

### *property* LegendSettings.Digits *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Number of significant digits (min:2 , max:8).

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.HighFidelity"></a>

### *property* LegendSettings.HighFidelity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.LogarithmicScale"></a>

### *property* LegendSettings.LogarithmicScale *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.NumberOfBands"></a>

### *property* LegendSettings.NumberOfBands *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SemiTransparency"></a>

### *property* LegendSettings.SemiTransparency *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.Unit"></a>

### *property* LegendSettings.Unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The unit for the legend.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LegendSettings.GetBandColor"></a>

### LegendSettings.GetBandColor(index: [int](https://docs.python.org/3/library/functions.html#int))

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetBandColorAuto"></a>

### LegendSettings.GetBandColorAuto(index: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetLowerBandValueAuto"></a>

### LegendSettings.GetLowerBandValueAuto(index: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the lower specified band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetLowerBound"></a>

### LegendSettings.GetLowerBound(index: [int](https://docs.python.org/3/library/functions.html#int))

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetUpperBandValueAuto"></a>

### LegendSettings.GetUpperBandValueAuto(index: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetUpperBound"></a>

### LegendSettings.GetUpperBound(index: [int](https://docs.python.org/3/library/functions.html#int))

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.Reset"></a>

### LegendSettings.Reset()

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.ResetColors"></a>

### LegendSettings.ResetColors()

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetBandColor"></a>

### LegendSettings.SetBandColor(index: [int](https://docs.python.org/3/library/functions.html#int), colorValue: [int](https://docs.python.org/3/library/functions.html#int))

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetBandColorAuto"></a>

### LegendSettings.SetBandColorAuto(index: [int](https://docs.python.org/3/library/functions.html#int), val: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetLowerBound"></a>

### LegendSettings.SetLowerBound(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetUpperBound"></a>

### LegendSettings.SetUpperBound(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

