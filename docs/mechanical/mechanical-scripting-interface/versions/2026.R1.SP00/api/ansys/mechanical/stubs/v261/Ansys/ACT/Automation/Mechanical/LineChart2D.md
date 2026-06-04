# `LineChart2D`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.LineChart2D"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LineChart2D

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An object in the Tree to display data imported from various source objects under “Solution” or from files.
It utilizes Ansys.Mechanical.DataModel.Utilities.Charts.Chart for displaying the imported data and provides users with the flexibility to modify the data to some extent
(eg. deleting, hiding/showing, modifying their display and applying operations on them).

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LineChart2D.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LineChart2D.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LineChart2D.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#LineChart2D.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LineChart2D.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetIndependentVariable`](#LineChart2D.GetIndependentVariable)   | Returns the Dataset2D object chosen as the Independent Variable of the Chart.     |
| [`GetParameter`](#LineChart2D.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LineChart2D.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LineChart2D.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LineChart2D.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LineChart2D.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LineChart2D.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetIndependentVariable`](#LineChart2D.SetIndependentVariable)   | Sets the Dataset2D object chosen as the Independent Variable of the Chart.        |
| [`Update`](#LineChart2D.Update)                                   | Fetches the latest results from the modified Source object(s)                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Chart`](#LineChart2D.Chart)                                     | Gets the chart object on Line Chart.                          |
| [`Children`](#LineChart2D.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#LineChart2D.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`InternalObject`](#LineChart2D.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LineChart2D.Properties)                           | Gets the list of properties for this object.                  |
| [`Source`](#LineChart2D.Source)                                   | Gets or sets source objects.                                  |
| [`Suppressed`](#LineChart2D.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LineChart2D.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LineChart2D.Chart"></a>

### *property* LineChart2D.Chart *: Ansys.ACT.Interfaces.Mechanical.IChart | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the chart object on Line Chart.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Children"></a>

### *property* LineChart2D.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.DataModelObjectCategory"></a>

### *property* LineChart2D.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.InternalObject"></a>

### *property* LineChart2D.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBasicResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Properties"></a>

### *property* LineChart2D.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Source"></a>

### *property* LineChart2D.Source *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets source objects.
When setting, all datasets are copied from the specified sources and added to the chart object owned by LineChart2D.
We will ignore unsupported objects and import the ones that are supported.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Suppressed"></a>

### *property* LineChart2D.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.VisibleProperties"></a>

### *property* LineChart2D.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LineChart2D.Activate"></a>

### LineChart2D.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CopyTo"></a>

### LineChart2D.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CreateParameter"></a>

### LineChart2D.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Duplicate"></a>

### LineChart2D.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetChildren"></a>

### LineChart2D.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetIndependentVariable"></a>

### LineChart2D.GetIndependentVariable() → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../../../Mechanical/DataModel/Utilities/Dataset/Dataset2D.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

Returns the Dataset2D object chosen as the Independent Variable of the Chart.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetParameter"></a>

### LineChart2D.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupAllSimilarChildren"></a>

### LineChart2D.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupSimilarObjects"></a>

### LineChart2D.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyByAPIName"></a>

### LineChart2D.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyByName"></a>

### LineChart2D.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.RemoveParameter"></a>

### LineChart2D.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.SetIndependentVariable"></a>

### LineChart2D.SetIndependentVariable(input_dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../../../Mechanical/DataModel/Utilities/Dataset/Dataset2D.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Dataset2D object chosen as the Independent Variable of the Chart.

Chart data are constructed using the chosen Dataset2D's Y-values as the Independent Variable and
the Y-values from the other datasets as the Dependent Variable. Only Y-values at intersecting X-values from the datasets are picked;
no interpolation is performed for missing X-values.

An input of "None" returns the chart to its original state.
If any dataset contains negative values that conflict with the Logarithmic setting of a chart axis, then Logarithmic for that axis is disabled.
An InvalidOperationException is thrown if any Dataset on the Chart is not strictly monotonic.
An ArgumentException is thrown if the chosen Independent Variable is not a Dataset on the Chart.
```

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Update"></a>

### LineChart2D.Update() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Fetches the latest results from the modified Source object(s)
and replaces the Datasets originally imported from the respective Source(s).
If any dataset contains negative values that conflict with the Logarithmic setting of a chart axis, then Logarithmic for that axis is disabled.
If the revised datasets from the Update operation conflict with the existing X-axis quantity on the chart,
the Update operation is aborted with an InvalidOperationException and the old data is restored.
```

<!-- !! processed by numpydoc !! -->

