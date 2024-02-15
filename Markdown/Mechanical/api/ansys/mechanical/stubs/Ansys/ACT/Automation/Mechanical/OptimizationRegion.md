# OptimizationRegion

### *class* OptimizationRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a OptimizationRegion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddExclusionRegion`](#OptimizationRegion.AddExclusionRegion)           | Creates a new ExclusionRegion                                                     |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#OptimizationRegion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#OptimizationRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`Activate`](#OptimizationRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#OptimizationRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#OptimizationRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#OptimizationRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#OptimizationRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#OptimizationRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#OptimizationRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#OptimizationRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#OptimizationRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#OptimizationRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InitialVolumeFraction`](#OptimizationRegion.InitialVolumeFraction)                                                         | Gets or sets the InitialVolumeFraction.                       |
| [`MorphingTotalMoveLimit`](#OptimizationRegion.MorphingTotalMoveLimit)                                                       | Gets or sets the MorphingTotalMoveLimit.                      |
| [`LatticeMaxDensity`](#OptimizationRegion.LatticeMaxDensity)                                                                 | Gets or sets the LatticeMaxDensity.                           |
| [`LatticeMinDensity`](#OptimizationRegion.LatticeMinDensity)                                                                 | Gets or sets the LatticeMinDensity.                           |
| [`MorphingIterationMoveLimit`](#OptimizationRegion.MorphingIterationMoveLimit)                                               | Gets or sets the MorphingIterationMoveLimit.                  |
| [`PenaltyFactor`](#OptimizationRegion.PenaltyFactor)                                                                         | Gets or sets the PenaltyFactor.                               |
| [`MorphingTotalMeshDeformationTolerance`](#OptimizationRegion.MorphingTotalMeshDeformationTolerance)                         | Gets or sets the MorphingTotalMeshDeformationTolerance.       |
| [`ExclusionThickness`](#OptimizationRegion.ExclusionThickness)                                                               | Gets or sets the ExclusionThickness.                          |
| [`InitializationHoleSize`](#OptimizationRegion.InitializationHoleSize)                                                       | Gets or sets the InitializationHoleSize.                      |
| [`LatticeSize`](#OptimizationRegion.LatticeSize)                                                                             | Gets or sets the LatticeSize.                                 |
| [`BoundaryCondition`](#OptimizationRegion.BoundaryCondition)                                                                 | Gets or sets the BoundaryCondition.                           |
| [`ExclusionExtension`](#OptimizationRegion.ExclusionExtension)                                                               | Gets or sets the ExclusionExtension.                          |
| [`HyperbolicProjection`](#OptimizationRegion.HyperbolicProjection)                                                           | Gets or sets the HyperbolicProjection.                        |
| [`InitializationModifierType`](../../../Mechanical/DataModel/Enums/InitializationModifierType.md#InitializationModifierType) | Gets or sets the InitializationModifierType.                  |
| [`LatticeType`](../../../Mechanical/DataModel/Enums/LatticeType.md#LatticeType)                                              | Gets or sets the LatticeType.                                 |
| [`MaxCumulatedDisplacementControl`](#OptimizationRegion.MaxCumulatedDisplacementControl)                                     | Gets or sets the MaxCumulatedDisplacementControl.             |
| [`MeshDeformationToleranceControl`](#OptimizationRegion.MeshDeformationToleranceControl)                                     | Gets or sets the MeshDeformationToleranceControl.             |
| [`OptimizationType`](../../../Mechanical/DataModel/Enums/OptimizationType.md#OptimizationType)                               | Gets or sets the OptimizationType.                            |
| [`ShapeMoveLimitControl`](#OptimizationRegion.ShapeMoveLimitControl)                                                         | Gets or sets the ShapeMoveLimitControl.                       |
| [`DesignRegionLocation`](#OptimizationRegion.DesignRegionLocation)                                                           | Gets or sets the DesignRegionLocation.                        |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)          | Gets the current DataModelObject’s category.                  |
| [`ExclusionRegionLocation`](#OptimizationRegion.ExclusionRegionLocation)                                                     | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegion.ExclusionScopingMethod)                                                       | Gets or sets the ExclusionScopingMethod.                      |
| [`Children`](#OptimizationRegion.Children)                                                                                   | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](#OptimizationRegion.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#OptimizationRegion.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import OptimizationRegion
```

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

### *property* OptimizationRegion.BoundaryCondition *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionType](../../../Mechanical/DataModel/Enums/BoundaryConditionType.md#BoundaryConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionExtension *: [Ansys.Mechanical.DataModel.Enums.ExclusionType](../../../Mechanical/DataModel/Enums/ExclusionType.md#ExclusionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionExtension.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.HyperbolicProjection *: [Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType](../../../Mechanical/DataModel/Enums/HyperbolicProjectionType.md#HyperbolicProjectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HyperbolicProjection.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.InitializationModifierType *: [Ansys.Mechanical.DataModel.Enums.InitializationModifierType](../../../Mechanical/DataModel/Enums/InitializationModifierType.md#InitializationModifierType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitializationModifierType.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.LatticeType *: [Ansys.Mechanical.DataModel.Enums.LatticeType](../../../Mechanical/DataModel/Enums/LatticeType.md#LatticeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeType.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.MeshDeformationToleranceControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshDeformationToleranceControl.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.OptimizationType *: [Ansys.Mechanical.DataModel.Enums.OptimizationType](../../../Mechanical/DataModel/Enums/OptimizationType.md#OptimizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationType.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ShapeMoveLimitControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeMoveLimitControl.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.DesignRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignRegionLocation.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### OptimizationRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
