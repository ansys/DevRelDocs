# `RemotePoint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.RemotePoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RemotePoint.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#RemotePoint.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#RemotePoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`CopyTo`](#RemotePoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RemotePoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RemotePoint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RemotePoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RemotePoint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetMeshRegion`](#RemotePoint.GetMeshRegion)                     | Returns the mesh region associated to the remote point.                           |
| [`GetParameter`](#RemotePoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RemotePoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemotePoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#RemotePoint.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#RemotePoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RemotePoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RemotePoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Behavior`](#RemotePoint.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Children`](#RemotePoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RemotePoint.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#RemotePoint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DOFSelection`](#RemotePoint.DOFSelection)                       | Gets or sets the DOFSelection.                                |
| [`DataModelObjectCategory`](#RemotePoint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Formulation`](#RemotePoint.Formulation)                         | Gets or sets the Formulation.                                 |
| [`GloballyAvailable`](#RemotePoint.GloballyAvailable)             | Remote point is globally available                            |
| [`InternalObject`](#RemotePoint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#RemotePoint.Location)                               | Gets or sets the Location.                                    |
| [`Material`](#RemotePoint.Material)                               | Gets or sets the Material.                                    |
| [`OutlineSelection`](#RemotePoint.OutlineSelection)               | Gets or sets the OutlineSelection.                            |
| [`PilotNodeAPDLName`](#RemotePoint.PilotNodeAPDLName)             | Gets or sets the PilotNodeAPDLName.                           |
| [`PilotNodeScopingType`](#RemotePoint.PilotNodeScopingType)       | Gets or sets the PilotNodeScopingType.                        |
| [`PinballRegion`](#RemotePoint.PinballRegion)                     | Gets or sets the PinballRegion.                               |
| [`Point`](#RemotePoint.Point)                                     | Gets or sets the Point.                                       |
| [`Properties`](#RemotePoint.Properties)                           | Gets the list of properties for this object.                  |
| [`Radius`](#RemotePoint.Radius)                                   | Gets or sets the Radius.                                      |
| [`ReadOnly`](#RemotePoint.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RelaxationMethod`](#RemotePoint.RelaxationMethod)               | Gets or sets the RelaxationMethod.                            |
| [`RotationX`](#RemotePoint.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#RemotePoint.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#RemotePoint.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`ScopingMethod`](#RemotePoint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#RemotePoint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RemotePoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#RemotePoint.XComponent)                           | Gets or sets the XComponent.                                  |
| [`XCoordinate`](#RemotePoint.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#RemotePoint.YComponent)                           | Gets or sets the YComponent.                                  |
| [`YCoordinate`](#RemotePoint.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#RemotePoint.ZComponent)                           | Gets or sets the ZComponent.                                  |
| [`ZCoordinate`](#RemotePoint.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="RemotePoint.Behavior"></a>

### *property* RemotePoint.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Children"></a>

### *property* RemotePoint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Comments"></a>

### *property* RemotePoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CoordinateSystem"></a>

### *property* RemotePoint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.DOFSelection"></a>

### *property* RemotePoint.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType](../../../Mechanical/DataModel/Enums/RemotePointDOFSelectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.DataModelObjectCategory"></a>

### *property* RemotePoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Formulation"></a>

### *property* RemotePoint.Formulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GloballyAvailable"></a>

### *property* RemotePoint.GloballyAvailable *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Remote point is globally available

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.InternalObject"></a>

### *property* RemotePoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Location"></a>

### *property* RemotePoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Material"></a>

### *property* RemotePoint.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.OutlineSelection"></a>

### *property* RemotePoint.OutlineSelection *: Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PilotNodeAPDLName"></a>

### *property* RemotePoint.PilotNodeAPDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PilotNodeScopingType"></a>

### *property* RemotePoint.PilotNodeScopingType *: [Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType](../../../Mechanical/DataModel/Enums/PilotNodeScopingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeScopingType.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PinballRegion"></a>

### *property* RemotePoint.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Point"></a>

### *property* RemotePoint.Point *: [Ansys.ACT.Automation.Mechanical.ConstructionPoint](ConstructionPoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ConstructionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Point.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Properties"></a>

### *property* RemotePoint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Radius"></a>

### *property* RemotePoint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ReadOnly"></a>

### *property* RemotePoint.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RelaxationMethod"></a>

### *property* RemotePoint.RelaxationMethod *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationX"></a>

### *property* RemotePoint.RotationX *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationY"></a>

### *property* RemotePoint.RotationY *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationZ"></a>

### *property* RemotePoint.RotationZ *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ScopingMethod"></a>

### *property* RemotePoint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Suppressed"></a>

### *property* RemotePoint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.VisibleProperties"></a>

### *property* RemotePoint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.XComponent"></a>

### *property* RemotePoint.XComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.XCoordinate"></a>

### *property* RemotePoint.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.YComponent"></a>

### *property* RemotePoint.YComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.YCoordinate"></a>

### *property* RemotePoint.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ZComponent"></a>

### *property* RemotePoint.ZComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ZCoordinate"></a>

### *property* RemotePoint.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemotePoint.Activate"></a>

### RemotePoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.AddCommandSnippet"></a>

### RemotePoint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.AddComment"></a>

### RemotePoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CopyTo"></a>

### RemotePoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CreateParameter"></a>

### RemotePoint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Delete"></a>

### RemotePoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Duplicate"></a>

### RemotePoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetChildren"></a>

### RemotePoint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetMeshRegion"></a>

### RemotePoint.GetMeshRegion()

Returns the mesh region associated to the remote point.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetParameter"></a>

### RemotePoint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupAllSimilarChildren"></a>

### RemotePoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupSimilarObjects"></a>

### RemotePoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PromoteToNamedSelection"></a>

### RemotePoint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyByAPIName"></a>

### RemotePoint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyByName"></a>

### RemotePoint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RemoveParameter"></a>

### RemotePoint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

