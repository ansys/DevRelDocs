# `CompositeFailureTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool(internalObject: Any)

<a id="CompositeFailureTool"></a>

### *class* CompositeFailureTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CompositeFailureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeFailureTool.Activate)                                     | Activate the current object.                                                                |
| [`AddComment`](#CompositeFailureTool.AddComment)                                 | Creates a new child Comment.                                                                |
| [`AddFigure`](#CompositeFailureTool.AddFigure)                                   | Creates a new child Figure.                                                                 |
| [`AddGroupedScopedACPResults`](#CompositeFailureTool.AddGroupedScopedACPResults) | AddGroupedScopedACPResults method.                                                          |
| [`AddImage`](#CompositeFailureTool.AddImage)                                     | Creates a new child Image.                                                                  |
| [`AddInverseReserveFactor`](#CompositeFailureTool.AddInverseReserveFactor)       | Creates a new InverseReserveFactor                                                          |
| [`AddSafetyFactor`](#CompositeFailureTool.AddSafetyFactor)                       | Creates a new SafetyFactor                                                                  |
| [`AddSafetyMargin`](#CompositeFailureTool.AddSafetyMargin)                       | Creates a new SafetyMargin                                                                  |
| [`Copy`](#CompositeFailureTool.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompositeFailureTool.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompositeFailureTool.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompositeFailureTool.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CompositeFailureTool.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompositeFailureTool.Delete)                                         | Run the Delete action.                                                                      |
| [`Duplicate`](#CompositeFailureTool.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CompositeFailureTool.Equals)                                         | Equals method.                                                                              |
| [`EvaluateAllResults`](#CompositeFailureTool.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#CompositeFailureTool.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CompositeFailureTool.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompositeFailureTool.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CompositeFailureTool.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompositeFailureTool.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompositeFailureTool.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompositeFailureTool.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompositeFailureTool.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CompositeFailureTool.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#CompositeFailureTool.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompositeFailureTool.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#CompositeFailureTool.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompositeFailureTool.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CompositeFailureTool.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompositeFailureTool.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompositeFailureTool.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompositeFailureTool.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompositeFailureTool.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompositeFailureTool.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompositeFailureTool.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompositeFailureTool.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CompositeFailureTool.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#CompositeFailureTool.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#CompositeFailureTool.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompositeFailureTool.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompositeFailureTool.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CompositeFailureTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CompositeFailureTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CompositeFailureTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#CompositeFailureTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeFailureTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#CompositeFailureTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CompositeFailureTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CompositeFailureTool.IconName)                               | IconName property.                                            |
| [`Images`](#CompositeFailureTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CompositeFailureTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#CompositeFailureTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#CompositeFailureTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CompositeFailureTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CompositeFailureTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CompositeFailureTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#CompositeFailureTool.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#CompositeFailureTool.State)                                     | State property.                                               |
| [`VisibleProperties`](#CompositeFailureTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureTool.AttachedRefs"></a>

### *property* CompositeFailureTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Children"></a>

### *property* CompositeFailureTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.ClsId"></a>

### *property* CompositeFailureTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Comments"></a>

### *property* CompositeFailureTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.DataModelObjectCategory"></a>

### *property* CompositeFailureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Figures"></a>

### *property* CompositeFailureTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupingFolder"></a>

### *property* CompositeFailureTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.IconName"></a>

### *property* CompositeFailureTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Images"></a>

### *property* CompositeFailureTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.InternalObject"></a>

### *property* CompositeFailureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Name"></a>

### *property* CompositeFailureTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.ObjectId"></a>

### *property* CompositeFailureTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.ObjectState"></a>

### *property* CompositeFailureTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.ObjectTags"></a>

### *property* CompositeFailureTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Parent"></a>

### *property* CompositeFailureTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Properties"></a>

### *property* CompositeFailureTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.State"></a>

### *property* CompositeFailureTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.VisibleProperties"></a>

### *property* CompositeFailureTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureTool.Activate"></a>

### CompositeFailureTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddComment"></a>

### CompositeFailureTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddFigure"></a>

### CompositeFailureTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddGroupedScopedACPResults"></a>

### CompositeFailureTool.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType), selectedPlies: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddImage"></a>

### CompositeFailureTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddInverseReserveFactor"></a>

### CompositeFailureTool.AddInverseReserveFactor() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult](CompositeFailureResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult)

Creates a new InverseReserveFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddSafetyFactor"></a>

### CompositeFailureTool.AddSafetyFactor() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult](CompositeFailureResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult)

Creates a new SafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddSafetyMargin"></a>

### CompositeFailureTool.AddSafetyMargin() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult](CompositeFailureResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult)

Creates a new SafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Copy"></a>

### CompositeFailureTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CopyTo"></a>

### CompositeFailureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CreateObjRef"></a>

### CompositeFailureTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CreateParameter"></a>

### CompositeFailureTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Cut"></a>

### CompositeFailureTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Delete"></a>

### CompositeFailureTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Duplicate"></a>

### CompositeFailureTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Equals"></a>

### CompositeFailureTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.EvaluateAllResults"></a>

### CompositeFailureTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetAPIName"></a>

### CompositeFailureTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetAllProperties"></a>

### CompositeFailureTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetChildren"></a>

### CompositeFailureTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompositeFailureTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetDetailsView"></a>

### CompositeFailureTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetEnumName"></a>

### CompositeFailureTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetHashCode"></a>

### CompositeFailureTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetIconFile"></a>

### CompositeFailureTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetLifetimeService"></a>

### CompositeFailureTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetObjectData"></a>

### CompositeFailureTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetParameter"></a>

### CompositeFailureTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetPath"></a>

### CompositeFailureTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetPropertyName"></a>

### CompositeFailureTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetPropertyValue"></a>

### CompositeFailureTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetVisibleProperties"></a>

### CompositeFailureTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetVisiblePropertyNames"></a>

### CompositeFailureTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupAllSimilarChildren"></a>

### CompositeFailureTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupSimilarObjects"></a>

### CompositeFailureTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.InitializeLifetimeService"></a>

### CompositeFailureTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.IsPropertyEditable"></a>

### CompositeFailureTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeFailureTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.IsPropertyVisible"></a>

### CompositeFailureTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeFailureTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Paste"></a>

### CompositeFailureTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyByAPIName"></a>

### CompositeFailureTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyById"></a>

### CompositeFailureTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyByName"></a>

### CompositeFailureTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.RemoveFromGroup"></a>

### CompositeFailureTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.RemoveParameter"></a>

### CompositeFailureTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

