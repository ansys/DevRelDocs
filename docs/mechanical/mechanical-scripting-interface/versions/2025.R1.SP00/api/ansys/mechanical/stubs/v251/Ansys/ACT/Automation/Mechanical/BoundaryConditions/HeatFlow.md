# `HeatFlow`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HeatFlow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#HeatFlow.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#HeatFlow.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#HeatFlow.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#HeatFlow.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#HeatFlow.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#HeatFlow.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#HeatFlow.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#HeatFlow.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#HeatFlow.GetActivateAtLoadStep)                   | Gets whether the heat flow is active at the specified load step.                  |
| [`GetChildren`](#HeatFlow.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#HeatFlow.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#HeatFlow.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#HeatFlow.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HeatFlow.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#HeatFlow.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#HeatFlow.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#HeatFlow.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#HeatFlow.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#HeatFlow.SetActivateAtLoadStep)                   | Sets whether the heat flow is active at the specified load step.                  |
| [`SetComponentActivateAtLoadStep`](#HeatFlow.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#HeatFlow.Children)                               | Gets the list of children.                                    |
| [`Comments`](#HeatFlow.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HeatFlow.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineAs`](#HeatFlow.DefineAs)                               | Gets or sets the DefineAs.                                    |
| [`Figures`](#HeatFlow.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#HeatFlow.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#HeatFlow.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#HeatFlow.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#HeatFlow.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#HeatFlow.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#HeatFlow.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HeatFlow.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HeatFlow.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#HeatFlow.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#HeatFlow.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="HeatFlow.Children"></a>

### *property* HeatFlow.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Comments"></a>

### *property* HeatFlow.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.DataModelObjectCategory"></a>

### *property* HeatFlow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.DefineAs"></a>

### *property* HeatFlow.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Figures"></a>

### *property* HeatFlow.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Images"></a>

### *property* HeatFlow.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.InternalObject"></a>

### *property* HeatFlow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Location"></a>

### *property* HeatFlow.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Magnitude"></a>

### *property* HeatFlow.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.NumberOfSegments"></a>

### *property* HeatFlow.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Properties"></a>

### *property* HeatFlow.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ReadOnly"></a>

### *property* HeatFlow.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SharedRefBody"></a>

### *property* HeatFlow.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Suppressed"></a>

### *property* HeatFlow.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.VisibleProperties"></a>

### *property* HeatFlow.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFlow.Activate"></a>

### HeatFlow.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddComment"></a>

### HeatFlow.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddFigure"></a>

### HeatFlow.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddImage"></a>

### HeatFlow.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CopyTo"></a>

### HeatFlow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CreateParameter"></a>

### HeatFlow.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Delete"></a>

### HeatFlow.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Duplicate"></a>

### HeatFlow.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetActivateAtLoadStep"></a>

### HeatFlow.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the heat flow is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetChildren"></a>

### HeatFlow.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetComponentActivateAtLoadStep"></a>

### HeatFlow.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetParameter"></a>

### HeatFlow.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupAllSimilarChildren"></a>

### HeatFlow.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupSimilarObjects"></a>

### HeatFlow.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PromoteToNamedSelection"></a>

### HeatFlow.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyByAPIName"></a>

### HeatFlow.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyByName"></a>

### HeatFlow.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.RemoveParameter"></a>

### HeatFlow.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SetActivateAtLoadStep"></a>

### HeatFlow.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the heat flow is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SetComponentActivateAtLoadStep"></a>

### HeatFlow.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

