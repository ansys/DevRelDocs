# `Path`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Path(internalObject: Any)

<a id="Path"></a>

### *class* Path(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Path.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Path.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Path.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Path.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Path.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Path.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Path.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Path.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Path.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Path.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Path.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Path.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Path.Equals)                                       | Equals method.                                                                              |
| [`ExportToTextFile`](#Path.ExportToTextFile)                   | Export the Path details to a text file.                                                     |
| [`FlipPathOrientatation`](#Path.FlipPathOrientatation)         | Flip Path Orientatation                                                                     |
| [`GetAPIName`](#Path.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Path.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Path.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Path.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Path.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Path.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Path.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Path.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Path.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Path.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Path.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Path.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Path.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Path.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Path.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Path.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Path.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Path.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Path.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Path.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Path.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Path.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Path.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Path.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Path.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Path.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SnapPathToMeshNodes`](#Path.SnapPathToMeshNodes)             | Snap path to mesh nodes                                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Path.AttachedRefs)                           | AttachedRefs property.                                        |
| [`Children`](#Path.Children)                                   | Gets the list of children.                                    |
| [`ClsId`](#Path.ClsId)                                         | ClsId property.                                               |
| [`Comments`](#Path.Comments)                                   | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Path.DataModelObjectCategory)     | Gets the current DataModelObject's category.                  |
| [`DiscretizationPoints`](#Path.DiscretizationPoints)           | Gets or sets the DiscretizationPoints.                        |
| [`EndCoordinateSystem`](#Path.EndCoordinateSystem)             | Gets or sets the EndCoordinateSystem.                         |
| [`EndXCoordinate`](#Path.EndXCoordinate)                       | Gets or sets the EndXCoordinate.                              |
| [`EndYCoordinate`](#Path.EndYCoordinate)                       | Gets or sets the EndYCoordinate.                              |
| [`EndZCoordinate`](#Path.EndZCoordinate)                       | Gets or sets the EndZCoordinate.                              |
| [`Figures`](#Path.Figures)                                     | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Path.GroupingFolder)                       | GroupingFolder property.                                      |
| [`HasValidGeometrySelection`](#Path.HasValidGeometrySelection) | Gets the HasValidGeometrySelection.                           |
| [`IconName`](#Path.IconName)                                   | IconName property.                                            |
| [`Id`](#Path.Id)                                               | Id property.                                                  |
| [`Ids`](#Path.Ids)                                             | Ids property.                                                 |
| [`Images`](#Path.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#Path.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#Path.Location)                                   | Gets or sets the Location.                                    |
| [`Name`](#Path.Name)                                           | Name property.                                                |
| [`NumberOfSamplingPoints`](#Path.NumberOfSamplingPoints)       | Gets or sets the NumberOfSamplingPoints.                      |
| [`NumberOfSubpaths`](#Path.NumberOfSubpaths)                   | Gets or sets the NumberOfSubpaths.                            |
| [`ObjectId`](#Path.ObjectId)                                   | ObjectId property.                                            |
| [`ObjectState`](#Path.ObjectState)                             | ObjectState property.                                         |
| [`ObjectTags`](#Path.ObjectTags)                               | ObjectTags property.                                          |
| [`OffsetEdgeLocation`](#Path.OffsetEdgeLocation)               | Gets or sets the OffsetEdgeLocation.                          |
| [`Parent`](#Path.Parent)                                       | Parent property.                                              |
| [`PathCoordinateSystem`](#Path.PathCoordinateSystem)           | Gets or sets the PathCoordinateSystem.                        |
| [`PathType`](#Path.PathType)                                   | Gets or sets the PathType.                                    |
| [`Properties`](#Path.Properties)                               | Gets the list of properties for this object.                  |
| [`SelectionType`](#Path.SelectionType)                         | SelectionType property.                                       |
| [`ShowMesh`](#Path.ShowMesh)                                   | Gets or sets the ShowMesh.                                    |
| [`SnapToMeshNodes`](#Path.SnapToMeshNodes)                     | Gets or sets the SnapToMeshNodes.                             |
| [`StartCoordinateSystem`](#Path.StartCoordinateSystem)         | Gets or sets the StartCoordinateSystem.                       |
| [`StartXCoordinate`](#Path.StartXCoordinate)                   | Gets or sets the StartXCoordinate.                            |
| [`StartYCoordinate`](#Path.StartYCoordinate)                   | Gets or sets the StartYCoordinate.                            |
| [`StartZCoordinate`](#Path.StartZCoordinate)                   | Gets or sets the StartZCoordinate.                            |
| [`State`](#Path.State)                                         | State property.                                               |
| [`Suppressed`](#Path.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Path.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Path.AttachedRefs"></a>

### *property* Path.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Children"></a>

### *property* Path.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Path.ClsId"></a>

### *property* Path.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Comments"></a>

### *property* Path.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Path.DataModelObjectCategory"></a>

### *property* Path.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Path.DiscretizationPoints"></a>

### *property* Path.DiscretizationPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DiscretizationPoints.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndCoordinateSystem"></a>

### *property* Path.EndCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndXCoordinate"></a>

### *property* Path.EndXCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndYCoordinate"></a>

### *property* Path.EndYCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndZCoordinate"></a>

### *property* Path.EndZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.Figures"></a>

### *property* Path.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Path.GroupingFolder"></a>

### *property* Path.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Path.HasValidGeometrySelection"></a>

### *property* Path.HasValidGeometrySelection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the HasValidGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="Path.IconName"></a>

### *property* Path.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Id"></a>

### *property* Path.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Ids"></a>

### *property* Path.Ids *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Ids property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Images"></a>

### *property* Path.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Path.InternalObject"></a>

### *property* Path.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPathAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Path.Location"></a>

### *property* Path.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Path.Name"></a>

### *property* Path.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Path.NumberOfSamplingPoints"></a>

### *property* Path.NumberOfSamplingPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSamplingPoints.

<!-- !! processed by numpydoc !! -->

<a id="Path.NumberOfSubpaths"></a>

### *property* Path.NumberOfSubpaths *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSubpaths.

<!-- !! processed by numpydoc !! -->

<a id="Path.ObjectId"></a>

### *property* Path.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Path.ObjectState"></a>

### *property* Path.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Path.ObjectTags"></a>

### *property* Path.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Path.OffsetEdgeLocation"></a>

### *property* Path.OffsetEdgeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OffsetEdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="Path.Parent"></a>

### *property* Path.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Path.PathCoordinateSystem"></a>

### *property* Path.PathCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PathCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Path.PathType"></a>

### *property* Path.PathType *: [Ansys.Mechanical.DataModel.Enums.PathScopingType](../../../Mechanical/DataModel/Enums/PathScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PathScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

<a id="Path.Properties"></a>

### *property* Path.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Path.SelectionType"></a>

### *property* Path.SelectionType *: [Ansys.ACT.Interfaces.Common.SelectionTypeEnum](../../Interfaces/Common/SelectionTypeEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.SelectionTypeEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SelectionType property.

<!-- !! processed by numpydoc !! -->

<a id="Path.ShowMesh"></a>

### *property* Path.ShowMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowMesh.

<!-- !! processed by numpydoc !! -->

<a id="Path.SnapToMeshNodes"></a>

### *property* Path.SnapToMeshNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapToMeshNodes.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartCoordinateSystem"></a>

### *property* Path.StartCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartXCoordinate"></a>

### *property* Path.StartXCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartYCoordinate"></a>

### *property* Path.StartYCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartZCoordinate"></a>

### *property* Path.StartZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.State"></a>

### *property* Path.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Suppressed"></a>

### *property* Path.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Path.VisibleProperties"></a>

### *property* Path.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Path.Activate"></a>

### Path.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Path.AddComment"></a>

### Path.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Path.AddFigure"></a>

### Path.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Path.AddImage"></a>

### Path.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Path.Copy"></a>

### Path.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Path.CopyTo"></a>

### Path.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Path.CreateObjRef"></a>

### Path.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Path.CreateParameter"></a>

### Path.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Cut"></a>

### Path.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Path.Delete"></a>

### Path.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Path.Duplicate"></a>

### Path.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Path.Equals"></a>

### Path.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Path.ExportToTextFile"></a>

### Path.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export the Path details to a text file.

<!-- !! processed by numpydoc !! -->

<a id="Path.FlipPathOrientatation"></a>

### Path.FlipPathOrientatation() → [None](https://docs.python.org/3/builtins/constants.html#None)

Flip Path Orientatation

<!-- !! processed by numpydoc !! -->

<a id="Path.GetAPIName"></a>

### Path.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetAllProperties"></a>

### Path.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetChildren"></a>

### Path.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Path.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetDetailsView"></a>

### Path.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetEnumName"></a>

### Path.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Path.GetHashCode"></a>

### Path.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetIconFile"></a>

### Path.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetLifetimeService"></a>

### Path.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetObjectData"></a>

### Path.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetParameter"></a>

### Path.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetPath"></a>

### Path.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetPropertyName"></a>

### Path.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetPropertyValue"></a>

### Path.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetVisibleProperties"></a>

### Path.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetVisiblePropertyNames"></a>

### Path.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Path.GroupAllSimilarChildren"></a>

### Path.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Path.GroupSimilarObjects"></a>

### Path.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Path.InitializeLifetimeService"></a>

### Path.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Path.IsPropertyEditable"></a>

### Path.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Path.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Path.IsPropertyVisible"></a>

### Path.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Path.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Path.Paste"></a>

### Path.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Path.PropertyByAPIName"></a>

### Path.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Path.PropertyById"></a>

### Path.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Path.PropertyByName"></a>

### Path.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Path.RemoveFromGroup"></a>

### Path.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Path.RemoveParameter"></a>

### Path.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Path.SnapPathToMeshNodes"></a>

### Path.SnapPathToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap path to mesh nodes

<!-- !! processed by numpydoc !! -->

