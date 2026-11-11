# `RemotePoint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.RemotePoint(internalObject: Any)

<a id="RemotePoint"></a>

### *class* RemotePoint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RemotePoint.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#RemotePoint.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#RemotePoint.AddComment)                               | Creates a new child Comment.                                                                |
| [`Copy`](#RemotePoint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RemotePoint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RemotePoint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RemotePoint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RemotePoint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RemotePoint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RemotePoint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RemotePoint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RemotePoint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RemotePoint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RemotePoint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RemotePoint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RemotePoint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RemotePoint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RemotePoint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RemotePoint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetMeshRegion`](#RemotePoint.GetMeshRegion)                         | Returns the mesh region associated to the remote point.                                     |
| [`GetObjectData`](#RemotePoint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RemotePoint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RemotePoint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RemotePoint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RemotePoint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RemotePoint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RemotePoint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RemotePoint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RemotePoint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RemotePoint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RemotePoint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RemotePoint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RemotePoint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#RemotePoint.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#RemotePoint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RemotePoint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RemotePoint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RemotePoint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RemotePoint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#RemotePoint.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                                                        |
| [`BeamCoincidentLengthFactor`](#RemotePoint.BeamCoincidentLengthFactor) | Gets or sets the Coincident Length Factor that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when Behavior is set to “Beam”. Default: 1. |
| [`Behavior`](#RemotePoint.Behavior)                                     | Gets or sets the Behavior.                                                                                                                                                                                    |
| [`Children`](#RemotePoint.Children)                                     | Gets the list of children.                                                                                                                                                                                    |
| [`ClsId`](#RemotePoint.ClsId)                                           | ClsId property.                                                                                                                                                                                               |
| [`Comments`](#RemotePoint.Comments)                                     | Gets the list of associated comments.                                                                                                                                                                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)              | Gets or sets the CoordinateSystem.                                                                                                                                                                            |
| [`DOFSelection`](#RemotePoint.DOFSelection)                             | Gets or sets the DOFSelection.                                                                                                                                                                                |
| [`DataModelObjectCategory`](#RemotePoint.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                                                                  |
| [`Formulation`](#RemotePoint.Formulation)                               | Gets or sets the Formulation.                                                                                                                                                                                 |
| [`GloballyAvailable`](#RemotePoint.GloballyAvailable)                   | Remote point is globally available                                                                                                                                                                            |
| [`GroupingFolder`](#RemotePoint.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                                                      |
| [`IconName`](#RemotePoint.IconName)                                     | IconName property.                                                                                                                                                                                            |
| [`Id`](#RemotePoint.Id)                                                 | Id property.                                                                                                                                                                                                  |
| [`Ids`](#RemotePoint.Ids)                                               | Ids property.                                                                                                                                                                                                 |
| [`ImportableObjectSourceId`](#RemotePoint.ImportableObjectSourceId)     | ImportableObjectSourceId property.                                                                                                                                                                            |
| [`InternalObject`](#RemotePoint.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                                                            |
| [`Location`](#RemotePoint.Location)                                     | Gets or sets the Location.                                                                                                                                                                                    |
| [`Material`](Material.md#Material)                                      | Gets or sets the Material.                                                                                                                                                                                    |
| [`MeshRegionId`](#RemotePoint.MeshRegionId)                             | MeshRegionId property.                                                                                                                                                                                        |
| [`Name`](#RemotePoint.Name)                                             | Name property.                                                                                                                                                                                                |
| [`ObjectId`](#RemotePoint.ObjectId)                                     | ObjectId property.                                                                                                                                                                                            |
| [`ObjectState`](#RemotePoint.ObjectState)                               | ObjectState property.                                                                                                                                                                                         |
| [`ObjectTags`](#RemotePoint.ObjectTags)                                 | ObjectTags property.                                                                                                                                                                                          |
| [`OutlineSelection`](#RemotePoint.OutlineSelection)                     | Gets or sets the OutlineSelection.                                                                                                                                                                            |
| [`Parent`](#RemotePoint.Parent)                                         | Parent property.                                                                                                                                                                                              |
| [`PilotNodeAPDLName`](#RemotePoint.PilotNodeAPDLName)                   | Gets or sets the PilotNodeAPDLName.                                                                                                                                                                           |
| [`PilotNodeScopingType`](#RemotePoint.PilotNodeScopingType)             | Gets or sets the PilotNodeScopingType.                                                                                                                                                                        |
| [`PinballRegion`](#RemotePoint.PinballRegion)                           | Gets or sets the PinballRegion.                                                                                                                                                                               |
| [`Point`](#RemotePoint.Point)                                           | Gets or sets the Point.                                                                                                                                                                                       |
| [`Properties`](#RemotePoint.Properties)                                 | Gets the list of properties for this object.                                                                                                                                                                  |
| [`Radius`](#RemotePoint.Radius)                                         | Gets or sets the Radius.                                                                                                                                                                                      |
| [`ReadOnly`](#RemotePoint.ReadOnly)                                     | Gets or sets the ReadOnly.                                                                                                                                                                                    |
| [`RelaxationMethod`](#RemotePoint.RelaxationMethod)                     | Gets or sets the RelaxationMethod.                                                                                                                                                                            |
| [`RotationX`](#RemotePoint.RotationX)                                   | Gets or sets the RotationX.                                                                                                                                                                                   |
| [`RotationY`](#RemotePoint.RotationY)                                   | Gets or sets the RotationY.                                                                                                                                                                                   |
| [`RotationZ`](#RemotePoint.RotationZ)                                   | Gets or sets the RotationZ.                                                                                                                                                                                   |
| [`ScopedObjects`](#RemotePoint.ScopedObjects)                           | Gets or sets the objects used to define the remote point. This property is set with a RemotePoint collection and returns a collection of DataModelObject and/or ImportedObject.                               |
| [`ScopingMethod`](#RemotePoint.ScopingMethod)                           | Gets or sets the ScopingMethod.                                                                                                                                                                               |
| [`SelectionType`](#RemotePoint.SelectionType)                           | SelectionType property.                                                                                                                                                                                       |
| [`State`](#RemotePoint.State)                                           | State property.                                                                                                                                                                                               |
| [`Suppressed`](#RemotePoint.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                                                                  |
| [`TransferableObjectId`](#RemotePoint.TransferableObjectId)             | TransferableObjectId property.                                                                                                                                                                                |
| [`VisibleProperties`](#RemotePoint.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                                                                 |
| [`XComponent`](#RemotePoint.XComponent)                                 | Gets or sets the XComponent.                                                                                                                                                                                  |
| [`XCoordinate`](#RemotePoint.XCoordinate)                               | Gets or sets the XCoordinate.                                                                                                                                                                                 |
| [`YComponent`](#RemotePoint.YComponent)                                 | Gets or sets the YComponent.                                                                                                                                                                                  |
| [`YCoordinate`](#RemotePoint.YCoordinate)                               | Gets or sets the YCoordinate.                                                                                                                                                                                 |
| [`ZComponent`](#RemotePoint.ZComponent)                                 | Gets or sets the ZComponent.                                                                                                                                                                                  |
| [`ZCoordinate`](#RemotePoint.ZCoordinate)                               | Gets or sets the ZCoordinate.                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="RemotePoint.AttachedRefs"></a>

### *property* RemotePoint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.BeamCoincidentLengthFactor"></a>

### *property* RemotePoint.BeamCoincidentLengthFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coincident Length Factor that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when Behavior is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Behavior"></a>

### *property* RemotePoint.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Children"></a>

### *property* RemotePoint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ClsId"></a>

### *property* RemotePoint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Comments"></a>

### *property* RemotePoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CoordinateSystem"></a>

### *property* RemotePoint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.DOFSelection"></a>

### *property* RemotePoint.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType](../../../Mechanical/DataModel/Enums/RemotePointDOFSelectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.DataModelObjectCategory"></a>

### *property* RemotePoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Formulation"></a>

### *property* RemotePoint.Formulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GloballyAvailable"></a>

### *property* RemotePoint.GloballyAvailable *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Remote point is globally available

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupingFolder"></a>

### *property* RemotePoint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.IconName"></a>

### *property* RemotePoint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Id"></a>

### *property* RemotePoint.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Ids"></a>

### *property* RemotePoint.Ids *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Ids property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ImportableObjectSourceId"></a>

### *property* RemotePoint.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.InternalObject"></a>

### *property* RemotePoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Location"></a>

### *property* RemotePoint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Material"></a>

### *property* RemotePoint.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.MeshRegionId"></a>

### *property* RemotePoint.MeshRegionId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshRegionId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Name"></a>

### *property* RemotePoint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ObjectId"></a>

### *property* RemotePoint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ObjectState"></a>

### *property* RemotePoint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ObjectTags"></a>

### *property* RemotePoint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.OutlineSelection"></a>

### *property* RemotePoint.OutlineSelection *: Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Parent"></a>

### *property* RemotePoint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PilotNodeAPDLName"></a>

### *property* RemotePoint.PilotNodeAPDLName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PilotNodeAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PilotNodeScopingType"></a>

### *property* RemotePoint.PilotNodeScopingType *: [Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType](../../../Mechanical/DataModel/Enums/PilotNodeScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PilotNodeScopingType.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PinballRegion"></a>

### *property* RemotePoint.PinballRegion *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Point"></a>

### *property* RemotePoint.Point *: [Ansys.ACT.Automation.Mechanical.ConstructionPoint](ConstructionPoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionPoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Point.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Properties"></a>

### *property* RemotePoint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Radius"></a>

### *property* RemotePoint.Radius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ReadOnly"></a>

### *property* RemotePoint.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RelaxationMethod"></a>

### *property* RemotePoint.RelaxationMethod *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationX"></a>

### *property* RemotePoint.RotationX *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationY"></a>

### *property* RemotePoint.RotationY *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RotationZ"></a>

### *property* RemotePoint.RotationZ *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ScopedObjects"></a>

### *property* RemotePoint.ScopedObjects *: Iterable[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the objects used to define the remote point. This property is set with a RemotePoint collection and returns a collection of DataModelObject and/or ImportedObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ScopingMethod"></a>

### *property* RemotePoint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.SelectionType"></a>

### *property* RemotePoint.SelectionType *: [Ansys.ACT.Interfaces.Common.SelectionTypeEnum](../../Interfaces/Common/SelectionTypeEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.SelectionTypeEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SelectionType property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.State"></a>

### *property* RemotePoint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Suppressed"></a>

### *property* RemotePoint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.TransferableObjectId"></a>

### *property* RemotePoint.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.VisibleProperties"></a>

### *property* RemotePoint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.XComponent"></a>

### *property* RemotePoint.XComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.XCoordinate"></a>

### *property* RemotePoint.XCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.YComponent"></a>

### *property* RemotePoint.YComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.YCoordinate"></a>

### *property* RemotePoint.YCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ZComponent"></a>

### *property* RemotePoint.ZComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.ZCoordinate"></a>

### *property* RemotePoint.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemotePoint.Activate"></a>

### RemotePoint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.AddCommandSnippet"></a>

### RemotePoint.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.AddComment"></a>

### RemotePoint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Copy"></a>

### RemotePoint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CopyTo"></a>

### RemotePoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CreateObjRef"></a>

### RemotePoint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.CreateParameter"></a>

### RemotePoint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Cut"></a>

### RemotePoint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Delete"></a>

### RemotePoint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Duplicate"></a>

### RemotePoint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Equals"></a>

### RemotePoint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetAPIName"></a>

### RemotePoint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetAllProperties"></a>

### RemotePoint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetChildren"></a>

### RemotePoint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RemotePoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetDetailsView"></a>

### RemotePoint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetEnumName"></a>

### RemotePoint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetHashCode"></a>

### RemotePoint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetIconFile"></a>

### RemotePoint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetLifetimeService"></a>

### RemotePoint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetMeshRegion"></a>

### RemotePoint.GetMeshRegion() → Ansys.ACT.Interfaces.Mesh.IMeshRegion

Returns the mesh region associated to the remote point.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetObjectData"></a>

### RemotePoint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetParameter"></a>

### RemotePoint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetPath"></a>

### RemotePoint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetPropertyName"></a>

### RemotePoint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetPropertyValue"></a>

### RemotePoint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetVisibleProperties"></a>

### RemotePoint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GetVisiblePropertyNames"></a>

### RemotePoint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupAllSimilarChildren"></a>

### RemotePoint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.GroupSimilarObjects"></a>

### RemotePoint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.InitializeLifetimeService"></a>

### RemotePoint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.IsPropertyEditable"></a>

### RemotePoint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemotePoint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.IsPropertyVisible"></a>

### RemotePoint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemotePoint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.Paste"></a>

### RemotePoint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PromoteToNamedSelection"></a>

### RemotePoint.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyByAPIName"></a>

### RemotePoint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyById"></a>

### RemotePoint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.PropertyByName"></a>

### RemotePoint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RemoveFromGroup"></a>

### RemotePoint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoint.RemoveParameter"></a>

### RemotePoint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

