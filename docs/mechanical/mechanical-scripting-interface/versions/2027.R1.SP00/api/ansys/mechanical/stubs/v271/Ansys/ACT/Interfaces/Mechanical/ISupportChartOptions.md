# `ISupportChartOptions`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.ISupportChartOptions"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.ISupportChartOptions

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

An interface that provides common functionalities to every object in the Tree that uses the ReadOnlyChart object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------|
| [`GetChartAxisDisplayUnit`](#ISupportChartOptions.GetChartAxisDisplayUnit)   | GetChartAxisDisplayUnit method.   |
| [`GetGraphInteractionEvent`](#ISupportChartOptions.GetGraphInteractionEvent) | GetGraphInteractionEvent method.  |
| [`GetNumberOfCharts`](#ISupportChartOptions.GetNumberOfCharts)               | GetNumberOfCharts method.         |
| [`SetGraphInteractionEvent`](#ISupportChartOptions.SetGraphInteractionEvent) | SetGraphInteractionEvent method.  |

### Properties

| Name | Description |
|--------------------------------------------|--------------------------------------------|
| [`Charts`](#ISupportChartOptions.Charts)   | Gets a list of all charts on the object.   |

<a id="property-detail"></a>

## Property detail

<a id="ISupportChartOptions.Charts"></a>

### *property* ISupportChartOptions.Charts *: List[Ansys.ACT.Interfaces.Mechanical.IReadOnlyChart] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of all charts on the object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ISupportChartOptions.GetChartAxisDisplayUnit"></a>

### ISupportChartOptions.GetChartAxisDisplayUnit(chart_idx: [int](https://docs.python.org/3/builtins/functions.html#int), axis_id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetChartAxisDisplayUnit method.

<!-- !! processed by numpydoc !! -->

<a id="ISupportChartOptions.GetGraphInteractionEvent"></a>

### ISupportChartOptions.GetGraphInteractionEvent(ppEventArgs: Any, chartIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetGraphInteractionEvent method.

<!-- !! processed by numpydoc !! -->

<a id="ISupportChartOptions.GetNumberOfCharts"></a>

### ISupportChartOptions.GetNumberOfCharts() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNumberOfCharts method.

<!-- !! processed by numpydoc !! -->

<a id="ISupportChartOptions.SetGraphInteractionEvent"></a>

### ISupportChartOptions.SetGraphInteractionEvent(pEventArgs: Any, chartIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetGraphInteractionEvent method.

<!-- !! processed by numpydoc !! -->

