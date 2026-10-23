# `ElementBirthAndDeath`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath(internalObject: Any)

<a id="ElementBirthAndDeath"></a>

### *class* ElementBirthAndDeath(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ElementBirthAndDeath.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ElementBirthAndDeath.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ElementBirthAndDeath.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ElementBirthAndDeath.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ElementBirthAndDeath.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ElementBirthAndDeath.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ElementBirthAndDeath.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ElementBirthAndDeath.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ElementBirthAndDeath.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ElementBirthAndDeath.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ElementBirthAndDeath.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ElementBirthAndDeath.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ElementBirthAndDeath.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ElementBirthAndDeath.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#ElementBirthAndDeath.GetActivateAtLoadStep)         | Gets whether the ElementBirthAndDeath is active at the specified load step.                 |
| [`GetAllProperties`](#ElementBirthAndDeath.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ElementBirthAndDeath.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ElementBirthAndDeath.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ElementBirthAndDeath.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ElementBirthAndDeath.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ElementBirthAndDeath.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ElementBirthAndDeath.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ElementBirthAndDeath.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ElementBirthAndDeath.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ElementBirthAndDeath.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ElementBirthAndDeath.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ElementBirthAndDeath.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ElementBirthAndDeath.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ElementBirthAndDeath.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ElementBirthAndDeath.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ElementBirthAndDeath.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ElementBirthAndDeath.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ElementBirthAndDeath.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ElementBirthAndDeath.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ElementBirthAndDeath.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ElementBirthAndDeath.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ElementBirthAndDeath.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ElementBirthAndDeath.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ElementBirthAndDeath.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ElementBirthAndDeath.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#ElementBirthAndDeath.SetActivateAtLoadStep)         | Sets whether the ElementBirthAndDeath is active at the specified load step.                 |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ElementBirthAndDeath.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ElementBirthAndDeath.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ElementBirthAndDeath.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ElementBirthAndDeath.Comments)                               | Gets the list of associated comments.                         |
| [`CurrentStep`](#ElementBirthAndDeath.CurrentStep)                         | Gets or sets the CurrentStep.                                 |
| [`DataModelObjectCategory`](#ElementBirthAndDeath.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ElementBirthAndDeath.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ElementBirthAndDeath.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ElementBirthAndDeath.IconName)                               | IconName property.                                            |
| [`Images`](#ElementBirthAndDeath.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ElementBirthAndDeath.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ElementBirthAndDeath.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#ElementBirthAndDeath.Name)                                       | Name property.                                                |
| [`ObjectId`](#ElementBirthAndDeath.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ElementBirthAndDeath.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ElementBirthAndDeath.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ElementBirthAndDeath.Parent)                                   | Parent property.                                              |
| [`Properties`](#ElementBirthAndDeath.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ElementBirthAndDeath.State)                                     | State property.                                               |
| [`Status`](#ElementBirthAndDeath.Status)                                   | Gets or sets the Status.                                      |
| [`Suppressed`](#ElementBirthAndDeath.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ElementBirthAndDeath.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementBirthAndDeath.AttachedRefs"></a>

### *property* ElementBirthAndDeath.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Children"></a>

### *property* ElementBirthAndDeath.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.ClsId"></a>

### *property* ElementBirthAndDeath.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Comments"></a>

### *property* ElementBirthAndDeath.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CurrentStep"></a>

### *property* ElementBirthAndDeath.CurrentStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.DataModelObjectCategory"></a>

### *property* ElementBirthAndDeath.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Figures"></a>

### *property* ElementBirthAndDeath.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupingFolder"></a>

### *property* ElementBirthAndDeath.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.IconName"></a>

### *property* ElementBirthAndDeath.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Images"></a>

### *property* ElementBirthAndDeath.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.InternalObject"></a>

### *property* ElementBirthAndDeath.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Location"></a>

### *property* ElementBirthAndDeath.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Name"></a>

### *property* ElementBirthAndDeath.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.ObjectId"></a>

### *property* ElementBirthAndDeath.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.ObjectState"></a>

### *property* ElementBirthAndDeath.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.ObjectTags"></a>

### *property* ElementBirthAndDeath.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Parent"></a>

### *property* ElementBirthAndDeath.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Properties"></a>

### *property* ElementBirthAndDeath.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.State"></a>

### *property* ElementBirthAndDeath.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Status"></a>

### *property* ElementBirthAndDeath.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../Mechanical/DataModel/Enums/ElementControlsStatus.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementControlsStatus) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Suppressed"></a>

### *property* ElementBirthAndDeath.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.VisibleProperties"></a>

### *property* ElementBirthAndDeath.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementBirthAndDeath.Activate"></a>

### ElementBirthAndDeath.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddComment"></a>

### ElementBirthAndDeath.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddFigure"></a>

### ElementBirthAndDeath.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddImage"></a>

### ElementBirthAndDeath.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Copy"></a>

### ElementBirthAndDeath.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CopyTo"></a>

### ElementBirthAndDeath.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CreateObjRef"></a>

### ElementBirthAndDeath.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CreateParameter"></a>

### ElementBirthAndDeath.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Cut"></a>

### ElementBirthAndDeath.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Delete"></a>

### ElementBirthAndDeath.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Duplicate"></a>

### ElementBirthAndDeath.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Equals"></a>

### ElementBirthAndDeath.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetAPIName"></a>

### ElementBirthAndDeath.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetActivateAtLoadStep"></a>

### ElementBirthAndDeath.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the ElementBirthAndDeath is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetAllProperties"></a>

### ElementBirthAndDeath.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetChildren"></a>

### ElementBirthAndDeath.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ElementBirthAndDeath.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetDetailsView"></a>

### ElementBirthAndDeath.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetEnumName"></a>

### ElementBirthAndDeath.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetHashCode"></a>

### ElementBirthAndDeath.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetIconFile"></a>

### ElementBirthAndDeath.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetLifetimeService"></a>

### ElementBirthAndDeath.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetObjectData"></a>

### ElementBirthAndDeath.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetParameter"></a>

### ElementBirthAndDeath.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetPath"></a>

### ElementBirthAndDeath.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetPropertyName"></a>

### ElementBirthAndDeath.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetPropertyValue"></a>

### ElementBirthAndDeath.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetVisibleProperties"></a>

### ElementBirthAndDeath.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetVisiblePropertyNames"></a>

### ElementBirthAndDeath.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupAllSimilarChildren"></a>

### ElementBirthAndDeath.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupSimilarObjects"></a>

### ElementBirthAndDeath.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.InitializeLifetimeService"></a>

### ElementBirthAndDeath.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.IsPropertyEditable"></a>

### ElementBirthAndDeath.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElementBirthAndDeath.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.IsPropertyVisible"></a>

### ElementBirthAndDeath.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElementBirthAndDeath.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Paste"></a>

### ElementBirthAndDeath.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyByAPIName"></a>

### ElementBirthAndDeath.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyById"></a>

### ElementBirthAndDeath.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyByName"></a>

### ElementBirthAndDeath.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.RemoveFromGroup"></a>

### ElementBirthAndDeath.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.RemoveParameter"></a>

### ElementBirthAndDeath.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.SetActivateAtLoadStep"></a>

### ElementBirthAndDeath.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the ElementBirthAndDeath is active at the specified load step.

<!-- !! processed by numpydoc !! -->

