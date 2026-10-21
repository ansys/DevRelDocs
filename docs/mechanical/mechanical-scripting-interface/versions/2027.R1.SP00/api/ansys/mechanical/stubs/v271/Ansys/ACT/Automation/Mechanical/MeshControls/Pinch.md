# `Pinch`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Pinch"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Pinch(internalObject: Any)

<a id="Pinch"></a>

### *class* Pinch(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Pinch.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Pinch.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Pinch.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Pinch.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Pinch.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Pinch.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Pinch.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Pinch.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Pinch.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Pinch.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Pinch.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Pinch.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Pinch.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Pinch.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#Pinch.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Pinch.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Pinch.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Pinch.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Pinch.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Pinch.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Pinch.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Pinch.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Pinch.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Pinch.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Pinch.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Pinch.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Pinch.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Pinch.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Pinch.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Pinch.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Pinch.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Pinch.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Pinch.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Pinch.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Pinch.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Pinch.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Pinch.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Pinch.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Pinch.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Pinch.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Pinch.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Pinch.AttachedRefs)                       | AttachedRefs property.                                        |
| [`AutoManualMode`](#Pinch.AutoManualMode)                   | Gets the AutoManualMode.                                      |
| [`Children`](#Pinch.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Pinch.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Pinch.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Pinch.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Pinch.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Pinch.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Pinch.IconName)                               | IconName property.                                            |
| [`Images`](#Pinch.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Pinch.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterGeometry`](#Pinch.MasterGeometry)                   | Gets or sets the MasterGeometry.                              |
| [`Name`](#Pinch.Name)                                       | Name property.                                                |
| [`ObjectId`](#Pinch.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Pinch.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Pinch.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Pinch.Parent)                                   | Parent property.                                              |
| [`Properties`](#Pinch.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Pinch.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`SlaveGeometry`](#Pinch.SlaveGeometry)                     | Gets or sets the SlaveGeometry.                               |
| [`State`](#Pinch.State)                                     | State property.                                               |
| [`Suppressed`](#Pinch.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Tolerance`](#Pinch.Tolerance)                             | Gets or sets the Tolerance.                                   |
| [`VisibleProperties`](#Pinch.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Pinch.AttachedRefs"></a>

### *property* Pinch.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AutoManualMode"></a>

### *property* Pinch.AutoManualMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AutoManualMode.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Children"></a>

### *property* Pinch.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.ClsId"></a>

### *property* Pinch.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Comments"></a>

### *property* Pinch.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.DataModelObjectCategory"></a>

### *property* Pinch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Figures"></a>

### *property* Pinch.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GroupingFolder"></a>

### *property* Pinch.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.IconName"></a>

### *property* Pinch.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Images"></a>

### *property* Pinch.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.InternalObject"></a>

### *property* Pinch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.MasterGeometry"></a>

### *property* Pinch.MasterGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MasterGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Name"></a>

### *property* Pinch.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.ObjectId"></a>

### *property* Pinch.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.ObjectState"></a>

### *property* Pinch.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.ObjectTags"></a>

### *property* Pinch.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Parent"></a>

### *property* Pinch.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Properties"></a>

### *property* Pinch.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.ScopingMethod"></a>

### *property* Pinch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.SlaveGeometry"></a>

### *property* Pinch.SlaveGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SlaveGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.State"></a>

### *property* Pinch.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Suppressed"></a>

### *property* Pinch.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Tolerance"></a>

### *property* Pinch.Tolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.VisibleProperties"></a>

### *property* Pinch.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Pinch.Activate"></a>

### Pinch.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AddComment"></a>

### Pinch.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AddFigure"></a>

### Pinch.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.AddImage"></a>

### Pinch.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Copy"></a>

### Pinch.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.CopyTo"></a>

### Pinch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.CreateObjRef"></a>

### Pinch.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.CreateParameter"></a>

### Pinch.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Cut"></a>

### Pinch.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Delete"></a>

### Pinch.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Duplicate"></a>

### Pinch.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Equals"></a>

### Pinch.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GenerateMesh"></a>

### Pinch.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetAPIName"></a>

### Pinch.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetAllProperties"></a>

### Pinch.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetChildren"></a>

### Pinch.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Pinch.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetDetailsView"></a>

### Pinch.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetEnumName"></a>

### Pinch.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetHashCode"></a>

### Pinch.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetIconFile"></a>

### Pinch.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetLifetimeService"></a>

### Pinch.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetObjectData"></a>

### Pinch.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetParameter"></a>

### Pinch.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetPath"></a>

### Pinch.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetPropertyName"></a>

### Pinch.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetPropertyValue"></a>

### Pinch.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetVisibleProperties"></a>

### Pinch.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GetVisiblePropertyNames"></a>

### Pinch.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GroupAllSimilarChildren"></a>

### Pinch.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.GroupSimilarObjects"></a>

### Pinch.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.InitializeLifetimeService"></a>

### Pinch.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.IsPropertyEditable"></a>

### Pinch.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Pinch.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.IsPropertyVisible"></a>

### Pinch.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Pinch.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.Paste"></a>

### Pinch.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.PropertyByAPIName"></a>

### Pinch.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Pinch.PropertyById"></a>

### Pinch.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.PropertyByName"></a>

### Pinch.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.RemoveFromGroup"></a>

### Pinch.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.RemoveParameter"></a>

### Pinch.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pinch.RenameBasedOnDefinition"></a>

### Pinch.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

