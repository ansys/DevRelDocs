# `SpotWeldConnection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection(internalObject: Any)

<a id="SpotWeldConnection"></a>

### *class* SpotWeldConnection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SpotWeldConnection.Activate)                                     | Activate the current object.                                                                |
| [`AddComment`](#SpotWeldConnection.AddComment)                                 | Creates a new child Comment.                                                                |
| [`AddImage`](#SpotWeldConnection.AddImage)                                     | Creates a new child Image.                                                                  |
| [`AddNewSpotWeld`](#SpotWeldConnection.AddNewSpotWeld)                         | Add a new spot weld with/without a customID.                                                |
| [`AttachToEvents`](#SpotWeldConnection.AttachToEvents)                         | AttachToEvents method.                                                                      |
| [`Copy`](#SpotWeldConnection.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SpotWeldConnection.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SpotWeldConnection.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SpotWeldConnection.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`CreateSpotWeldFromHitPoint`](#SpotWeldConnection.CreateSpotWeldFromHitPoint) | Add a new spot weld by using a Hit Point.                                                   |
| [`Cut`](#SpotWeldConnection.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`DetachEvents`](#SpotWeldConnection.DetachEvents)                             | DetachEvents method.                                                                        |
| [`Duplicate`](#SpotWeldConnection.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SpotWeldConnection.Equals)                                         | Equals method.                                                                              |
| [`ExportToCSVFile`](#SpotWeldConnection.ExportToCSVFile)                       | Export the contents to a CSV file.                                                          |
| [`GetAPIName`](#SpotWeldConnection.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SpotWeldConnection.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#SpotWeldConnection.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetCurrentItemsInWorksheet`](#SpotWeldConnection.GetCurrentItemsInWorksheet) | GetCurrentItemsInWorksheet method.                                                          |
| [`GetDetailsView`](#SpotWeldConnection.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SpotWeldConnection.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#SpotWeldConnection.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#SpotWeldConnection.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SpotWeldConnection.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SpotWeldConnection.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#SpotWeldConnection.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SpotWeldConnection.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#SpotWeldConnection.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SpotWeldConnection.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetSpotWeldIds`](#SpotWeldConnection.GetSpotWeldIds)                         | GetSpotWeldIds method.                                                                      |
| [`GetSpotWeldLocations`](#SpotWeldConnection.GetSpotWeldLocations)             | GetSpotWeldLocations method.                                                                |
| [`GetVisibleProperties`](#SpotWeldConnection.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SpotWeldConnection.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SpotWeldConnection.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SpotWeldConnection.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SpotWeldConnection.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SpotWeldConnection.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SpotWeldConnection.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`NotifyOnHitPointAdded`](#SpotWeldConnection.NotifyOnHitPointAdded)           | NotifyOnHitPointAdded method.                                                               |
| [`Paste`](#SpotWeldConnection.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SpotWeldConnection.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#SpotWeldConnection.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#SpotWeldConnection.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SpotWeldConnection.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SpotWeldConnection.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemoveSpotWeld`](#SpotWeldConnection.RemoveSpotWeld)                         | Remove an existing spot weld.                                                               |
| [`SetCurrentItemsInWorksheet`](#SpotWeldConnection.SetCurrentItemsInWorksheet) | SetCurrentItemsInWorksheet method.                                                          |
| [`SetXCoordinate`](#SpotWeldConnection.SetXCoordinate)                         | Set the X coordinate given the Spot Weld ID.                                                |
| [`SetYCoordinate`](#SpotWeldConnection.SetYCoordinate)                         | Set the Y coordinate given the Spot Weld ID.                                                |
| [`SetZCoordinate`](#SpotWeldConnection.SetZCoordinate)                         | Set the Z coordinate given the Spot Weld ID.                                                |
| [`UnitSys`](#SpotWeldConnection.UnitSys)                                       | UnitSys method.                                                                             |
| [`add_OnHitPointAdded`](#SpotWeldConnection.add_OnHitPointAdded)               | add_OnHitPointAdded method.                                                                 |
| [`add_OnPointPicked`](#SpotWeldConnection.add_OnPointPicked)                   | add_OnPointPicked method.                                                                   |
| [`remove_OnHitPointAdded`](#SpotWeldConnection.remove_OnHitPointAdded)         | remove_OnHitPointAdded method.                                                              |
| [`remove_OnPointPicked`](#SpotWeldConnection.remove_OnPointPicked)             | remove_OnPointPicked method.                                                                |
| [`setXYZ`](#SpotWeldConnection.setXYZ)                                         | setXYZ method.                                                                              |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AngleTolerance`](#SpotWeldConnection.AngleTolerance)                     | Gets or sets the AngleTolerance.                              |
| [`AttachedRefs`](#SpotWeldConnection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#SpotWeldConnection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#SpotWeldConnection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#SpotWeldConnection.Comments)                                 | Gets the list of associated comments.                         |
| [`ConnectionBehavior`](#SpotWeldConnection.ConnectionBehavior)             | Gets or sets the ConnectionBehavior.                          |
| [`DataModelObjectCategory`](#SpotWeldConnection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#SpotWeldConnection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#SpotWeldConnection.IconName)                                 | IconName property.                                            |
| [`Images`](#SpotWeldConnection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SpotWeldConnection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SpotWeldConnection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Material`](#Material)                                      | Gets or sets the Material.                                    |
| [`Name`](#SpotWeldConnection.Name)                                         | Name property.                                                |
| [`NumWeldPoints`](#SpotWeldConnection.NumWeldPoints)                       | Gets the NumWeldPoints.                                       |
| [`NumberOfLayers`](#SpotWeldConnection.NumberOfLayers)                     | Gets or sets the NumberOfLayers.                              |
| [`ObjectId`](#SpotWeldConnection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#SpotWeldConnection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#SpotWeldConnection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#SpotWeldConnection.Parent)                                     | Parent property.                                              |
| [`PenetrationTolerance`](#SpotWeldConnection.PenetrationTolerance)         | Gets or sets the PenetrationTolerance.                        |
| [`Properties`](#SpotWeldConnection.Properties)                             | Gets the list of properties for this object.                  |
| [`Radius`](#SpotWeldConnection.Radius)                                     | Gets or sets the Radius.                                      |
| [`ReadOnly`](#SpotWeldConnection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SearchDistance`](#SpotWeldConnection.SearchDistance)                     | Gets or sets the SearchDistance.                              |
| [`ShellThicknessEffect`](#SpotWeldConnection.ShellThicknessEffect)         | Gets or sets the ShellThicknessEffect.                        |
| [`SnapToEdgeTolerance`](#SpotWeldConnection.SnapToEdgeTolerance)           | Gets or sets the SnapToEdgeTolerance.                         |
| [`SourceGeometry`](#SpotWeldConnection.SourceGeometry)                     | Gets or sets the SourceGeometry.                              |
| [`State`](#SpotWeldConnection.State)                                       | State property.                                               |
| [`StiffnessBehavior`](#SpotWeldConnection.StiffnessBehavior)               | Gets or sets the StiffnessBehavior.                           |
| [`TargetGeometry`](#SpotWeldConnection.TargetGeometry)                     | Gets or sets the TargetGeometry.                              |
| [`TransferableObjectId`](#SpotWeldConnection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`Type`](#SpotWeldConnection.Type)                                         | Gets or sets the Type.                                        |
| [`VisibleProperties`](#SpotWeldConnection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SpotWeldConnection.AngleTolerance"></a>

### *property* SpotWeldConnection.AngleTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AttachedRefs"></a>

### *property* SpotWeldConnection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Children"></a>

### *property* SpotWeldConnection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ClsId"></a>

### *property* SpotWeldConnection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Comments"></a>

### *property* SpotWeldConnection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ConnectionBehavior"></a>

### *property* SpotWeldConnection.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.DataModelObjectCategory"></a>

### *property* SpotWeldConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupingFolder"></a>

### *property* SpotWeldConnection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.IconName"></a>

### *property* SpotWeldConnection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Images"></a>

### *property* SpotWeldConnection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ImportableObjectSourceId"></a>

### *property* SpotWeldConnection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.InternalObject"></a>

### *property* SpotWeldConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldConnectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Material"></a>

### *property* SpotWeldConnection.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Name"></a>

### *property* SpotWeldConnection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NumWeldPoints"></a>

### *property* SpotWeldConnection.NumWeldPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NumberOfLayers"></a>

### *property* SpotWeldConnection.NumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ObjectId"></a>

### *property* SpotWeldConnection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ObjectState"></a>

### *property* SpotWeldConnection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ObjectTags"></a>

### *property* SpotWeldConnection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Parent"></a>

### *property* SpotWeldConnection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PenetrationTolerance"></a>

### *property* SpotWeldConnection.PenetrationTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Properties"></a>

### *property* SpotWeldConnection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Radius"></a>

### *property* SpotWeldConnection.Radius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ReadOnly"></a>

### *property* SpotWeldConnection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SearchDistance"></a>

### *property* SpotWeldConnection.SearchDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ShellThicknessEffect"></a>

### *property* SpotWeldConnection.ShellThicknessEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SnapToEdgeTolerance"></a>

### *property* SpotWeldConnection.SnapToEdgeTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SourceGeometry"></a>

### *property* SpotWeldConnection.SourceGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceGeometry.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.State"></a>

### *property* SpotWeldConnection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.StiffnessBehavior"></a>

### *property* SpotWeldConnection.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.TargetGeometry"></a>

### *property* SpotWeldConnection.TargetGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetGeometry.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.TransferableObjectId"></a>

### *property* SpotWeldConnection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Type"></a>

### *property* SpotWeldConnection.Type *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.VisibleProperties"></a>

### *property* SpotWeldConnection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpotWeldConnection.Activate"></a>

### SpotWeldConnection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddComment"></a>

### SpotWeldConnection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddImage"></a>

### SpotWeldConnection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddNewSpotWeld"></a>

### SpotWeldConnection.AddNewSpotWeld(customId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add a new spot weld with/without a customID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AttachToEvents"></a>

### SpotWeldConnection.AttachToEvents() → [None](https://docs.python.org/3/builtins/constants.html#None)

AttachToEvents method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Copy"></a>

### SpotWeldConnection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CopyTo"></a>

### SpotWeldConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateObjRef"></a>

### SpotWeldConnection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateParameter"></a>

### SpotWeldConnection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateSpotWeldFromHitPoint"></a>

### SpotWeldConnection.CreateSpotWeldFromHitPoint() → [None](https://docs.python.org/3/builtins/constants.html#None)

Add a new spot weld by using a Hit Point.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Cut"></a>

### SpotWeldConnection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.DetachEvents"></a>

### SpotWeldConnection.DetachEvents() → [None](https://docs.python.org/3/builtins/constants.html#None)

DetachEvents method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Duplicate"></a>

### SpotWeldConnection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Equals"></a>

### SpotWeldConnection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ExportToCSVFile"></a>

### SpotWeldConnection.ExportToCSVFile(fileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export the contents to a CSV file.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetAPIName"></a>

### SpotWeldConnection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetAllProperties"></a>

### SpotWeldConnection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetChildren"></a>

### SpotWeldConnection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SpotWeldConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetCurrentItemsInWorksheet"></a>

### SpotWeldConnection.GetCurrentItemsInWorksheet() → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[int](https://docs.python.org/3/builtins/functions.html#int)]

GetCurrentItemsInWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetDetailsView"></a>

### SpotWeldConnection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetEnumName"></a>

### SpotWeldConnection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetHashCode"></a>

### SpotWeldConnection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetIconFile"></a>

### SpotWeldConnection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetLifetimeService"></a>

### SpotWeldConnection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetObjectData"></a>

### SpotWeldConnection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetParameter"></a>

### SpotWeldConnection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetPath"></a>

### SpotWeldConnection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetPropertyName"></a>

### SpotWeldConnection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetPropertyValue"></a>

### SpotWeldConnection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetSpotWeldIds"></a>

### SpotWeldConnection.GetSpotWeldIds() → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[int](https://docs.python.org/3/builtins/functions.html#int)]

GetSpotWeldIds method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetSpotWeldLocations"></a>

### SpotWeldConnection.GetSpotWeldLocations() → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[float](https://docs.python.org/3/builtins/functions.html#float)]

GetSpotWeldLocations method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetVisibleProperties"></a>

### SpotWeldConnection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetVisiblePropertyNames"></a>

### SpotWeldConnection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupAllSimilarChildren"></a>

### SpotWeldConnection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupSimilarObjects"></a>

### SpotWeldConnection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.InitializeLifetimeService"></a>

### SpotWeldConnection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.IsPropertyEditable"></a>

### SpotWeldConnection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SpotWeldConnection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.IsPropertyVisible"></a>

### SpotWeldConnection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SpotWeldConnection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NotifyOnHitPointAdded"></a>

### SpotWeldConnection.NotifyOnHitPointAdded(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

NotifyOnHitPointAdded method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Paste"></a>

### SpotWeldConnection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyByAPIName"></a>

### SpotWeldConnection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyById"></a>

### SpotWeldConnection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyByName"></a>

### SpotWeldConnection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveFromGroup"></a>

### SpotWeldConnection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveParameter"></a>

### SpotWeldConnection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveSpotWeld"></a>

### SpotWeldConnection.RemoveSpotWeld(spotWeldId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove an existing spot weld.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetCurrentItemsInWorksheet"></a>

### SpotWeldConnection.SetCurrentItemsInWorksheet(spotWeldIds: List[[int](https://docs.python.org/3/builtins/functions.html#int)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetCurrentItemsInWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetXCoordinate"></a>

### SpotWeldConnection.SetXCoordinate(spotWeldId: [int](https://docs.python.org/3/builtins/functions.html#int), val: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set the X coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetYCoordinate"></a>

### SpotWeldConnection.SetYCoordinate(spotWeldId: [int](https://docs.python.org/3/builtins/functions.html#int), val: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set the Y coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetZCoordinate"></a>

### SpotWeldConnection.SetZCoordinate(spotWeldId: [int](https://docs.python.org/3/builtins/functions.html#int), val: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set the Z coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.UnitSys"></a>

### SpotWeldConnection.UnitSys() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

UnitSys method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.add_OnHitPointAdded"></a>

### SpotWeldConnection.add_OnHitPointAdded(value: System.EventHandler[Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnectionChangedArgs]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnHitPointAdded method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.add_OnPointPicked"></a>

### SpotWeldConnection.add_OnPointPicked(value: System.EventHandler) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnPointPicked method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.remove_OnHitPointAdded"></a>

### SpotWeldConnection.remove_OnHitPointAdded(value: System.EventHandler[Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnectionChangedArgs]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnHitPointAdded method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.remove_OnPointPicked"></a>

### SpotWeldConnection.remove_OnPointPicked(value: System.EventHandler) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnPointPicked method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.setXYZ"></a>

### SpotWeldConnection.setXYZ(spotWeldId: [int](https://docs.python.org/3/builtins/functions.html#int), point: [Ansys.Mechanical.Graphics.Point](../../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)) → [None](https://docs.python.org/3/builtins/constants.html#None)

setXYZ method.

<!-- !! processed by numpydoc !! -->

