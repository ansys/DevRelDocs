# `Current`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Current.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Current.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Current.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Current.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Current.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Current.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Current.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Current.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Current.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Current.GetActivateAtLoadStep)     | Gets whether the current is active at the specified load step.                    |
| [`GetChildren`](#Current.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Current.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Current.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Current.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Current.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Current.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Current.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Current.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Current.SetActivateAtLoadStep)     | Sets whether the current is active at the specified load step.                    |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Current.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Current.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Current.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Current.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Current.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Current.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Current.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#Current.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#Current.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#Current.PhaseAngle)                           | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#Current.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Current.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Current.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#Current.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Current.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Current.Children"></a>

### *property* Current.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Current.Comments"></a>

### *property* Current.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Current.DataModelObjectCategory"></a>

### *property* Current.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Current.Figures"></a>

### *property* Current.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Current.Images"></a>

### *property* Current.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Current.InternalObject"></a>

### *property* Current.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Current.Location"></a>

### *property* Current.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Current.Magnitude"></a>

### *property* Current.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Current.NumberOfSegments"></a>

### *property* Current.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Current.PhaseAngle"></a>

### *property* Current.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Current.Properties"></a>

### *property* Current.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Current.ReadOnly"></a>

### *property* Current.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Current.SharedRefBody"></a>

### *property* Current.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Current.Suppressed"></a>

### *property* Current.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Current.VisibleProperties"></a>

### *property* Current.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Current.Activate"></a>

### Current.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Current.AddComment"></a>

### Current.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Current.AddFigure"></a>

### Current.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Current.AddImage"></a>

### Current.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Current.CopyTo"></a>

### Current.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Current.CreateParameter"></a>

### Current.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Delete"></a>

### Current.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Current.Duplicate"></a>

### Current.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetActivateAtLoadStep"></a>

### Current.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the current is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetChildren"></a>

### Current.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetParameter"></a>

### Current.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Current.GroupAllSimilarChildren"></a>

### Current.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Current.GroupSimilarObjects"></a>

### Current.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Current.PromoteToNamedSelection"></a>

### Current.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Current.PropertyByAPIName"></a>

### Current.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Current.PropertyByName"></a>

### Current.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Current.RemoveParameter"></a>

### Current.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Current.SetActivateAtLoadStep"></a>

### Current.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the current is active at the specified load step.

<!-- !! processed by numpydoc !! -->

