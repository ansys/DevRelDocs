# `ExclusionRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExclusionRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExclusionRegion(internalObject: Any)

<a id="ExclusionRegion"></a>

### *class* ExclusionRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ExclusionRegion.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#ExclusionRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ExclusionRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ExclusionRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ExclusionRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ExclusionRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ExclusionRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ExclusionRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ExclusionRegion.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ExclusionRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ExclusionRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ExclusionRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ExclusionRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ExclusionRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ExclusionRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ExclusionRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ExclusionRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ExclusionRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ExclusionRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ExclusionRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ExclusionRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ExclusionRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ExclusionRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ExclusionRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ExclusionRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ExclusionRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ExclusionRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ExclusionRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ExclusionRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ExclusionRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ExclusionRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ExclusionRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ExclusionRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ExclusionRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ExclusionRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ExclusionRegion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ExclusionRegion.AttachedRefs)                                       | AttachedRefs property.                                                                                                                                                                     |
| [`AxisForDirection`](#ExclusionRegion.AxisForDirection)                               | Gets or sets the Axis of the CoordinateSystemForDirection that must be used as a direction Directional Morphing LocalDesignRestrictionNature.                                              |
| [`Children`](#ExclusionRegion.Children)                                               | Gets the list of children.                                                                                                                                                                 |
| [`ClsId`](#ExclusionRegion.ClsId)                                                     | ClsId property.                                                                                                                                                                            |
| [`CoordinateSystemForDirection`](#ExclusionRegion.CoordinateSystemForDirection)       | Gets or sets the Coordinate system that is used to define a direction consummed for Directional Morphing LocalDesignRestrictionNature.                                                     |
| [`DataModelObjectCategory`](#ExclusionRegion.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                                                                                                                               |
| [`ExclusionRegionLocation`](#ExclusionRegion.ExclusionRegionLocation)                 | Gets or sets the ExclusionRegionLocation.                                                                                                                                                  |
| [`ExclusionScopingMethod`](#ExclusionRegion.ExclusionScopingMethod)                   | Gets or sets the ExclusionScopingMethod.                                                                                                                                                   |
| [`GroupingFolder`](#ExclusionRegion.GroupingFolder)                                   | GroupingFolder property.                                                                                                                                                                   |
| [`IconName`](#ExclusionRegion.IconName)                                               | IconName property.                                                                                                                                                                         |
| [`InternalObject`](#ExclusionRegion.InternalObject)                                   | InternalObject property.                                                                                                                                                                   |
| [`LocalDesignRestrictionNature`](#ExclusionRegion.LocalDesignRestrictionNature)       | Gets or sets the LocalDesignRestrictionNature.                                                                                                                                             |
| [`LowerBound`](#ExclusionRegion.LowerBound)                                           | Lower threshold for the restriction. Used for Angle Variation constraint, as an angle value, must be strictly negative and above –180 degree, otherwise an exception is thrown.            |
| [`Material`](Material.md#Material)                                                    | Gets or sets the Material object imposed on the Selection.                                                                                                                                 |
| [`MaxCumulatedDisplacementControl`](#ExclusionRegion.MaxCumulatedDisplacementControl) | Gets or sets the MaxCumulatedDisplacementControl.                                                                                                                                          |
| [`MorphingTotalMoveLimit`](#ExclusionRegion.MorphingTotalMoveLimit)                   | Gets or sets the MorphingTotalMoveLimit.                                                                                                                                                   |
| [`Name`](#ExclusionRegion.Name)                                                       | Name property.                                                                                                                                                                             |
| [`ObjectId`](#ExclusionRegion.ObjectId)                                               | ObjectId property.                                                                                                                                                                         |
| [`ObjectState`](#ExclusionRegion.ObjectState)                                         | ObjectState property.                                                                                                                                                                      |
| [`ObjectTags`](#ExclusionRegion.ObjectTags)                                           | ObjectTags property.                                                                                                                                                                       |
| [`Parent`](#ExclusionRegion.Parent)                                                   | Parent property.                                                                                                                                                                           |
| [`Properties`](#ExclusionRegion.Properties)                                           | Gets the list of properties for this object.                                                                                                                                               |
| [`State`](#ExclusionRegion.State)                                                     | State property.                                                                                                                                                                            |
| [`Suppressed`](#ExclusionRegion.Suppressed)                                           | Gets or sets the Suppressed.                                                                                                                                                               |
| [`UpperBound`](#ExclusionRegion.UpperBound)                                           | Upper threshold for the restriction. Used for Angle and Angle Variation constraints, as an angle value, must be strictly positive and below 180 degrees, otherwise an exception is thrown. |
| [`VisibleProperties`](#ExclusionRegion.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="ExclusionRegion.AttachedRefs"></a>

### *property* ExclusionRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.AxisForDirection"></a>

### *property* ExclusionRegion.AxisForDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis of the CoordinateSystemForDirection that must be used as a direction Directional Morphing LocalDesignRestrictionNature.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Children"></a>

### *property* ExclusionRegion.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ClsId"></a>

### *property* ExclusionRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CoordinateSystemForDirection"></a>

### *property* ExclusionRegion.CoordinateSystemForDirection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate system that is used to define a direction consummed for Directional Morphing LocalDesignRestrictionNature.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.DataModelObjectCategory"></a>

### *property* ExclusionRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionRegionLocation"></a>

### *property* ExclusionRegion.ExclusionRegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionScopingMethod"></a>

### *property* ExclusionRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupingFolder"></a>

### *property* ExclusionRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.IconName"></a>

### *property* ExclusionRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.InternalObject"></a>

### *property* ExclusionRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.LocalDesignRestrictionNature"></a>

### *property* ExclusionRegion.LocalDesignRestrictionNature *: [Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature](../../../Mechanical/DataModel/Enums/TopoLocalDesignRestrictionNature.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalDesignRestrictionNature.
: This property enables you to specify geometry that the application does not optimize or
  specific faces from which the application does not move any nodes vertically with respect to the original face.
  Non-Optimizable option is the default.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.LowerBound"></a>

### *property* ExclusionRegion.LowerBound *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Lower threshold for the restriction. Used for Angle Variation constraint, as an angle value, must be strictly negative and above –180 degree, otherwise an exception is thrown.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Material"></a>

### *property* ExclusionRegion.Material *: [Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Material) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material object imposed on the Selection.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.MaxCumulatedDisplacementControl"></a>

### *property* ExclusionRegion.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.MorphingTotalMoveLimit"></a>

### *property* ExclusionRegion.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Name"></a>

### *property* ExclusionRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ObjectId"></a>

### *property* ExclusionRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ObjectState"></a>

### *property* ExclusionRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ObjectTags"></a>

### *property* ExclusionRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Parent"></a>

### *property* ExclusionRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Properties"></a>

### *property* ExclusionRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.State"></a>

### *property* ExclusionRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Suppressed"></a>

### *property* ExclusionRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.UpperBound"></a>

### *property* ExclusionRegion.UpperBound *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Upper threshold for the restriction. Used for Angle and Angle Variation constraints, as an angle value, must be strictly positive and below 180 degrees, otherwise an exception is thrown.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.VisibleProperties"></a>

### *property* ExclusionRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExclusionRegion.Activate"></a>

### ExclusionRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Copy"></a>

### ExclusionRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CopyTo"></a>

### ExclusionRegion.CopyTo(other: [Ansys.ACT.Automation.Mechanical.ExclusionRegion](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExclusionRegion)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ExclusionRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Copies all visible properties from this object to another.
Override because of copy order of properties
```

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CreateObjRef"></a>

### ExclusionRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CreateParameter"></a>

### ExclusionRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Cut"></a>

### ExclusionRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Delete"></a>

### ExclusionRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Duplicate"></a>

### ExclusionRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Equals"></a>

### ExclusionRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetAPIName"></a>

### ExclusionRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetAllProperties"></a>

### ExclusionRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetChildren"></a>

### ExclusionRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ExclusionRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetDetailsView"></a>

### ExclusionRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetEnumName"></a>

### ExclusionRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetHashCode"></a>

### ExclusionRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetIconFile"></a>

### ExclusionRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetLifetimeService"></a>

### ExclusionRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetObjectData"></a>

### ExclusionRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetParameter"></a>

### ExclusionRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetPath"></a>

### ExclusionRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetPropertyName"></a>

### ExclusionRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetPropertyValue"></a>

### ExclusionRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetVisibleProperties"></a>

### ExclusionRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetVisiblePropertyNames"></a>

### ExclusionRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupAllSimilarChildren"></a>

### ExclusionRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupSimilarObjects"></a>

### ExclusionRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.InitializeLifetimeService"></a>

### ExclusionRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.IsPropertyEditable"></a>

### ExclusionRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExclusionRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.IsPropertyVisible"></a>

### ExclusionRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExclusionRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Paste"></a>

### ExclusionRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByAPIName"></a>

### ExclusionRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyById"></a>

### ExclusionRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByName"></a>

### ExclusionRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RemoveFromGroup"></a>

### ExclusionRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RemoveParameter"></a>

### ExclusionRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RenameBasedOnDefinition"></a>

### ExclusionRegion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

