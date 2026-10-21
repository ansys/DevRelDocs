# `SpotWeldGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup(internalObject: Any)

<a id="SpotWeldGroup"></a>

### *class* SpotWeldGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SpotWeldGroup.Activate)                                       | Activate the current object.                                                                |
| [`AddComment`](#SpotWeldGroup.AddComment)                                   | Creates a new child Comment.                                                                |
| [`AddImage`](#SpotWeldGroup.AddImage)                                       | Creates a new child Image.                                                                  |
| [`AddSpotWeldConnection`](#SpotWeldGroup.AddSpotWeldConnection)             | Creates a new child SpotWeldConnection.                                                     |
| [`Copy`](#SpotWeldGroup.Copy)                                               | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SpotWeldGroup.CopyTo)                                           | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SpotWeldGroup.CreateObjRef)                               | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SpotWeldGroup.CreateParameter)                         | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SpotWeldGroup.Cut)                                                 | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#SpotWeldGroup.Duplicate)                                     | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SpotWeldGroup.Equals)                                           | Equals method.                                                                              |
| [`ExportToFile`](#SpotWeldGroup.ExportToFile)                               | Exports all spot welds to user selected path.                                               |
| [`GenerateSpotWeldConnections`](#SpotWeldGroup.GenerateSpotWeldConnections) | Generate spot welds provided in the Weld input file.                                        |
| [`GetAPIName`](#SpotWeldGroup.GetAPIName)                                   | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SpotWeldGroup.GetAllProperties)                       | GetAllProperties method.                                                                    |
| [`GetAllSpotWeldIds`](#SpotWeldGroup.GetAllSpotWeldIds)                     | GetAllSpotWeldIds method.                                                                   |
| [`GetChildren`](#SpotWeldGroup.GetChildren)                                 | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SpotWeldGroup.GetDetailsView)                           | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SpotWeldGroup.GetEnumName)                                 | Enum name bound to value                                                                    |
| [`GetHashCode`](#SpotWeldGroup.GetHashCode)                                 | GetHashCode method.                                                                         |
| [`GetIconFile`](#SpotWeldGroup.GetIconFile)                                 | GetIconFile method.                                                                         |
| [`GetLargestSpotWeldID`](#SpotWeldGroup.GetLargestSpotWeldID)               | GetLargestSpotWeldID method.                                                                |
| [`GetLifetimeService`](#SpotWeldGroup.GetLifetimeService)                   | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SpotWeldGroup.GetObjectData)                             | GetObjectData method.                                                                       |
| [`GetParameter`](#SpotWeldGroup.GetParameter)                               | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SpotWeldGroup.GetPath)                                         | GetPath method.                                                                             |
| [`GetPropertyName`](#SpotWeldGroup.GetPropertyName)                         | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SpotWeldGroup.GetPropertyValue)                       | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SpotWeldGroup.GetVisibleProperties)               | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SpotWeldGroup.GetVisiblePropertyNames)         | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SpotWeldGroup.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SpotWeldGroup.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SpotWeldGroup.InitializeLifetimeService)     | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SpotWeldGroup.IsPropertyEditable)                   | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SpotWeldGroup.IsPropertyVisible)                     | IsPropertyVisible method.                                                                   |
| [`Paste`](#SpotWeldGroup.Paste)                                             | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SpotWeldGroup.PropertyByAPIName)                     | Get a property by its API name.                                                             |
| [`PropertyById`](#SpotWeldGroup.PropertyById)                               | PropertyById method.                                                                        |
| [`PropertyByName`](#SpotWeldGroup.PropertyByName)                           | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SpotWeldGroup.RemoveFromGroup)                         | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SpotWeldGroup.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetLargestSpotWeldID`](#SpotWeldGroup.SetLargestSpotWeldID)               | SetLargestSpotWeldID method.                                                                |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AngleTolerance`](#SpotWeldGroup.AngleTolerance)                     | Gets or sets the AngleTolerance.                              |
| [`AttachedRefs`](#SpotWeldGroup.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#SpotWeldGroup.Children)                                 | Gets the list of children.                                    |
| [`ChildrenCreationMethod`](#SpotWeldGroup.ChildrenCreationMethod)     | Gets or sets the ChildrenCreationMethod.                      |
| [`ClsId`](#SpotWeldGroup.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#SpotWeldGroup.Comments)                                 | Gets the list of associated comments.                         |
| [`ConnectionBehavior`](#SpotWeldGroup.ConnectionBehavior)             | Gets or sets the ConnectionBehavior.                          |
| [`DataModelObjectCategory`](#SpotWeldGroup.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#SpotWeldGroup.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#SpotWeldGroup.IconName)                                 | IconName property.                                            |
| [`Images`](#SpotWeldGroup.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SpotWeldGroup.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SpotWeldGroup.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Material`](#Material)                                 | Gets or sets the Material.                                    |
| [`Name`](#SpotWeldGroup.Name)                                         | Name property.                                                |
| [`NumConnections`](#SpotWeldGroup.NumConnections)                     | Gets the NumConnections.                                      |
| [`NumWeldPoints`](#SpotWeldGroup.NumWeldPoints)                       | Gets the NumWeldPoints.                                       |
| [`NumberOfLayers`](#SpotWeldGroup.NumberOfLayers)                     | Gets or sets the NumberOfLayers.                              |
| [`ObjectId`](#SpotWeldGroup.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#SpotWeldGroup.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#SpotWeldGroup.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#SpotWeldGroup.Parent)                                     | Parent property.                                              |
| [`PenetrationTolerance`](#SpotWeldGroup.PenetrationTolerance)         | Gets or sets the PenetrationTolerance.                        |
| [`Properties`](#SpotWeldGroup.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SpotWeldGroup.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ShellThicknessEffect`](#SpotWeldGroup.ShellThicknessEffect)         | Gets or sets the ShellThicknessEffect.                        |
| [`SnapToEdgeTolerance`](#SpotWeldGroup.SnapToEdgeTolerance)           | Gets or sets the SnapToEdgeTolerance.                         |
| [`SpotWeldFileName`](#SpotWeldGroup.SpotWeldFileName)                 | Gets or sets the SpotWeldFileName.                            |
| [`State`](#SpotWeldGroup.State)                                       | State property.                                               |
| [`StiffnessBehavior`](#SpotWeldGroup.StiffnessBehavior)               | Gets or sets the StiffnessBehavior.                           |
| [`TransferableObjectId`](#SpotWeldGroup.TransferableObjectId)         | TransferableObjectId property.                                |
| [`Units`](#SpotWeldGroup.Units)                                       | Gets or sets the Units.                                       |
| [`VisibleProperties`](#SpotWeldGroup.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`WeldRadius`](#SpotWeldGroup.WeldRadius)                             | Gets or sets the WeldRadius.                                  |
| [`WeldSearchDistance`](#SpotWeldGroup.WeldSearchDistance)             | Gets or sets the WeldSearchDistance.                          |
| [`WeldType`](#SpotWeldGroup.WeldType)                                 | Gets or sets the WeldType.                                    |

<a id="property-detail"></a>

## Property detail

<a id="SpotWeldGroup.AngleTolerance"></a>

### *property* SpotWeldGroup.AngleTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AttachedRefs"></a>

### *property* SpotWeldGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Children"></a>

### *property* SpotWeldGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ChildrenCreationMethod"></a>

### *property* SpotWeldGroup.ChildrenCreationMethod *: [Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod](../../../../Mechanical/DataModel/Enums/ConnectionCreationMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChildrenCreationMethod.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ClsId"></a>

### *property* SpotWeldGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Comments"></a>

### *property* SpotWeldGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ConnectionBehavior"></a>

### *property* SpotWeldGroup.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.DataModelObjectCategory"></a>

### *property* SpotWeldGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GroupingFolder"></a>

### *property* SpotWeldGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.IconName"></a>

### *property* SpotWeldGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Images"></a>

### *property* SpotWeldGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ImportableObjectSourceId"></a>

### *property* SpotWeldGroup.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.InternalObject"></a>

### *property* SpotWeldGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Material"></a>

### *property* SpotWeldGroup.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Name"></a>

### *property* SpotWeldGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.NumConnections"></a>

### *property* SpotWeldGroup.NumConnections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumConnections.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.NumWeldPoints"></a>

### *property* SpotWeldGroup.NumWeldPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.NumberOfLayers"></a>

### *property* SpotWeldGroup.NumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ObjectId"></a>

### *property* SpotWeldGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ObjectState"></a>

### *property* SpotWeldGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ObjectTags"></a>

### *property* SpotWeldGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Parent"></a>

### *property* SpotWeldGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PenetrationTolerance"></a>

### *property* SpotWeldGroup.PenetrationTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Properties"></a>

### *property* SpotWeldGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ReadOnly"></a>

### *property* SpotWeldGroup.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ShellThicknessEffect"></a>

### *property* SpotWeldGroup.ShellThicknessEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.SnapToEdgeTolerance"></a>

### *property* SpotWeldGroup.SnapToEdgeTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.SpotWeldFileName"></a>

### *property* SpotWeldGroup.SpotWeldFileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpotWeldFileName.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.State"></a>

### *property* SpotWeldGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.StiffnessBehavior"></a>

### *property* SpotWeldGroup.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.TransferableObjectId"></a>

### *property* SpotWeldGroup.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Units"></a>

### *property* SpotWeldGroup.Units *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Units.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.VisibleProperties"></a>

### *property* SpotWeldGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.WeldRadius"></a>

### *property* SpotWeldGroup.WeldRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WeldRadius.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.WeldSearchDistance"></a>

### *property* SpotWeldGroup.WeldSearchDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WeldSearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.WeldType"></a>

### *property* SpotWeldGroup.WeldType *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WeldType.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpotWeldGroup.Activate"></a>

### SpotWeldGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AddComment"></a>

### SpotWeldGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AddImage"></a>

### SpotWeldGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AddSpotWeldConnection"></a>

### SpotWeldGroup.AddSpotWeldConnection() → [Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection](SpotWeldConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection)

Creates a new child SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Copy"></a>

### SpotWeldGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.CopyTo"></a>

### SpotWeldGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.CreateObjRef"></a>

### SpotWeldGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.CreateParameter"></a>

### SpotWeldGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Cut"></a>

### SpotWeldGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Duplicate"></a>

### SpotWeldGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Equals"></a>

### SpotWeldGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ExportToFile"></a>

### SpotWeldGroup.ExportToFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports all spot welds to user selected path.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GenerateSpotWeldConnections"></a>

### SpotWeldGroup.GenerateSpotWeldConnections() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate spot welds provided in the Weld input file.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetAPIName"></a>

### SpotWeldGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetAllProperties"></a>

### SpotWeldGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetAllSpotWeldIds"></a>

### SpotWeldGroup.GetAllSpotWeldIds() → List[[int](https://docs.python.org/3/builtins/functions.html#int)]

GetAllSpotWeldIds method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetChildren"></a>

### SpotWeldGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SpotWeldGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetDetailsView"></a>

### SpotWeldGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetEnumName"></a>

### SpotWeldGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetHashCode"></a>

### SpotWeldGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetIconFile"></a>

### SpotWeldGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetLargestSpotWeldID"></a>

### SpotWeldGroup.GetLargestSpotWeldID() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetLargestSpotWeldID method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetLifetimeService"></a>

### SpotWeldGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetObjectData"></a>

### SpotWeldGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetParameter"></a>

### SpotWeldGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetPath"></a>

### SpotWeldGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetPropertyName"></a>

### SpotWeldGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetPropertyValue"></a>

### SpotWeldGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetVisibleProperties"></a>

### SpotWeldGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetVisiblePropertyNames"></a>

### SpotWeldGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GroupAllSimilarChildren"></a>

### SpotWeldGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GroupSimilarObjects"></a>

### SpotWeldGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.InitializeLifetimeService"></a>

### SpotWeldGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.IsPropertyEditable"></a>

### SpotWeldGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SpotWeldGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.IsPropertyVisible"></a>

### SpotWeldGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SpotWeldGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Paste"></a>

### SpotWeldGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PropertyByAPIName"></a>

### SpotWeldGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PropertyById"></a>

### SpotWeldGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PropertyByName"></a>

### SpotWeldGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.RemoveFromGroup"></a>

### SpotWeldGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.RemoveParameter"></a>

### SpotWeldGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.SetLargestSpotWeldID"></a>

### SpotWeldGroup.SetLargestSpotWeldID(largestId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetLargestSpotWeldID method.

<!-- !! processed by numpydoc !! -->

