# `LocalDesignRestriction`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LocalDesignRestriction"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LocalDesignRestriction(internalObject: Any)

<a id="LocalDesignRestriction"></a>

### *class* LocalDesignRestriction(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LocalDesignRestriction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LocalDesignRestriction.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#LocalDesignRestriction.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LocalDesignRestriction.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LocalDesignRestriction.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LocalDesignRestriction.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LocalDesignRestriction.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LocalDesignRestriction.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LocalDesignRestriction.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LocalDesignRestriction.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#LocalDesignRestriction.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LocalDesignRestriction.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LocalDesignRestriction.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LocalDesignRestriction.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LocalDesignRestriction.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LocalDesignRestriction.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LocalDesignRestriction.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LocalDesignRestriction.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LocalDesignRestriction.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LocalDesignRestriction.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LocalDesignRestriction.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LocalDesignRestriction.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LocalDesignRestriction.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#LocalDesignRestriction.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LocalDesignRestriction.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LocalDesignRestriction.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LocalDesignRestriction.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LocalDesignRestriction.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LocalDesignRestriction.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LocalDesignRestriction.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LocalDesignRestriction.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#LocalDesignRestriction.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LocalDesignRestriction.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LocalDesignRestriction.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LocalDesignRestriction.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LocalDesignRestriction.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LocalDesignRestriction.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#LocalDesignRestriction.AttachedRefs)                                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`AxisForDirection`](#LocalDesignRestriction.AxisForDirection)                               | Gets or sets the Axis of the CoordinateSystemForDirection that must be used as a direction Directional Morphing LocalDesignRestrictionNature. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).                                                                                                                                                                                                       |
| [`Children`](#LocalDesignRestriction.Children)                                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`ClsId`](#LocalDesignRestriction.ClsId)                                                     | ClsId property.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CoordinateSystemForDirection`](#LocalDesignRestriction.CoordinateSystemForDirection)       | Gets or sets the Coordinate system that is used to define a direction consumed for Directional Morphing and Angle Local Design Restriction Nature.                                                                                                                                                                                                                                                                                                      |
| [`DataModelObjectCategory`](#LocalDesignRestriction.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`ExclusionRegionLocation`](#LocalDesignRestriction.ExclusionRegionLocation)                 | Gets or sets the ExclusionRegionLocation.                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`ExclusionScopingMethod`](#LocalDesignRestriction.ExclusionScopingMethod)                   | Gets or sets the ExclusionScopingMethod.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GroupingFolder`](#LocalDesignRestriction.GroupingFolder)                                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`IconName`](#LocalDesignRestriction.IconName)                                               | IconName property.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`InternalObject`](#LocalDesignRestriction.InternalObject)                                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`LocalDesignRestrictionNature`](#LocalDesignRestriction.LocalDesignRestrictionNature)       | Gets or sets the LocalDesignRestrictionNature. This property enables you to specify geometry that the application does not optimize or specific faces from which the application does not move any nodes vertically with respect to the original face. Non-Optimizable option is the default. If AlongDirection is used, the direction is defined by the combination of CoordinateSystemForDirection and AxisOfCoordinateSystemForDirection properties. |
| [`LowerBound`](#LocalDesignRestriction.LowerBound)                                           | Lower threshold for the restriction. Used for Angle Variation constraint, as an angle value, must be strictly negative and above –180 degree, otherwise an exception is thrown.                                                                                                                                                                                                                                                                         |
| [`Material`](Material.md#Material)                                                           | Gets or sets the Material imposed on the selection during Material Optimization.                                                                                                                                                                                                                                                                                                                                                                        |
| [`MaxCumulatedDisplacementControl`](#LocalDesignRestriction.MaxCumulatedDisplacementControl) | Gets or sets the MaxCumulatedDisplacementControl.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`MorphingTotalMoveLimit`](#LocalDesignRestriction.MorphingTotalMoveLimit)                   | Gets or sets the MorphingTotalMoveLimit.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Name`](#LocalDesignRestriction.Name)                                                       | Name property.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`ObjectId`](#LocalDesignRestriction.ObjectId)                                               | ObjectId property.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`ObjectState`](#LocalDesignRestriction.ObjectState)                                         | ObjectState property.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`ObjectTags`](#LocalDesignRestriction.ObjectTags)                                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`Parent`](#LocalDesignRestriction.Parent)                                                   | Parent property.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Properties`](#LocalDesignRestriction.Properties)                                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`State`](#LocalDesignRestriction.State)                                                     | State property.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`Suppressed`](#LocalDesignRestriction.Suppressed)                                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`UpperBound`](#LocalDesignRestriction.UpperBound)                                           | Upper threshold for the restriction. Used for Angle and Angle Variation constraints, as an angle value, must be strictly positive and below 180 degrees, otherwise an exception is thrown.                                                                                                                                                                                                                                                              |
| [`VisibleProperties`](#LocalDesignRestriction.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="LocalDesignRestriction.AttachedRefs"></a>

### *property* LocalDesignRestriction.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.AxisForDirection"></a>

### *property* LocalDesignRestriction.AxisForDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis of the CoordinateSystemForDirection that must be used as a direction Directional Morphing LocalDesignRestrictionNature. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Children"></a>

### *property* LocalDesignRestriction.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ClsId"></a>

### *property* LocalDesignRestriction.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CoordinateSystemForDirection"></a>

### *property* LocalDesignRestriction.CoordinateSystemForDirection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate system that is used to define a direction consumed for Directional Morphing and Angle Local Design Restriction Nature.
Selected coordinate system must be cartesian, if not an exception is thrown.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.DataModelObjectCategory"></a>

### *property* LocalDesignRestriction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ExclusionRegionLocation"></a>

### *property* LocalDesignRestriction.ExclusionRegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ExclusionScopingMethod"></a>

### *property* LocalDesignRestriction.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GroupingFolder"></a>

### *property* LocalDesignRestriction.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.IconName"></a>

### *property* LocalDesignRestriction.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.InternalObject"></a>

### *property* LocalDesignRestriction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.LocalDesignRestrictionNature"></a>

### *property* LocalDesignRestriction.LocalDesignRestrictionNature *: [Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature](../../../Mechanical/DataModel/Enums/TopoLocalDesignRestrictionNature.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalDesignRestrictionNature. This property enables you to specify geometry that the application does not optimize or specific faces from which the application does not move any nodes vertically with respect to the original face. Non-Optimizable option is the default. If AlongDirection is used, the direction is defined by the combination of CoordinateSystemForDirection and AxisOfCoordinateSystemForDirection properties.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.LowerBound"></a>

### *property* LocalDesignRestriction.LowerBound *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Lower threshold for the restriction. Used for Angle Variation constraint, as an angle value, must be strictly negative and above –180 degree, otherwise an exception is thrown.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Material"></a>

### *property* LocalDesignRestriction.Material *: [Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Material) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material imposed on the selection during Material Optimization.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.MaxCumulatedDisplacementControl"></a>

### *property* LocalDesignRestriction.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.MorphingTotalMoveLimit"></a>

### *property* LocalDesignRestriction.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Name"></a>

### *property* LocalDesignRestriction.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ObjectId"></a>

### *property* LocalDesignRestriction.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ObjectState"></a>

### *property* LocalDesignRestriction.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ObjectTags"></a>

### *property* LocalDesignRestriction.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Parent"></a>

### *property* LocalDesignRestriction.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Properties"></a>

### *property* LocalDesignRestriction.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.State"></a>

### *property* LocalDesignRestriction.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Suppressed"></a>

### *property* LocalDesignRestriction.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.UpperBound"></a>

### *property* LocalDesignRestriction.UpperBound *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Upper threshold for the restriction. Used for Angle and Angle Variation constraints, as an angle value, must be strictly positive and below 180 degrees, otherwise an exception is thrown.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.VisibleProperties"></a>

### *property* LocalDesignRestriction.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LocalDesignRestriction.Activate"></a>

### LocalDesignRestriction.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Copy"></a>

### LocalDesignRestriction.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CopyTo"></a>

### LocalDesignRestriction.CopyTo(other: [Ansys.ACT.Automation.Mechanical.LocalDesignRestriction](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LocalDesignRestriction)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LocalDesignRestriction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Copies all visible properties from this object to another.
Override because of copy order of properties
```

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CreateObjRef"></a>

### LocalDesignRestriction.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CreateParameter"></a>

### LocalDesignRestriction.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Cut"></a>

### LocalDesignRestriction.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Delete"></a>

### LocalDesignRestriction.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Duplicate"></a>

### LocalDesignRestriction.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Equals"></a>

### LocalDesignRestriction.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetAPIName"></a>

### LocalDesignRestriction.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetAllProperties"></a>

### LocalDesignRestriction.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetChildren"></a>

### LocalDesignRestriction.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LocalDesignRestriction.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetDetailsView"></a>

### LocalDesignRestriction.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetEnumName"></a>

### LocalDesignRestriction.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetHashCode"></a>

### LocalDesignRestriction.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetIconFile"></a>

### LocalDesignRestriction.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetLifetimeService"></a>

### LocalDesignRestriction.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetObjectData"></a>

### LocalDesignRestriction.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetParameter"></a>

### LocalDesignRestriction.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetPath"></a>

### LocalDesignRestriction.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetPropertyName"></a>

### LocalDesignRestriction.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetPropertyValue"></a>

### LocalDesignRestriction.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetVisibleProperties"></a>

### LocalDesignRestriction.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetVisiblePropertyNames"></a>

### LocalDesignRestriction.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GroupAllSimilarChildren"></a>

### LocalDesignRestriction.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GroupSimilarObjects"></a>

### LocalDesignRestriction.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.InitializeLifetimeService"></a>

### LocalDesignRestriction.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.IsPropertyEditable"></a>

### LocalDesignRestriction.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LocalDesignRestriction.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.IsPropertyVisible"></a>

### LocalDesignRestriction.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LocalDesignRestriction.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Paste"></a>

### LocalDesignRestriction.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.PropertyByAPIName"></a>

### LocalDesignRestriction.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.PropertyById"></a>

### LocalDesignRestriction.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.PropertyByName"></a>

### LocalDesignRestriction.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.RemoveFromGroup"></a>

### LocalDesignRestriction.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.RemoveParameter"></a>

### LocalDesignRestriction.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.RenameBasedOnDefinition"></a>

### LocalDesignRestriction.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

