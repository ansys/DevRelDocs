# `JointLoad`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad(internalObject: Any)

<a id="JointLoad"></a>

### *class* JointLoad(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a JointLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#JointLoad.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#JointLoad.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#JointLoad.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#JointLoad.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#JointLoad.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#JointLoad.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#JointLoad.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#JointLoad.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#JointLoad.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#JointLoad.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#JointLoad.Delete)                                       | Run the Delete action.                                                                      |
| [`DoesRequireTableFitting`](#JointLoad.DoesRequireTableFitting)     | DoesRequireTableFitting method.                                                             |
| [`Duplicate`](#JointLoad.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#JointLoad.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#JointLoad.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#JointLoad.GetActivateAtLoadStep)         | Gets whether the joint is active at the specified load step.                                |
| [`GetAllProperties`](#JointLoad.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#JointLoad.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#JointLoad.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#JointLoad.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#JointLoad.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#JointLoad.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#JointLoad.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#JointLoad.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#JointLoad.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#JointLoad.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#JointLoad.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#JointLoad.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetTableFittingData`](#JointLoad.GetTableFittingData)             | GetTableFittingData method.                                                                 |
| [`GetVisibleProperties`](#JointLoad.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#JointLoad.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#JointLoad.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#JointLoad.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#JointLoad.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#JointLoad.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#JointLoad.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#JointLoad.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#JointLoad.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#JointLoad.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#JointLoad.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#JointLoad.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#JointLoad.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#JointLoad.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`SetActivateAtLoadStep`](#JointLoad.SetActivateAtLoadStep)         | Sets whether the joint is active at the specified load step.                                |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#JointLoad.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#JointLoad.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#JointLoad.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#JointLoad.Comments)                               | Gets the list of associated comments.                         |
| [`CutoffFrequency`](#JointLoad.CutoffFrequency)                 | Gets or sets the CutoffFrequency.                             |
| [`DOF`](#JointLoad.DOF)                                         | Gets or sets the DOF.                                         |
| [`DataModelObjectCategory`](#JointLoad.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#JointLoad.Figures)                                 | Gets the list of associated figures.                          |
| [`FittingMethod`](#JointLoad.FittingMethod)                     | Gets or sets the FittingMethod.                               |
| [`GroupingFolder`](#JointLoad.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#JointLoad.IconName)                               | IconName property.                                            |
| [`Images`](#JointLoad.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#JointLoad.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Joint`](#Joint)                        | Gets or sets the Joint.                                       |
| [`JointConditionType`](#JointLoad.JointConditionType)           | Gets or sets the JointConditionType.                          |
| [`LockAtLoadStep`](#JointLoad.LockAtLoadStep)                   | Gets or sets the LockAtLoadStep.                              |
| [`Magnitude`](#JointLoad.Magnitude)                             | Gets the Magnitude.                                           |
| [`Name`](#JointLoad.Name)                                       | Name property.                                                |
| [`NumberOfSegments`](#JointLoad.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#JointLoad.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#JointLoad.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#JointLoad.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#JointLoad.Parent)                                   | Parent property.                                              |
| [`Properties`](#JointLoad.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#JointLoad.State)                                     | State property.                                               |
| [`Suppressed`](#JointLoad.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#JointLoad.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="JointLoad.AttachedRefs"></a>

### *property* JointLoad.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Children"></a>

### *property* JointLoad.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.ClsId"></a>

### *property* JointLoad.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Comments"></a>

### *property* JointLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CutoffFrequency"></a>

### *property* JointLoad.CutoffFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DOF"></a>

### *property* JointLoad.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DataModelObjectCategory"></a>

### *property* JointLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Figures"></a>

### *property* JointLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.FittingMethod"></a>

### *property* JointLoad.FittingMethod *: [Ansys.Mechanical.DataModel.Enums.FittingMethodType](../../../../Mechanical/DataModel/Enums/FittingMethodType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FittingMethodType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FittingMethod.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupingFolder"></a>

### *property* JointLoad.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.IconName"></a>

### *property* JointLoad.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Images"></a>

### *property* JointLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.InternalObject"></a>

### *property* JointLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointConditionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Joint"></a>

### *property* JointLoad.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.JointConditionType"></a>

### *property* JointLoad.JointConditionType *: [Ansys.Mechanical.DataModel.Enums.JointConditionType](../../../../Mechanical/DataModel/Enums/JointConditionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointConditionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the JointConditionType.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.LockAtLoadStep"></a>

### *property* JointLoad.LockAtLoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LockAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Magnitude"></a>

### *property* JointLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Name"></a>

### *property* JointLoad.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.NumberOfSegments"></a>

### *property* JointLoad.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.ObjectId"></a>

### *property* JointLoad.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.ObjectState"></a>

### *property* JointLoad.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.ObjectTags"></a>

### *property* JointLoad.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Parent"></a>

### *property* JointLoad.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Properties"></a>

### *property* JointLoad.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.State"></a>

### *property* JointLoad.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Suppressed"></a>

### *property* JointLoad.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.VisibleProperties"></a>

### *property* JointLoad.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="JointLoad.Activate"></a>

### JointLoad.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddCommandSnippet"></a>

### JointLoad.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddComment"></a>

### JointLoad.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddFigure"></a>

### JointLoad.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddImage"></a>

### JointLoad.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Copy"></a>

### JointLoad.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CopyTo"></a>

### JointLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CreateObjRef"></a>

### JointLoad.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CreateParameter"></a>

### JointLoad.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Cut"></a>

### JointLoad.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Delete"></a>

### JointLoad.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DoesRequireTableFitting"></a>

### JointLoad.DoesRequireTableFitting() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

DoesRequireTableFitting method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Duplicate"></a>

### JointLoad.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Equals"></a>

### JointLoad.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetAPIName"></a>

### JointLoad.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetActivateAtLoadStep"></a>

### JointLoad.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the joint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetAllProperties"></a>

### JointLoad.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetChildren"></a>

### JointLoad.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### JointLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetDetailsView"></a>

### JointLoad.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetEnumName"></a>

### JointLoad.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetHashCode"></a>

### JointLoad.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetIconFile"></a>

### JointLoad.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetLifetimeService"></a>

### JointLoad.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetObjectData"></a>

### JointLoad.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetParameter"></a>

### JointLoad.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetPath"></a>

### JointLoad.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetPropertyName"></a>

### JointLoad.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetPropertyValue"></a>

### JointLoad.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetTableFittingData"></a>

### JointLoad.GetTableFittingData() → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[float](https://docs.python.org/3/builtins/functions.html#float)]]

GetTableFittingData method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetVisibleProperties"></a>

### JointLoad.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetVisiblePropertyNames"></a>

### JointLoad.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupAllSimilarChildren"></a>

### JointLoad.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupSimilarObjects"></a>

### JointLoad.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.InitializeLifetimeService"></a>

### JointLoad.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.IsPropertyEditable"></a>

### JointLoad.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### JointLoad.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.IsPropertyVisible"></a>

### JointLoad.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### JointLoad.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Paste"></a>

### JointLoad.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyByAPIName"></a>

### JointLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyById"></a>

### JointLoad.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyByName"></a>

### JointLoad.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RemoveFromGroup"></a>

### JointLoad.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RemoveParameter"></a>

### JointLoad.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RenameBasedOnDefinition"></a>

### JointLoad.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.SetActivateAtLoadStep"></a>

### JointLoad.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the joint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

