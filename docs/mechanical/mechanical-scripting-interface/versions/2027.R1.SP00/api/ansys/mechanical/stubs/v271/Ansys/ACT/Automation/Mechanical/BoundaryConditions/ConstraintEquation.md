# `ConstraintEquation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquation(internalObject: Any)

<a id="ConstraintEquation"></a>

### *class* ConstraintEquation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ConstraintEquation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ConstraintEquation.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#ConstraintEquation.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#ConstraintEquation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ConstraintEquation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`Copy`](#ConstraintEquation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ConstraintEquation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ConstraintEquation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ConstraintEquation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ConstraintEquation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ConstraintEquation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ConstraintEquation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ConstraintEquation.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ConstraintEquation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ConstraintEquation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ConstraintEquation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ConstraintEquation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ConstraintEquation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ConstraintEquation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ConstraintEquation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ConstraintEquation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ConstraintEquation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ConstraintEquation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ConstraintEquation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ConstraintEquation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ConstraintEquation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetTable`](#ConstraintEquation.GetTable)                                   | GetTable method.                                                                            |
| [`GetVisibleProperties`](#ConstraintEquation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ConstraintEquation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ConstraintEquation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ConstraintEquation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ConstraintEquation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ConstraintEquation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ConstraintEquation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ConstraintEquation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ConstraintEquation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ConstraintEquation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ConstraintEquation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ConstraintEquation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ConstraintEquation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ConstraintEquation.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ConstraintEquation.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ConstraintEquation.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ConstraintEquation.Comments)                               | Gets the list of associated comments.                         |
| [`ConstantValue`](#ConstraintEquation.ConstantValue)                     | ConstantValue property.                                       |
| [`DataModelObjectCategory`](#ConstraintEquation.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ConstraintEquation.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ConstraintEquation.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ConstraintEquation.IconName)                               | IconName property.                                            |
| [`InternalObject`](#ConstraintEquation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`JointCondition`](#ConstraintEquation.JointCondition)                   | JointCondition property.                                      |
| [`Name`](#ConstraintEquation.Name)                                       | Name property.                                                |
| [`ObjectId`](#ConstraintEquation.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ConstraintEquation.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ConstraintEquation.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ConstraintEquation.Parent)                                   | Parent property.                                              |
| [`Properties`](#ConstraintEquation.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ConstraintEquation.State)                                     | State property.                                               |
| [`Suppressed`](#ConstraintEquation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ConstraintEquation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConstraintEquation.AttachedRefs"></a>

### *property* ConstraintEquation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Children"></a>

### *property* ConstraintEquation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.ClsId"></a>

### *property* ConstraintEquation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Comments"></a>

### *property* ConstraintEquation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.ConstantValue"></a>

### *property* ConstraintEquation.ConstantValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ConstantValue property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.DataModelObjectCategory"></a>

### *property* ConstraintEquation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Figures"></a>

### *property* ConstraintEquation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GroupingFolder"></a>

### *property* ConstraintEquation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.IconName"></a>

### *property* ConstraintEquation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.InternalObject"></a>

### *property* ConstraintEquation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstraintEquationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.JointCondition"></a>

### *property* ConstraintEquation.JointCondition *: [Ansys.Mechanical.DataModel.Enums.JointConditionType](../../../../Mechanical/DataModel/Enums/JointConditionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointConditionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

JointCondition property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Name"></a>

### *property* ConstraintEquation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.ObjectId"></a>

### *property* ConstraintEquation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.ObjectState"></a>

### *property* ConstraintEquation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.ObjectTags"></a>

### *property* ConstraintEquation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Parent"></a>

### *property* ConstraintEquation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Properties"></a>

### *property* ConstraintEquation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.State"></a>

### *property* ConstraintEquation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Suppressed"></a>

### *property* ConstraintEquation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.VisibleProperties"></a>

### *property* ConstraintEquation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstraintEquation.Activate"></a>

### ConstraintEquation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.AddCommandSnippet"></a>

### ConstraintEquation.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.AddComment"></a>

### ConstraintEquation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.AddFigure"></a>

### ConstraintEquation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Copy"></a>

### ConstraintEquation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.CopyTo"></a>

### ConstraintEquation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.CreateObjRef"></a>

### ConstraintEquation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.CreateParameter"></a>

### ConstraintEquation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Cut"></a>

### ConstraintEquation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Delete"></a>

### ConstraintEquation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Duplicate"></a>

### ConstraintEquation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Equals"></a>

### ConstraintEquation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetAPIName"></a>

### ConstraintEquation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetAllProperties"></a>

### ConstraintEquation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetChildren"></a>

### ConstraintEquation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ConstraintEquation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetDetailsView"></a>

### ConstraintEquation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetEnumName"></a>

### ConstraintEquation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetHashCode"></a>

### ConstraintEquation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetIconFile"></a>

### ConstraintEquation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetLifetimeService"></a>

### ConstraintEquation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetObjectData"></a>

### ConstraintEquation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetParameter"></a>

### ConstraintEquation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetPath"></a>

### ConstraintEquation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetPropertyName"></a>

### ConstraintEquation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetPropertyValue"></a>

### ConstraintEquation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetTable"></a>

### ConstraintEquation.GetTable() → Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquationTable

GetTable method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetVisibleProperties"></a>

### ConstraintEquation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetVisiblePropertyNames"></a>

### ConstraintEquation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GroupAllSimilarChildren"></a>

### ConstraintEquation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GroupSimilarObjects"></a>

### ConstraintEquation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.InitializeLifetimeService"></a>

### ConstraintEquation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.IsPropertyEditable"></a>

### ConstraintEquation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstraintEquation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.IsPropertyVisible"></a>

### ConstraintEquation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstraintEquation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Paste"></a>

### ConstraintEquation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.PropertyByAPIName"></a>

### ConstraintEquation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.PropertyById"></a>

### ConstraintEquation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.PropertyByName"></a>

### ConstraintEquation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.RemoveFromGroup"></a>

### ConstraintEquation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.RemoveParameter"></a>

### ConstraintEquation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

