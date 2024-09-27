# `LineChart2D`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.LineChart2D"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.LineChart2D

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LineChart2D.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LineChart2D.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LineChart2D.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LineChart2D.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#LineChart2D.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LineChart2D.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LineChart2D.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LineChart2D.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LineChart2D.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LineChart2D.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LineChart2D.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LineChart2D.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#LineChart2D.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#LineChart2D.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#LineChart2D.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MultiScopedCurveId`](#LineChart2D.MultiScopedCurveId)           | Gets or sets the OutlineSelection.                            |
| [`Properties`](#LineChart2D.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#LineChart2D.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LineChart2D.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LineChart2D.Children"></a>

### *property* LineChart2D.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.DataModelObjectCategory"></a>

### *property* LineChart2D.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.InternalObject"></a>

### *property* LineChart2D.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBasicResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.MultiScopedCurveId"></a>

### *property* LineChart2D.MultiScopedCurveId *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Properties"></a>

### *property* LineChart2D.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Suppressed"></a>

### *property* LineChart2D.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.VisibleProperties"></a>

### *property* LineChart2D.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LineChart2D.Activate"></a>

### LineChart2D.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CopyTo"></a>

### LineChart2D.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CreateParameter"></a>

### LineChart2D.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Duplicate"></a>

### LineChart2D.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetChildren"></a>

### LineChart2D.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetParameter"></a>

### LineChart2D.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupAllSimilarChildren"></a>

### LineChart2D.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupSimilarObjects"></a>

### LineChart2D.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyByAPIName"></a>

### LineChart2D.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyByName"></a>

### LineChart2D.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.RemoveParameter"></a>

### LineChart2D.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

