# `ExpansionSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExpansionSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExpansionSettings(internalObject: Any)

<a id="ExpansionSettings"></a>

### *class* ExpansionSettings(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ExpansionSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ExpansionSettings.Activate)                                     | Activate the current object.                                                                |
| [`AddComment`](#ExpansionSettings.AddComment)                                 | Creates a new child Comment.                                                                |
| [`AddFigure`](#ExpansionSettings.AddFigure)                                   | Creates a new child Figure.                                                                 |
| [`AddImage`](#ExpansionSettings.AddImage)                                     | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ExpansionSettings.ClearGeneratedData)                 | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ExpansionSettings.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ExpansionSettings.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ExpansionSettings.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ExpansionSettings.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ExpansionSettings.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ExpansionSettings.Delete)                                         | Run the Delete action.                                                                      |
| [`Duplicate`](#ExpansionSettings.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ExpansionSettings.Equals)                                         | Equals method.                                                                              |
| [`EvaluateAllResults`](#ExpansionSettings.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#ExpansionSettings.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ExpansionSettings.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#ExpansionSettings.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetCompletedExpansionState`](#ExpansionSettings.GetCompletedExpansionState) | Gets the completed expansion state of a given Condensed Part                                |
| [`GetDetailsView`](#ExpansionSettings.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ExpansionSettings.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetExpansionState`](#ExpansionSettings.GetExpansionState)                   | Gets the requested expansion state of a given Condensed Part                                |
| [`GetHashCode`](#ExpansionSettings.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#ExpansionSettings.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ExpansionSettings.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ExpansionSettings.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#ExpansionSettings.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ExpansionSettings.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#ExpansionSettings.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ExpansionSettings.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ExpansionSettings.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ExpansionSettings.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ExpansionSettings.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ExpansionSettings.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ExpansionSettings.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ExpansionSettings.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ExpansionSettings.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#ExpansionSettings.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PerformExpansionPass`](#ExpansionSettings.PerformExpansionPass)             | Run the PerformExpansionPass action.                                                        |
| [`PropertyByAPIName`](#ExpansionSettings.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#ExpansionSettings.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#ExpansionSettings.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ExpansionSettings.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ExpansionSettings.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetExpansionState`](#ExpansionSettings.SetExpansionState)                   | Sets the requested expansion state of a given Condensed Part                                |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ExpansionSettings.AttachedRefs)                             | AttachedRefs property.                                        |
| [`Children`](#ExpansionSettings.Children)                                     | Gets the list of children.                                    |
| [`CleanupOptionalFiles`](#ExpansionSettings.CleanupOptionalFiles)             | Gets or sets the CleanupOptionalFiles.                        |
| [`ClsId`](#ExpansionSettings.ClsId)                                           | ClsId property.                                               |
| [`Comments`](#ExpansionSettings.Comments)                                     | Gets the list of associated comments.                         |
| [`CondensedPartExpansionType`](#ExpansionSettings.CondensedPartExpansionType) | Gets or sets the CondensedPartExpansionType.                  |
| [`DataModelObjectCategory`](#ExpansionSettings.DataModelObjectCategory)       | Gets the current DataModelObject's category.                  |
| [`ExpandAfterUsePassFailure`](#ExpansionSettings.ExpandAfterUsePassFailure)   | Gets or sets the ExpandAfterUsePassFailure.                   |
| [`Figures`](#ExpansionSettings.Figures)                                       | Gets the list of associated figures.                          |
| [`GeneralMiscellaneous`](#ExpansionSettings.GeneralMiscellaneous)             | Gets or sets the GeneralMiscellaneous.                        |
| [`GroupingFolder`](#ExpansionSettings.GroupingFolder)                         | GroupingFolder property.                                      |
| [`IconName`](#ExpansionSettings.IconName)                                     | IconName property.                                            |
| [`Images`](#ExpansionSettings.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#ExpansionSettings.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`Name`](#ExpansionSettings.Name)                                             | Name property.                                                |
| [`NodalForces`](#ExpansionSettings.NodalForces)                               | Gets or sets the NodalForces.                                 |
| [`ObjectId`](#ExpansionSettings.ObjectId)                                     | ObjectId property.                                            |
| [`ObjectState`](#ExpansionSettings.ObjectState)                               | ObjectState property.                                         |
| [`ObjectTags`](#ExpansionSettings.ObjectTags)                                 | ObjectTags property.                                          |
| [`Parent`](#ExpansionSettings.Parent)                                         | Parent property.                                              |
| [`Properties`](#ExpansionSettings.Properties)                                 | Gets the list of properties for this object.                  |
| [`State`](#ExpansionSettings.State)                                           | State property.                                               |
| [`Strain`](#ExpansionSettings.Strain)                                         | Gets or sets the Strain.                                      |
| [`Stress`](#ExpansionSettings.Stress)                                         | Gets or sets the Stress.                                      |
| [`Suppressed`](#ExpansionSettings.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ExpansionSettings.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExpansionSettings.AttachedRefs"></a>

### *property* ExpansionSettings.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Children"></a>

### *property* ExpansionSettings.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CleanupOptionalFiles"></a>

### *property* ExpansionSettings.CleanupOptionalFiles *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CleanupOptionalFiles.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ClsId"></a>

### *property* ExpansionSettings.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Comments"></a>

### *property* ExpansionSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CondensedPartExpansionType"></a>

### *property* ExpansionSettings.CondensedPartExpansionType *: [Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType](../../../Mechanical/DataModel/Enums/CondensedPartExpansionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CondensedPartExpansionType.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.DataModelObjectCategory"></a>

### *property* ExpansionSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ExpandAfterUsePassFailure"></a>

### *property* ExpansionSettings.ExpandAfterUsePassFailure *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExpandAfterUsePassFailure.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Figures"></a>

### *property* ExpansionSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GeneralMiscellaneous"></a>

### *property* ExpansionSettings.GeneralMiscellaneous *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupingFolder"></a>

### *property* ExpansionSettings.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.IconName"></a>

### *property* ExpansionSettings.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Images"></a>

### *property* ExpansionSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.InternalObject"></a>

### *property* ExpansionSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExpansionSettingsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Name"></a>

### *property* ExpansionSettings.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.NodalForces"></a>

### *property* ExpansionSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ObjectId"></a>

### *property* ExpansionSettings.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ObjectState"></a>

### *property* ExpansionSettings.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ObjectTags"></a>

### *property* ExpansionSettings.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Parent"></a>

### *property* ExpansionSettings.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Properties"></a>

### *property* ExpansionSettings.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.State"></a>

### *property* ExpansionSettings.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Strain"></a>

### *property* ExpansionSettings.Strain *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Stress"></a>

### *property* ExpansionSettings.Stress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Suppressed"></a>

### *property* ExpansionSettings.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.VisibleProperties"></a>

### *property* ExpansionSettings.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExpansionSettings.Activate"></a>

### ExpansionSettings.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.AddComment"></a>

### ExpansionSettings.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.AddFigure"></a>

### ExpansionSettings.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.AddImage"></a>

### ExpansionSettings.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ClearGeneratedData"></a>

### ExpansionSettings.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Copy"></a>

### ExpansionSettings.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CopyTo"></a>

### ExpansionSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CreateObjRef"></a>

### ExpansionSettings.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CreateParameter"></a>

### ExpansionSettings.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Cut"></a>

### ExpansionSettings.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Delete"></a>

### ExpansionSettings.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Duplicate"></a>

### ExpansionSettings.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Equals"></a>

### ExpansionSettings.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.EvaluateAllResults"></a>

### ExpansionSettings.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetAPIName"></a>

### ExpansionSettings.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetAllProperties"></a>

### ExpansionSettings.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetChildren"></a>

### ExpansionSettings.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ExpansionSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetCompletedExpansionState"></a>

### ExpansionSettings.GetCompletedExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPart)) → [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState)

Gets the completed expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetDetailsView"></a>

### ExpansionSettings.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetEnumName"></a>

### ExpansionSettings.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetExpansionState"></a>

### ExpansionSettings.GetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPart)) → [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState)

Gets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetHashCode"></a>

### ExpansionSettings.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetIconFile"></a>

### ExpansionSettings.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetLifetimeService"></a>

### ExpansionSettings.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetObjectData"></a>

### ExpansionSettings.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetParameter"></a>

### ExpansionSettings.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetPath"></a>

### ExpansionSettings.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetPropertyName"></a>

### ExpansionSettings.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetPropertyValue"></a>

### ExpansionSettings.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetVisibleProperties"></a>

### ExpansionSettings.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetVisiblePropertyNames"></a>

### ExpansionSettings.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupAllSimilarChildren"></a>

### ExpansionSettings.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupSimilarObjects"></a>

### ExpansionSettings.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.InitializeLifetimeService"></a>

### ExpansionSettings.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.IsPropertyEditable"></a>

### ExpansionSettings.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExpansionSettings.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.IsPropertyVisible"></a>

### ExpansionSettings.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExpansionSettings.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Paste"></a>

### ExpansionSettings.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PerformExpansionPass"></a>

### ExpansionSettings.PerformExpansionPass() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the PerformExpansionPass action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyByAPIName"></a>

### ExpansionSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyById"></a>

### ExpansionSettings.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyByName"></a>

### ExpansionSettings.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.RemoveFromGroup"></a>

### ExpansionSettings.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.RemoveParameter"></a>

### ExpansionSettings.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.SetExpansionState"></a>

### ExpansionSettings.SetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPart), state: [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

