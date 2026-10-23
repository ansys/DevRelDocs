# `ContactStepControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ContactStepControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ContactStepControl(internalObject: Any)

<a id="ContactStepControl"></a>

### *class* ContactStepControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactStepControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactStepControl.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactStepControl.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ContactStepControl.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ContactStepControl.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ContactStepControl.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactStepControl.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactStepControl.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactStepControl.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactStepControl.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactStepControl.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactStepControl.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactStepControl.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ContactStepControl.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#ContactStepControl.GetActivateAtLoadStep)         | Gets whether the ContactStepControl is active at the specified load step.                   |
| [`GetAllProperties`](#ContactStepControl.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactStepControl.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactStepControl.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactStepControl.GetEnumName)                             |                                                                                             |
| [`GetHashCode`](#ContactStepControl.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactStepControl.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactStepControl.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactStepControl.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactStepControl.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactStepControl.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactStepControl.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactStepControl.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactStepControl.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactStepControl.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactStepControl.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactStepControl.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactStepControl.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactStepControl.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactStepControl.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactStepControl.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactStepControl.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactStepControl.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactStepControl.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactStepControl.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactStepControl.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#ContactStepControl.SetActivateAtLoadStep)         | Sets whether the ContactStepControl is active at the specified load step.                   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactStepControl.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ContactStepControl.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ContactStepControl.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ContactStepControl.Comments)                               | Gets the list of associated comments.                         |
| [`ContactSelection`](#ContactStepControl.ContactSelection)               | Gets or sets the ContactSelection.                            |
| [`CurrentStep`](#ContactStepControl.CurrentStep)                         | Gets or sets the CurrentStep.                                 |
| [`DataModelObjectCategory`](#ContactStepControl.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ContactStepControl.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ContactStepControl.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactStepControl.IconName)                               | IconName property.                                            |
| [`Images`](#ContactStepControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactStepControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ContactStepControl.Name)                                       | Name property.                                                |
| [`NormalStiffness`](#ContactStepControl.NormalStiffness)                 | Gets or sets the NormalStiffnessValueType.                    |
| [`NormalStiffnessFactor`](#ContactStepControl.NormalStiffnessFactor)     | Gets or sets the NormalStiffnessFactor.                       |
| [`NormalStiffnessValue`](#ContactStepControl.NormalStiffnessValue)       | Gets or sets the NormalStiffnessValue.                        |
| [`ObjectId`](#ContactStepControl.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactStepControl.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactStepControl.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactStepControl.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactStepControl.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ContactStepControl.State)                                     | State property.                                               |
| [`Status`](#ContactStepControl.Status)                                   | Gets or sets the Status.                                      |
| [`Suppressed`](#ContactStepControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ContactStepControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactStepControl.AttachedRefs"></a>

### *property* ContactStepControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Children"></a>

### *property* ContactStepControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.ClsId"></a>

### *property* ContactStepControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Comments"></a>

### *property* ContactStepControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.ContactSelection"></a>

### *property* ContactStepControl.ContactSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CurrentStep"></a>

### *property* ContactStepControl.CurrentStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.DataModelObjectCategory"></a>

### *property* ContactStepControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Figures"></a>

### *property* ContactStepControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GroupingFolder"></a>

### *property* ContactStepControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.IconName"></a>

### *property* ContactStepControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Images"></a>

### *property* ContactStepControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.InternalObject"></a>

### *property* ContactStepControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Name"></a>

### *property* ContactStepControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.NormalStiffness"></a>

### *property* ContactStepControl.NormalStiffness *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessValueType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.NormalStiffnessFactor"></a>

### *property* ContactStepControl.NormalStiffnessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.NormalStiffnessValue"></a>

### *property* ContactStepControl.NormalStiffnessValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.ObjectId"></a>

### *property* ContactStepControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.ObjectState"></a>

### *property* ContactStepControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.ObjectTags"></a>

### *property* ContactStepControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Parent"></a>

### *property* ContactStepControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Properties"></a>

### *property* ContactStepControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.State"></a>

### *property* ContactStepControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Status"></a>

### *property* ContactStepControl.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../Mechanical/DataModel/Enums/ElementControlsStatus.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementControlsStatus) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Suppressed"></a>

### *property* ContactStepControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.VisibleProperties"></a>

### *property* ContactStepControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactStepControl.Activate"></a>

### ContactStepControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.AddComment"></a>

### ContactStepControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.AddFigure"></a>

### ContactStepControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.AddImage"></a>

### ContactStepControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Copy"></a>

### ContactStepControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CopyTo"></a>

### ContactStepControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CreateObjRef"></a>

### ContactStepControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CreateParameter"></a>

### ContactStepControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Cut"></a>

### ContactStepControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Delete"></a>

### ContactStepControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Duplicate"></a>

### ContactStepControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Equals"></a>

### ContactStepControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetAPIName"></a>

### ContactStepControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetActivateAtLoadStep"></a>

### ContactStepControl.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the ContactStepControl is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetAllProperties"></a>

### ContactStepControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetChildren"></a>

### ContactStepControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactStepControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetDetailsView"></a>

### ContactStepControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetEnumName"></a>

### ContactStepControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

<a id="ContactStepControl.GetHashCode"></a>

### ContactStepControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetIconFile"></a>

### ContactStepControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetLifetimeService"></a>

### ContactStepControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetObjectData"></a>

### ContactStepControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetParameter"></a>

### ContactStepControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetPath"></a>

### ContactStepControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetPropertyName"></a>

### ContactStepControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetPropertyValue"></a>

### ContactStepControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetVisibleProperties"></a>

### ContactStepControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetVisiblePropertyNames"></a>

### ContactStepControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GroupAllSimilarChildren"></a>

### ContactStepControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GroupSimilarObjects"></a>

### ContactStepControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.InitializeLifetimeService"></a>

### ContactStepControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.IsPropertyEditable"></a>

### ContactStepControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactStepControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.IsPropertyVisible"></a>

### ContactStepControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactStepControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Paste"></a>

### ContactStepControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.PropertyByAPIName"></a>

### ContactStepControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.PropertyById"></a>

### ContactStepControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.PropertyByName"></a>

### ContactStepControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.RemoveFromGroup"></a>

### ContactStepControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.RemoveParameter"></a>

### ContactStepControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.SetActivateAtLoadStep"></a>

### ContactStepControl.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the ContactStepControl is active at the specified load step.

<!-- !! processed by numpydoc !! -->

