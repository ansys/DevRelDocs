# `MomentOfInertiaConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint(internalObject: Any)

<a id="MomentOfInertiaConstraint"></a>

### *class* MomentOfInertiaConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MomentOfInertiaConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MomentOfInertiaConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#MomentOfInertiaConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MomentOfInertiaConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MomentOfInertiaConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MomentOfInertiaConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MomentOfInertiaConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MomentOfInertiaConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MomentOfInertiaConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MomentOfInertiaConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MomentOfInertiaConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MomentOfInertiaConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MomentOfInertiaConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MomentOfInertiaConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MomentOfInertiaConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MomentOfInertiaConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MomentOfInertiaConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MomentOfInertiaConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MomentOfInertiaConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MomentOfInertiaConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MomentOfInertiaConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MomentOfInertiaConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MomentOfInertiaConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MomentOfInertiaConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MomentOfInertiaConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MomentOfInertiaConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MomentOfInertiaConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MomentOfInertiaConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MomentOfInertiaConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MomentOfInertiaConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MomentOfInertiaConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MomentOfInertiaConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MomentOfInertiaConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MomentOfInertiaConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MomentOfInertiaConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MomentOfInertiaConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MomentOfInertiaConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MomentOfInertiaConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Axis`](#MomentOfInertiaConstraint.Axis)                                       | Gets or sets the Axis used for calculation. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).                                                                                                                                                                                               |
| [`Children`](#MomentOfInertiaConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#MomentOfInertiaConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                      | Gets or sets the CoordinateSystem.                                                                                                                                                                                                                                                                                                            |
| [`DataModelObjectCategory`](#MomentOfInertiaConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`DefineBy`](#MomentOfInertiaConstraint.DefineBy)                               | Gets or sets the DefineBy.                                                                                                                                                                                                                                                                                                                    |
| [`EnvironmentSelection`](#MomentOfInertiaConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#MomentOfInertiaConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#MomentOfInertiaConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InternalObject`](#MomentOfInertiaConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`Location`](#MomentOfInertiaConstraint.Location)                               | Gets or sets the Location.                                                                                                                                                                                                                                                                                                                    |
| [`MaximumValue`](#MomentOfInertiaConstraint.MaximumValue)                       | Gets or sets the MaximumValue.                                                                                                                                                                                                                                                                                                                |
| [`MinimumValue`](#MomentOfInertiaConstraint.MinimumValue)                       | Gets or sets the MinimumValue.                                                                                                                                                                                                                                                                                                                |
| [`Name`](#MomentOfInertiaConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#MomentOfInertiaConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#MomentOfInertiaConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#MomentOfInertiaConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#MomentOfInertiaConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`PercentageToRetain`](#MomentOfInertiaConstraint.PercentageToRetain)           | Gets or sets the PercentageToRetain.                                                                                                                                                                                                                                                                                                          |
| [`PercentageToRetainMax`](#MomentOfInertiaConstraint.PercentageToRetainMax)     | Gets or sets the PercentageToRetainMax.                                                                                                                                                                                                                                                                                                       |
| [`PercentageToRetainMin`](#MomentOfInertiaConstraint.PercentageToRetainMin)     | Gets or sets the PercentageToRetainMin.                                                                                                                                                                                                                                                                                                       |
| [`Properties`](#MomentOfInertiaConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`ScopingMethod`](#MomentOfInertiaConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                                                                                               |
| [`Selection`](#MomentOfInertiaConstraint.Selection)                             | Gets or sets the Selection.                                                                                                                                                                                                                                                                                                                   |
| [`State`](#MomentOfInertiaConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`Suppressed`](#MomentOfInertiaConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#MomentOfInertiaConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="MomentOfInertiaConstraint.AttachedRefs"></a>

### *property* MomentOfInertiaConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Axis"></a>

### *property* MomentOfInertiaConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis used for calculation. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Children"></a>

### *property* MomentOfInertiaConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.ClsId"></a>

### *property* MomentOfInertiaConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CoordinateSystem"></a>

### *property* MomentOfInertiaConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.DataModelObjectCategory"></a>

### *property* MomentOfInertiaConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.DefineBy"></a>

### *property* MomentOfInertiaConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.EnvironmentSelection"></a>

### *property* MomentOfInertiaConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GroupingFolder"></a>

### *property* MomentOfInertiaConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.IconName"></a>

### *property* MomentOfInertiaConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.InternalObject"></a>

### *property* MomentOfInertiaConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Location"></a>

### *property* MomentOfInertiaConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.MaximumValue"></a>

### *property* MomentOfInertiaConstraint.MaximumValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumValue.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.MinimumValue"></a>

### *property* MomentOfInertiaConstraint.MinimumValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumValue.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Name"></a>

### *property* MomentOfInertiaConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.ObjectId"></a>

### *property* MomentOfInertiaConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.ObjectState"></a>

### *property* MomentOfInertiaConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.ObjectTags"></a>

### *property* MomentOfInertiaConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Parent"></a>

### *property* MomentOfInertiaConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PercentageToRetain"></a>

### *property* MomentOfInertiaConstraint.PercentageToRetain *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PercentageToRetainMax"></a>

### *property* MomentOfInertiaConstraint.PercentageToRetainMax *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PercentageToRetainMin"></a>

### *property* MomentOfInertiaConstraint.PercentageToRetainMin *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Properties"></a>

### *property* MomentOfInertiaConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.ScopingMethod"></a>

### *property* MomentOfInertiaConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Selection"></a>

### *property* MomentOfInertiaConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.State"></a>

### *property* MomentOfInertiaConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Suppressed"></a>

### *property* MomentOfInertiaConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.VisibleProperties"></a>

### *property* MomentOfInertiaConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MomentOfInertiaConstraint.Activate"></a>

### MomentOfInertiaConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Copy"></a>

### MomentOfInertiaConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CopyTo"></a>

### MomentOfInertiaConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CreateObjRef"></a>

### MomentOfInertiaConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CreateParameter"></a>

### MomentOfInertiaConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Cut"></a>

### MomentOfInertiaConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Delete"></a>

### MomentOfInertiaConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Duplicate"></a>

### MomentOfInertiaConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Equals"></a>

### MomentOfInertiaConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetAPIName"></a>

### MomentOfInertiaConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetAllProperties"></a>

### MomentOfInertiaConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetChildren"></a>

### MomentOfInertiaConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MomentOfInertiaConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetDetailsView"></a>

### MomentOfInertiaConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetEnumName"></a>

### MomentOfInertiaConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetHashCode"></a>

### MomentOfInertiaConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetIconFile"></a>

### MomentOfInertiaConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetLifetimeService"></a>

### MomentOfInertiaConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetObjectData"></a>

### MomentOfInertiaConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetParameter"></a>

### MomentOfInertiaConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetPath"></a>

### MomentOfInertiaConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetPropertyName"></a>

### MomentOfInertiaConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetPropertyValue"></a>

### MomentOfInertiaConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetVisibleProperties"></a>

### MomentOfInertiaConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetVisiblePropertyNames"></a>

### MomentOfInertiaConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GroupAllSimilarChildren"></a>

### MomentOfInertiaConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GroupSimilarObjects"></a>

### MomentOfInertiaConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.InitializeLifetimeService"></a>

### MomentOfInertiaConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.IsPropertyEditable"></a>

### MomentOfInertiaConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MomentOfInertiaConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.IsPropertyVisible"></a>

### MomentOfInertiaConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MomentOfInertiaConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Paste"></a>

### MomentOfInertiaConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PropertyByAPIName"></a>

### MomentOfInertiaConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PropertyById"></a>

### MomentOfInertiaConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PropertyByName"></a>

### MomentOfInertiaConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.RemoveFromGroup"></a>

### MomentOfInertiaConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.RemoveParameter"></a>

### MomentOfInertiaConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.RenameBasedOnDefinition"></a>

### MomentOfInertiaConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

