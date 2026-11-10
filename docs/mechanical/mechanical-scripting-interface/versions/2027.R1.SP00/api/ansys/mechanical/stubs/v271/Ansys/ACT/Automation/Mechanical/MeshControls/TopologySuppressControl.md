# `TopologySuppressControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.TopologySuppressControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.TopologySuppressControl(internalObject: Any)

<a id="TopologySuppressControl"></a>

### *class* TopologySuppressControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TopologySuppressControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TopologySuppressControl.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TopologySuppressControl.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TopologySuppressControl.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TopologySuppressControl.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#TopologySuppressControl.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TopologySuppressControl.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TopologySuppressControl.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TopologySuppressControl.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TopologySuppressControl.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TopologySuppressControl.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TopologySuppressControl.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TopologySuppressControl.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#TopologySuppressControl.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#TopologySuppressControl.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TopologySuppressControl.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TopologySuppressControl.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TopologySuppressControl.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TopologySuppressControl.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TopologySuppressControl.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TopologySuppressControl.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TopologySuppressControl.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TopologySuppressControl.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TopologySuppressControl.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TopologySuppressControl.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TopologySuppressControl.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TopologySuppressControl.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#TopologySuppressControl.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TopologySuppressControl.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TopologySuppressControl.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TopologySuppressControl.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TopologySuppressControl.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TopologySuppressControl.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TopologySuppressControl.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TopologySuppressControl.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TopologySuppressControl.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TopologySuppressControl.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TopologySuppressControl.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TopologySuppressControl.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TopologySuppressControl.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TopologySuppressControl.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TopologySuppressControl.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#TopologySuppressControl.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#TopologySuppressControl.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#TopologySuppressControl.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologySuppressControl.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#TopologySuppressControl.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#TopologySuppressControl.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#TopologySuppressControl.IconName)                               | IconName property.                                            |
| [`Images`](#TopologySuppressControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologySuppressControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#TopologySuppressControl.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#TopologySuppressControl.Name)                                       | Name property.                                                |
| [`ObjectId`](#TopologySuppressControl.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#TopologySuppressControl.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#TopologySuppressControl.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#TopologySuppressControl.Parent)                                   | Parent property.                                              |
| [`Properties`](#TopologySuppressControl.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#TopologySuppressControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#TopologySuppressControl.State)                                     | State property.                                               |
| [`Suppressed`](#TopologySuppressControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologySuppressControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologySuppressControl.AttachedRefs"></a>

### *property* TopologySuppressControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Children"></a>

### *property* TopologySuppressControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.ClsId"></a>

### *property* TopologySuppressControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Comments"></a>

### *property* TopologySuppressControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.DataModelObjectCategory"></a>

### *property* TopologySuppressControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Figures"></a>

### *property* TopologySuppressControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GroupingFolder"></a>

### *property* TopologySuppressControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.IconName"></a>

### *property* TopologySuppressControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Images"></a>

### *property* TopologySuppressControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.InternalObject"></a>

### *property* TopologySuppressControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Location"></a>

### *property* TopologySuppressControl.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Name"></a>

### *property* TopologySuppressControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.ObjectId"></a>

### *property* TopologySuppressControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.ObjectState"></a>

### *property* TopologySuppressControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.ObjectTags"></a>

### *property* TopologySuppressControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Parent"></a>

### *property* TopologySuppressControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Properties"></a>

### *property* TopologySuppressControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.ScopingMethod"></a>

### *property* TopologySuppressControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.State"></a>

### *property* TopologySuppressControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Suppressed"></a>

### *property* TopologySuppressControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.VisibleProperties"></a>

### *property* TopologySuppressControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologySuppressControl.Activate"></a>

### TopologySuppressControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.AddComment"></a>

### TopologySuppressControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.AddFigure"></a>

### TopologySuppressControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.AddImage"></a>

### TopologySuppressControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Copy"></a>

### TopologySuppressControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.CopyTo"></a>

### TopologySuppressControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.CreateObjRef"></a>

### TopologySuppressControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.CreateParameter"></a>

### TopologySuppressControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Cut"></a>

### TopologySuppressControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Delete"></a>

### TopologySuppressControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Duplicate"></a>

### TopologySuppressControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Equals"></a>

### TopologySuppressControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GenerateMesh"></a>

### TopologySuppressControl.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetAPIName"></a>

### TopologySuppressControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetAllProperties"></a>

### TopologySuppressControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetChildren"></a>

### TopologySuppressControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TopologySuppressControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetDetailsView"></a>

### TopologySuppressControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetEnumName"></a>

### TopologySuppressControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetHashCode"></a>

### TopologySuppressControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetIconFile"></a>

### TopologySuppressControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetLifetimeService"></a>

### TopologySuppressControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetObjectData"></a>

### TopologySuppressControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetParameter"></a>

### TopologySuppressControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetPath"></a>

### TopologySuppressControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetPropertyName"></a>

### TopologySuppressControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetPropertyValue"></a>

### TopologySuppressControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetVisibleProperties"></a>

### TopologySuppressControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GetVisiblePropertyNames"></a>

### TopologySuppressControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GroupAllSimilarChildren"></a>

### TopologySuppressControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.GroupSimilarObjects"></a>

### TopologySuppressControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.InitializeLifetimeService"></a>

### TopologySuppressControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.IsPropertyEditable"></a>

### TopologySuppressControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologySuppressControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.IsPropertyVisible"></a>

### TopologySuppressControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologySuppressControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.Paste"></a>

### TopologySuppressControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.PropertyByAPIName"></a>

### TopologySuppressControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.PropertyById"></a>

### TopologySuppressControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.PropertyByName"></a>

### TopologySuppressControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.RemoveFromGroup"></a>

### TopologySuppressControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.RemoveParameter"></a>

### TopologySuppressControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologySuppressControl.RenameBasedOnDefinition"></a>

### TopologySuppressControl.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

