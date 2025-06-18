# `OptimizationRegion`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.OptimizationRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a OptimizationRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#OptimizationRegion.Activate)                               | Activate the current object.                                                      |
| [`AddExclusionRegion`](#OptimizationRegion.AddExclusionRegion)           | Creates a new ExclusionRegion                                                     |
| [`CopyTo`](#OptimizationRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#OptimizationRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#OptimizationRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#OptimizationRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#OptimizationRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetDefinition`](#OptimizationRegion.GetDefinition)                     | Gets the Worksheet Definition.                                                    |
| [`GetParameter`](#OptimizationRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#OptimizationRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#OptimizationRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#OptimizationRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#OptimizationRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#OptimizationRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#OptimizationRegion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#OptimizationRegion.BoundaryCondition)                                         | Gets or sets the BoundaryCondition.                           |
| [`Children`](#OptimizationRegion.Children)                                                           | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#OptimizationRegion.DataModelObjectCategory)                             | Gets the current DataModelObject’s category.                  |
| [`DesignRegionLocation`](#OptimizationRegion.DesignRegionLocation)                                   | Gets or sets the DesignRegionLocation.                        |
| [`ExclusionExtension`](#OptimizationRegion.ExclusionExtension)                                       | Gets or sets the ExclusionExtension.                          |
| [`ExclusionRegionLocation`](#OptimizationRegion.ExclusionRegionLocation)                             | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegion.ExclusionScopingMethod)                               | Gets or sets the ExclusionScopingMethod.                      |
| [`ExclusionThickness`](#OptimizationRegion.ExclusionThickness)                                       | Gets or sets the ExclusionThickness.                          |
| [`HyperbolicProjection`](#OptimizationRegion.HyperbolicProjection)                                   | Gets or sets the HyperbolicProjection.                        |
| [`InitialVolumeFraction`](#OptimizationRegion.InitialVolumeFraction)                                 | Gets or sets the InitialVolumeFraction.                       |
| [`InitializationHoleSize`](#OptimizationRegion.InitializationHoleSize)                               | Gets or sets the InitializationHoleSize.                      |
| [`InitializationModifierType`](#OptimizationRegion.InitializationModifierType)                       | Gets or sets the InitializationModifierType.                  |
| [`InternalObject`](#OptimizationRegion.InternalObject)                                               | Gets the internal object. For advanced usage only.            |
| [`LatticeMaxDensity`](#OptimizationRegion.LatticeMaxDensity)                                         | Gets or sets the LatticeMaxDensity.                           |
| [`LatticeMinDensity`](#OptimizationRegion.LatticeMinDensity)                                         | Gets or sets the LatticeMinDensity.                           |
| [`LatticeSize`](#OptimizationRegion.LatticeSize)                                                     | Gets or sets the LatticeSize.                                 |
| [`LatticeType`](#OptimizationRegion.LatticeType)                                                     | Gets or sets the LatticeType.                                 |
| [`MaxCumulatedDisplacementControl`](#OptimizationRegion.MaxCumulatedDisplacementControl)             | Gets or sets the MaxCumulatedDisplacementControl.             |
| [`MeshDeformationToleranceControl`](#OptimizationRegion.MeshDeformationToleranceControl)             | Gets or sets the MeshDeformationToleranceControl.             |
| [`MorphingIterationMoveLimit`](#OptimizationRegion.MorphingIterationMoveLimit)                       | Gets or sets the MorphingIterationMoveLimit.                  |
| [`MorphingTotalMeshDeformationTolerance`](#OptimizationRegion.MorphingTotalMeshDeformationTolerance) | Gets or sets the MorphingTotalMeshDeformationTolerance.       |
| [`MorphingTotalMoveLimit`](#OptimizationRegion.MorphingTotalMoveLimit)                               | Gets or sets the MorphingTotalMoveLimit.                      |
| [`OptimizationType`](#OptimizationRegion.OptimizationType)                                           | Gets or sets the OptimizationType.                            |
| [`PenaltyFactor`](#OptimizationRegion.PenaltyFactor)                                                 | Gets or sets the PenaltyFactor.                               |
| [`Properties`](#OptimizationRegion.Properties)                                                       | Gets the list of properties for this object.                  |
| [`ShapeMoveLimitControl`](#OptimizationRegion.ShapeMoveLimitControl)                                 | Gets or sets the ShapeMoveLimitControl.                       |
| [`VisibleProperties`](#OptimizationRegion.VisibleProperties)                                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="OptimizationRegion.BoundaryCondition"></a>

### *property* OptimizationRegion.BoundaryCondition *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionType](../../../Mechanical/DataModel/Enums/BoundaryConditionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BoundaryConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Children"></a>

### *property* OptimizationRegion.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.DataModelObjectCategory"></a>

### *property* OptimizationRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.DesignRegionLocation"></a>

### *property* OptimizationRegion.DesignRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionExtension"></a>

### *property* OptimizationRegion.ExclusionExtension *: [Ansys.Mechanical.DataModel.Enums.ExclusionType](../../../Mechanical/DataModel/Enums/ExclusionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExclusionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionExtension.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionRegionLocation"></a>

### *property* OptimizationRegion.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionScopingMethod"></a>

### *property* OptimizationRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionThickness"></a>

### *property* OptimizationRegion.ExclusionThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionThickness.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.HyperbolicProjection"></a>

### *property* OptimizationRegion.HyperbolicProjection *: [Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType](../../../Mechanical/DataModel/Enums/HyperbolicProjectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HyperbolicProjection.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitialVolumeFraction"></a>

### *property* OptimizationRegion.InitialVolumeFraction *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialVolumeFraction.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitializationHoleSize"></a>

### *property* OptimizationRegion.InitializationHoleSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitializationHoleSize.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitializationModifierType"></a>

### *property* OptimizationRegion.InitializationModifierType *: [Ansys.Mechanical.DataModel.Enums.InitializationModifierType](../../../Mechanical/DataModel/Enums/InitializationModifierType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.InitializationModifierType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitializationModifierType.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InternalObject"></a>

### *property* OptimizationRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeMaxDensity"></a>

### *property* OptimizationRegion.LatticeMaxDensity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeMaxDensity.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeMinDensity"></a>

### *property* OptimizationRegion.LatticeMinDensity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeMinDensity.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeSize"></a>

### *property* OptimizationRegion.LatticeSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeSize.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeType"></a>

### *property* OptimizationRegion.LatticeType *: [Ansys.Mechanical.DataModel.Enums.LatticeType](../../../Mechanical/DataModel/Enums/LatticeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LatticeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LatticeType.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MaxCumulatedDisplacementControl"></a>

### *property* OptimizationRegion.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MeshDeformationToleranceControl"></a>

### *property* OptimizationRegion.MeshDeformationToleranceControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshDeformationToleranceControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MorphingIterationMoveLimit"></a>

### *property* OptimizationRegion.MorphingIterationMoveLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingIterationMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MorphingTotalMeshDeformationTolerance"></a>

### *property* OptimizationRegion.MorphingTotalMeshDeformationTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMeshDeformationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MorphingTotalMoveLimit"></a>

### *property* OptimizationRegion.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.OptimizationType"></a>

### *property* OptimizationRegion.OptimizationType *: [Ansys.Mechanical.DataModel.Enums.OptimizationType](../../../Mechanical/DataModel/Enums/OptimizationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.OptimizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationType.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PenaltyFactor"></a>

### *property* OptimizationRegion.PenaltyFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Properties"></a>

### *property* OptimizationRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ShapeMoveLimitControl"></a>

### *property* OptimizationRegion.ShapeMoveLimitControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeMoveLimitControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.VisibleProperties"></a>

### *property* OptimizationRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="OptimizationRegion.Activate"></a>

### OptimizationRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.AddExclusionRegion"></a>

### OptimizationRegion.AddExclusionRegion()

Creates a new ExclusionRegion

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.CopyTo"></a>

### OptimizationRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.CreateParameter"></a>

### OptimizationRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Delete"></a>

### OptimizationRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Duplicate"></a>

### OptimizationRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetChildren"></a>

### OptimizationRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetDefinition"></a>

### OptimizationRegion.GetDefinition()

```text
Gets the Worksheet Definition.
This Definition is a list of OptimizationMaterial.
```

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetParameter"></a>

### OptimizationRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GroupAllSimilarChildren"></a>

### OptimizationRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GroupSimilarObjects"></a>

### OptimizationRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PropertyByAPIName"></a>

### OptimizationRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PropertyByName"></a>

### OptimizationRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.RemoveParameter"></a>

### OptimizationRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.RenameBasedOnDefinition"></a>

### OptimizationRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

