# `RemotePoint`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.RemotePoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetMeshRegion`](#RemotePoint.GetMeshRegion)                     | Returns the mesh region associated to the remote point.                           |
| [`PromoteToNamedSelection`](#RemotePoint.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`AddCommandSnippet`](#RemotePoint.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#RemotePoint.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RemotePoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`Activate`](#RemotePoint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RemotePoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RemotePoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RemotePoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemotePoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RemotePoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RemotePoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RemotePoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RemotePoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RemotePoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`PilotNodeAPDLName`](#RemotePoint.PilotNodeAPDLName)             | Gets or sets the PilotNodeAPDLName.                           |
| [`OutlineSelection`](#RemotePoint.OutlineSelection)               | Gets or sets the OutlineSelection.                            |
| [`GloballyAvailable`](#RemotePoint.GloballyAvailable)             | Remote point is globally available                            |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Material`](#RemotePoint.Material)                               | Gets or sets the Material.                                    |
| [`Radius`](#RemotePoint.Radius)                                   | Gets or sets the Radius.                                      |
| [`XCoordinate`](#RemotePoint.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RemotePoint.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RemotePoint.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |
| [`PinballRegion`](#RemotePoint.PinballRegion)                     | Gets or sets the PinballRegion.                               |
| [`Behavior`](#RemotePoint.Behavior)                               | Gets or sets the Behavior.                                    |
| [`XComponent`](#RemotePoint.XComponent)                           | Gets or sets the XComponent.                                  |
| [`YComponent`](#RemotePoint.YComponent)                           | Gets or sets the YComponent.                                  |
| [`ZComponent`](#RemotePoint.ZComponent)                           | Gets or sets the ZComponent.                                  |
| [`DOFSelection`](#RemotePoint.DOFSelection)                       | Gets or sets the DOFSelection.                                |
| [`ScopingMethod`](#RemotePoint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`PilotNodeScopingType`](#RemotePoint.PilotNodeScopingType)       | Gets or sets the PilotNodeScopingType.                        |
| [`Formulation`](#RemotePoint.Formulation)                         | Gets or sets the Formulation.                                 |
| [`RotationX`](#RemotePoint.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#RemotePoint.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#RemotePoint.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`RelaxationMethod`](#RemotePoint.RelaxationMethod)               | Gets or sets the RelaxationMethod.                            |
| [`Suppressed`](#RemotePoint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Point`](#RemotePoint.Point)                                     | Gets or sets the Point.                                       |
| [`CoordinateSystem`](#RemotePoint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#RemotePoint.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#RemotePoint.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](#RemotePoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RemotePoint.Comments)                               | Gets the list of associated comments.                         |
| [`ReadOnly`](#RemotePoint.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemotePoint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemotePoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RemotePoint.PilotNodeAPDLName"></a>

### *property* RemotePoint.PilotNodeAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.OutlineSelection"></a>

### *property* RemotePoint.OutlineSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GloballyAvailable"></a>

### *property* RemotePoint.GloballyAvailable *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Remote point is globally available

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.InternalObject"></a>

### *property* RemotePoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Material"></a>

### *property* RemotePoint.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Radius"></a>

### *property* RemotePoint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.XCoordinate"></a>

### *property* RemotePoint.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.YCoordinate"></a>

### *property* RemotePoint.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ZCoordinate"></a>

### *property* RemotePoint.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PinballRegion"></a>

### *property* RemotePoint.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Behavior"></a>

### *property* RemotePoint.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.XComponent"></a>

### *property* RemotePoint.XComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.YComponent"></a>

### *property* RemotePoint.YComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ZComponent"></a>

### *property* RemotePoint.ZComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.DOFSelection"></a>

### *property* RemotePoint.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/RemotePointDOFSelectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ScopingMethod"></a>

### *property* RemotePoint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PilotNodeScopingType"></a>

### *property* RemotePoint.PilotNodeScopingType *: [Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PilotNodeScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeScopingType.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Formulation"></a>

### *property* RemotePoint.Formulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../../v241/Ansys/Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationX"></a>

### *property* RemotePoint.RotationX *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationY"></a>

### *property* RemotePoint.RotationY *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationZ"></a>

### *property* RemotePoint.RotationZ *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RelaxationMethod"></a>

### *property* RemotePoint.RelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Suppressed"></a>

### *property* RemotePoint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Point"></a>

### *property* RemotePoint.Point *: [Ansys.ACT.Automation.Mechanical.ConstructionPoint](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Point.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CoordinateSystem"></a>

### *property* RemotePoint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Location"></a>

### *property* RemotePoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.DataModelObjectCategory"></a>

### *property* RemotePoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Children"></a>

### *property* RemotePoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Comments"></a>

### *property* RemotePoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ReadOnly"></a>

### *property* RemotePoint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RemotePoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Properties"></a>

### *property* RemotePoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.VisibleProperties"></a>

### *property* RemotePoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemotePoint.GetMeshRegion"></a>

### RemotePoint.GetMeshRegion()

Returns the mesh region associated to the remote point.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PromoteToNamedSelection"></a>

### RemotePoint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.AddCommandSnippet"></a>

### RemotePoint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Delete"></a>

### RemotePoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetChildren"></a>

### RemotePoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RemotePoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.AddComment"></a>

### RemotePoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Activate"></a>

### RemotePoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CopyTo"></a>

### RemotePoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Duplicate"></a>

### RemotePoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupAllSimilarChildren"></a>

### RemotePoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupSimilarObjects"></a>

### RemotePoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyByName"></a>

### RemotePoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyByAPIName"></a>

### RemotePoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CreateParameter"></a>

### RemotePoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetParameter"></a>

### RemotePoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RemoveParameter"></a>

### RemotePoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

