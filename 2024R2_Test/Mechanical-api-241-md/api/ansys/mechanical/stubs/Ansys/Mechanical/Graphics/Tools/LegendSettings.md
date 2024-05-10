<a id="legendsettings"></a>

# LegendSettings

<a id="LegendSettings"></a>

### *class* LegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a LegendSettings object. This object holds properties of the Standalone LegendSettings.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GetLowerBound`](#LegendSettings.GetLowerBound)                 | Gets lower bound value of the specified band.                           |
|------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`SetLowerBound`](#LegendSettings.SetLowerBound)                 | Sets lower bound value of the specified band.                           |
| [`GetUpperBound`](#LegendSettings.GetUpperBound)                 | Gets upper bound value of the specified band.                           |
| [`SetUpperBound`](#LegendSettings.SetUpperBound)                 | Sets upper bound value of the specified band.                           |
| [`GetBandColor`](#LegendSettings.GetBandColor)                   | Gets the color of the specified band.                                   |
| [`SetBandColor`](#LegendSettings.SetBandColor)                   | Sets the color of the specified band.                                   |
| [`GetBandColorAuto`](#LegendSettings.GetBandColorAuto)           | Gets whether the specified band is set to Automatic or not.             |
| [`SetBandColorAuto`](#LegendSettings.SetBandColorAuto)           | Sets the specified band to Automatic.                                   |
| [`GetUpperBandValueAuto`](#LegendSettings.GetUpperBandValueAuto) | Gets whether the specified upper band value is set to Automatic or not. |
| [`GetLowerBandValueAuto`](#LegendSettings.GetLowerBandValueAuto) | Gets whether the lower specified band value is set to Automatic or not. |
| [`ResetColors`](#LegendSettings.ResetColors)                     | Resets all colors to default values.                                    |
| [`Reset`](#LegendSettings.Reset)                                 | Resets all legend customizations into default values.                   |

### Properties

| [`NumberOfBands`](#LegendSettings.NumberOfBands)                 | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.   |
|------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`AllScientificNotation`](#LegendSettings.AllScientificNotation) | Whether the result values are displayed in scientific notation.                                      |
| [`Digits`](#LegendSettings.Digits)                               | Number of significant digits (min:2 , max:8).                                                        |
| [`ColorScheme`](#LegendSettings.ColorScheme)                     | Color Scheme for the legend.                                                                         |
| [`SemiTransparency`](#LegendSettings.SemiTransparency)           | Whether the legend is semi-transparent.                                                              |
| [`LogarithmicScale`](#LegendSettings.LogarithmicScale)           | Whether the result values are distributed in a Logarithmic scale.                                    |
| [`HighFidelity`](#LegendSettings.HighFidelity)                   | Whether to replot and improve the synchronization of the result values.                              |
| [`Unit`](#LegendSettings.Unit)                                   | The unit for the legend.                                                                             |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics.Tools import LegendSettings
```

<a id="property-detail"></a>

## Property detail

<a id="LegendSettings.NumberOfBands"></a>

### *property* LegendSettings.NumberOfBands *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.AllScientificNotation"></a>

### *property* LegendSettings.AllScientificNotation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.Digits"></a>

### *property* LegendSettings.Digits *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of significant digits (min:2 , max:8).

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.ColorScheme"></a>

### *property* LegendSettings.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#LegendColorSchemeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SemiTransparency"></a>

### *property* LegendSettings.SemiTransparency *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.LogarithmicScale"></a>

### *property* LegendSettings.LogarithmicScale *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.HighFidelity"></a>

### *property* LegendSettings.HighFidelity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.Unit"></a>

### *property* LegendSettings.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The unit for the legend.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LegendSettings.GetLowerBound"></a>

### LegendSettings.GetLowerBound(index: System.Int32)

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetLowerBound"></a>

### LegendSettings.SetLowerBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetUpperBound"></a>

### LegendSettings.GetUpperBound(index: System.Int32)

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetUpperBound"></a>

### LegendSettings.SetUpperBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetBandColor"></a>

### LegendSettings.GetBandColor(index: System.Int32)

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetBandColor"></a>

### LegendSettings.SetBandColor(index: System.Int32, colorValue: System.UInt32)

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetBandColorAuto"></a>

### LegendSettings.GetBandColorAuto(index: System.Int32)

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.SetBandColorAuto"></a>

### LegendSettings.SetBandColorAuto(index: System.Int32, val: System.Boolean)

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetUpperBandValueAuto"></a>

### LegendSettings.GetUpperBandValueAuto(index: System.Int32)

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.GetLowerBandValueAuto"></a>

### LegendSettings.GetLowerBandValueAuto(index: System.Int32)

Gets whether the lower specified band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.ResetColors"></a>

### LegendSettings.ResetColors()

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

<a id="LegendSettings.Reset"></a>

### LegendSettings.Reset()

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->
