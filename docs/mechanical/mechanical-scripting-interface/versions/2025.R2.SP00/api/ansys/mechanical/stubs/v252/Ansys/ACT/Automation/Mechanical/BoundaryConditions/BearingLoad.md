# `BearingLoad`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BearingLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BearingLoad.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#BearingLoad.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#BearingLoad.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#BearingLoad.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#BearingLoad.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BearingLoad.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#BearingLoad.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#BearingLoad.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#BearingLoad.GetActivateAtLoadStep)                   | Gets whether the bearing load is active at the specified load step.               |
| [`GetChildren`](#BearingLoad.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#BearingLoad.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#BearingLoad.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BearingLoad.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BearingLoad.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#BearingLoad.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#BearingLoad.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#BearingLoad.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BearingLoad.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#BearingLoad.SetActivateAtLoadStep)                   | Sets whether the bearing load is active at the specified load step.               |
| [`SetComponentActivateAtLoadStep`](#BearingLoad.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#BearingLoad.Children)                               | Gets the list of children.                                    |
| [`Comments`](#BearingLoad.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#BearingLoad.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#BearingLoad.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#BearingLoad.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Direction`](#BearingLoad.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#BearingLoad.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#BearingLoad.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BearingLoad.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#BearingLoad.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#BearingLoad.Magnitude)                             | Gets the Magnitude.                                           |
| [`Properties`](#BearingLoad.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#BearingLoad.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#BearingLoad.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#BearingLoad.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#BearingLoad.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#BearingLoad.XComponent)                           | Gets the XComponent.                                          |
| [`YComponent`](#BearingLoad.YComponent)                           | Gets the YComponent.                                          |
| [`ZComponent`](#BearingLoad.ZComponent)                           | Gets the ZComponent.                                          |

<a id="property-detail"></a>

## Property detail

<a id="BearingLoad.Children"></a>

### *property* BearingLoad.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Comments"></a>

### *property* BearingLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CoordinateSystem"></a>

### *property* BearingLoad.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.DataModelObjectCategory"></a>

### *property* BearingLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.DefineBy"></a>

### *property* BearingLoad.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Direction"></a>

### *property* BearingLoad.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Figures"></a>

### *property* BearingLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Images"></a>

### *property* BearingLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.InternalObject"></a>

### *property* BearingLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Location"></a>

### *property* BearingLoad.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Magnitude"></a>

### *property* BearingLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Properties"></a>

### *property* BearingLoad.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ReadOnly"></a>

### *property* BearingLoad.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SharedRefBody"></a>

### *property* BearingLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Suppressed"></a>

### *property* BearingLoad.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.VisibleProperties"></a>

### *property* BearingLoad.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.XComponent"></a>

### *property* BearingLoad.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.YComponent"></a>

### *property* BearingLoad.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ZComponent"></a>

### *property* BearingLoad.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BearingLoad.Activate"></a>

### BearingLoad.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddComment"></a>

### BearingLoad.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddFigure"></a>

### BearingLoad.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddImage"></a>

### BearingLoad.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CopyTo"></a>

### BearingLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CreateParameter"></a>

### BearingLoad.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Delete"></a>

### BearingLoad.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Duplicate"></a>

### BearingLoad.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetActivateAtLoadStep"></a>

### BearingLoad.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the bearing load is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetChildren"></a>

### BearingLoad.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetComponentActivateAtLoadStep"></a>

### BearingLoad.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetParameter"></a>

### BearingLoad.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupAllSimilarChildren"></a>

### BearingLoad.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupSimilarObjects"></a>

### BearingLoad.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PromoteToNamedSelection"></a>

### BearingLoad.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyByAPIName"></a>

### BearingLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyByName"></a>

### BearingLoad.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.RemoveParameter"></a>

### BearingLoad.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SetActivateAtLoadStep"></a>

### BearingLoad.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the bearing load is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SetComponentActivateAtLoadStep"></a>

### BearingLoad.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

