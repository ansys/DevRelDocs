# `LocalDesignRestriction`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.LocalDesignRestriction"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LocalDesignRestriction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LocalDesignRestriction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LocalDesignRestriction.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LocalDesignRestriction.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LocalDesignRestriction.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LocalDesignRestriction.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LocalDesignRestriction.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LocalDesignRestriction.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LocalDesignRestriction.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LocalDesignRestriction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LocalDesignRestriction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LocalDesignRestriction.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LocalDesignRestriction.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LocalDesignRestriction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AxisForDirection`](#LocalDesignRestriction.AxisForDirection)                               | Gets or sets the Axis of the CoordinateSystemForDirection that must be used as a direction Directional Morphing LocalDesignRestrictionNature. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).                                                                                                                                                                                                       |
| [`Children`](#LocalDesignRestriction.Children)                                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`CoordinateSystemForDirection`](#LocalDesignRestriction.CoordinateSystemForDirection)       | Gets or sets the Coordinate system that is used to define a direction consummed for Directional Morphing LocalDesignRestrictionNature.                                                                                                                                                                                                                                                                                                                  |
| [`DataModelObjectCategory`](#LocalDesignRestriction.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`ExclusionRegionLocation`](#LocalDesignRestriction.ExclusionRegionLocation)                 | Gets or sets the ExclusionRegionLocation.                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`ExclusionScopingMethod`](#LocalDesignRestriction.ExclusionScopingMethod)                   | Gets or sets the ExclusionScopingMethod.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`InternalObject`](#LocalDesignRestriction.InternalObject)                                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`LocalDesignRestrictionNature`](#LocalDesignRestriction.LocalDesignRestrictionNature)       | Gets or sets the LocalDesignRestrictionNature. This property enables you to specify geometry that the application does not optimize or specific faces from which the application does not move any nodes vertically with respect to the original face. Non-Optimizable option is the default. If AlongDirection is used, the direction is defined by the combination of CoordinateSystemForDirection and AxisOfCoordinateSystemForDirection properties. |
| [`MaxCumulatedDisplacementControl`](#LocalDesignRestriction.MaxCumulatedDisplacementControl) | Gets or sets the MaxCumulatedDisplacementControl.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`MorphingTotalMoveLimit`](#LocalDesignRestriction.MorphingTotalMoveLimit)                   | Gets or sets the MorphingTotalMoveLimit.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Properties`](#LocalDesignRestriction.Properties)                                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`VisibleProperties`](#LocalDesignRestriction.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="LocalDesignRestriction.AxisForDirection"></a>

### *property* LocalDesignRestriction.AxisForDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis of the CoordinateSystemForDirection that must be used as a direction Directional Morphing LocalDesignRestrictionNature. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Children"></a>

### *property* LocalDesignRestriction.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CoordinateSystemForDirection"></a>

### *property* LocalDesignRestriction.CoordinateSystemForDirection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate system that is used to define a direction consummed for Directional Morphing LocalDesignRestrictionNature.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.DataModelObjectCategory"></a>

### *property* LocalDesignRestriction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ExclusionRegionLocation"></a>

### *property* LocalDesignRestriction.ExclusionRegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.ExclusionScopingMethod"></a>

### *property* LocalDesignRestriction.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.InternalObject"></a>

### *property* LocalDesignRestriction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.LocalDesignRestrictionNature"></a>

### *property* LocalDesignRestriction.LocalDesignRestrictionNature *: [Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature](../../../Mechanical/DataModel/Enums/TopoLocalDesignRestrictionNature.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalDesignRestrictionNature. This property enables you to specify geometry that the application does not optimize or specific faces from which the application does not move any nodes vertically with respect to the original face. Non-Optimizable option is the default. If AlongDirection is used, the direction is defined by the combination of CoordinateSystemForDirection and AxisOfCoordinateSystemForDirection properties.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.MaxCumulatedDisplacementControl"></a>

### *property* LocalDesignRestriction.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.MorphingTotalMoveLimit"></a>

### *property* LocalDesignRestriction.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Properties"></a>

### *property* LocalDesignRestriction.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.VisibleProperties"></a>

### *property* LocalDesignRestriction.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LocalDesignRestriction.Activate"></a>

### LocalDesignRestriction.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CopyTo"></a>

### LocalDesignRestriction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.CreateParameter"></a>

### LocalDesignRestriction.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Delete"></a>

### LocalDesignRestriction.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.Duplicate"></a>

### LocalDesignRestriction.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetChildren"></a>

### LocalDesignRestriction.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GetParameter"></a>

### LocalDesignRestriction.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GroupAllSimilarChildren"></a>

### LocalDesignRestriction.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.GroupSimilarObjects"></a>

### LocalDesignRestriction.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.PropertyByAPIName"></a>

### LocalDesignRestriction.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.PropertyByName"></a>

### LocalDesignRestriction.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LocalDesignRestriction.RemoveParameter"></a>

### LocalDesignRestriction.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

