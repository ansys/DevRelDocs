# `MatchControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl(internalObject: Any)

<a id="MatchControl"></a>

### *class* MatchControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MatchControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MatchControl.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MatchControl.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MatchControl.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MatchControl.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MatchControl.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MatchControl.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MatchControl.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MatchControl.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MatchControl.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MatchControl.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MatchControl.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MatchControl.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#MatchControl.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#MatchControl.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MatchControl.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MatchControl.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MatchControl.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MatchControl.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MatchControl.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MatchControl.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MatchControl.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MatchControl.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MatchControl.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MatchControl.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MatchControl.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MatchControl.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MatchControl.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MatchControl.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MatchControl.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MatchControl.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MatchControl.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MatchControl.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MatchControl.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MatchControl.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MatchControl.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MatchControl.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MatchControl.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MatchControl.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MatchControl.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MatchControl.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MatchControl.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#MatchControl.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#MatchControl.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#MatchControl.Comments)                               | Gets the list of associated comments.                         |
| [`ControlMessages`](#MatchControl.ControlMessages)                 | Gets the ControlMessages.                                     |
| [`DataModelObjectCategory`](#MatchControl.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#MatchControl.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MatchControl.GroupingFolder)                   | GroupingFolder property.                                      |
| [`HighCoordinateSystem`](#MatchControl.HighCoordinateSystem)       | Gets or sets the HighCoordinateSystem.                        |
| [`HighGeometrySelection`](#MatchControl.HighGeometrySelection)     | Gets or sets the HighGeometrySelection.                       |
| [`HighNamedSelection`](#MatchControl.HighNamedSelection)           | Gets or sets the HighNamedSelection.                          |
| [`IconName`](#MatchControl.IconName)                               | IconName property.                                            |
| [`Images`](#MatchControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MatchControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LowCoordinateSystem`](#MatchControl.LowCoordinateSystem)         | Gets or sets the LowCoordinateSystem.                         |
| [`LowGeometrySelection`](#MatchControl.LowGeometrySelection)       | Gets or sets the LowGeometrySelection.                        |
| [`LowNamedSelection`](#MatchControl.LowNamedSelection)             | Gets or sets the LowNamedSelection.                           |
| [`Name`](#MatchControl.Name)                                       | Name property.                                                |
| [`ObjectId`](#MatchControl.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#MatchControl.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#MatchControl.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#MatchControl.Parent)                                   | Parent property.                                              |
| [`Properties`](#MatchControl.Properties)                           | Gets the list of properties for this object.                  |
| [`RotationAxis`](#MatchControl.RotationAxis)                       | Gets or sets the RotationAxis.                                |
| [`ScopingMethod`](#MatchControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#MatchControl.State)                                     | State property.                                               |
| [`Suppressed`](#MatchControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Transformation`](#MatchControl.Transformation)                   | Gets or sets the Transformation.                              |
| [`VisibleProperties`](#MatchControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MatchControl.AttachedRefs"></a>

### *property* MatchControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Children"></a>

### *property* MatchControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ClsId"></a>

### *property* MatchControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Comments"></a>

### *property* MatchControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ControlMessages"></a>

### *property* MatchControl.ControlMessages *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.DataModelObjectCategory"></a>

### *property* MatchControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Figures"></a>

### *property* MatchControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupingFolder"></a>

### *property* MatchControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighCoordinateSystem"></a>

### *property* MatchControl.HighCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighGeometrySelection"></a>

### *property* MatchControl.HighGeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighNamedSelection"></a>

### *property* MatchControl.HighNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.IconName"></a>

### *property* MatchControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Images"></a>

### *property* MatchControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.InternalObject"></a>

### *property* MatchControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowCoordinateSystem"></a>

### *property* MatchControl.LowCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowGeometrySelection"></a>

### *property* MatchControl.LowGeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowNamedSelection"></a>

### *property* MatchControl.LowNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Name"></a>

### *property* MatchControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ObjectId"></a>

### *property* MatchControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ObjectState"></a>

### *property* MatchControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ObjectTags"></a>

### *property* MatchControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Parent"></a>

### *property* MatchControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Properties"></a>

### *property* MatchControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RotationAxis"></a>

### *property* MatchControl.RotationAxis *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ScopingMethod"></a>

### *property* MatchControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.State"></a>

### *property* MatchControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Suppressed"></a>

### *property* MatchControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Transformation"></a>

### *property* MatchControl.Transformation *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Transformation.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.VisibleProperties"></a>

### *property* MatchControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatchControl.Activate"></a>

### MatchControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddComment"></a>

### MatchControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddFigure"></a>

### MatchControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddImage"></a>

### MatchControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Copy"></a>

### MatchControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CopyTo"></a>

### MatchControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CreateObjRef"></a>

### MatchControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CreateParameter"></a>

### MatchControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Cut"></a>

### MatchControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Delete"></a>

### MatchControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Duplicate"></a>

### MatchControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Equals"></a>

### MatchControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GenerateMesh"></a>

### MatchControl.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetAPIName"></a>

### MatchControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetAllProperties"></a>

### MatchControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetChildren"></a>

### MatchControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MatchControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetDetailsView"></a>

### MatchControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetEnumName"></a>

### MatchControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetHashCode"></a>

### MatchControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetIconFile"></a>

### MatchControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetLifetimeService"></a>

### MatchControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetObjectData"></a>

### MatchControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetParameter"></a>

### MatchControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetPath"></a>

### MatchControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetPropertyName"></a>

### MatchControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetPropertyValue"></a>

### MatchControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetVisibleProperties"></a>

### MatchControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetVisiblePropertyNames"></a>

### MatchControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupAllSimilarChildren"></a>

### MatchControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupSimilarObjects"></a>

### MatchControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.InitializeLifetimeService"></a>

### MatchControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.IsPropertyEditable"></a>

### MatchControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MatchControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.IsPropertyVisible"></a>

### MatchControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MatchControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Paste"></a>

### MatchControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyByAPIName"></a>

### MatchControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyById"></a>

### MatchControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyByName"></a>

### MatchControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RemoveFromGroup"></a>

### MatchControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RemoveParameter"></a>

### MatchControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RenameBasedOnDefinition"></a>

### MatchControl.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

