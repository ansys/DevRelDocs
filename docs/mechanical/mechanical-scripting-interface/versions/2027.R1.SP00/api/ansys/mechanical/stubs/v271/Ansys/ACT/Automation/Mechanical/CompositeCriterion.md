# `CompositeCriterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CompositeCriterion(internalObject: Any)

<a id="CompositeCriterion"></a>

### *class* CompositeCriterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CompositeCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeCriterion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CompositeCriterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CompositeCriterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CompositeCriterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#CompositeCriterion.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#CompositeCriterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompositeCriterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompositeCriterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompositeCriterion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CompositeCriterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompositeCriterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CompositeCriterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CompositeCriterion.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#CompositeCriterion.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#CompositeCriterion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CompositeCriterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompositeCriterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDefinition`](#CompositeCriterion.GetDefinition)                         | Gets the Worksheet Definition.                                                              |
| [`GetDetailsView`](#CompositeCriterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompositeCriterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompositeCriterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompositeCriterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompositeCriterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CompositeCriterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CompositeCriterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompositeCriterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CompositeCriterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompositeCriterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#CompositeCriterion.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#CompositeCriterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompositeCriterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompositeCriterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompositeCriterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompositeCriterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompositeCriterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompositeCriterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompositeCriterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CompositeCriterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CompositeCriterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CompositeCriterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompositeCriterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompositeCriterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CompositeCriterion.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CompositeCriterion.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CompositeCriterion.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CompositeCriterion.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeCriterion.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CompositeCriterion.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CompositeCriterion.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#CompositeCriterion.IconName)                                 | IconName property.                                            |
| [`Images`](#CompositeCriterion.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CompositeCriterion.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CompositeCriterion.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#CompositeCriterion.Name)                                         | Name property.                                                |
| [`ObjectId`](#CompositeCriterion.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CompositeCriterion.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CompositeCriterion.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CompositeCriterion.Parent)                                     | Parent property.                                              |
| [`Properties`](#CompositeCriterion.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CompositeCriterion.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#CompositeCriterion.State)                                       | State property.                                               |
| [`Suppressed`](#CompositeCriterion.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#CompositeCriterion.TransferableObjectId)         | TransferableObjectId property.                                |
| [`Value`](#CompositeCriterion.Value)                                       | Gets the Value.                                               |
| [`VisibleProperties`](#CompositeCriterion.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeCriterion.AttachedRefs"></a>

### *property* CompositeCriterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Children"></a>

### *property* CompositeCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ClsId"></a>

### *property* CompositeCriterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Comments"></a>

### *property* CompositeCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.DataModelObjectCategory"></a>

### *property* CompositeCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Figures"></a>

### *property* CompositeCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GroupingFolder"></a>

### *property* CompositeCriterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.IconName"></a>

### *property* CompositeCriterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Images"></a>

### *property* CompositeCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ImportableObjectSourceId"></a>

### *property* CompositeCriterion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.InternalObject"></a>

### *property* CompositeCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Name"></a>

### *property* CompositeCriterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ObjectId"></a>

### *property* CompositeCriterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ObjectState"></a>

### *property* CompositeCriterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ObjectTags"></a>

### *property* CompositeCriterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Parent"></a>

### *property* CompositeCriterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Properties"></a>

### *property* CompositeCriterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ReadOnly"></a>

### *property* CompositeCriterion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.State"></a>

### *property* CompositeCriterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Suppressed"></a>

### *property* CompositeCriterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.TransferableObjectId"></a>

### *property* CompositeCriterion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Value"></a>

### *property* CompositeCriterion.Value *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.VisibleProperties"></a>

### *property* CompositeCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeCriterion.Activate"></a>

### CompositeCriterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.AddComment"></a>

### CompositeCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.AddFigure"></a>

### CompositeCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.AddImage"></a>

### CompositeCriterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ClearGeneratedData"></a>

### CompositeCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Copy"></a>

### CompositeCriterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.CopyTo"></a>

### CompositeCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.CreateObjRef"></a>

### CompositeCriterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.CreateParameter"></a>

### CompositeCriterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Cut"></a>

### CompositeCriterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Delete"></a>

### CompositeCriterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Duplicate"></a>

### CompositeCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Equals"></a>

### CompositeCriterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.EvaluateAllResults"></a>

### CompositeCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetAPIName"></a>

### CompositeCriterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetAllProperties"></a>

### CompositeCriterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetChildren"></a>

### CompositeCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompositeCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetDefinition"></a>

### CompositeCriterion.GetDefinition() → [Ansys.ACT.Automation.Mechanical.CompositeCriterionDefinition](CompositeCriterionDefinition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionDefinition)

```text
Gets the Worksheet Definition.
This Definition is a list of CompositeCriterionTerms.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetDetailsView"></a>

### CompositeCriterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetEnumName"></a>

### CompositeCriterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetHashCode"></a>

### CompositeCriterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetIconFile"></a>

### CompositeCriterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetLifetimeService"></a>

### CompositeCriterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetObjectData"></a>

### CompositeCriterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetParameter"></a>

### CompositeCriterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetPath"></a>

### CompositeCriterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetPropertyName"></a>

### CompositeCriterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetPropertyValue"></a>

### CompositeCriterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetQuantityName"></a>

### CompositeCriterion.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetVisibleProperties"></a>

### CompositeCriterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetVisiblePropertyNames"></a>

### CompositeCriterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GroupAllSimilarChildren"></a>

### CompositeCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GroupSimilarObjects"></a>

### CompositeCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.InitializeLifetimeService"></a>

### CompositeCriterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.IsPropertyEditable"></a>

### CompositeCriterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeCriterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.IsPropertyVisible"></a>

### CompositeCriterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeCriterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Paste"></a>

### CompositeCriterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.PropertyByAPIName"></a>

### CompositeCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.PropertyById"></a>

### CompositeCriterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.PropertyByName"></a>

### CompositeCriterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.RemoveFromGroup"></a>

### CompositeCriterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.RemoveParameter"></a>

### CompositeCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

