# `AMPowderGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMPowderGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMPowderGroup(internalObject: Any)

<a id="AMPowderGroup"></a>

### *class* AMPowderGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A class representing a group of PredefinedAMPowder and
GeneratedAMPowder objects.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMPowderGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AMPowderGroup.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMPowderGroup.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddGeneratedAMPowder`](#AMPowderGroup.AddGeneratedAMPowder)           | Create a GeneratedAMPowder object.                                                          |
| [`AddImage`](#AMPowderGroup.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPredefinedAMPowder`](#AMPowderGroup.AddPredefinedAMPowder)         | Create a PredefinedAMPowder                                                                 |
| [`Copy`](#AMPowderGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMPowderGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMPowderGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMPowderGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMPowderGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMPowderGroup.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AMPowderGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMPowderGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AMPowderGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMPowderGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMPowderGroup.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMPowderGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMPowderGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMPowderGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMPowderGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMPowderGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMPowderGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AMPowderGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMPowderGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AMPowderGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMPowderGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMPowderGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMPowderGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMPowderGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMPowderGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMPowderGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMPowderGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMPowderGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMPowderGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMPowderGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AMPowderGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AMPowderGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMPowderGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMPowderGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#AMPowderGroup.AttachedRefs)                       | AttachedRefs property.                                                                                                       |
| [`Children`](#AMPowderGroup.Children)                               | Gets the list of children.                                                                                                   |
| [`ClsId`](#AMPowderGroup.ClsId)                                     | ClsId property.                                                                                                              |
| [`Comments`](#AMPowderGroup.Comments)                               | Gets the list of associated comments.                                                                                        |
| [`DataModelObjectCategory`](#AMPowderGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                 |
| [`Figures`](#AMPowderGroup.Figures)                                 | Gets the list of associated figures.                                                                                         |
| [`GenerateOnRemesh`](#AMPowderGroup.GenerateOnRemesh)               | Gets or sets the flag that controls whether GeneratedAMPowder bodies are automatically generated when the mesh is generated. |
| [`GroupingFolder`](#AMPowderGroup.GroupingFolder)                   | GroupingFolder property.                                                                                                     |
| [`IconName`](#AMPowderGroup.IconName)                               | IconName property.                                                                                                           |
| [`Images`](#AMPowderGroup.Images)                                   | Gets the list of associated images.                                                                                          |
| [`InternalObject`](#AMPowderGroup.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                           |
| [`Name`](#AMPowderGroup.Name)                                       | Name property.                                                                                                               |
| [`ObjectId`](#AMPowderGroup.ObjectId)                               | ObjectId property.                                                                                                           |
| [`ObjectState`](#AMPowderGroup.ObjectState)                         | ObjectState property.                                                                                                        |
| [`ObjectTags`](#AMPowderGroup.ObjectTags)                           | ObjectTags property.                                                                                                         |
| [`Parent`](#AMPowderGroup.Parent)                                   | Parent property.                                                                                                             |
| [`Properties`](#AMPowderGroup.Properties)                           | Gets the list of properties for this object.                                                                                 |
| [`State`](#AMPowderGroup.State)                                     | State property.                                                                                                              |
| [`VisibleProperties`](#AMPowderGroup.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                |

<a id="property-detail"></a>

## Property detail

<a id="AMPowderGroup.AttachedRefs"></a>

### *property* AMPowderGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Children"></a>

### *property* AMPowderGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.ClsId"></a>

### *property* AMPowderGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Comments"></a>

### *property* AMPowderGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.DataModelObjectCategory"></a>

### *property* AMPowderGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Figures"></a>

### *property* AMPowderGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GenerateOnRemesh"></a>

### *property* AMPowderGroup.GenerateOnRemesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the flag that controls whether GeneratedAMPowder bodies are automatically generated when the mesh is generated.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GroupingFolder"></a>

### *property* AMPowderGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.IconName"></a>

### *property* AMPowderGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Images"></a>

### *property* AMPowderGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.InternalObject"></a>

### *property* AMPowderGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMPowderGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Name"></a>

### *property* AMPowderGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.ObjectId"></a>

### *property* AMPowderGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.ObjectState"></a>

### *property* AMPowderGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.ObjectTags"></a>

### *property* AMPowderGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Parent"></a>

### *property* AMPowderGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Properties"></a>

### *property* AMPowderGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.State"></a>

### *property* AMPowderGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.VisibleProperties"></a>

### *property* AMPowderGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMPowderGroup.Activate"></a>

### AMPowderGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.AddComment"></a>

### AMPowderGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.AddFigure"></a>

### AMPowderGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.AddGeneratedAMPowder"></a>

### AMPowderGroup.AddGeneratedAMPowder() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMPowder](GeneratedAMPowder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMPowder)

Create a GeneratedAMPowder object.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.AddImage"></a>

### AMPowderGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.AddPredefinedAMPowder"></a>

### AMPowderGroup.AddPredefinedAMPowder() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMPowder](PredefinedAMPowder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMPowder)

Create a PredefinedAMPowder

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Copy"></a>

### AMPowderGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.CopyTo"></a>

### AMPowderGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.CreateObjRef"></a>

### AMPowderGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.CreateParameter"></a>

### AMPowderGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Cut"></a>

### AMPowderGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Delete"></a>

### AMPowderGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Duplicate"></a>

### AMPowderGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Equals"></a>

### AMPowderGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetAPIName"></a>

### AMPowderGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetAllProperties"></a>

### AMPowderGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetChildren"></a>

### AMPowderGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMPowderGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetDetailsView"></a>

### AMPowderGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetEnumName"></a>

### AMPowderGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetHashCode"></a>

### AMPowderGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetIconFile"></a>

### AMPowderGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetLifetimeService"></a>

### AMPowderGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetObjectData"></a>

### AMPowderGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetParameter"></a>

### AMPowderGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetPath"></a>

### AMPowderGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetPropertyName"></a>

### AMPowderGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetPropertyValue"></a>

### AMPowderGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetVisibleProperties"></a>

### AMPowderGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GetVisiblePropertyNames"></a>

### AMPowderGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GroupAllSimilarChildren"></a>

### AMPowderGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.GroupSimilarObjects"></a>

### AMPowderGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.InitializeLifetimeService"></a>

### AMPowderGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.IsPropertyEditable"></a>

### AMPowderGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMPowderGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.IsPropertyVisible"></a>

### AMPowderGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMPowderGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.Paste"></a>

### AMPowderGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.PropertyByAPIName"></a>

### AMPowderGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.PropertyById"></a>

### AMPowderGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.PropertyByName"></a>

### AMPowderGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.RemoveFromGroup"></a>

### AMPowderGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMPowderGroup.RemoveParameter"></a>

### AMPowderGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

