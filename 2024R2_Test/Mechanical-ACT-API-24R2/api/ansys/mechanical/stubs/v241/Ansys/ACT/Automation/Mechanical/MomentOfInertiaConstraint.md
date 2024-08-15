# `MomentOfInertiaConstraint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MomentOfInertiaConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `RenameBasedOnDefinition`   | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|------------------------------------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.                                       |
| `PercentageToRetain`      | Gets or sets the PercentageToRetain.                                                     |
| `PercentageToRetainMax`   | Gets or sets the PercentageToRetainMax.                                                  |
| `PercentageToRetainMin`   | Gets or sets the PercentageToRetainMin.                                                  |
| `MaximumValue`            | Gets or sets the MaximumValue.                                                           |
| `MinimumValue`            | Gets or sets the MinimumValue.                                                           |
| `Axis`                    | Gets or sets the Axis.                                                                   |
| `DefineBy`                | Gets or sets the DefineBy.                                                               |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                                                          |
| `CoordinateSystem`        | Gets or sets the CoordinateSystem.                                                       |
| `Selection`               | Gets or sets the Selection.                                                              |
| `Location`                | Gets or sets the Location.                                                               |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                             |
| `EnvironmentSelection`    | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| `Suppressed`              | Gets or sets the Suppressed.                                                             |
| `Children`                | Gets the list of children.                                                               |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                       |
| `Properties`              | Gets the list of properties for this object.                                             |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

### *property* MomentOfInertiaConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.PercentageToRetain *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.PercentageToRetainMax *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.PercentageToRetainMin *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.MaximumValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumValue.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.MinimumValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumValue.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MomentOfInertiaConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### MomentOfInertiaConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MomentOfInertiaConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

