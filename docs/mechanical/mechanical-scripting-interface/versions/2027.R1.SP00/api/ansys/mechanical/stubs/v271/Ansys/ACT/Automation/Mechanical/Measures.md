# `Measures`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Measures"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Measures(internalObject: Any)

<a id="Measures"></a>

### *class* Measures(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Measures.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Measures.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Measures.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddCompositeCriterion`](#Measures.AddCompositeCriterion)         | Creates a new CompositeCriterion                                                            |
| [`AddFigure`](#Measures.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Measures.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPrimaryCriterion`](#Measures.AddPrimaryCriterion)             | Creates a new PrimaryCriterion                                                              |
| [`Copy`](#Measures.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Measures.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Measures.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Measures.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Measures.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Measures.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Measures.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Measures.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#Measures.EvaluateAllResults)               | Evaluate all measures.                                                                      |
| [`GetAPIName`](#Measures.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Measures.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Measures.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Measures.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Measures.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Measures.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Measures.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Measures.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Measures.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Measures.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Measures.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Measures.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Measures.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Measures.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Measures.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Measures.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Measures.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Measures.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Measures.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Measures.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Measures.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Measures.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Measures.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Measures.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Measures.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Measures.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Measures.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Measures.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Measures.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Measures.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Measures.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Measures.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Measures.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Measures.IconName)                               | IconName property.                                            |
| [`Images`](#Measures.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Measures.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#Measures.Name)                                       | Name property.                                                |
| [`ObjectId`](#Measures.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Measures.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Measures.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Measures.Parent)                                   | Parent property.                                              |
| [`Properties`](#Measures.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#Measures.State)                                     | State property.                                               |
| [`VisibleProperties`](#Measures.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Measures.AttachedRefs"></a>

### *property* Measures.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Children"></a>

### *property* Measures.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Measures.ClsId"></a>

### *property* Measures.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Comments"></a>

### *property* Measures.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Measures.DataModelObjectCategory"></a>

### *property* Measures.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Figures"></a>

### *property* Measures.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GroupingFolder"></a>

### *property* Measures.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.IconName"></a>

### *property* Measures.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Images"></a>

### *property* Measures.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Measures.InternalObject"></a>

### *property* Measures.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeasureGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Name"></a>

### *property* Measures.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.ObjectId"></a>

### *property* Measures.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.ObjectState"></a>

### *property* Measures.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.ObjectTags"></a>

### *property* Measures.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Parent"></a>

### *property* Measures.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Properties"></a>

### *property* Measures.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Measures.State"></a>

### *property* Measures.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.VisibleProperties"></a>

### *property* Measures.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Measures.Activate"></a>

### Measures.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddComment"></a>

### Measures.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddCompositeCriterion"></a>

### Measures.AddCompositeCriterion() → [Ansys.ACT.Automation.Mechanical.CompositeCriterion](CompositeCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterion)

Creates a new CompositeCriterion

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddFigure"></a>

### Measures.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddImage"></a>

### Measures.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddPrimaryCriterion"></a>

### Measures.AddPrimaryCriterion() → [Ansys.ACT.Automation.Mechanical.PrimaryCriterion](PrimaryCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PrimaryCriterion)

Creates a new PrimaryCriterion

<!-- !! processed by numpydoc !! -->

<a id="Measures.Copy"></a>

### Measures.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Measures.CopyTo"></a>

### Measures.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Measures.CreateObjRef"></a>

### Measures.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.CreateParameter"></a>

### Measures.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Cut"></a>

### Measures.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Delete"></a>

### Measures.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Duplicate"></a>

### Measures.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Equals"></a>

### Measures.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.EvaluateAllResults"></a>

### Measures.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluate all measures.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetAPIName"></a>

### Measures.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetAllProperties"></a>

### Measures.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetChildren"></a>

### Measures.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Measures.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetDetailsView"></a>

### Measures.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetEnumName"></a>

### Measures.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetHashCode"></a>

### Measures.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetIconFile"></a>

### Measures.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetLifetimeService"></a>

### Measures.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetObjectData"></a>

### Measures.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetParameter"></a>

### Measures.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetPath"></a>

### Measures.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetPropertyName"></a>

### Measures.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetPropertyValue"></a>

### Measures.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetVisibleProperties"></a>

### Measures.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetVisiblePropertyNames"></a>

### Measures.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GroupAllSimilarChildren"></a>

### Measures.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GroupSimilarObjects"></a>

### Measures.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Measures.InitializeLifetimeService"></a>

### Measures.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.IsPropertyEditable"></a>

### Measures.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Measures.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.IsPropertyVisible"></a>

### Measures.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Measures.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Paste"></a>

### Measures.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Measures.PropertyByAPIName"></a>

### Measures.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Measures.PropertyById"></a>

### Measures.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Measures.PropertyByName"></a>

### Measures.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Measures.RemoveFromGroup"></a>

### Measures.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Measures.RemoveParameter"></a>

### Measures.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

