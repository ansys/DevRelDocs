<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads"></a>

<a id="the-importedloads-package"></a>

# The `ImportedLoads` package

<a id="summary"></a>

## Summary

### Classes

| [`ImportedBodyForceDensity`](ImportedBodyForceDensity.md#ImportedBodyForceDensity)                                  | Defines a ImportedBodyForceDensity.            |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`ImportedBodyTemperature`](ImportedBodyTemperature.md#ImportedBodyTemperature)                                     | Defines a ImportedBodyTemperature.             |
| [`ImportedConvection`](ImportedConvection.md#ImportedConvection)                                                    | Defines a ImportedConvection.                  |
| [`ImportedCutBoundaryRemoteConstraint`](ImportedCutBoundaryRemoteConstraint.md#ImportedCutBoundaryRemoteConstraint) | Defines a ImportedCutBoundaryRemoteConstraint. |
| [`ImportedCutBoundaryRemoteForce`](ImportedCutBoundaryRemoteForce.md#ImportedCutBoundaryRemoteForce)                | Defines a ImportedCutBoundaryRemoteForce.      |
| [`ImportedDisplacement`](ImportedDisplacement.md#ImportedDisplacement)                                              | Defines a ImportedDisplacement.                |
| [`ImportedSurfaceForceDensity`](ImportedSurfaceForceDensity.md#ImportedSurfaceForceDensity)                         | Defines a ImportedSurfaceForceDensity.         |
| [`ImportedTemperature`](ImportedTemperature.md#ImportedTemperature)                                                 | Defines a ImportedTemperature.                 |
| [`ImportedVelocity`](ImportedVelocity.md#ImportedVelocity)                                                          | Defines a ImportedVelocity.                    |
| [`ImportedLoadGroup`](ImportedLoadGroup.md#ImportedLoadGroup)                                                       | Defines a ImportedLoadGroup.                   |
| [`ImportedLoad`](ImportedLoad.md#ImportedLoad)                                                                      | Defines a ImportedLoad.                        |
| [`ImportedTrace`](ImportedTrace.md#ImportedTrace)                                                                   | Defines a ImportedTrace.                       |
| [`ImportedElementOrientation`](ImportedElementOrientation.md#ImportedElementOrientation)                            | Defines a ImportedElementOrientation.          |
| [`ImportedFiberRatio`](ImportedFiberRatio.md#ImportedFiberRatio)                                                    | Defines a ImportedFiberRatio.                  |
| [`ImportedForce`](ImportedForce.md#ImportedForce)                                                                   | Defines a ImportedForce.                       |
| [`ImportedHeatFlux`](ImportedHeatFlux.md#ImportedHeatFlux)                                                          | Defines a ImportedHeatFlux.                    |
| [`ImportedHeatGeneration`](ImportedHeatGeneration.md#ImportedHeatGeneration)                                        | Defines a ImportedHeatGeneration.              |
| [`ImportedInitialStrain`](ImportedInitialStrain.md#ImportedInitialStrain)                                           | Defines a ImportedInitialStrain.               |
| [`ImportedInitialStress`](ImportedInitialStress.md#ImportedInitialStress)                                           | Defines a ImportedInitialStress.               |
| [`ImportedMaterialField`](ImportedMaterialField.md#ImportedMaterialField)                                           | Defines a ImportedMaterialField.               |
| [`ImportedPressure`](ImportedPressure.md#ImportedPressure)                                                          | Defines a ImportedPressure.                    |
| [`ImportedThickness`](ImportedThickness.md#ImportedThickness)                                                       | Defines a ImportedThickness.                   |
| [`ImportedWarpWeftRatio`](ImportedWarpWeftRatio.md#ImportedWarpWeftRatio)                                           | Defines a ImportedWarpWeftRatio.               |
| [`ImportedYarnAngle`](ImportedYarnAngle.md#ImportedYarnAngle)                                                       | Defines a ImportedYarnAngle.                   |

<a id="description"></a>

## Description

ImportedLoads subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ImportedLoads.ImportedBodyForceDensity"></a>

### *class* ImportedLoads.ImportedBodyForceDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedBodyForceDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedBodyForceDensity
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedLoads.InternalObject"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DataModelObjectCategory"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Weighting"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.MappingControl"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DisplaySourcePoints"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DisplaySourcePointIds"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DisplayInteriorPoints"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DisplayProjectionPlane"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Algorithm"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.BoundingBoxTolerance"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Mapping"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.LegendMaximum"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.LegendMinimum"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.LegendRange"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.MaxOutsideDistance"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Method"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.OutsideDistanceCheck"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.OutsideOption"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Projection"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.RigidBodyTransformationType"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ShellThicknessFactor"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.SourceMaximum"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.SourceMinimum"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.VariableType"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Interpolation"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.UnmappedNodesName"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.MappedNodesName"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.OutsideNodesName"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Pinball"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.NumberOfPoints"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.OrientationRealignment"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Limit"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.KrigingCorrelationFunction"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.KrigingPolynom"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ExtrapolationTolerancePercent"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ApplyAs"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Suppressed"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.SharedRefBody"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Location"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Children"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Comments"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Figures"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Images"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Properties"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.VisibleProperties"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedLoads.GetActivateAtLoadStep"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.SetActivateAtLoadStep"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ExportToTextFile"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Import"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportLoad"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddMappingValidation"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ClearGeneratedData"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Delete"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.GetChildren"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddComment"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddFigure"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImage"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Activate"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CopyTo"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Duplicate"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.GroupAllSimilarChildren"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.GroupSimilarObjects"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.PropertyByName"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.PropertyByAPIName"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateParameter"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.GetParameter"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.RemoveParameter"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedBodyTemperature"></a>

### *class* ImportedLoads.ImportedBodyTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedBodyTemperature.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ApplyToInitialMesh`](#id312)                                                                                                     | Gets or sets the ApplyToInitialMesh.                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedBodyTemperature
```

<a id="id3"></a>

## Property detail

<a id="ImportedLoads.ApplyToInitialMesh"></a>

### *property* ImportedLoads.ApplyToInitialMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

## Method detail

<a id="id56"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedConvection"></a>

### *class* ImportedLoads.ImportedConvection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedConvection.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DisplayConnectionLines`](#ImportedLoads.DisplayConnectionLines)                                                                  | Gets or sets the DisplayConnectionLines.                                                                |
| [`FluidFlow`](#ImportedLoads.FluidFlow)                                                                                            | Gets or sets the FluidFlow.                                                                             |
| [`FluidFlowLocation`](#ImportedLoads.FluidFlowLocation)                                                                            | Gets or sets the FluidFlowLocation.                                                                     |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id79"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedConvection
```

<a id="id80"></a>

## Property detail

<a id="id81"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DisplayConnectionLines"></a>

### *property* ImportedLoads.DisplayConnectionLines *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayConnectionLines.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.FluidFlow"></a>

### *property* ImportedLoads.FluidFlow *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlow.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.FluidFlowLocation"></a>

### *property* ImportedLoads.FluidFlowLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlowLocation.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

## Method detail

<a id="id133"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedCutBoundaryRemoteConstraint"></a>

### *class* ImportedLoads.ImportedCutBoundaryRemoteConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCutBoundaryRemoteConstraint.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id156"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedCutBoundaryRemoteConstraint
```

<a id="id157"></a>

## Property detail

<a id="id158"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

## Method detail

<a id="id210"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedCutBoundaryRemoteForce"></a>

### *class* ImportedLoads.ImportedCutBoundaryRemoteForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCutBoundaryRemoteForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id233"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedCutBoundaryRemoteForce
```

<a id="id234"></a>

## Property detail

<a id="id235"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

## Method detail

<a id="id287"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedDisplacement"></a>

### *class* ImportedLoads.ImportedDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedDisplacement.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ApplyToInitialMesh`](#id312)                                                                                                     | Gets or sets the ApplyToInitialMesh.                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`DisplacementType`](#ImportedLoads.DisplacementType)                                                                              | Gets or sets the DisplacementType.                                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id310"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedDisplacement
```

<a id="id311"></a>

## Property detail

<a id="id312"></a>

### *property* ImportedLoads.ApplyToInitialMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DisplacementType"></a>

### *property* ImportedLoads.DisplacementType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplacementType](../../../../Mechanical/DataModel/Enums/ExternalLoadDisplacementType.md#ExternalLoadDisplacementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementType.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

## Method detail

<a id="id365"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedSurfaceForceDensity"></a>

### *class* ImportedLoads.ImportedSurfaceForceDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedSurfaceForceDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id388"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedSurfaceForceDensity
```

<a id="id389"></a>

## Property detail

<a id="id390"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

## Method detail

<a id="id442"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedTemperature"></a>

### *class* ImportedLoads.ImportedTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedTemperature.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id465"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedTemperature
```

<a id="id466"></a>

## Property detail

<a id="id467"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

## Method detail

<a id="id519"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedVelocity"></a>

### *class* ImportedLoads.ImportedVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedVelocity.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id542"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedVelocity
```

<a id="id543"></a>

## Property detail

<a id="id544"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

## Method detail

<a id="id596"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedLoadGroup"></a>

### *class* ImportedLoads.ImportedLoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedLoadGroup.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CreateExternalLoadVelocitiesAndSyncAnalysisSettings`](#ImportedLoads.CreateExternalLoadVelocitiesAndSyncAnalysisSettings)   | Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.                         |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`SetResultFile`](#ImportedLoads.SetResultFile)                                                                               | Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system. |
| [`ImportExternalDataFiles`](#ImportedLoads.ImportExternalDataFiles)                                                           |                                                                                             |
| [`GetExternalDataFiles`](#ImportedLoads.GetExternalDataFiles)                                                                 |                                                                                             |
| [`ReloadExternalDataFiles`](#ImportedLoads.ReloadExternalDataFiles)                                                           | Reloads the external data files for current Imported Load Group.                            |
| [`Delete`](#id1712)                                                                                                           | Run the Delete action.                                                                      |
| [`AddImportedBodyTemperature`](#ImportedLoads.AddImportedBodyTemperature)                                                     | Creates a new ImportedBodyTemperature                                                       |
| [`AddImportedTemperature`](#ImportedLoads.AddImportedTemperature)                                                             | Creates a new ImportedTemperature                                                           |
| [`CreateBodyForceDensitiesAndSyncAnalysisSettings`](#ImportedLoads.CreateBodyForceDensitiesAndSyncAnalysisSettings)           | Create body force densities for all RPMs.                                                   |
| [`CreateSurfaceForceDensitiesAndSyncAnalysisSettings`](#ImportedLoads.CreateSurfaceForceDensitiesAndSyncAnalysisSettings)     | Create surface force densities for all RPMs.                                                |
| [`CreateVelocitiesAndSyncAnalysisSettings`](#ImportedLoads.CreateVelocitiesAndSyncAnalysisSettings)                           | Create velocities for all RPMs.                                                             |
| [`AddImportedBodyForceDensity`](#ImportedLoads.AddImportedBodyForceDensity)                                                   | Creates a new ImportedBodyForceDensity                                                      |
| [`AddImportedConvection`](#ImportedLoads.AddImportedConvection)                                                               | Creates a new ImportedConvection                                                            |
| [`AddImportedCutBoundaryRemoteConstraint`](#ImportedLoads.AddImportedCutBoundaryRemoteConstraint)                             | Creates a new ImportedCutBoundaryRemoteConstraint                                           |
| [`AddImportedCutBoundaryRemoteForce`](#ImportedLoads.AddImportedCutBoundaryRemoteForce)                                       | Creates a new ImportedCutBoundaryRemoteForce                                                |
| [`AddImportedDisplacement`](#ImportedLoads.AddImportedDisplacement)                                                           | Creates a new ImportedDisplacement                                                          |
| [`AddImportedCutBoundaryConstraint`](#ImportedLoads.AddImportedCutBoundaryConstraint)                                         | Creates a new ImportedDisplacement                                                          |
| [`AddImportedElementOrientation`](#ImportedLoads.AddImportedElementOrientation)                                               | Creates a new ImportedElementOrientation                                                    |
| [`AddImportedFiberRatio`](#ImportedLoads.AddImportedFiberRatio)                                                               | Creates a new ImportedFiberRatio                                                            |
| [`AddImportedForce`](#ImportedLoads.AddImportedForce)                                                                         | Creates a new ImportedForce                                                                 |
| [`AddImportedHeatFlux`](#ImportedLoads.AddImportedHeatFlux)                                                                   | Creates a new ImportedHeatFlux                                                              |
| [`AddImportedHeatGeneration`](#ImportedLoads.AddImportedHeatGeneration)                                                       | Creates a new ImportedHeatGeneration                                                        |
| [`AddImportedInitialStrain`](#ImportedLoads.AddImportedInitialStrain)                                                         | Creates a new ImportedInitialStrain                                                         |
| [`AddImportedInitialStress`](#ImportedLoads.AddImportedInitialStress)                                                         | Creates a new ImportedInitialStress                                                         |
| [`AddImportedMaterialField`](#ImportedLoads.AddImportedMaterialField)                                                         | Creates a new ImportedMaterialField                                                         |
| [`AddImportedPressure`](#ImportedLoads.AddImportedPressure)                                                                   | Creates a new ImportedPressure                                                              |
| [`AddImportedSurfaceForceDensity`](#ImportedLoads.AddImportedSurfaceForceDensity)                                             | Creates a new ImportedSurfaceForceDensity                                                   |
| [`AddImportedThickness`](#ImportedLoads.AddImportedThickness)                                                                 | Creates a new ImportedThickness                                                             |
| [`AddImportedTrace`](#ImportedLoads.AddImportedTrace)                                                                         | Creates a new ImportedTrace                                                                 |
| [`AddImportedVelocity`](#ImportedLoads.AddImportedVelocity)                                                                   | Creates a new ImportedVelocity                                                              |
| [`AddImportedWarpWeftRatio`](#ImportedLoads.AddImportedWarpWeftRatio)                                                         | Creates a new ImportedWarpWeftRatio                                                         |
| [`AddImportedYarnAngle`](#ImportedLoads.AddImportedYarnAngle)                                                                 | Creates a new ImportedYarnAngle                                                             |
| [`ClearGeneratedData`](#id1711)                                                                                               | Run the ClearGeneratedData action.                                                          |
| [`ImportLoad`](#id1707)                                                                                                       | Run the ImportLoad action.                                                                  |
| [`RefreshImportedLoad`](#ImportedLoads.RefreshImportedLoad)                                                                   | Run the RefreshImportedLoad action.                                                         |
| [`GetChildren`](#id1714)                                                                                                      | Gets the list of children, filtered by type.                                                |
| [`GetChildren`](#id1714)                                                                                                      | Gets the list of children, filtered by type.                                                |
| [`AddComment`](#id1715)                                                                                                       | Creates a new child Comment.                                                                |
| [`AddFigure`](#id1716)                                                                                                        | Creates a new child Figure.                                                                 |
| [`AddImage`](#id1717)                                                                                                         | Creates a new child Image.                                                                  |
| [`Activate`](#id1718)                                                                                                         | Activate the current object.                                                                |
| [`CopyTo`](#id1719)                                                                                                           | Copies all visible properties from this object to another.                                  |
| [`Duplicate`](#id1720)                                                                                                        | Creates a copy of the current DataModelObject.                                              |
| [`GroupAllSimilarChildren`](#id1721)                                                                                          | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#id1722)                                                                                              | Run the GroupSimilarObjects action.                                                         |
| [`PropertyByName`](#id1723)                                                                                                   | Get a property by its unique name.                                                          |
| [`PropertyByAPIName`](#id1724)                                                                                                | Get a property by its API name.                                                             |
| [`CreateParameter`](#id1725)                                                                                                  | Creates a new parameter for a Property.                                                     |
| [`GetParameter`](#id1726)                                                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`RemoveParameter`](#id1727)                                                                                                  | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| [`ResultFile`](#ImportedLoads.ResultFile)                                                                              | Gets or sets the ResultFile.                                           |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ResultFileUnitSystem`](#ImportedLoads.ResultFileUnitSystem)                                                          | Gets or sets the ResultFileUnitSystem.                                 |
| [`FilesDirectory`](#ImportedLoads.FilesDirectory)                                                                      | Gets the FilesDirectory.                                               |
| [`InternalObject`](#id1701)                                                                                            | Gets the internal object. For advanced usage only.                     |
| [`TransferStep`](#ImportedLoads.TransferStep)                                                                          | Controls which additive simulation step is used for the data transfer. |
| [`Source`](#ImportedLoads.Source)                                                                                      | Gets the Source.                                                       |
| [`ResultFileTimestamp`](#ImportedLoads.ResultFileTimestamp)                                                            | Gets the ResultFileTimestamp.                                          |
| [`SourceDimension`](../../../../Mechanical/DataModel/Enums/SourceDimension.md#SourceDimension)                         | Gets or sets the SourceDimension.                                      |
| [`DeleteMappedDataFilesAfterImport`](#ImportedLoads.DeleteMappedDataFilesAfterImport)                                  | Gets or sets the DeleteMappedDataFilesAfterImport.                     |
| [`Suppressed`](#id1694)                                                                                                | Gets or sets the Suppressed.                                           |
| [`TransferTemperaturesDuringSolve`](#ImportedLoads.TransferTemperaturesDuringSolve)                                    | Gets or sets the TransferTemperaturesDuringSolve.                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Children`](#id1697)                                                                                                  | Gets the list of children.                                             |
| [`Comments`](#id1698)                                                                                                  | Gets the list of associated comments.                                  |
| [`Figures`](#id1699)                                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#id1700)                                                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id1701)                                                                                            | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1702)                                                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1703)                                                                                         | Gets the list of properties that are visible for this object.          |

<a id="id619"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedLoadGroup
```

<a id="id620"></a>

## Property detail

<a id="ImportedLoads.ResultFile"></a>

### *property* ImportedLoads.ResultFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFile.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ResultFileUnitSystem"></a>

### *property* ImportedLoads.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.FilesDirectory"></a>

### *property* ImportedLoads.FilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.TransferStep"></a>

### *property* ImportedLoads.TransferStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Controls which additive simulation step is used for the data transfer.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Source"></a>

### *property* ImportedLoads.Source *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ResultFileTimestamp"></a>

### *property* ImportedLoads.ResultFileTimestamp *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileTimestamp.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.SourceDimension"></a>

### *property* ImportedLoads.SourceDimension *: [Ansys.Mechanical.DataModel.Enums.SourceDimension](../../../../Mechanical/DataModel/Enums/SourceDimension.md#SourceDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceDimension.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.DeleteMappedDataFilesAfterImport"></a>

### *property* ImportedLoads.DeleteMappedDataFilesAfterImport *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteMappedDataFilesAfterImport.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.TransferTemperaturesDuringSolve"></a>

### *property* ImportedLoads.TransferTemperaturesDuringSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferTemperaturesDuringSolve.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

## Method detail

<a id="ImportedLoads.CreateExternalLoadVelocitiesAndSyncAnalysisSettings"></a>

### ImportedLoads.CreateExternalLoadVelocitiesAndSyncAnalysisSettings()

Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.SetResultFile"></a>

### ImportedLoads.SetResultFile(resultFile: System.String, unitSystem: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType))

Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportExternalDataFiles"></a>

### ImportedLoads.ImportExternalDataFiles(externalDataFiles: [Ansys.Mechanical.ExternalData.ExternalDataFileCollection](../../../../Mechanical/ExternalData/ExternalDataFileCollection.md#ExternalDataFileCollection))

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.GetExternalDataFiles"></a>

### ImportedLoads.GetExternalDataFiles()

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ReloadExternalDataFiles"></a>

### ImportedLoads.ReloadExternalDataFiles()

Reloads the external data files for current Imported Load Group.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedBodyTemperature"></a>

### ImportedLoads.AddImportedBodyTemperature()

Creates a new ImportedBodyTemperature

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedTemperature"></a>

### ImportedLoads.AddImportedTemperature()

Creates a new ImportedTemperature

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateBodyForceDensitiesAndSyncAnalysisSettings"></a>

### ImportedLoads.CreateBodyForceDensitiesAndSyncAnalysisSettings()

Create body force densities for all RPMs.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateSurfaceForceDensitiesAndSyncAnalysisSettings"></a>

### ImportedLoads.CreateSurfaceForceDensitiesAndSyncAnalysisSettings()

Create surface force densities for all RPMs.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.CreateVelocitiesAndSyncAnalysisSettings"></a>

### ImportedLoads.CreateVelocitiesAndSyncAnalysisSettings()

Create velocities for all RPMs.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedBodyForceDensity"></a>

### ImportedLoads.AddImportedBodyForceDensity()

Creates a new ImportedBodyForceDensity

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedConvection"></a>

### ImportedLoads.AddImportedConvection()

Creates a new ImportedConvection

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedCutBoundaryRemoteConstraint"></a>

### ImportedLoads.AddImportedCutBoundaryRemoteConstraint()

Creates a new ImportedCutBoundaryRemoteConstraint

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedCutBoundaryRemoteForce"></a>

### ImportedLoads.AddImportedCutBoundaryRemoteForce()

Creates a new ImportedCutBoundaryRemoteForce

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedDisplacement"></a>

### ImportedLoads.AddImportedDisplacement()

Creates a new ImportedDisplacement

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedCutBoundaryConstraint"></a>

### ImportedLoads.AddImportedCutBoundaryConstraint()

Creates a new ImportedDisplacement

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedElementOrientation"></a>

### ImportedLoads.AddImportedElementOrientation()

Creates a new ImportedElementOrientation

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedFiberRatio"></a>

### ImportedLoads.AddImportedFiberRatio()

Creates a new ImportedFiberRatio

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedForce"></a>

### ImportedLoads.AddImportedForce()

Creates a new ImportedForce

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedHeatFlux"></a>

### ImportedLoads.AddImportedHeatFlux()

Creates a new ImportedHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedHeatGeneration"></a>

### ImportedLoads.AddImportedHeatGeneration()

Creates a new ImportedHeatGeneration

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedInitialStrain"></a>

### ImportedLoads.AddImportedInitialStrain()

Creates a new ImportedInitialStrain

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedInitialStress"></a>

### ImportedLoads.AddImportedInitialStress()

Creates a new ImportedInitialStress

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedMaterialField"></a>

### ImportedLoads.AddImportedMaterialField()

Creates a new ImportedMaterialField

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedPressure"></a>

### ImportedLoads.AddImportedPressure()

Creates a new ImportedPressure

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedSurfaceForceDensity"></a>

### ImportedLoads.AddImportedSurfaceForceDensity()

Creates a new ImportedSurfaceForceDensity

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedThickness"></a>

### ImportedLoads.AddImportedThickness()

Creates a new ImportedThickness

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedTrace"></a>

### ImportedLoads.AddImportedTrace()

Creates a new ImportedTrace

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedVelocity"></a>

### ImportedLoads.AddImportedVelocity()

Creates a new ImportedVelocity

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedWarpWeftRatio"></a>

### ImportedLoads.AddImportedWarpWeftRatio()

Creates a new ImportedWarpWeftRatio

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.AddImportedYarnAngle"></a>

### ImportedLoads.AddImportedYarnAngle()

Creates a new ImportedYarnAngle

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.RefreshImportedLoad"></a>

### ImportedLoads.RefreshImportedLoad()

Run the RefreshImportedLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedLoad"></a>

### *class* ImportedLoads.ImportedLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedLoad.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id650"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedLoad
```

<a id="id651"></a>

## Property detail

<a id="id652"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

## Method detail

<a id="id704"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedTrace"></a>

### *class* ImportedLoads.ImportedTrace

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedTrace.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Vias`](#ImportedLoads.Vias)                                                                                                      | Vias property.                                                                                          |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Layers`](#ImportedLoads.Layers)                                                                                                  | Layers property.                                                                                        |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id727"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedTrace
```

<a id="id728"></a>

## Property detail

<a id="ImportedLoads.Vias"></a>

### *property* ImportedLoads.Vias *: System.Collections.Generic.IEnumerable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/library/constants.html#None)*

Vias property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.Layers"></a>

### *property* ImportedLoads.Layers *: System.Collections.Generic.IEnumerable[Ansys.ACT.Automation.Mechanical.WorksheetRow] | [None](https://docs.python.org/3/library/constants.html#None)*

Layers property.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

## Method detail

<a id="id781"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedElementOrientation"></a>

### *class* ImportedLoads.ImportedElementOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedElementOrientation.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id804"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedElementOrientation
```

<a id="id805"></a>

## Property detail

<a id="id806"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id851"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id852"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id853"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

## Method detail

<a id="id858"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id866"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id869"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id877"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id878"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id879"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedFiberRatio"></a>

### *class* ImportedLoads.ImportedFiberRatio

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedFiberRatio.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id881"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedFiberRatio
```

<a id="id882"></a>

## Property detail

<a id="id883"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id887"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id893"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id894"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id895"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id896"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id897"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id898"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id899"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id900"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id901"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id902"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id903"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id904"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id905"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id906"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id907"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id908"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id909"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id910"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id911"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id912"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id913"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id914"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id915"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id916"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id917"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id918"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id919"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id920"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id921"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id922"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id923"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id924"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id925"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id926"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id927"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id928"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id929"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id930"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id931"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id932"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id933"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id934"></a>

## Method detail

<a id="id935"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id936"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id937"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id938"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id939"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id940"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id941"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id942"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id943"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id944"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id945"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id946"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id947"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id948"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id949"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id950"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id951"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id952"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id953"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id954"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id955"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id956"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id957"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedForce"></a>

### *class* ImportedLoads.ImportedForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id958"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedForce
```

<a id="id959"></a>

## Property detail

<a id="id960"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id961"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id962"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id963"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id964"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id965"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id966"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id967"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id968"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id969"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id970"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id971"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id972"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id973"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id974"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id975"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id976"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id977"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id978"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id979"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id980"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id981"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id982"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id983"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id984"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id985"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id986"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id987"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id988"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id989"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id990"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id991"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id992"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id993"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id994"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id995"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id996"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id997"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id998"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id999"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1000"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1001"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1002"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1003"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1004"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1005"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1006"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1007"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1008"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1009"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1010"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1011"></a>

## Method detail

<a id="id1012"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1013"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1014"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1015"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1016"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1017"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1018"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1019"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1020"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1021"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1022"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1023"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1024"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1025"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1026"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1027"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1028"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1029"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1030"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1031"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1032"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1033"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1034"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedHeatFlux"></a>

### *class* ImportedLoads.ImportedHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedHeatFlux.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1035"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedHeatFlux
```

<a id="id1036"></a>

## Property detail

<a id="id1037"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1038"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1039"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1040"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1041"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1042"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1043"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1044"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1045"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1046"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1047"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1048"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1049"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1050"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1051"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1052"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1053"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1054"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1055"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1056"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1057"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1058"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1059"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1060"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1061"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1062"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1063"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1064"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1065"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1066"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1067"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1068"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1069"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1070"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1071"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1072"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1073"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1074"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1075"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1076"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1077"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1078"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1079"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1080"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1081"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1082"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1083"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1084"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1085"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1086"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1087"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1088"></a>

## Method detail

<a id="id1089"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1090"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1091"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1092"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1093"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1094"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1095"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1096"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1097"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1098"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1099"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1100"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1101"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1102"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1103"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1104"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1105"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1106"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1107"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1108"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1109"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1110"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1111"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedHeatGeneration"></a>

### *class* ImportedLoads.ImportedHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedHeatGeneration.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1112"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedHeatGeneration
```

<a id="id1113"></a>

## Property detail

<a id="id1114"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1115"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1116"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1117"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1118"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1119"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1120"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1121"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1122"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1123"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1124"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1125"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1126"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1127"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1128"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1129"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1130"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1131"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1132"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1133"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1134"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1135"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1136"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1137"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1138"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1139"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1140"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1141"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1142"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1143"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1144"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1145"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1146"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1147"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1148"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1149"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1150"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1151"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1152"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1153"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1154"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1155"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1156"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1157"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1158"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1159"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1160"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1161"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1162"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1163"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1164"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1165"></a>

## Method detail

<a id="id1166"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1167"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1168"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1169"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1170"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1171"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1172"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1173"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1174"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1175"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1176"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1177"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1178"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1179"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1180"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1181"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1182"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1183"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1184"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1185"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1186"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1187"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1188"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedInitialStrain"></a>

### *class* ImportedLoads.ImportedInitialStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedInitialStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1189"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedInitialStrain
```

<a id="id1190"></a>

## Property detail

<a id="id1191"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1192"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1193"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1194"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1195"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1196"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1197"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1198"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1199"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1200"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1201"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1202"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1203"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1204"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1205"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1206"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1207"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1208"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1209"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1210"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1211"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1212"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1213"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1214"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1215"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1216"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1217"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1218"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1219"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1220"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1221"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1222"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1223"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1224"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1225"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1226"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1227"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1228"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1229"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1230"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1231"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1232"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1233"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1234"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1235"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1236"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1237"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1238"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1239"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1240"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1241"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1242"></a>

## Method detail

<a id="id1243"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1244"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1245"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1246"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1247"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1248"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1249"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1250"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1251"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1252"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1253"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1254"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1255"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1256"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1257"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1258"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1259"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1260"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1261"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1262"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1263"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1264"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1265"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedInitialStress"></a>

### *class* ImportedLoads.ImportedInitialStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedInitialStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1266"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedInitialStress
```

<a id="id1267"></a>

## Property detail

<a id="id1268"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1269"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1270"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1271"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1272"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1273"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1274"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1275"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1276"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1277"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1278"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1279"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1280"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1281"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1282"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1283"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1284"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1285"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1286"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1287"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1288"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1289"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1290"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1291"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1292"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1293"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1294"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1295"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1296"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1297"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1298"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1299"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1300"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1301"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1302"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1303"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1304"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1305"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1306"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1307"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1308"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1309"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1310"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1311"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1312"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1313"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1314"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1315"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1316"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1317"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1318"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1319"></a>

## Method detail

<a id="id1320"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1321"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1322"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1323"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1324"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1325"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1326"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1327"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1328"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1329"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1330"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1331"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1332"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1333"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1334"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1335"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1336"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1337"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1338"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1339"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1340"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1341"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1342"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedMaterialField"></a>

### *class* ImportedLoads.ImportedMaterialField

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedMaterialField.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1343"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedMaterialField
```

<a id="id1344"></a>

## Property detail

<a id="id1345"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1346"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1347"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1348"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1349"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1350"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1351"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1352"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1353"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1354"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1355"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1356"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1357"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1358"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1359"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1360"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1361"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1362"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1363"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1364"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1365"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1366"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1367"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1368"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1369"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1370"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1371"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1372"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1373"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1374"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1375"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1376"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1377"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1378"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1379"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1380"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1381"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1382"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1383"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1384"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1385"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1386"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1387"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1388"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1389"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1390"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1391"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1392"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1393"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1394"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1395"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1396"></a>

## Method detail

<a id="id1397"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1398"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1399"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1400"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1401"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1402"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1403"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1404"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1405"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1406"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1407"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1408"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1409"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1410"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1411"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1412"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1413"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1414"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1415"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1416"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1417"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1418"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1419"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedPressure"></a>

### *class* ImportedLoads.ImportedPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedPressure.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1420"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedPressure
```

<a id="id1421"></a>

## Property detail

<a id="id1422"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1423"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1424"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1425"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1426"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1427"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1428"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1429"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1430"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1431"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1432"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1433"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1434"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1435"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1436"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1437"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1438"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1439"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1440"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1441"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1442"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1443"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1444"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1445"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1446"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1447"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1448"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1449"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1450"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1451"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1452"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1453"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1454"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1455"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1456"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1457"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1458"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1459"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1460"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1461"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1462"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1463"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1464"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1465"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1466"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1467"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1468"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1469"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1470"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1471"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1472"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1473"></a>

## Method detail

<a id="id1474"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1475"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1476"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1477"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1478"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1479"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1480"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1481"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1482"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1483"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1484"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1485"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1486"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1487"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1488"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1489"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1490"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1491"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1492"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1493"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1494"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1495"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1496"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedThickness"></a>

### *class* ImportedLoads.ImportedThickness

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedThickness.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1497"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedThickness
```

<a id="id1498"></a>

## Property detail

<a id="id1499"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1500"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1501"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1502"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1503"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1504"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1505"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1506"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1507"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1508"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1509"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1510"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1511"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1512"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1513"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1514"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1515"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1516"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1517"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1518"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1519"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1520"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1521"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1522"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1523"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1524"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1525"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1526"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1527"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1528"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1529"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1530"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1531"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1532"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1533"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1534"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1535"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1536"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1537"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1538"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1539"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1540"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1541"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1542"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1543"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1544"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1545"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1546"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1547"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1548"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1549"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1550"></a>

## Method detail

<a id="id1551"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1552"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1553"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1554"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1555"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1556"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1557"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1558"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1559"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1560"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1561"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1562"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1563"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1564"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1565"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1566"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1567"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1568"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1569"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1570"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1571"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1572"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1573"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedWarpWeftRatio"></a>

### *class* ImportedLoads.ImportedWarpWeftRatio

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedWarpWeftRatio.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1574"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedWarpWeftRatio
```

<a id="id1575"></a>

## Property detail

<a id="id1576"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1577"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1578"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1579"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1580"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1581"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1582"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1583"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1584"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1585"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1586"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1587"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1588"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1589"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1590"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1591"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1592"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1593"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1594"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1595"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1596"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1597"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1598"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1599"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1600"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1601"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1602"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1603"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1604"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1605"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1606"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1607"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1608"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1609"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1610"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1611"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1612"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1613"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1614"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1615"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1616"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1617"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1618"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1619"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1620"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1621"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1622"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1623"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1624"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1625"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1626"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1627"></a>

## Method detail

<a id="id1628"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1629"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1630"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1631"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1632"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1633"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1634"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1635"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1636"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1637"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1638"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1639"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1640"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1641"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1642"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1643"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1644"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1645"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1646"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1647"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1648"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1649"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1650"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoads.ImportedYarnAngle"></a>

### *class* ImportedLoads.ImportedYarnAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedYarnAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportToTextFile`](#id1705)        | Run the ExportToTextFile action.                                                  |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#id1706)                  | Import.                                                                           |
| [`ImportLoad`](#id1707)              | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#id1708)   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#id1709)   | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#id1710)    | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#id1711)      | Run the ClearGeneratedData action.                                                |
| [`Delete`](#id1712)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1714)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1715)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1716)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1717)                | Creates a new child Image.                                                        |
| [`Activate`](#id1718)                | Activate the current object.                                                      |
| [`CopyTo`](#id1719)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1720)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1721) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1722)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1723)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1724)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1725)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1726)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1727)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#id1655)                                                                                                             | Weighting property.                                                                                     |
| [`MappingControl`](#id1656)                                                                                                        | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#id1657)                                                                                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#id1658)                                                                                                 | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#id1659)                                                                                                 | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#id1660)                                                                                                | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#id1661)                                                                                                             | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#id1662)                                                                                                  | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#id1663)                                                                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#id1664)                                                                                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#id1665)                                                                                   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#id1666)                                                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#id1667)                                                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#id1668)                                                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#id1669)                                                                                                           | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#id1670)                                                                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#id1671)                                                                                                                | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#id1672)                                                                                                  | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#id1673)                                                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#id1674)                                                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#id1676)                                                                                  | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#id1677)                                                                                  | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#id1678)                                                                                                  | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#id1679)                                                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#id1680)                                                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#id1682)                                                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#id1683)                                                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#id1684)                                                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#id1685)                                                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#id1686)                                                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#id1687)                                                                                                        | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#id1688)                                                                                                | OrientationRealignment property.                                                                        |
| [`Limit`](#id1689)                                                                                                                 | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#id1690)                                                                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#id1691)                                                                                                        | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#id1692)                                                                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#id1693)                                                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#id1694)                                                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#id1695)                                                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#id1696)                                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#id1697)                                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#id1698)                                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#id1699)                                                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#id1700)                                                                                                                | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id1701)                                                                                                        | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#id1702)                                                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#id1703)                                                                                                     | Gets the list of properties that are visible for this object.                                           |

<a id="id1651"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedYarnAngle
```

<a id="id1652"></a>

## Property detail

<a id="id1653"></a>

### *property* ImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1654"></a>

### *property* ImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1655"></a>

### *property* ImportedLoads.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="id1656"></a>

### *property* ImportedLoads.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="id1657"></a>

### *property* ImportedLoads.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1658"></a>

### *property* ImportedLoads.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="id1659"></a>

### *property* ImportedLoads.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1660"></a>

### *property* ImportedLoads.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="id1661"></a>

### *property* ImportedLoads.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="id1662"></a>

### *property* ImportedLoads.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="id1663"></a>

### *property* ImportedLoads.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1664"></a>

### *property* ImportedLoads.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1665"></a>

### *property* ImportedLoads.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="id1666"></a>

### *property* ImportedLoads.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="id1667"></a>

### *property* ImportedLoads.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1668"></a>

### *property* ImportedLoads.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1669"></a>

### *property* ImportedLoads.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="id1670"></a>

### *property* ImportedLoads.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="id1671"></a>

### *property* ImportedLoads.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="id1672"></a>

### *property* ImportedLoads.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="id1673"></a>

### *property* ImportedLoads.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="id1674"></a>

### *property* ImportedLoads.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="id1675"></a>

### *property* ImportedLoads.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="id1676"></a>

### *property* ImportedLoads.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1677"></a>

### *property* ImportedLoads.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="id1678"></a>

### *property* ImportedLoads.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="id1679"></a>

### *property* ImportedLoads.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="id1680"></a>

### *property* ImportedLoads.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="id1681"></a>

### *property* ImportedLoads.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="id1682"></a>

### *property* ImportedLoads.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="id1683"></a>

### *property* ImportedLoads.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1684"></a>

### *property* ImportedLoads.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1685"></a>

### *property* ImportedLoads.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="id1686"></a>

### *property* ImportedLoads.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="id1687"></a>

### *property* ImportedLoads.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="id1688"></a>

### *property* ImportedLoads.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="id1689"></a>

### *property* ImportedLoads.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="id1690"></a>

### *property* ImportedLoads.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="id1691"></a>

### *property* ImportedLoads.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="id1692"></a>

### *property* ImportedLoads.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="id1693"></a>

### *property* ImportedLoads.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="id1694"></a>

### *property* ImportedLoads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1695"></a>

### *property* ImportedLoads.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="id1696"></a>

### *property* ImportedLoads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1697"></a>

### *property* ImportedLoads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1698"></a>

### *property* ImportedLoads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1699"></a>

### *property* ImportedLoads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1700"></a>

### *property* ImportedLoads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1701"></a>

### *property* ImportedLoads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1702"></a>

### *property* ImportedLoads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1703"></a>

### *property* ImportedLoads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1704"></a>

## Method detail

<a id="id1705"></a>

### ImportedLoads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1706"></a>

### ImportedLoads.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="id1707"></a>

### ImportedLoads.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="id1708"></a>

### ImportedLoads.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1709"></a>

### ImportedLoads.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="id1710"></a>

### ImportedLoads.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="id1711"></a>

### ImportedLoads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1712"></a>

### ImportedLoads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1713"></a>

### ImportedLoads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1714"></a>

### ImportedLoads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1715"></a>

### ImportedLoads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1716"></a>

### ImportedLoads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1717"></a>

### ImportedLoads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1718"></a>

### ImportedLoads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1719"></a>

### ImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1720"></a>

### ImportedLoads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1721"></a>

### ImportedLoads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1722"></a>

### ImportedLoads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1723"></a>

### ImportedLoads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1724"></a>

### ImportedLoads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1725"></a>

### ImportedLoads.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1726"></a>

### ImportedLoads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1727"></a>

### ImportedLoads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
