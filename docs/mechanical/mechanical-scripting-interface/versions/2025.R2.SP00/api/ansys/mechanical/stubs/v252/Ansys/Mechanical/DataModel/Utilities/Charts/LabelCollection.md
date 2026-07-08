# `LabelCollection`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class to manage labels on the chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [`CreateAndAddLabel`](#LabelCollection.CreateAndAddLabel)                 | Creates a new label and adds it to the chart at a specified position, where the label_text parameter is optional.    |
| [`CreateLabelOnSegment`](#LabelCollection.CreateLabelOnSegment)           | Create a label on the segment of the dataset starting from the data point at a specified distance along the segment. |
| [`CreateLabelsAtXCoordinate`](#LabelCollection.CreateLabelsAtXCoordinate) | Creates label(s) on the dataset at a specified X coordinate.                                                         |
| [`CreateLabelsAtYCoordinate`](#LabelCollection.CreateLabelsAtYCoordinate) | Creates label(s) on the dataset at a specified Y coordinate.                                                         |
| [`DeleteLabel`](#LabelCollection.DeleteLabel)                             | Deletes a label from a specific position in the chart.                                                               |

### Properties

| Name | Description |
|---------------------------------------|---------------------------------------------------------------------------------------------------|
| [`Labels`](#LabelCollection.Labels)   | Gets an IEnumerable of ILabelInfo objects, which contain information about the underlying label   |

<a id="property-detail"></a>

## Property detail

<a id="LabelCollection.Labels"></a>

### *property* LabelCollection.Labels *: Iterable[Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection.LabelInfo] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets an IEnumerable of ILabelInfo objects, which contain information about the underlying label

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LabelCollection.CreateAndAddLabel"></a>

### LabelCollection.CreateAndAddLabel(x_anchor: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), y_anchor: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), label_text: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection.LabelInfo

```text
Creates a new label and adds it to the chart at a specified position, where the label_text parameter is optional.
The default label text is: “x: <x_value>, y: <y_value>” (example: “x: 0.3497, y: 1.9821”).
An InvalidOperationException will be thrown when creating a Label at a location already assigned to another Label.
```

<!-- !! processed by numpydoc !! -->

<a id="LabelCollection.CreateLabelOnSegment"></a>

### LabelCollection.CreateLabelOnSegment(data_point_index: [int](https://docs.python.org/3/library/functions.html#int), fractional_distance: [float](https://docs.python.org/3/library/functions.html#float)) → Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection.LabelInfo

```text
Create a label on the segment of the dataset starting from the data point at a specified distance along the segment.
Distance values are fractional going from 0 to 1 (first datapoint at 0) along the length of the segment
An ArgumentException will be thrown when creating a Label at a location already assigned to another Label.
```

<!-- !! processed by numpydoc !! -->

<a id="LabelCollection.CreateLabelsAtXCoordinate"></a>

### LabelCollection.CreateLabelsAtXCoordinate(x_anchor: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → List[Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection.LabelInfo]

```text
Creates label(s) on the dataset at a specified X coordinate.
This API may return multiple `LabelInfo` references in case the corresponding dataset has more than one Y-value for the given X-value (for eg. Spiral graphs).
Each `LabelInfo` reference corresponds to the multiple anchor positions thus obtained.
An ArgumentException will be thrown when creating a Label at a location already assigned to another Label.
```

<!-- !! processed by numpydoc !! -->

<a id="LabelCollection.CreateLabelsAtYCoordinate"></a>

### LabelCollection.CreateLabelsAtYCoordinate(y_anchor: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → List[Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection.LabelInfo]

```text
Creates label(s) on the dataset at a specified Y coordinate.
This API may return multiple `LabelInfo` references in case the corresponding dataset has more than one X-value for a given Y-value.
Each `LabelInfo` reference corresponds to the multiple anchor positions thus obtained.
An ArgumentException will be thrown when creating a Label at a location already assigned to another Label.
```

<!-- !! processed by numpydoc !! -->

<a id="LabelCollection.DeleteLabel"></a>

### LabelCollection.DeleteLabel(label: Ansys.Mechanical.DataModel.Utilities.Charts.LabelCollection.LabelInfo) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Deletes a label from a specific position in the chart.
An InvalidOperationException will be thrown when deleting a Label that does not exist.
```

<!-- !! processed by numpydoc !! -->

