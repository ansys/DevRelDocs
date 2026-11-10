# `VolumeConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.VolumeConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.VolumeConstraint(internalObject: Any)

<a id="VolumeConstraint"></a>

### *class* VolumeConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a VolumeConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#VolumeConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#VolumeConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#VolumeConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#VolumeConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#VolumeConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#VolumeConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#VolumeConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#VolumeConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#VolumeConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#VolumeConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#VolumeConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#VolumeConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#VolumeConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#VolumeConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#VolumeConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#VolumeConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#VolumeConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#VolumeConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#VolumeConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#VolumeConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#VolumeConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#VolumeConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#VolumeConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#VolumeConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#VolumeConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#VolumeConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#VolumeConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#VolumeConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#VolumeConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#VolumeConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#VolumeConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#VolumeConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#VolumeConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#VolumeConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#VolumeConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#VolumeConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#VolumeConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Children`](#VolumeConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#VolumeConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`DataModelObjectCategory`](#VolumeConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`DefineBy`](#VolumeConstraint.DefineBy)                               | Gets or sets the DefineBy.                                                                                                                                                                                                                                                                                                                    |
| [`EnvironmentSelection`](#VolumeConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#VolumeConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#VolumeConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InternalObject`](#VolumeConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`Location`](#VolumeConstraint.Location)                               | Gets or sets the Location.                                                                                                                                                                                                                                                                                                                    |
| [`MaximumAbsoluteValue`](#VolumeConstraint.MaximumAbsoluteValue)       | Gets or sets the MaximumAbsoluteValue.                                                                                                                                                                                                                                                                                                        |
| [`MinimumAbsoluteValue`](#VolumeConstraint.MinimumAbsoluteValue)       | Gets or sets the MinimumAbsoluteValue.                                                                                                                                                                                                                                                                                                        |
| [`Name`](#VolumeConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#VolumeConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#VolumeConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#VolumeConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#VolumeConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`PercentageToRetain`](#VolumeConstraint.PercentageToRetain)           | Gets or sets the PercentageToRetain.                                                                                                                                                                                                                                                                                                          |
| [`PercentageToRetainMax`](#VolumeConstraint.PercentageToRetainMax)     | Gets or sets the PercentageToRetainMax.                                                                                                                                                                                                                                                                                                       |
| [`PercentageToRetainMin`](#VolumeConstraint.PercentageToRetainMin)     | Gets or sets the PercentageToRetainMin.                                                                                                                                                                                                                                                                                                       |
| [`Properties`](#VolumeConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`ScopingMethod`](#VolumeConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                                                                                               |
| [`Selection`](#VolumeConstraint.Selection)                             | Gets or sets the Selection.                                                                                                                                                                                                                                                                                                                   |
| [`State`](#VolumeConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`Suppressed`](#VolumeConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#VolumeConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="VolumeConstraint.AttachedRefs"></a>

### *property* VolumeConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Children"></a>

### *property* VolumeConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.ClsId"></a>

### *property* VolumeConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.DataModelObjectCategory"></a>

### *property* VolumeConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.DefineBy"></a>

### *property* VolumeConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.EnvironmentSelection"></a>

### *property* VolumeConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GroupingFolder"></a>

### *property* VolumeConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.IconName"></a>

### *property* VolumeConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.InternalObject"></a>

### *property* VolumeConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Location"></a>

### *property* VolumeConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.MaximumAbsoluteValue"></a>

### *property* VolumeConstraint.MaximumAbsoluteValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.MinimumAbsoluteValue"></a>

### *property* VolumeConstraint.MinimumAbsoluteValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Name"></a>

### *property* VolumeConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.ObjectId"></a>

### *property* VolumeConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.ObjectState"></a>

### *property* VolumeConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.ObjectTags"></a>

### *property* VolumeConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Parent"></a>

### *property* VolumeConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PercentageToRetain"></a>

### *property* VolumeConstraint.PercentageToRetain *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PercentageToRetainMax"></a>

### *property* VolumeConstraint.PercentageToRetainMax *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PercentageToRetainMin"></a>

### *property* VolumeConstraint.PercentageToRetainMin *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Properties"></a>

### *property* VolumeConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.ScopingMethod"></a>

### *property* VolumeConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Selection"></a>

### *property* VolumeConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.State"></a>

### *property* VolumeConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Suppressed"></a>

### *property* VolumeConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.VisibleProperties"></a>

### *property* VolumeConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VolumeConstraint.Activate"></a>

### VolumeConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Copy"></a>

### VolumeConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.CopyTo"></a>

### VolumeConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.CreateObjRef"></a>

### VolumeConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.CreateParameter"></a>

### VolumeConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Cut"></a>

### VolumeConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Delete"></a>

### VolumeConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Duplicate"></a>

### VolumeConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Equals"></a>

### VolumeConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetAPIName"></a>

### VolumeConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetAllProperties"></a>

### VolumeConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetChildren"></a>

### VolumeConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### VolumeConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetDetailsView"></a>

### VolumeConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetEnumName"></a>

### VolumeConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetHashCode"></a>

### VolumeConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetIconFile"></a>

### VolumeConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetLifetimeService"></a>

### VolumeConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetObjectData"></a>

### VolumeConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetParameter"></a>

### VolumeConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetPath"></a>

### VolumeConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetPropertyName"></a>

### VolumeConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetPropertyValue"></a>

### VolumeConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetVisibleProperties"></a>

### VolumeConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetVisiblePropertyNames"></a>

### VolumeConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GroupAllSimilarChildren"></a>

### VolumeConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GroupSimilarObjects"></a>

### VolumeConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.InitializeLifetimeService"></a>

### VolumeConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.IsPropertyEditable"></a>

### VolumeConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VolumeConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.IsPropertyVisible"></a>

### VolumeConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VolumeConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Paste"></a>

### VolumeConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PropertyByAPIName"></a>

### VolumeConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PropertyById"></a>

### VolumeConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PropertyByName"></a>

### VolumeConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.RemoveFromGroup"></a>

### VolumeConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.RemoveParameter"></a>

### VolumeConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.RenameBasedOnDefinition"></a>

### VolumeConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

