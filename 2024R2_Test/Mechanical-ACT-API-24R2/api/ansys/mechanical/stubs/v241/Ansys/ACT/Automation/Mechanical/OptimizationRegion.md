# `OptimizationRegion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a OptimizationRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddExclusionRegion`      | Creates a new ExclusionRegion                                                     |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------|---------------------------------------------------------------|
| `InternalObject`                        | Gets the internal object. For advanced usage only.            |
| `InitialVolumeFraction`                 | Gets or sets the InitialVolumeFraction.                       |
| `MorphingTotalMoveLimit`                | Gets or sets the MorphingTotalMoveLimit.                      |
| `LatticeMaxDensity`                     | Gets or sets the LatticeMaxDensity.                           |
| `LatticeMinDensity`                     | Gets or sets the LatticeMinDensity.                           |
| `MorphingIterationMoveLimit`            | Gets or sets the MorphingIterationMoveLimit.                  |
| `PenaltyFactor`                         | Gets or sets the PenaltyFactor.                               |
| `MorphingTotalMeshDeformationTolerance` | Gets or sets the MorphingTotalMeshDeformationTolerance.       |
| `ExclusionThickness`                    | Gets or sets the ExclusionThickness.                          |
| `InitializationHoleSize`                | Gets or sets the InitializationHoleSize.                      |
| `LatticeSize`                           | Gets or sets the LatticeSize.                                 |
| `BoundaryCondition`                     | Gets or sets the BoundaryCondition.                           |
| `ExclusionExtension`                    | Gets or sets the ExclusionExtension.                          |
| `HyperbolicProjection`                  | Gets or sets the HyperbolicProjection.                        |
| `InitializationModifierType`            | Gets or sets the InitializationModifierType.                  |
| `LatticeType`                           | Gets or sets the LatticeType.                                 |
| `MaxCumulatedDisplacementControl`       | Gets or sets the MaxCumulatedDisplacementControl.             |
| `MeshDeformationToleranceControl`       | Gets or sets the MeshDeformationToleranceControl.             |
| `OptimizationType`                      | Gets or sets the OptimizationType.                            |
| `ShapeMoveLimitControl`                 | Gets or sets the ShapeMoveLimitControl.                       |
| `DesignRegionLocation`                  | Gets or sets the DesignRegionLocation.                        |
| `DataModelObjectCategory`               | Gets the current DataModelObject's category.                  |
| `ExclusionRegionLocation`               | Gets or sets the ExclusionRegionLocation.                     |
| `ExclusionScopingMethod`                | Gets or sets the ExclusionScopingMethod.                      |
| `Children`                              | Gets the list of children.                                    |
| `InternalObject`                        | Gets the internal object. For advanced usage only.            |
| `Properties`                            | Gets the list of properties for this object.                  |
| `VisibleProperties`                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* OptimizationRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.InitialVolumeFraction *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialVolumeFraction.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MorphingTotalMoveLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.LatticeMaxDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeMaxDensity.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.LatticeMinDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeMinDensity.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MorphingIterationMoveLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingIterationMoveLimit.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.PenaltyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MorphingTotalMeshDeformationTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMeshDeformationTolerance.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionThickness.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.InitializationHoleSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitializationHoleSize.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.LatticeSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeSize.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.BoundaryCondition *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionType](../../../Mechanical/DataModel/Enums/BoundaryConditionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoundaryConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionExtension *: [Ansys.Mechanical.DataModel.Enums.ExclusionType](../../../Mechanical/DataModel/Enums/ExclusionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExclusionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionExtension.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.HyperbolicProjection *: [Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType](../../../Mechanical/DataModel/Enums/HyperbolicProjectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HyperbolicProjection.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.InitializationModifierType *: [Ansys.Mechanical.DataModel.Enums.InitializationModifierType](../../../Mechanical/DataModel/Enums/InitializationModifierType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InitializationModifierType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitializationModifierType.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.LatticeType *: [Ansys.Mechanical.DataModel.Enums.LatticeType](../../../Mechanical/DataModel/Enums/LatticeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LatticeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeType.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MeshDeformationToleranceControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshDeformationToleranceControl.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.OptimizationType *: [Ansys.Mechanical.DataModel.Enums.OptimizationType](../../../Mechanical/DataModel/Enums/OptimizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OptimizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationType.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ShapeMoveLimitControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeMoveLimitControl.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.DesignRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignRegionLocation.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### OptimizationRegion.AddExclusionRegion()

Creates a new ExclusionRegion

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### OptimizationRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

