# `GeometryImportGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImportGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeometryImportGroup(internalObject: Any)

<a id="GeometryImportGroup"></a>

### *class* GeometryImportGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeometryImportGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GeometryImportGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#GeometryImportGroup.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GeometryImportGroup.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddGeometryImport`](#GeometryImportGroup.AddGeometryImport)                 | Create the object for working with an imported part.                                        |
| [`AddImage`](#GeometryImportGroup.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddModelImport`](#GeometryImportGroup.AddModelImport)                       | AddModelImport method.                                                                      |
| [`AddModelPreview`](#GeometryImportGroup.AddModelPreview)                     | AddModelPreview method.                                                                     |
| [`CanAddGeometryImport`](#GeometryImportGroup.CanAddGeometryImport)           | CanAddGeometryImport method.                                                                |
| [`CanAddModelImport`](#GeometryImportGroup.CanAddModelImport)                 | CanAddModelImport method.                                                                   |
| [`CanImportModelPreview`](#GeometryImportGroup.CanImportModelPreview)         | CanImportModelPreview method.                                                               |
| [`Copy`](#GeometryImportGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GeometryImportGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GeometryImportGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GeometryImportGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GeometryImportGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#GeometryImportGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GeometryImportGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GeometryImportGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GeometryImportGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GeometryImportGroup.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GeometryImportGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GeometryImportGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetEnumerator`](#GeometryImportGroup.GetEnumerator)                         | GetEnumerator method.                                                                       |
| [`GetHashCode`](#GeometryImportGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GeometryImportGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GeometryImportGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GeometryImportGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GeometryImportGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GeometryImportGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GeometryImportGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GeometryImportGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GeometryImportGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GeometryImportGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GeometryImportGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GeometryImportGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GeometryImportGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GeometryImportGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GeometryImportGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GeometryImportGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GeometryImportGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GeometryImportGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GeometryImportGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GeometryImportGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GeometryImportGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GeometryImportGroup.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#GeometryImportGroup.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#GeometryImportGroup.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#GeometryImportGroup.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#GeometryImportGroup.Count)                                     | Get the number of child GeometryImport instances.             |
| [`DataModelObjectCategory`](#GeometryImportGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#GeometryImportGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GeometryImportGroup.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#GeometryImportGroup.IconName)                               | IconName property.                                            |
| [`Images`](#GeometryImportGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryImportGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Item`](#GeometryImportGroup.Item)                                       | Item property.                                                |
| [`Name`](#GeometryImportGroup.Name)                                       | Name property.                                                |
| [`ObjectId`](#GeometryImportGroup.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#GeometryImportGroup.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#GeometryImportGroup.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#GeometryImportGroup.Parent)                                   | Parent property.                                              |
| [`Properties`](#GeometryImportGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#GeometryImportGroup.State)                                     | State property.                                               |
| [`VisibleProperties`](#GeometryImportGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryImportGroup.AttachedRefs"></a>

### *property* GeometryImportGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Children"></a>

### *property* GeometryImportGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.ClsId"></a>

### *property* GeometryImportGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Comments"></a>

### *property* GeometryImportGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Count"></a>

### *property* GeometryImportGroup.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the number of child GeometryImport instances.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.DataModelObjectCategory"></a>

### *property* GeometryImportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Figures"></a>

### *property* GeometryImportGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupingFolder"></a>

### *property* GeometryImportGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.IconName"></a>

### *property* GeometryImportGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Images"></a>

### *property* GeometryImportGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.InternalObject"></a>

### *property* GeometryImportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryImportGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Item"></a>

### *property* GeometryImportGroup.Item *: [Ansys.ACT.Automation.Mechanical.GeometryImport](GeometryImport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImport) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Name"></a>

### *property* GeometryImportGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.ObjectId"></a>

### *property* GeometryImportGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.ObjectState"></a>

### *property* GeometryImportGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.ObjectTags"></a>

### *property* GeometryImportGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Parent"></a>

### *property* GeometryImportGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Properties"></a>

### *property* GeometryImportGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.State"></a>

### *property* GeometryImportGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.VisibleProperties"></a>

### *property* GeometryImportGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryImportGroup.Activate"></a>

### GeometryImportGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddComment"></a>

### GeometryImportGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddFigure"></a>

### GeometryImportGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddGeometryImport"></a>

### GeometryImportGroup.AddGeometryImport() → [Ansys.ACT.Automation.Mechanical.GeometryImport](GeometryImport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImport)

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddImage"></a>

### GeometryImportGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddModelImport"></a>

### GeometryImportGroup.AddModelImport() → [Ansys.ACT.Automation.Mechanical.ModelImport](ModelImport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ModelImport)

AddModelImport method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddModelPreview"></a>

### GeometryImportGroup.AddModelPreview() → Ansys.ACT.Automation.Mechanical.ModelPreview

AddModelPreview method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CanAddGeometryImport"></a>

### GeometryImportGroup.CanAddGeometryImport() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanAddGeometryImport method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CanAddModelImport"></a>

### GeometryImportGroup.CanAddModelImport() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanAddModelImport method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CanImportModelPreview"></a>

### GeometryImportGroup.CanImportModelPreview() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanImportModelPreview method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Copy"></a>

### GeometryImportGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CopyTo"></a>

### GeometryImportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CreateObjRef"></a>

### GeometryImportGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CreateParameter"></a>

### GeometryImportGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Cut"></a>

### GeometryImportGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Duplicate"></a>

### GeometryImportGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Equals"></a>

### GeometryImportGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetAPIName"></a>

### GeometryImportGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetAllProperties"></a>

### GeometryImportGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetChildren"></a>

### GeometryImportGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeometryImportGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetDetailsView"></a>

### GeometryImportGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetEnumName"></a>

### GeometryImportGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetEnumerator"></a>

### GeometryImportGroup.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.GeometryImport](GeometryImport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImport)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetHashCode"></a>

### GeometryImportGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetIconFile"></a>

### GeometryImportGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetLifetimeService"></a>

### GeometryImportGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetObjectData"></a>

### GeometryImportGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetParameter"></a>

### GeometryImportGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetPath"></a>

### GeometryImportGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetPropertyName"></a>

### GeometryImportGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetPropertyValue"></a>

### GeometryImportGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetVisibleProperties"></a>

### GeometryImportGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetVisiblePropertyNames"></a>

### GeometryImportGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupAllSimilarChildren"></a>

### GeometryImportGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupSimilarObjects"></a>

### GeometryImportGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.InitializeLifetimeService"></a>

### GeometryImportGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.IsPropertyEditable"></a>

### GeometryImportGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryImportGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.IsPropertyVisible"></a>

### GeometryImportGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryImportGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Paste"></a>

### GeometryImportGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyByAPIName"></a>

### GeometryImportGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyById"></a>

### GeometryImportGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyByName"></a>

### GeometryImportGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.RemoveFromGroup"></a>

### GeometryImportGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.RemoveParameter"></a>

### GeometryImportGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

