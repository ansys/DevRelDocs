# `MomentOfInertiaConstraint`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MomentOfInertiaConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MomentOfInertiaConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MomentOfInertiaConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MomentOfInertiaConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MomentOfInertiaConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MomentOfInertiaConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MomentOfInertiaConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MomentOfInertiaConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MomentOfInertiaConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MomentOfInertiaConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MomentOfInertiaConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MomentOfInertiaConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MomentOfInertiaConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MomentOfInertiaConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Axis`](#MomentOfInertiaConstraint.Axis)                                       | Gets or sets the Axis used for calculation. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).   |
| [`Children`](#MomentOfInertiaConstraint.Children)                               | Gets the list of children.                                                                                                                        |
| [`CoordinateSystem`](#MomentOfInertiaConstraint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                                                                                                                |
| [`DataModelObjectCategory`](#MomentOfInertiaConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                      |
| [`DefineBy`](#MomentOfInertiaConstraint.DefineBy)                               | Gets or sets the DefineBy.                                                                                                                        |
| [`EnvironmentSelection`](#MomentOfInertiaConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.                                                          |
| [`InternalObject`](#MomentOfInertiaConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                |
| [`Location`](#MomentOfInertiaConstraint.Location)                               | Gets or sets the Location.                                                                                                                        |
| [`MaximumValue`](#MomentOfInertiaConstraint.MaximumValue)                       | Gets or sets the MaximumValue.                                                                                                                    |
| [`MinimumValue`](#MomentOfInertiaConstraint.MinimumValue)                       | Gets or sets the MinimumValue.                                                                                                                    |
| [`PercentageToRetain`](#MomentOfInertiaConstraint.PercentageToRetain)           | Gets or sets the PercentageToRetain.                                                                                                              |
| [`PercentageToRetainMax`](#MomentOfInertiaConstraint.PercentageToRetainMax)     | Gets or sets the PercentageToRetainMax.                                                                                                           |
| [`PercentageToRetainMin`](#MomentOfInertiaConstraint.PercentageToRetainMin)     | Gets or sets the PercentageToRetainMin.                                                                                                           |
| [`Properties`](#MomentOfInertiaConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                      |
| [`ScopingMethod`](#MomentOfInertiaConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                   |
| [`Selection`](#MomentOfInertiaConstraint.Selection)                             | Gets or sets the Selection.                                                                                                                       |
| [`Suppressed`](#MomentOfInertiaConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                      |
| [`VisibleProperties`](#MomentOfInertiaConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="MomentOfInertiaConstraint.Axis"></a>

### *property* MomentOfInertiaConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis used for calculation. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Children"></a>

### *property* MomentOfInertiaConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CoordinateSystem"></a>

### *property* MomentOfInertiaConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.DataModelObjectCategory"></a>

### *property* MomentOfInertiaConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.DefineBy"></a>

### *property* MomentOfInertiaConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.EnvironmentSelection"></a>

### *property* MomentOfInertiaConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.InternalObject"></a>

### *property* MomentOfInertiaConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Location"></a>

### *property* MomentOfInertiaConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.MaximumValue"></a>

### *property* MomentOfInertiaConstraint.MaximumValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumValue.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.MinimumValue"></a>

### *property* MomentOfInertiaConstraint.MinimumValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumValue.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PercentageToRetain"></a>

### *property* MomentOfInertiaConstraint.PercentageToRetain *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PercentageToRetainMax"></a>

### *property* MomentOfInertiaConstraint.PercentageToRetainMax *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PercentageToRetainMin"></a>

### *property* MomentOfInertiaConstraint.PercentageToRetainMin *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Properties"></a>

### *property* MomentOfInertiaConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.ScopingMethod"></a>

### *property* MomentOfInertiaConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Selection"></a>

### *property* MomentOfInertiaConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Suppressed"></a>

### *property* MomentOfInertiaConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.VisibleProperties"></a>

### *property* MomentOfInertiaConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MomentOfInertiaConstraint.Activate"></a>

### MomentOfInertiaConstraint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CopyTo"></a>

### MomentOfInertiaConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.CreateParameter"></a>

### MomentOfInertiaConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Delete"></a>

### MomentOfInertiaConstraint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.Duplicate"></a>

### MomentOfInertiaConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetChildren"></a>

### MomentOfInertiaConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GetParameter"></a>

### MomentOfInertiaConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GroupAllSimilarChildren"></a>

### MomentOfInertiaConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.GroupSimilarObjects"></a>

### MomentOfInertiaConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PropertyByAPIName"></a>

### MomentOfInertiaConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.PropertyByName"></a>

### MomentOfInertiaConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.RemoveParameter"></a>

### MomentOfInertiaConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MomentOfInertiaConstraint.RenameBasedOnDefinition"></a>

### MomentOfInertiaConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

