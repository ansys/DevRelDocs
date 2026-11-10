# `MeshControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.MeshControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.MeshControl(internalObject: Any)

<a id="MeshControl"></a>

### *class* MeshControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MeshControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshControl.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MeshControl.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MeshControl.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshControl.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MeshControl.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshControl.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshControl.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshControl.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshControl.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshControl.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshControl.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshControl.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#MeshControl.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#MeshControl.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshControl.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshControl.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshControl.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshControl.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshControl.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshControl.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshControl.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshControl.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshControl.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshControl.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshControl.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshControl.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshControl.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshControl.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshControl.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshControl.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshControl.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshControl.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshControl.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshControl.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshControl.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshControl.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshControl.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MeshControl.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshControl.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MeshControl.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MeshControl.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#MeshControl.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#MeshControl.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#MeshControl.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MeshControl.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#MeshControl.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MeshControl.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#MeshControl.IconName)                               | IconName property.                                            |
| [`Images`](#MeshControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#MeshControl.Name)                                       | Name property.                                                |
| [`ObjectId`](#MeshControl.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#MeshControl.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#MeshControl.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#MeshControl.Parent)                                   | Parent property.                                              |
| [`Properties`](#MeshControl.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#MeshControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#MeshControl.State)                                     | State property.                                               |
| [`Suppressed`](#MeshControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MeshControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshControl.AttachedRefs"></a>

### *property* MeshControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Children"></a>

### *property* MeshControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.ClsId"></a>

### *property* MeshControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Comments"></a>

### *property* MeshControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.DataModelObjectCategory"></a>

### *property* MeshControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Figures"></a>

### *property* MeshControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupingFolder"></a>

### *property* MeshControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.IconName"></a>

### *property* MeshControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Images"></a>

### *property* MeshControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.InternalObject"></a>

### *property* MeshControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Name"></a>

### *property* MeshControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.ObjectId"></a>

### *property* MeshControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.ObjectState"></a>

### *property* MeshControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.ObjectTags"></a>

### *property* MeshControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Parent"></a>

### *property* MeshControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Properties"></a>

### *property* MeshControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.ScopingMethod"></a>

### *property* MeshControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.State"></a>

### *property* MeshControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Suppressed"></a>

### *property* MeshControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.VisibleProperties"></a>

### *property* MeshControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshControl.Activate"></a>

### MeshControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddComment"></a>

### MeshControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddFigure"></a>

### MeshControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddImage"></a>

### MeshControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Copy"></a>

### MeshControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CopyTo"></a>

### MeshControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CreateObjRef"></a>

### MeshControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CreateParameter"></a>

### MeshControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Cut"></a>

### MeshControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Delete"></a>

### MeshControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Duplicate"></a>

### MeshControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Equals"></a>

### MeshControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GenerateMesh"></a>

### MeshControl.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetAPIName"></a>

### MeshControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetAllProperties"></a>

### MeshControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetChildren"></a>

### MeshControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetDetailsView"></a>

### MeshControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetEnumName"></a>

### MeshControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetHashCode"></a>

### MeshControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetIconFile"></a>

### MeshControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetLifetimeService"></a>

### MeshControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetObjectData"></a>

### MeshControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetParameter"></a>

### MeshControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetPath"></a>

### MeshControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetPropertyName"></a>

### MeshControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetPropertyValue"></a>

### MeshControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetVisibleProperties"></a>

### MeshControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetVisiblePropertyNames"></a>

### MeshControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupAllSimilarChildren"></a>

### MeshControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupSimilarObjects"></a>

### MeshControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.InitializeLifetimeService"></a>

### MeshControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.IsPropertyEditable"></a>

### MeshControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.IsPropertyVisible"></a>

### MeshControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Paste"></a>

### MeshControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyByAPIName"></a>

### MeshControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyById"></a>

### MeshControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyByName"></a>

### MeshControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RemoveFromGroup"></a>

### MeshControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RemoveParameter"></a>

### MeshControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RenameBasedOnDefinition"></a>

### MeshControl.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

