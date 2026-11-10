# `Deviation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Deviation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Deviation(internalObject: Any)

<a id="Deviation"></a>

### *class* Deviation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Deviation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Deviation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Deviation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Deviation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Deviation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Deviation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Deviation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Deviation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Deviation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Deviation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Deviation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Deviation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Deviation.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Deviation.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#Deviation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Deviation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Deviation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Deviation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Deviation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Deviation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Deviation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Deviation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Deviation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Deviation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Deviation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Deviation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Deviation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Deviation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Deviation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Deviation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Deviation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Deviation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Deviation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Deviation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Deviation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Deviation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Deviation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Deviation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Deviation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Deviation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Deviation.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Deviation.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Deviation.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Deviation.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Deviation.Comments)                               | Gets the list of associated comments.                         |
| [`ControlType`](#Deviation.ControlType)                         | Gets or sets the SagControlType.                              |
| [`DataModelObjectCategory`](#Deviation.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Deviation.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Deviation.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Deviation.IconName)                               | IconName property.                                            |
| [`Images`](#Deviation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Deviation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Deviation.Location)                               | Gets or sets the Location.                                    |
| [`MeshSize`](#Deviation.MeshSize)                               | MeshSize property.                                            |
| [`Name`](#Deviation.Name)                                       | Name property.                                                |
| [`NamedSelection`](#NamedSelection)         | Gets or sets the NamedSelection.                              |
| [`NumberOfDivisions`](#Deviation.NumberOfDivisions)             | NumberOfDivisions property.                                   |
| [`ObjectId`](#Deviation.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Deviation.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Deviation.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Deviation.Parent)                                   | Parent property.                                              |
| [`Properties`](#Deviation.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Deviation.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#Deviation.State)                                     | State property.                                               |
| [`Suppressed`](#Deviation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Tolerance`](#Deviation.Tolerance)                             | Tolerance property.                                           |
| [`VisibleProperties`](#Deviation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Deviation.AttachedRefs"></a>

### *property* Deviation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Children"></a>

### *property* Deviation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ClsId"></a>

### *property* Deviation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Comments"></a>

### *property* Deviation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ControlType"></a>

### *property* Deviation.ControlType *: Ansys.Mechanical.DataModel.Enums.DeviationControlType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SagControlType.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.DataModelObjectCategory"></a>

### *property* Deviation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Figures"></a>

### *property* Deviation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GroupingFolder"></a>

### *property* Deviation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.IconName"></a>

### *property* Deviation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Images"></a>

### *property* Deviation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.InternalObject"></a>

### *property* Deviation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Location"></a>

### *property* Deviation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.MeshSize"></a>

### *property* Deviation.MeshSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshSize property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Name"></a>

### *property* Deviation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.NamedSelection"></a>

### *property* Deviation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.NumberOfDivisions"></a>

### *property* Deviation.NumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ObjectId"></a>

### *property* Deviation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ObjectState"></a>

### *property* Deviation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ObjectTags"></a>

### *property* Deviation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Parent"></a>

### *property* Deviation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Properties"></a>

### *property* Deviation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.ScopingMethod"></a>

### *property* Deviation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.State"></a>

### *property* Deviation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Suppressed"></a>

### *property* Deviation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Tolerance"></a>

### *property* Deviation.Tolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tolerance property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.VisibleProperties"></a>

### *property* Deviation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Deviation.Activate"></a>

### Deviation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.AddComment"></a>

### Deviation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.AddFigure"></a>

### Deviation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.AddImage"></a>

### Deviation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Copy"></a>

### Deviation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.CopyTo"></a>

### Deviation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.CreateObjRef"></a>

### Deviation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.CreateParameter"></a>

### Deviation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Cut"></a>

### Deviation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Delete"></a>

### Deviation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Duplicate"></a>

### Deviation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Equals"></a>

### Deviation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GenerateMesh"></a>

### Deviation.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetAPIName"></a>

### Deviation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetAllProperties"></a>

### Deviation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetChildren"></a>

### Deviation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Deviation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetDetailsView"></a>

### Deviation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetEnumName"></a>

### Deviation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetHashCode"></a>

### Deviation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetIconFile"></a>

### Deviation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetLifetimeService"></a>

### Deviation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetObjectData"></a>

### Deviation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetParameter"></a>

### Deviation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetPath"></a>

### Deviation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetPropertyName"></a>

### Deviation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetPropertyValue"></a>

### Deviation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetVisibleProperties"></a>

### Deviation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GetVisiblePropertyNames"></a>

### Deviation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GroupAllSimilarChildren"></a>

### Deviation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.GroupSimilarObjects"></a>

### Deviation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.InitializeLifetimeService"></a>

### Deviation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.IsPropertyEditable"></a>

### Deviation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Deviation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.IsPropertyVisible"></a>

### Deviation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Deviation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.Paste"></a>

### Deviation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.PropertyByAPIName"></a>

### Deviation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Deviation.PropertyById"></a>

### Deviation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.PropertyByName"></a>

### Deviation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.RemoveFromGroup"></a>

### Deviation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.RemoveParameter"></a>

### Deviation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Deviation.RenameBasedOnDefinition"></a>

### Deviation.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

