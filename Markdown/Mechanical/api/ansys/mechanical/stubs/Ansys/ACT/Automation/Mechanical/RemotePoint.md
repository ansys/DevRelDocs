# RemotePoint

### *class* RemotePoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RemotePoint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetMeshRegion`](#RemotePoint.GetMeshRegion)                     | Returns the mesh region associated to the remote point.                           |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`PilotNodeAPDLName`](#RemotePoint.PilotNodeAPDLName)                                                               | Gets or sets the PilotNodeAPDLName.                           |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OutlineSelection`](#RemotePoint.OutlineSelection)                                                                 | Gets or sets the OutlineSelection.                            |
| [`GloballyAvailable`](#RemotePoint.GloballyAvailable)                                                               | Remote point is globally available                            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`Radius`](#RemotePoint.Radius)                                                                                     | Gets or sets the Radius.                                      |
| [`XCoordinate`](#RemotePoint.XCoordinate)                                                                           | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RemotePoint.YCoordinate)                                                                           | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RemotePoint.ZCoordinate)                                                                           | Gets or sets the ZCoordinate.                                 |
| [`PinballRegion`](#RemotePoint.PinballRegion)                                                                       | Gets or sets the PinballRegion.                               |
| [`Behavior`](#RemotePoint.Behavior)                                                                                 | Gets or sets the Behavior.                                    |
| [`XComponent`](#RemotePoint.XComponent)                                                                             | Gets or sets the XComponent.                                  |
| [`YComponent`](#RemotePoint.YComponent)                                                                             | Gets or sets the YComponent.                                  |
| [`ZComponent`](#RemotePoint.ZComponent)                                                                             | Gets or sets the ZComponent.                                  |
| [`DOFSelection`](#RemotePoint.DOFSelection)                                                                         | Gets or sets the DOFSelection.                                |
| [`ScopingMethod`](#RemotePoint.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                               |
| [`PilotNodeScopingType`](../../../Mechanical/DataModel/Enums/PilotNodeScopingType.md#PilotNodeScopingType)          | Gets or sets the PilotNodeScopingType.                        |
| [`Formulation`](#RemotePoint.Formulation)                                                                           | Gets or sets the Formulation.                                 |
| [`RotationX`](#RemotePoint.RotationX)                                                                               | Gets or sets the RotationX.                                   |
| [`RotationY`](#RemotePoint.RotationY)                                                                               | Gets or sets the RotationY.                                   |
| [`RotationZ`](#RemotePoint.RotationZ)                                                                               | Gets or sets the RotationZ.                                   |
| [`RelaxationMethod`](#RemotePoint.RelaxationMethod)                                                                 | Gets or sets the RelaxationMethod.                            |
| [`Suppressed`](#RemotePoint.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`Point`](../../../Mechanical/Graphics/Point.md#Point)                                                              | Gets or sets the Point.                                       |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#RemotePoint.Location)                                                                                 | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#RemotePoint.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#RemotePoint.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`ReadOnly`](#RemotePoint.ReadOnly)                                                                                 | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemotePoint.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemotePoint.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import RemotePoint
```

## Property detail

### *property* RemotePoint.PilotNodeAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.OutlineSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.RemotePoint](#RemotePoint)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.GloballyAvailable *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Remote point is globally available

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.XComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.YComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ZComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType](../../../Mechanical/DataModel/Enums/RemotePointDOFSelectionType.md#RemotePointDOFSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.PilotNodeScopingType *: [Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType](../../../Mechanical/DataModel/Enums/PilotNodeScopingType.md#PilotNodeScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeScopingType.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Formulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RotationX *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RotationY *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RotationZ *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationMethod.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Point *: [Ansys.ACT.Automation.Mechanical.ConstructionPoint](ConstructionPoint.md#ConstructionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Point.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RemotePoint.GetMeshRegion()

Returns the mesh region associated to the remote point.

<!-- !! processed by numpydoc !! -->

### RemotePoint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### RemotePoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemotePoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RemotePoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RemotePoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RemotePoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RemotePoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RemotePoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RemotePoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
