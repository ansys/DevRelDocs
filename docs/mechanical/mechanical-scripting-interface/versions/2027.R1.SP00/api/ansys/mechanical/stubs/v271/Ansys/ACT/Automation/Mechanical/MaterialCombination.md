# `MaterialCombination`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialCombination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialCombination(internalObject: Any)

<a id="MaterialCombination"></a>

### *class* MaterialCombination(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MaterialCombination.Activate)                                     | Activate the current object.                                                                |
| [`AddComment`](#MaterialCombination.AddComment)                                 | Creates a new child Comment.                                                                |
| [`AddFigure`](#MaterialCombination.AddFigure)                                   | Creates a new child Figure.                                                                 |
| [`AddImage`](#MaterialCombination.AddImage)                                     | Creates a new child Image.                                                                  |
| [`AddMaterial`](#MaterialCombination.AddMaterial)                               | Add a material to the combination.                                                          |
| [`AddMaterialAssignment`](#MaterialCombination.AddMaterialAssignment)           | Run the AddMaterialAssignment action.                                                       |
| [`AddMaterialByName`](#MaterialCombination.AddMaterialByName)                   | Add a material to the combination by name.                                                  |
| [`Copy`](#MaterialCombination.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MaterialCombination.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateMaterialAssignment`](#MaterialCombination.CreateMaterialAssignment)     | Run the CreateMaterialAssignment action.                                                    |
| [`CreateObjRef`](#MaterialCombination.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MaterialCombination.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MaterialCombination.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MaterialCombination.Delete)                                         | Delete the MaterialCombination.                                                             |
| [`Duplicate`](#MaterialCombination.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MaterialCombination.Equals)                                         | Equals method.                                                                              |
| [`GetAPIName`](#MaterialCombination.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MaterialCombination.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetAsDictionary`](#MaterialCombination.GetAsDictionary)                       | Returns material as a python dictionary                                                     |
| [`GetChildren`](#MaterialCombination.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MaterialCombination.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetEngineeringDataMaterial`](#MaterialCombination.GetEngineeringDataMaterial) | Returns the C# Engineering Data Object that the Material is using internally to keep data   |
| [`GetEnumName`](#MaterialCombination.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#MaterialCombination.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#MaterialCombination.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MaterialCombination.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MaterialCombination.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#MaterialCombination.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MaterialCombination.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#MaterialCombination.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MaterialCombination.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MaterialCombination.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MaterialCombination.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MaterialCombination.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MaterialCombination.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MaterialCombination.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MaterialCombination.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MaterialCombination.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#MaterialCombination.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MaterialCombination.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#MaterialCombination.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#MaterialCombination.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MaterialCombination.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveMaterial`](#MaterialCombination.RemoveMaterial)                         | Remove material from the combination.                                                       |
| [`RemoveMaterialByName`](#MaterialCombination.RemoveMaterialByName)             | Remove material from the combination by name.                                               |
| [`RemoveParameter`](#MaterialCombination.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`AddMaterialToCombination`](#MaterialCombination.AddMaterialToCombination)   | AddMaterialToCombination property.                                            |
| [`AssignedBodies`](#MaterialCombination.AssignedBodies)                       | Gets the AssignedBodies.                                                      |
| [`AttachedRefs`](#MaterialCombination.AttachedRefs)                           | AttachedRefs property.                                                        |
| [`Children`](#MaterialCombination.Children)                                   | Gets the list of children.                                                    |
| [`ClsId`](#MaterialCombination.ClsId)                                         | ClsId property.                                                               |
| [`Comments`](#MaterialCombination.Comments)                                   | Gets the list of associated comments.                                         |
| [`DataModelObjectCategory`](#MaterialCombination.DataModelObjectCategory)     | Gets the current DataModelObject's category.                                  |
| [`Figures`](#MaterialCombination.Figures)                                     | Gets the list of associated figures.                                          |
| [`GroupingFolder`](#MaterialCombination.GroupingFolder)                       | GroupingFolder property.                                                      |
| [`IconName`](#MaterialCombination.IconName)                                   | IconName property.                                                            |
| [`Images`](#MaterialCombination.Images)                                       | Gets the list of associated images.                                           |
| [`InternalObject`](#MaterialCombination.InternalObject)                       | Gets the internal object. For advanced usage only.                            |
| [`MaterialModels`](#MaterialCombination.MaterialModels)                       | Returns a collection of the material models that this material is made up of. |
| [`Materials`](Materials.md#Materials)                                         | Dictionary of Material to Fraction in Combination.                            |
| [`Name`](#MaterialCombination.Name)                                           | Name property.                                                                |
| [`ObjectId`](#MaterialCombination.ObjectId)                                   | ObjectId property.                                                            |
| [`ObjectState`](#MaterialCombination.ObjectState)                             | ObjectState property.                                                         |
| [`ObjectTags`](#MaterialCombination.ObjectTags)                               | ObjectTags property.                                                          |
| [`Parent`](#MaterialCombination.Parent)                                       | Parent property.                                                              |
| [`Properties`](#MaterialCombination.Properties)                               | Gets the list of properties for this object.                                  |
| [`State`](#MaterialCombination.State)                                         | State property.                                                               |
| [`Suppressed`](#MaterialCombination.Suppressed)                               | Suppress or unsuppress the MaterialCombination.                               |
| [`VisibleProperties`](#MaterialCombination.VisibleProperties)                 | Gets the list of properties that are visible for this object.                 |

<a id="property-detail"></a>

## Property detail

<a id="MaterialCombination.AddMaterialToCombination"></a>

### *property* MaterialCombination.AddMaterialToCombination *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AddMaterialToCombination property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AssignedBodies"></a>

### *property* MaterialCombination.AssignedBodies *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AssignedBodies.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AttachedRefs"></a>

### *property* MaterialCombination.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Children"></a>

### *property* MaterialCombination.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.ClsId"></a>

### *property* MaterialCombination.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Comments"></a>

### *property* MaterialCombination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.DataModelObjectCategory"></a>

### *property* MaterialCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Figures"></a>

### *property* MaterialCombination.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GroupingFolder"></a>

### *property* MaterialCombination.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.IconName"></a>

### *property* MaterialCombination.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Images"></a>

### *property* MaterialCombination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.InternalObject"></a>

### *property* MaterialCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialCombinationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.MaterialModels"></a>

### *property* MaterialCombination.MaterialModels *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns a collection of the material models that this material is made up of.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Materials"></a>

### *property* MaterialCombination.Materials *: Ansys.ACT.Automation.Mechanical.MaterialFractionDictionary | [None](https://docs.python.org/3/builtins/constants.html#None)*

Dictionary of Material to Fraction in Combination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Name"></a>

### *property* MaterialCombination.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.ObjectId"></a>

### *property* MaterialCombination.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.ObjectState"></a>

### *property* MaterialCombination.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.ObjectTags"></a>

### *property* MaterialCombination.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Parent"></a>

### *property* MaterialCombination.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Properties"></a>

### *property* MaterialCombination.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.State"></a>

### *property* MaterialCombination.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Suppressed"></a>

### *property* MaterialCombination.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Suppress or unsuppress the MaterialCombination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.VisibleProperties"></a>

### *property* MaterialCombination.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialCombination.Activate"></a>

### MaterialCombination.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddComment"></a>

### MaterialCombination.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddFigure"></a>

### MaterialCombination.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddImage"></a>

### MaterialCombination.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddMaterial"></a>

### MaterialCombination.AddMaterial(material: [Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Material)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add a material to the combination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddMaterialAssignment"></a>

### MaterialCombination.AddMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Run the AddMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddMaterialByName"></a>

### MaterialCombination.AddMaterialByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add a material to the combination by name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Copy"></a>

### MaterialCombination.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CopyTo"></a>

### MaterialCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CreateMaterialAssignment"></a>

### MaterialCombination.CreateMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Run the CreateMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CreateObjRef"></a>

### MaterialCombination.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CreateParameter"></a>

### MaterialCombination.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Cut"></a>

### MaterialCombination.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Delete"></a>

### MaterialCombination.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete the MaterialCombination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Duplicate"></a>

### MaterialCombination.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Equals"></a>

### MaterialCombination.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetAPIName"></a>

### MaterialCombination.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetAllProperties"></a>

### MaterialCombination.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetAsDictionary"></a>

### MaterialCombination.GetAsDictionary() → [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[Any, Any]

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetChildren"></a>

### MaterialCombination.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MaterialCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetDetailsView"></a>

### MaterialCombination.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetEngineeringDataMaterial"></a>

### MaterialCombination.GetEngineeringDataMaterial() → Any

Returns the C# Engineering Data Object that the Material is using internally to keep data

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetEnumName"></a>

### MaterialCombination.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetHashCode"></a>

### MaterialCombination.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetIconFile"></a>

### MaterialCombination.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetLifetimeService"></a>

### MaterialCombination.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetObjectData"></a>

### MaterialCombination.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetParameter"></a>

### MaterialCombination.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetPath"></a>

### MaterialCombination.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetPropertyName"></a>

### MaterialCombination.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetPropertyValue"></a>

### MaterialCombination.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetVisibleProperties"></a>

### MaterialCombination.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetVisiblePropertyNames"></a>

### MaterialCombination.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GroupAllSimilarChildren"></a>

### MaterialCombination.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GroupSimilarObjects"></a>

### MaterialCombination.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.InitializeLifetimeService"></a>

### MaterialCombination.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.IsPropertyEditable"></a>

### MaterialCombination.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaterialCombination.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.IsPropertyVisible"></a>

### MaterialCombination.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaterialCombination.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Paste"></a>

### MaterialCombination.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.PropertyByAPIName"></a>

### MaterialCombination.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.PropertyById"></a>

### MaterialCombination.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.PropertyByName"></a>

### MaterialCombination.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveFromGroup"></a>

### MaterialCombination.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveMaterial"></a>

### MaterialCombination.RemoveMaterial(material: [Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Material)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove material from the combination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveMaterialByName"></a>

### MaterialCombination.RemoveMaterialByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove material from the combination by name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveParameter"></a>

### MaterialCombination.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

