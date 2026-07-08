# `ChartDisplayOptions`

<a id="ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Utilities.Charts.ChartDisplayOptions"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.ChartDisplayOptions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class that exposes methods/properties to customize the display settings of a chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [`CopySettingsFrom`](#ChartDisplayOptions.CopySettingsFrom)   | Copies the settings used in the input ChartDisplayOptions reference to the ChartDisplayOptions calling this method.   |

### Properties

| Name | Description |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`LegendPosition`](#ChartDisplayOptions.LegendPosition)   | Gets or sets the position of the legend. The default option is “ProgramControlled”.   |
| [`ShowLegend`](#ChartDisplayOptions.ShowLegend)           | Gets or sets the visibility of the legend.                                            |
| [`Title`](#ChartDisplayOptions.Title)                     | Gets or sets the chart title.                                                         |
| [`TitleFontSize`](#ChartDisplayOptions.TitleFontSize)     | Gets or sets the font size of the chart title.                                        |

<a id="property-detail"></a>

## Property detail

<a id="ChartDisplayOptions.LegendPosition"></a>

### *property* ChartDisplayOptions.LegendPosition *: [Ansys.Mechanical.DataModel.MechanicalEnums.Charts.LegendPosition](../../MechanicalEnums/Charts/LegendPosition.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.Charts.LegendPosition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the position of the legend. The default option is “ProgramControlled”.

<!-- !! processed by numpydoc !! -->

<a id="ChartDisplayOptions.ShowLegend"></a>

### *property* ChartDisplayOptions.ShowLegend *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the visibility of the legend.

<!-- !! processed by numpydoc !! -->

<a id="ChartDisplayOptions.Title"></a>

### *property* ChartDisplayOptions.Title *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the chart title.

<!-- !! processed by numpydoc !! -->

<a id="ChartDisplayOptions.TitleFontSize"></a>

### *property* ChartDisplayOptions.TitleFontSize *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the font size of the chart title.
An ArgumentException is thrown for values less than 1.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChartDisplayOptions.CopySettingsFrom"></a>

### ChartDisplayOptions.CopySettingsFrom(display_options_original: [Ansys.Mechanical.DataModel.Utilities.Charts.ChartDisplayOptions](#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Utilities.Charts.ChartDisplayOptions)) → [None](https://docs.python.org/3/library/constants.html#None)

Copies the settings used in the input ChartDisplayOptions reference to the ChartDisplayOptions calling this method.

<!-- !! processed by numpydoc !! -->

