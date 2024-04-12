<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Graphics.Tools"></a>

<a id="the-tools-package"></a>

# The `Tools` package

<a id="summary"></a>

## Summary

### Classes

| [`CurrentLegendSettings`](CurrentLegendSettings.md#CurrentLegendSettings)   | Represents a CurrentLegendSettings object. This object holds properties of the CurrentLegendSettings.   |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`LegendSettings`](LegendSettings.md#LegendSettings)                        | Represents a LegendSettings object. This object holds properties of the Standalone LegendSettings.      |

<a id="description"></a>

## Description

Tools subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Tools.CurrentLegendSettings"></a>

### *class* Tools.CurrentLegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CurrentLegendSettings object. This object holds properties of the CurrentLegendSettings.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetBandColor`](#id14)          | Gets the color of the specified band.                                   |
|----------------------------------|-------------------------------------------------------------------------|
| [`SetBandColor`](#id15)          | Sets the color of the specified band.                                   |
| [`GetLowerBound`](#id10)         | Gets lower bound value of the specified band.                           |
| [`SetLowerBound`](#id11)         | Sets lower bound value of the specified band.                           |
| [`GetUpperBound`](#id12)         | Gets upper bound value of the specified band.                           |
| [`SetUpperBound`](#id13)         | Sets upper bound value of the specified band.                           |
| [`GetBandColorAuto`](#id16)      | Gets whether the specified band is set to Automatic or not.             |
| [`SetBandColorAuto`](#id17)      | Sets the specified band to Automatic.                                   |
| [`GetUpperBandValueAuto`](#id18) | Gets whether the specified upper band value is set to Automatic or not. |
| [`GetLowerBandValueAuto`](#id19) | Gets whether the specified lower band value is set to Automatic or not. |
| [`ResetColors`](#id20)           | Resets all colors to default values.                                    |
| [`Reset`](#id21)                 | Resets all legend customizations into default values.                   |
| [`MakeCopy`](#Tools.MakeCopy)    | Makes a copy of the CurrentLegendSettings object.                       |

### Properties

| [`NumberOfBands`](#id0)         | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.   |
|---------------------------------|------------------------------------------------------------------------------------------------------|
| [`AllScientificNotation`](#id3) | Whether the result values are displayed in scientific notation.                                      |
| [`Digits`](#id4)                | Number of significant digits(min:2, max:8).                                                          |
| [`ColorScheme`](#id5)           | Color Scheme for the legend.                                                                         |
| [`SemiTransparency`](#id6)      | Whether the legend is semi-transparent.                                                              |
| [`LogarithmicScale`](#id7)      | Whether the result values are distributed in a Logarithmic scale.                                    |
| [`HighFidelity`](#id8)          | Whether to replot and improve the synchronization of the result values.                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics.Tools import CurrentLegendSettings
```

<a id="property-detail"></a>

## Property detail

<a id="Tools.NumberOfBands"></a>

### *property* Tools.NumberOfBands *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

<a id="Tools.AllScientificNotation"></a>

### *property* Tools.AllScientificNotation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

<a id="Tools.Digits"></a>

### *property* Tools.Digits *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of significant digits(min:2, max:8).

<!-- !! processed by numpydoc !! -->

<a id="Tools.ColorScheme"></a>

### *property* Tools.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#LegendColorSchemeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

<a id="Tools.SemiTransparency"></a>

### *property* Tools.SemiTransparency *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

<a id="Tools.LogarithmicScale"></a>

### *property* Tools.LogarithmicScale *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

<a id="Tools.HighFidelity"></a>

### *property* Tools.HighFidelity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Tools.GetBandColor"></a>

### Tools.GetBandColor(index: System.Int32)

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="Tools.SetBandColor"></a>

### Tools.SetBandColor(index: System.Int32, ColorValue: System.UInt32)

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="Tools.GetLowerBound"></a>

### Tools.GetLowerBound(index: System.Int32)

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="Tools.SetLowerBound"></a>

### Tools.SetLowerBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="Tools.GetUpperBound"></a>

### Tools.GetUpperBound(index: System.Int32)

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="Tools.SetUpperBound"></a>

### Tools.SetUpperBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="Tools.GetBandColorAuto"></a>

### Tools.GetBandColorAuto(index: System.Int32)

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="Tools.SetBandColorAuto"></a>

### Tools.SetBandColorAuto(index: System.Int32, val: System.Boolean)

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

<a id="Tools.GetUpperBandValueAuto"></a>

### Tools.GetUpperBandValueAuto(index: System.Int32)

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="Tools.GetLowerBandValueAuto"></a>

### Tools.GetLowerBandValueAuto(index: System.Int32)

Gets whether the specified lower band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="Tools.ResetColors"></a>

### Tools.ResetColors()

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

<a id="Tools.Reset"></a>

### Tools.Reset()

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->

<a id="Tools.MakeCopy"></a>

### Tools.MakeCopy()

Makes a copy of the CurrentLegendSettings object.

<!-- !! processed by numpydoc !! -->

<a id="Tools.LegendSettings"></a>

### *class* Tools.LegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a LegendSettings object. This object holds properties of the Standalone LegendSettings.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetLowerBound`](#id10)         | Gets lower bound value of the specified band.                           |
|----------------------------------|-------------------------------------------------------------------------|
| [`SetLowerBound`](#id11)         | Sets lower bound value of the specified band.                           |
| [`GetUpperBound`](#id12)         | Gets upper bound value of the specified band.                           |
| [`SetUpperBound`](#id13)         | Sets upper bound value of the specified band.                           |
| [`GetBandColor`](#id14)          | Gets the color of the specified band.                                   |
| [`SetBandColor`](#id15)          | Sets the color of the specified band.                                   |
| [`GetBandColorAuto`](#id16)      | Gets whether the specified band is set to Automatic or not.             |
| [`SetBandColorAuto`](#id17)      | Sets the specified band to Automatic.                                   |
| [`GetUpperBandValueAuto`](#id18) | Gets whether the specified upper band value is set to Automatic or not. |
| [`GetLowerBandValueAuto`](#id19) | Gets whether the lower specified band value is set to Automatic or not. |
| [`ResetColors`](#id20)           | Resets all colors to default values.                                    |
| [`Reset`](#id21)                 | Resets all legend customizations into default values.                   |

### Properties

| [`NumberOfBands`](#id0)         | Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.   |
|---------------------------------|------------------------------------------------------------------------------------------------------|
| [`AllScientificNotation`](#id3) | Whether the result values are displayed in scientific notation.                                      |
| [`Digits`](#id4)                | Number of significant digits (min:2 , max:8).                                                        |
| [`ColorScheme`](#id5)           | Color Scheme for the legend.                                                                         |
| [`SemiTransparency`](#id6)      | Whether the legend is semi-transparent.                                                              |
| [`LogarithmicScale`](#id7)      | Whether the result values are distributed in a Logarithmic scale.                                    |
| [`HighFidelity`](#id8)          | Whether to replot and improve the synchronization of the result values.                              |
| [`Unit`](#Tools.Unit)           | The unit for the legend.                                                                             |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics.Tools import LegendSettings
```

<a id="id2"></a>

## Property detail

<a id="id0"></a>

### *property* Tools.NumberOfBands *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of bands on the legend (min:3, max:30). Bands are added/removed from the top of the legend.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### *property* Tools.AllScientificNotation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are displayed in scientific notation.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### *property* Tools.Digits *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of significant digits (min:2 , max:8).

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* Tools.ColorScheme *: [Ansys.Mechanical.DataModel.Enums.LegendColorSchemeType](../../DataModel/Enums/LegendColorSchemeType.md#LegendColorSchemeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Color Scheme for the legend.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* Tools.SemiTransparency *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the legend is semi-transparent.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* Tools.LogarithmicScale *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the result values are distributed in a Logarithmic scale.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* Tools.HighFidelity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to replot and improve the synchronization of the result values.

<!-- !! processed by numpydoc !! -->

<a id="Tools.Unit"></a>

### *property* Tools.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The unit for the legend.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

## Method detail

<a id="id10"></a>

### Tools.GetLowerBound(index: System.Int32)

Gets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### Tools.SetLowerBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets lower bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### Tools.GetUpperBound(index: System.Int32)

Gets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### Tools.SetUpperBound(index: System.Int32, value: Ansys.Core.Units.Quantity)

Sets upper bound value of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### Tools.GetBandColor(index: System.Int32)

Gets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### Tools.SetBandColor(index: System.Int32, colorValue: System.UInt32)

Sets the color of the specified band.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### Tools.GetBandColorAuto(index: System.Int32)

Gets whether the specified band is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### Tools.SetBandColorAuto(index: System.Int32, val: System.Boolean)

Sets the specified band to Automatic.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### Tools.GetUpperBandValueAuto(index: System.Int32)

Gets whether the specified upper band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### Tools.GetLowerBandValueAuto(index: System.Int32)

Gets whether the lower specified band value is set to Automatic or not.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### Tools.ResetColors()

Resets all colors to default values.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### Tools.Reset()

Resets all legend customizations into default values.

<!-- !! processed by numpydoc !! -->
