# `GeometryFidelity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.GeometryFidelity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.GeometryFidelity(internalObject: Any)

<a id="GeometryFidelity"></a>

### *class* GeometryFidelity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeometryFidelity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GeometryFidelity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#GeometryFidelity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GeometryFidelity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GeometryFidelity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GeometryFidelity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GeometryFidelity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GeometryFidelity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GeometryFidelity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GeometryFidelity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GeometryFidelity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GeometryFidelity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GeometryFidelity.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#GeometryFidelity.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#GeometryFidelity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GeometryFidelity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GeometryFidelity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GeometryFidelity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GeometryFidelity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GeometryFidelity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GeometryFidelity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GeometryFidelity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GeometryFidelity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GeometryFidelity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GeometryFidelity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GeometryFidelity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GeometryFidelity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GeometryFidelity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GeometryFidelity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GeometryFidelity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GeometryFidelity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GeometryFidelity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GeometryFidelity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GeometryFidelity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GeometryFidelity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GeometryFidelity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GeometryFidelity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GeometryFidelity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GeometryFidelity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GeometryFidelity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#GeometryFidelity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GeometryFidelity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#GeometryFidelity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#GeometryFidelity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#GeometryFidelity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeometryFidelity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#GeometryFidelity.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GeometryFidelity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#GeometryFidelity.IconName)                               | IconName property.                                            |
| [`Images`](#GeometryFidelity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryFidelity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#GeometryFidelity.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#GeometryFidelity.Name)                                       | Name property.                                                |
| [`NamedSelection`](#NamedSelection)                | Gets or sets the NamedSelection.                              |
| [`ObjectId`](#GeometryFidelity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#GeometryFidelity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#GeometryFidelity.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#GeometryFidelity.Parent)                                   | Parent property.                                              |
| [`Properties`](#GeometryFidelity.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#GeometryFidelity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#GeometryFidelity.State)                                     | State property.                                               |
| [`Suppressed`](#GeometryFidelity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#GeometryFidelity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryFidelity.AttachedRefs"></a>

### *property* GeometryFidelity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Children"></a>

### *property* GeometryFidelity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ClsId"></a>

### *property* GeometryFidelity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Comments"></a>

### *property* GeometryFidelity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.DataModelObjectCategory"></a>

### *property* GeometryFidelity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Figures"></a>

### *property* GeometryFidelity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupingFolder"></a>

### *property* GeometryFidelity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.IconName"></a>

### *property* GeometryFidelity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Images"></a>

### *property* GeometryFidelity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.InternalObject"></a>

### *property* GeometryFidelity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Location"></a>

### *property* GeometryFidelity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Name"></a>

### *property* GeometryFidelity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.NamedSelection"></a>

### *property* GeometryFidelity.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ObjectId"></a>

### *property* GeometryFidelity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ObjectState"></a>

### *property* GeometryFidelity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ObjectTags"></a>

### *property* GeometryFidelity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Parent"></a>

### *property* GeometryFidelity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Properties"></a>

### *property* GeometryFidelity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ScopingMethod"></a>

### *property* GeometryFidelity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.State"></a>

### *property* GeometryFidelity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Suppressed"></a>

### *property* GeometryFidelity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.VisibleProperties"></a>

### *property* GeometryFidelity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFidelity.Activate"></a>

### GeometryFidelity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.AddComment"></a>

### GeometryFidelity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.AddFigure"></a>

### GeometryFidelity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.AddImage"></a>

### GeometryFidelity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Copy"></a>

### GeometryFidelity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CopyTo"></a>

### GeometryFidelity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CreateObjRef"></a>

### GeometryFidelity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CreateParameter"></a>

### GeometryFidelity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Cut"></a>

### GeometryFidelity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Delete"></a>

### GeometryFidelity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Duplicate"></a>

### GeometryFidelity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Equals"></a>

### GeometryFidelity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GenerateMesh"></a>

### GeometryFidelity.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetAPIName"></a>

### GeometryFidelity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetAllProperties"></a>

### GeometryFidelity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetChildren"></a>

### GeometryFidelity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeometryFidelity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetDetailsView"></a>

### GeometryFidelity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetEnumName"></a>

### GeometryFidelity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetHashCode"></a>

### GeometryFidelity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetIconFile"></a>

### GeometryFidelity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetLifetimeService"></a>

### GeometryFidelity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetObjectData"></a>

### GeometryFidelity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetParameter"></a>

### GeometryFidelity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetPath"></a>

### GeometryFidelity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetPropertyName"></a>

### GeometryFidelity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetPropertyValue"></a>

### GeometryFidelity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetVisibleProperties"></a>

### GeometryFidelity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetVisiblePropertyNames"></a>

### GeometryFidelity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupAllSimilarChildren"></a>

### GeometryFidelity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupSimilarObjects"></a>

### GeometryFidelity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.InitializeLifetimeService"></a>

### GeometryFidelity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.IsPropertyEditable"></a>

### GeometryFidelity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryFidelity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.IsPropertyVisible"></a>

### GeometryFidelity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryFidelity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Paste"></a>

### GeometryFidelity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyByAPIName"></a>

### GeometryFidelity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyById"></a>

### GeometryFidelity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyByName"></a>

### GeometryFidelity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RemoveFromGroup"></a>

### GeometryFidelity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RemoveParameter"></a>

### GeometryFidelity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RenameBasedOnDefinition"></a>

### GeometryFidelity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

