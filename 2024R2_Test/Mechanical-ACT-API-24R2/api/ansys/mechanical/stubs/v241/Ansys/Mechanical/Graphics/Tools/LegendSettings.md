# `LegendSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.Tools.LegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a LegendSettings object. This object holds properties of the Standalone LegendSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------|-------------------------------------------------------------------------|
| `GetLowerBound`         | Gets lower bound value of the specified band.                           |
| `SetLowerBound`         | Sets lower bound value of the specified band.                           |
| `GetUpperBound`         | Gets upper bound value of the specified band.                           |
| `SetUpperBound`         | Sets upper bound value of the specified band.                           |
| `GetBandColor`          | Gets the color of the specified band.                                   |
| `SetBandColor`          | Sets the color of the specified band.                                   |
| `GetBandColorAuto`      | Gets whether the specified band is set to Automatic or not.             |
| `SetBandColorAuto`      | Sets the specified band to Automatic.                                   |
| `GetUpperBandValueAuto` | Gets whether the specified upper band value is set to Automatic or not. |
| `GetLowerBandValueAuto` | Gets whether the lower specified band value is set to Automatic or not. |
| `ResetColors`           | Resets all colors to default values.                                    |
| `Reset`                 | Resets all legend customizations into default values.                   |

### Properties

| Name | Description |
|-------------------------|------------------------------------------------------------------------------------------------------|
| `NumberOfBands`         | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.   |
| `AllScientificNotation` | Whether the result values are displayed in scientific notation.                                      |
| `Digits`                | Number of significant digits (min:2 , max:8).                                                        |
| `ColorScheme`           | Color Scheme for the legend.                                                                         |
| `SemiTransparency`      | Whether the legend is semi-transparent.                                                              |
| `LogarithmicScale`      | Whether the result values are distributed in a Logarithmic scale.                                    |
| `HighFidelity`          | Whether to replot and improve the synchronization of the result values.                              |
| `Unit`                  | The unit for the legend.                                                                             |

<a id="property-detail"></a>

## Property detail

### *property* LegendSettings.NumberOfBands *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.AllScientificNotation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.Digits *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of significant digits (min:2 , max:8).

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.SemiTransparency *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.LogarithmicScale *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.HighFidelity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

### *property* LegendSettings.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The unit for the legend.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### LegendSettings.GetLowerBound(index: System.Int32)

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

### LegendSettings.SetLowerBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

### LegendSettings.GetUpperBound(index: System.Int32)

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

### LegendSettings.SetUpperBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

### LegendSettings.GetBandColor(index: System.Int32)

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

### LegendSettings.SetBandColor(index: System.Int32, colorValue: System.UInt32)

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

### LegendSettings.GetBandColorAuto(index: System.Int32)

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

### LegendSettings.SetBandColorAuto(index: System.Int32, val: System.Boolean)

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

### LegendSettings.GetUpperBandValueAuto(index: System.Int32)

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

### LegendSettings.GetLowerBandValueAuto(index: System.Int32)

Gets whether the lower specified band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

### LegendSettings.ResetColors()

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

### LegendSettings.Reset()

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->

