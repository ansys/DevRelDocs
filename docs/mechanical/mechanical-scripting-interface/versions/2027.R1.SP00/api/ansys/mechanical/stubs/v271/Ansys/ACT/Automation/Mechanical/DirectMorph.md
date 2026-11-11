# `DirectMorph`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.DirectMorph"></a>

#### *class* Ansys.ACT.Automation.Mechanical.DirectMorph(internalObject: Any)

<a id="DirectMorph"></a>

### *class* DirectMorph(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DirectMorph.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#DirectMorph.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DirectMorph.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DirectMorph.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DirectMorph.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#DirectMorph.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DirectMorph.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DirectMorph.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#DirectMorph.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#DirectMorph.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#DirectMorph.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DirectMorph.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DirectMorph.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DirectMorph.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DirectMorph.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DirectMorph.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DirectMorph.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#DirectMorph.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DirectMorph.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DirectMorph.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DirectMorph.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DirectMorph.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#DirectMorph.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DirectMorph.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DirectMorph.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DirectMorph.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DirectMorph.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DirectMorph.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DirectMorph.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DirectMorph.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#DirectMorph.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DirectMorph.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DirectMorph.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DirectMorph.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DirectMorph.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#DirectMorph.AttachedRefs)                       | AttachedRefs property.                                                                                                         |
| [`Children`](#DirectMorph.Children)                               | Gets the list of children.                                                                                                     |
| [`ClsId`](#DirectMorph.ClsId)                                     | ClsId property.                                                                                                                |
| [`DataModelObjectCategory`](#DirectMorph.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                   |
| [`DisplacementFile`](#DirectMorph.DisplacementFile)               | Gets or sets the DisplacementFile.                                                                                             |
| [`GroupingFolder`](#DirectMorph.GroupingFolder)                   | GroupingFolder property.                                                                                                       |
| [`IconName`](#DirectMorph.IconName)                               | IconName property.                                                                                                             |
| [`InternalObject`](#DirectMorph.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                             |
| [`Location`](#DirectMorph.Location)                               | Gets or sets the Location.                                                                                                     |
| [`MorphDefinition`](#DirectMorph.MorphDefinition)                 | Defines whether the Morphing is done based on the specified Displacement File or the outcome of a Mesh Workflow Morphing step. |
| [`Name`](#DirectMorph.Name)                                       | Name property.                                                                                                                 |
| [`ObjectId`](#DirectMorph.ObjectId)                               | ObjectId property.                                                                                                             |
| [`ObjectState`](#DirectMorph.ObjectState)                         | ObjectState property.                                                                                                          |
| [`ObjectTags`](#DirectMorph.ObjectTags)                           | ObjectTags property.                                                                                                           |
| [`Parent`](#DirectMorph.Parent)                                   | Parent property.                                                                                                               |
| [`Properties`](#DirectMorph.Properties)                           | Gets the list of properties for this object.                                                                                   |
| [`ScaleFactor`](#DirectMorph.ScaleFactor)                         | Gets or sets the ScaleFactor.                                                                                                  |
| [`State`](#DirectMorph.State)                                     | State property.                                                                                                                |
| [`Suppressed`](#DirectMorph.Suppressed)                           | Gets or sets the Suppressed.                                                                                                   |
| [`TrackWorkflowStep`](#DirectMorph.TrackWorkflowStep)             | Specifies whether to track changes to the Morph field file of the specified Mesh Workflow Morphing step.                       |
| [`VisibleProperties`](#DirectMorph.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                  |
| [`WorkflowMorphStep`](#DirectMorph.WorkflowMorphStep)             | Gets or sets the object ID of the Mesh Workflow Morphing step that the Morph Control is based on.                              |

<a id="property-detail"></a>

## Property detail

<a id="DirectMorph.AttachedRefs"></a>

### *property* DirectMorph.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Children"></a>

### *property* DirectMorph.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ClsId"></a>

### *property* DirectMorph.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DataModelObjectCategory"></a>

### *property* DirectMorph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DisplacementFile"></a>

### *property* DirectMorph.DisplacementFile *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplacementFile.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupingFolder"></a>

### *property* DirectMorph.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.IconName"></a>

### *property* DirectMorph.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.InternalObject"></a>

### *property* DirectMorph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDirectMorphAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Location"></a>

### *property* DirectMorph.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.MorphDefinition"></a>

### *property* DirectMorph.MorphDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MorphControl.MorphDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MorphControl/MorphDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MorphControl.MorphDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines whether the Morphing is done based on the specified Displacement File or the outcome of a Mesh Workflow Morphing step.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Name"></a>

### *property* DirectMorph.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ObjectId"></a>

### *property* DirectMorph.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ObjectState"></a>

### *property* DirectMorph.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ObjectTags"></a>

### *property* DirectMorph.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Parent"></a>

### *property* DirectMorph.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Properties"></a>

### *property* DirectMorph.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ScaleFactor"></a>

### *property* DirectMorph.ScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.State"></a>

### *property* DirectMorph.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Suppressed"></a>

### *property* DirectMorph.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.TrackWorkflowStep"></a>

### *property* DirectMorph.TrackWorkflowStep *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether to track changes to the Morph field file of the specified Mesh Workflow Morphing step.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.VisibleProperties"></a>

### *property* DirectMorph.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.WorkflowMorphStep"></a>

### *property* DirectMorph.WorkflowMorphStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the object ID of the Mesh Workflow Morphing step that the Morph Control is based on.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectMorph.Activate"></a>

### DirectMorph.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Copy"></a>

### DirectMorph.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CopyTo"></a>

### DirectMorph.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CreateObjRef"></a>

### DirectMorph.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CreateParameter"></a>

### DirectMorph.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Cut"></a>

### DirectMorph.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Delete"></a>

### DirectMorph.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Duplicate"></a>

### DirectMorph.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Equals"></a>

### DirectMorph.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetAPIName"></a>

### DirectMorph.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetAllProperties"></a>

### DirectMorph.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetChildren"></a>

### DirectMorph.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DirectMorph.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetDetailsView"></a>

### DirectMorph.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetEnumName"></a>

### DirectMorph.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetHashCode"></a>

### DirectMorph.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetIconFile"></a>

### DirectMorph.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetLifetimeService"></a>

### DirectMorph.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetObjectData"></a>

### DirectMorph.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetParameter"></a>

### DirectMorph.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetPath"></a>

### DirectMorph.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetPropertyName"></a>

### DirectMorph.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetPropertyValue"></a>

### DirectMorph.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetVisibleProperties"></a>

### DirectMorph.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetVisiblePropertyNames"></a>

### DirectMorph.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupAllSimilarChildren"></a>

### DirectMorph.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupSimilarObjects"></a>

### DirectMorph.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.InitializeLifetimeService"></a>

### DirectMorph.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.IsPropertyEditable"></a>

### DirectMorph.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectMorph.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.IsPropertyVisible"></a>

### DirectMorph.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectMorph.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Paste"></a>

### DirectMorph.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByAPIName"></a>

### DirectMorph.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyById"></a>

### DirectMorph.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByName"></a>

### DirectMorph.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.RemoveFromGroup"></a>

### DirectMorph.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.RemoveParameter"></a>

### DirectMorph.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

