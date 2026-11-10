# `Material`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Material"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Material(internalObject: Any)

<a id="Material"></a>

### *class* Material(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Material.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------------------------------|-------------------------------------------|
| [`GetMaterialAsDictionary`](#Material.GetMaterialAsDictionary)   | Returns material as a python dictionary   |

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Material.Activate)                                     | Activate the current object.                                                                |
| [`AddComment`](#Material.AddComment)                                 | Creates a new child Comment.                                                                |
| [`AddFigure`](#Material.AddFigure)                                   | Creates a new child Figure.                                                                 |
| [`AddImage`](#Material.AddImage)                                     | Creates a new child Image.                                                                  |
| [`AddMaterialAssignment`](#Material.AddMaterialAssignment)           | Run the AddMaterialAssignment action.                                                       |
| [`Copy`](#Material.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Material.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateMaterialAssignment`](#Material.CreateMaterialAssignment)     | Run the CreateMaterialAssignment action.                                                    |
| [`CreateObjRef`](#Material.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Material.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Material.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#Material.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Material.Equals)                                         | Equals method.                                                                              |
| [`GetAPIName`](#Material.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Material.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetAsDictionary`](#Material.GetAsDictionary)                       | Returns material as a python dictionary                                                     |
| [`GetChildren`](#Material.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Material.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetEngineeringDataMaterial`](#Material.GetEngineeringDataMaterial) | Returns the C# Engineering Data Object that the Material is using internally to keep data   |
| [`GetEnumName`](#Material.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#Material.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#Material.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Material.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Material.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#Material.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Material.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#Material.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Material.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Material.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Material.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Material.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Material.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Material.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Material.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Material.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#Material.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Material.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#Material.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#Material.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Material.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Material.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`AssignedBodies`](#Material.AssignedBodies)                   | Gets the AssignedBodies.                                                      |
| [`AttachedRefs`](#Material.AttachedRefs)                       | AttachedRefs property.                                                        |
| [`Children`](#Material.Children)                               | Gets the list of children.                                                    |
| [`ClsId`](#Material.ClsId)                                     | ClsId property.                                                               |
| [`Comments`](#Material.Comments)                               | Gets the list of associated comments.                                         |
| [`DataModelObjectCategory`](#Material.DataModelObjectCategory) | Gets the current DataModelObject's category.                                  |
| [`Figures`](#Material.Figures)                                 | Gets the list of associated figures.                                          |
| [`GroupingFolder`](#Material.GroupingFolder)                   | GroupingFolder property.                                                      |
| [`IconName`](#Material.IconName)                               | IconName property.                                                            |
| [`Images`](#Material.Images)                                   | Gets the list of associated images.                                           |
| [`InternalObject`](#Material.InternalObject)                   | Gets the internal object. For advanced usage only.                            |
| [`MaterialModels`](#Material.MaterialModels)                   | Returns a collection of the material models that this material is made up of. |
| [`Name`](#Material.Name)                                       | Name property.                                                                |
| [`ObjectId`](#Material.ObjectId)                               | ObjectId property.                                                            |
| [`ObjectState`](#Material.ObjectState)                         | ObjectState property.                                                         |
| [`ObjectTags`](#Material.ObjectTags)                           | ObjectTags property.                                                          |
| [`Parent`](#Material.Parent)                                   | Parent property.                                                              |
| [`Properties`](#Material.Properties)                           | Gets the list of properties for this object.                                  |
| [`State`](#Material.State)                                     | State property.                                                               |
| [`VisibleProperties`](#Material.VisibleProperties)             | Gets the list of properties that are visible for this object.                 |

<a id="property-detail"></a>

## Property detail

<a id="Material.AssignedBodies"></a>

### *property* Material.AssignedBodies *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AssignedBodies.

<!-- !! processed by numpydoc !! -->

<a id="Material.AttachedRefs"></a>

### *property* Material.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Children"></a>

### *property* Material.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Material.ClsId"></a>

### *property* Material.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Comments"></a>

### *property* Material.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Material.DataModelObjectCategory"></a>

### *property* Material.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Material.Figures"></a>

### *property* Material.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupingFolder"></a>

### *property* Material.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Material.IconName"></a>

### *property* Material.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Images"></a>

### *property* Material.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Material.InternalObject"></a>

### *property* Material.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Material.MaterialModels"></a>

### *property* Material.MaterialModels *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns a collection of the material models that this material is made up of.

<!-- !! processed by numpydoc !! -->

<a id="Material.Name"></a>

### *property* Material.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Material.ObjectId"></a>

### *property* Material.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Material.ObjectState"></a>

### *property* Material.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Material.ObjectTags"></a>

### *property* Material.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Parent"></a>

### *property* Material.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Properties"></a>

### *property* Material.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Material.State"></a>

### *property* Material.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Material.VisibleProperties"></a>

### *property* Material.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Material.Activate"></a>

### Material.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddComment"></a>

### Material.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddFigure"></a>

### Material.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddImage"></a>

### Material.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Material.AddMaterialAssignment"></a>

### Material.AddMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Run the AddMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="Material.Copy"></a>

### Material.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Material.CopyTo"></a>

### Material.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Material.CreateMaterialAssignment"></a>

### Material.CreateMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Run the CreateMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="Material.CreateObjRef"></a>

### Material.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Material.CreateParameter"></a>

### Material.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Cut"></a>

### Material.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Material.Duplicate"></a>

### Material.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Material.Equals"></a>

### Material.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetAPIName"></a>

### Material.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetAllProperties"></a>

### Material.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetAsDictionary"></a>

### Material.GetAsDictionary() → [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[Any, Any]

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

<a id="Material.GetChildren"></a>

### Material.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Material.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetDetailsView"></a>

### Material.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetEngineeringDataMaterial"></a>

### Material.GetEngineeringDataMaterial() → Any

Returns the C# Engineering Data Object that the Material is using internally to keep data

<!-- !! processed by numpydoc !! -->

<a id="Material.GetEnumName"></a>

### Material.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Material.GetHashCode"></a>

### Material.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetIconFile"></a>

### Material.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetLifetimeService"></a>

### Material.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetMaterialAsDictionary"></a>

### *classmethod* Material.GetMaterialAsDictionary(edaMaterial: Any) → [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[Any, Any]

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

<a id="Material.GetObjectData"></a>

### Material.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetParameter"></a>

### Material.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetPath"></a>

### Material.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetPropertyName"></a>

### Material.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetPropertyValue"></a>

### Material.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetVisibleProperties"></a>

### Material.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetVisiblePropertyNames"></a>

### Material.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupAllSimilarChildren"></a>

### Material.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupSimilarObjects"></a>

### Material.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Material.InitializeLifetimeService"></a>

### Material.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Material.IsPropertyEditable"></a>

### Material.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Material.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Material.IsPropertyVisible"></a>

### Material.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Material.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Material.Paste"></a>

### Material.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyByAPIName"></a>

### Material.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyById"></a>

### Material.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyByName"></a>

### Material.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Material.RemoveFromGroup"></a>

### Material.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Material.RemoveParameter"></a>

### Material.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

