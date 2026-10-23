# `CrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CrossSection(internalObject: Any)

<a id="CrossSection"></a>

### *class* CrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#CrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#CrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#CrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#CrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#CrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#CrossSection.State)                                       | State property.                                               |
| [`TransferableObjectId`](#CrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#CrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CrossSection.AttachedRefs"></a>

### *property* CrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Children"></a>

### *property* CrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ClsId"></a>

### *property* CrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Comments"></a>

### *property* CrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.DataModelObjectCategory"></a>

### *property* CrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Figures"></a>

### *property* CrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GroupingFolder"></a>

### *property* CrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.IconName"></a>

### *property* CrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Images"></a>

### *property* CrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ImportableObjectSourceId"></a>

### *property* CrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.InternalObject"></a>

### *property* CrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Name"></a>

### *property* CrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ObjectId"></a>

### *property* CrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ObjectState"></a>

### *property* CrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ObjectTags"></a>

### *property* CrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Parent"></a>

### *property* CrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Properties"></a>

### *property* CrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ReadOnly"></a>

### *property* CrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.State"></a>

### *property* CrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.TransferableObjectId"></a>

### *property* CrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.VisibleProperties"></a>

### *property* CrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CrossSection.Activate"></a>

### CrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.AddComment"></a>

### CrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.AddFigure"></a>

### CrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.AddImage"></a>

### CrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Copy"></a>

### CrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.CopyTo"></a>

### CrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.CreateObjRef"></a>

### CrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.CreateParameter"></a>

### CrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Cut"></a>

### CrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Delete"></a>

### CrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Duplicate"></a>

### CrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Equals"></a>

### CrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetAPIName"></a>

### CrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetAllProperties"></a>

### CrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetChildren"></a>

### CrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetDetailsView"></a>

### CrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetEnumName"></a>

### CrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetHashCode"></a>

### CrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetIconFile"></a>

### CrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetLifetimeService"></a>

### CrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetObjectData"></a>

### CrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetParameter"></a>

### CrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetPath"></a>

### CrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetPropertyName"></a>

### CrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetPropertyValue"></a>

### CrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetVisibleProperties"></a>

### CrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetVisiblePropertyNames"></a>

### CrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GroupAllSimilarChildren"></a>

### CrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GroupSimilarObjects"></a>

### CrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.InitializeLifetimeService"></a>

### CrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.IsPropertyEditable"></a>

### CrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.IsPropertyVisible"></a>

### CrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Paste"></a>

### CrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.PropertyByAPIName"></a>

### CrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.PropertyById"></a>

### CrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.PropertyByName"></a>

### CrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.RemoveFromGroup"></a>

### CrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.RemoveParameter"></a>

### CrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

