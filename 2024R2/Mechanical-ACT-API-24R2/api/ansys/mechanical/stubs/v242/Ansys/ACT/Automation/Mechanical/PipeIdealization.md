# `PipeIdealization`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PipeIdealization"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PipeIdealization

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PipeIdealization.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PipeIdealization.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PipeIdealization.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PipeIdealization.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PipeIdealization.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PipeIdealization.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PipeIdealization.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PipeIdealization.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PipeIdealization.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PipeIdealization.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PipeIdealization.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PipeIdealization.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PipeIdealization.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PipeIdealization.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#PipeIdealization.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Extend`](#PipeIdealization.Extend)                                   | Gets or sets the Extend.                                      |
| [`Factor`](#PipeIdealization.Factor)                                   | Gets or sets the Factor.                                      |
| [`GeometrySelection`](#PipeIdealization.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`InternalObject`](#PipeIdealization.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PipeIdealization.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#PipeIdealization.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PipeIdealization.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PipeIdealization.Children"></a>

### *property* PipeIdealization.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.DataModelObjectCategory"></a>

### *property* PipeIdealization.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Extend"></a>

### *property* PipeIdealization.Extend *: [Ansys.Mechanical.DataModel.Enums.GrowElbowElementsBy](../../../Mechanical/DataModel/Enums/GrowElbowElementsBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GrowElbowElementsBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Extend.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Factor"></a>

### *property* PipeIdealization.Factor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Factor.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GeometrySelection"></a>

### *property* PipeIdealization.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.InternalObject"></a>

### *property* PipeIdealization.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPipeIdealizationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Properties"></a>

### *property* PipeIdealization.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Suppressed"></a>

### *property* PipeIdealization.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.VisibleProperties"></a>

### *property* PipeIdealization.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PipeIdealization.Activate"></a>

### PipeIdealization.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.CopyTo"></a>

### PipeIdealization.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.CreateParameter"></a>

### PipeIdealization.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Delete"></a>

### PipeIdealization.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Duplicate"></a>

### PipeIdealization.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetChildren"></a>

### PipeIdealization.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetParameter"></a>

### PipeIdealization.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GroupAllSimilarChildren"></a>

### PipeIdealization.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GroupSimilarObjects"></a>

### PipeIdealization.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.PropertyByAPIName"></a>

### PipeIdealization.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.PropertyByName"></a>

### PipeIdealization.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.RemoveParameter"></a>

### PipeIdealization.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

