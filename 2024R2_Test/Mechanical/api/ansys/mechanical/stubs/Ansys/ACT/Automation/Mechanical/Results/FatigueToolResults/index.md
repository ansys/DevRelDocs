<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults"></a>

<a id="the-fatiguetoolresults-package"></a>

# The `FatigueToolResults` package

<a id="summary"></a>

## Summary

### Classes

| [`FatigueDamageMatrix`](FatigueDamageMatrix.md#FatigueDamageMatrix)                                              | Defines a FatigueDamageMatrix.                |
|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`FatigueRainflowMatrix`](FatigueRainflowMatrix.md#FatigueRainflowMatrix)                                        | Defines a FatigueRainflowMatrix.              |
| [`FatigueToolResult`](FatigueToolResult.md#FatigueToolResult)                                                    | Defines a FatigueToolResult.                  |
| [`FatigueBiaxialityIndication`](FatigueBiaxialityIndication.md#FatigueBiaxialityIndication)                      | Defines a FatigueBiaxialityIndication.        |
| [`FatigueDamage`](FatigueDamage.md#FatigueDamage)                                                                | Defines a FatigueDamage.                      |
| [`FatigueEquivalentAlternativeStress`](FatigueEquivalentAlternativeStress.md#FatigueEquivalentAlternativeStress) | Defines a FatigueEquivalentAlternativeStress. |
| [`FatigueHysteresis`](FatigueHysteresis.md#FatigueHysteresis)                                                    | Defines a FatigueHysteresis.                  |
| [`FatigueLife`](FatigueLife.md#FatigueLife)                                                                      | Defines a FatigueLife.                        |
| [`FatigueSafetyFactor`](FatigueSafetyFactor.md#FatigueSafetyFactor)                                              | Defines a FatigueSafetyFactor.                |
| [`FatigueSensitivity`](FatigueSensitivity.md#FatigueSensitivity)                                                 | Defines a FatigueSensitivity.                 |

<a id="description"></a>

## Description

FatigueToolResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="FatigueToolResults.FatigueDamageMatrix"></a>

### *class* FatigueToolResults.FatigueDamageMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueDamageMatrix.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id641)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                  |
| [`MaximumRange`](#id5)                                                                                                    | Gets the MaximumRange.                                        |
| [`MaximumMean`](#id6)                                                                                                     | Gets the MaximumMean.                                         |
| [`MinimumRange`](#id7)                                                                                                    | Gets the MinimumRange.                                        |
| [`MinimumMean`](#id8)                                                                                                     | Gets the MinimumMean.                                         |
| [`OutputUnit`](#id9)                                                                                                      | Gets or sets the OutputUnit.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id378)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id379)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id380)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id381)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id383)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id384)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id385)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id386)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id387)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id388)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id389)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id390)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id392)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id394)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id395)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id396)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id397)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id617)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id401)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id402)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id403)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id404)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id407)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id409)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id410)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id412)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id413)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueDamageMatrix
```

<a id="property-detail"></a>

## Property detail

<a id="FatigueToolResults.InternalObject"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DesignLife"></a>

### *property* FatigueToolResults.DesignLife *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumRange"></a>

### *property* FatigueToolResults.MaximumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumMean"></a>

### *property* FatigueToolResults.MaximumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumRange"></a>

### *property* FatigueToolResults.MinimumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumMean"></a>

### *property* FatigueToolResults.MinimumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.OutputUnit"></a>

### *property* FatigueToolResults.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DataModelObjectCategory"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.IsSolved"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ChartDimensions"></a>

### *property* FatigueToolResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.BoundaryCondition"></a>

### *property* FatigueToolResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CutFrequency"></a>

### *property* FatigueToolResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.SectorNumber"></a>

### *property* FatigueToolResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GeometrySelectionString"></a>

### *property* FatigueToolResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LoadStepNumber"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ReportedFrequency"></a>

### *property* FatigueToolResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Duration"></a>

### *property* FatigueToolResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FilterMaximum"></a>

### *property* FatigueToolResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FilterMinimum"></a>

### *property* FatigueToolResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueToolResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueToolResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumAmplitude"></a>

### *property* FatigueToolResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumFrequency"></a>

### *property* FatigueToolResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Maximum"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumFrequency"></a>

### *property* FatigueToolResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Minimum"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.PhaseAngle"></a>

### *property* FatigueToolResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.RealAtMaximumAmplitude"></a>

### *property* FatigueToolResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.RequestedFrequency"></a>

### *property* FatigueToolResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AccelerationType"></a>

### *property* FatigueToolResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ChartViewingStyle"></a>

### *property* FatigueToolResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DeformationType"></a>

### *property* FatigueToolResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FilterType"></a>

### *property* FatigueToolResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.SpatialResolution"></a>

### *property* FatigueToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.NormalOrientation"></a>

### *property* FatigueToolResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CurvesAppearanceDisplay"></a>

### *property* FatigueToolResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ResultChartType"></a>

### *property* FatigueToolResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DpfEvaluation"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.XAxisValues"></a>

### *property* FatigueToolResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ShearOrientation"></a>

### *property* FatigueToolResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.StressStrainType"></a>

### *property* FatigueToolResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.TimeHistoryDisplay"></a>

### *property* FatigueToolResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.VelocityType"></a>

### *property* FatigueToolResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Suppressed"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.EnhancedTracking"></a>

### *property* FatigueToolResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.UseParentFrequencyRange"></a>

### *property* FatigueToolResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CoordinateSystem"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Spring"></a>

### *property* FatigueToolResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Location"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Children"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Comments"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Images"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Properties"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.VisibleProperties"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueToolResults.ExportAnimation"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ClearGeneratedData"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.EvaluateAllResults"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.RenameBasedOnDefinition"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Delete"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GetChildren"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AddComment"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AddImage"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Activate"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CopyTo"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Duplicate"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GroupAllSimilarChildren"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GroupSimilarObjects"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.PropertyByName"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.PropertyByAPIName"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CreateParameter"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GetParameter"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.RemoveParameter"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueRainflowMatrix"></a>

### *class* FatigueToolResults.FatigueRainflowMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueRainflowMatrix.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id641)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MaximumRange`](#id5)                                                                                                    | Gets the MaximumRange.                                        |
| [`MaximumMean`](#id6)                                                                                                     | Gets the MaximumMean.                                         |
| [`MinimumRange`](#id7)                                                                                                    | Gets the MinimumRange.                                        |
| [`MinimumMean`](#id8)                                                                                                     | Gets the MinimumMean.                                         |
| [`OutputUnit`](#id9)                                                                                                      | Gets or sets the OutputUnit.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id378)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id379)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id380)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id381)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id383)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id384)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id385)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id386)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id387)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id388)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id389)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id390)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id392)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id394)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id395)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id396)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id397)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id617)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id401)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id402)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id403)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id404)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id407)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id409)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id410)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id412)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id413)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueRainflowMatrix
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* FatigueToolResults.MaximumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* FatigueToolResults.MaximumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* FatigueToolResults.MinimumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* FatigueToolResults.MinimumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* FatigueToolResults.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* FatigueToolResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* FatigueToolResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* FatigueToolResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* FatigueToolResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* FatigueToolResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* FatigueToolResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* FatigueToolResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* FatigueToolResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* FatigueToolResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* FatigueToolResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* FatigueToolResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* FatigueToolResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* FatigueToolResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* FatigueToolResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* FatigueToolResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* FatigueToolResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* FatigueToolResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* FatigueToolResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* FatigueToolResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* FatigueToolResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* FatigueToolResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* FatigueToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* FatigueToolResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* FatigueToolResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* FatigueToolResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* FatigueToolResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* FatigueToolResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* FatigueToolResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* FatigueToolResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* FatigueToolResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* FatigueToolResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* FatigueToolResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* FatigueToolResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

## Method detail

<a id="id59"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueToolResult"></a>

### *class* FatigueToolResults.FatigueToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueToolResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id588)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id589)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id591) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id592)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id593) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id641)         | CreateParameter method.                                                           |
| [`AddAlert`](#id595)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id596)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id602)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Method`](#id532)                                                                                                        | Gets the Method.                                                       |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#id534)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id535)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id537)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id538)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id539)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id540)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id541)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id542)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id543)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id544)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id547)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id548)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id549)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id550)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id552)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id553)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id554)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id555)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id556)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id557)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id558)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id560)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id561)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id562)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id564)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id565)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id567)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id568)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id569)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id570)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id572)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id574)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id575)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id576)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id580)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id78"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueToolResult
```

<a id="id79"></a>

## Property detail

<a id="id80"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Method"></a>

### *property* FatigueToolResults.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* FatigueToolResults.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AverageAcrossBodies"></a>

### *property* FatigueToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.PlotData"></a>

### *property* FatigueToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ScopingMethod"></a>

### *property* FatigueToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.SetNumber"></a>

### *property* FatigueToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CombinationNumber"></a>

### *property* FatigueToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.SolutionCombinationDriver"></a>

### *property* FatigueToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Surface"></a>

### *property* FatigueToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CrackFrontNumber"></a>

### *property* FatigueToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GlobalIDs"></a>

### *property* FatigueToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Identifier"></a>

### *property* FatigueToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.IterationNumber"></a>

### *property* FatigueToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LoadStep"></a>

### *property* FatigueToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumOccursOn"></a>

### *property* FatigueToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumOccursOn"></a>

### *property* FatigueToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.SolverComponentIDs"></a>

### *property* FatigueToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Substep"></a>

### *property* FatigueToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Average"></a>

### *property* FatigueToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumOfMaximumOverTime"></a>

### *property* FatigueToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumOfMinimumOverTime"></a>

### *property* FatigueToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumOfMaximumOverTime"></a>

### *property* FatigueToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumOfMinimumOverTime"></a>

### *property* FatigueToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Time"></a>

### *property* FatigueToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DisplayTime"></a>

### *property* FatigueToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.GraphControlsXAxis"></a>

### *property* FatigueToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DisplayOption"></a>

### *property* FatigueToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.By"></a>

### *property* FatigueToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ItemType"></a>

### *property* FatigueToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CalculateTimeHistory"></a>

### *property* FatigueToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Figures"></a>

### *property* FatigueToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

## Method detail

<a id="id98"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FetchRemoteResults"></a>

### FatigueToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.ExportToTextFile"></a>

### FatigueToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.DuplicateWithoutResults"></a>

### FatigueToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.CreateResultsAtAllSets"></a>

### FatigueToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.PromoteToNamedSelection"></a>

### FatigueToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AddAlert"></a>

### FatigueToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AddConvergence"></a>

### FatigueToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.AddFigure"></a>

### FatigueToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueBiaxialityIndication"></a>

### *class* FatigueToolResults.FatigueBiaxialityIndication

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueBiaxialityIndication.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id588)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id589)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id591) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id592)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id593) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id641)         | CreateParameter method.                                                           |
| [`AddAlert`](#id595)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id596)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id602)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#id532)                                                                                                        | Gets the Method.                                                       |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#id534)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id535)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id537)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id538)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id539)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id540)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id541)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id542)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id543)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id544)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id547)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id548)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id549)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id550)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id552)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id553)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id554)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id555)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id556)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id557)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id558)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id560)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id561)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id562)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id564)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id565)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id567)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id568)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id569)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id570)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id572)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id574)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id575)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id576)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id580)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id117"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueBiaxialityIndication
```

<a id="id118"></a>

## Property detail

<a id="id119"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* FatigueToolResults.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* FatigueToolResults.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* FatigueToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* FatigueToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* FatigueToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* FatigueToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* FatigueToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* FatigueToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* FatigueToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* FatigueToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* FatigueToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* FatigueToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* FatigueToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* FatigueToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* FatigueToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* FatigueToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* FatigueToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* FatigueToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* FatigueToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* FatigueToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* FatigueToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* FatigueToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* FatigueToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* FatigueToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* FatigueToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* FatigueToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* FatigueToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* FatigueToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* FatigueToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* FatigueToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* FatigueToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* FatigueToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* FatigueToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* FatigueToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* FatigueToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

## Method detail

<a id="id175"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### FatigueToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### FatigueToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### FatigueToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### FatigueToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### FatigueToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### FatigueToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### FatigueToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### FatigueToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueDamage"></a>

### *class* FatigueToolResults.FatigueDamage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueDamage.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id588)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id589)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id591) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id592)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id593) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id641)         | CreateParameter method.                                                           |
| [`AddAlert`](#id595)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id596)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id602)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#id532)                                                                                                        | Gets the Method.                                                       |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#id534)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id535)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id537)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id538)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id539)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id540)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id541)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id542)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id543)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id544)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id547)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id548)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id549)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id550)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id552)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id553)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id554)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id555)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id556)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id557)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id558)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id560)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id561)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id562)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id564)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id565)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id567)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id568)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id569)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id570)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id572)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id574)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id575)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id576)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id580)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id202"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueDamage
```

<a id="id203"></a>

## Property detail

<a id="id204"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* FatigueToolResults.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* FatigueToolResults.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* FatigueToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* FatigueToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* FatigueToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* FatigueToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* FatigueToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* FatigueToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* FatigueToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* FatigueToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* FatigueToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* FatigueToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* FatigueToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* FatigueToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* FatigueToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* FatigueToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* FatigueToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* FatigueToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* FatigueToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* FatigueToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* FatigueToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* FatigueToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* FatigueToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* FatigueToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* FatigueToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* FatigueToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* FatigueToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* FatigueToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* FatigueToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* FatigueToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* FatigueToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* FatigueToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* FatigueToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* FatigueToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* FatigueToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

## Method detail

<a id="id260"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### FatigueToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### FatigueToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### FatigueToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### FatigueToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### FatigueToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### FatigueToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### FatigueToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### FatigueToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueEquivalentAlternativeStress"></a>

### *class* FatigueToolResults.FatigueEquivalentAlternativeStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueEquivalentAlternativeStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id588)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id589)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id591) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id592)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id593) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id641)         | CreateParameter method.                                                           |
| [`AddAlert`](#id595)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id596)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id602)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#id532)                                                                                                        | Gets the Method.                                                       |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#id534)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id535)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id537)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id538)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id539)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id540)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id541)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id542)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id543)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id544)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id547)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id548)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id549)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id550)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id552)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id553)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id554)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id555)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id556)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id557)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id558)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id560)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id561)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id562)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id564)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id565)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id567)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id568)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id569)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id570)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id572)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id574)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id575)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id576)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id580)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id287"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueEquivalentAlternativeStress
```

<a id="id288"></a>

## Property detail

<a id="id289"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* FatigueToolResults.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* FatigueToolResults.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* FatigueToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* FatigueToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* FatigueToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* FatigueToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* FatigueToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* FatigueToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* FatigueToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* FatigueToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* FatigueToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* FatigueToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* FatigueToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* FatigueToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* FatigueToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* FatigueToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* FatigueToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* FatigueToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* FatigueToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* FatigueToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* FatigueToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* FatigueToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* FatigueToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* FatigueToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* FatigueToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* FatigueToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* FatigueToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* FatigueToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* FatigueToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* FatigueToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* FatigueToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* FatigueToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* FatigueToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* FatigueToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* FatigueToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

## Method detail

<a id="id345"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### FatigueToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### FatigueToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### FatigueToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### FatigueToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### FatigueToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### FatigueToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### FatigueToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### FatigueToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueHysteresis"></a>

### *class* FatigueToolResults.FatigueHysteresis

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueHysteresis.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id641)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PointsPerSegment`](#FatigueToolResults.PointsPerSegment)                                                                | Gets or sets the PointsPerSegment.                            |
| [`MaximumStrain`](#FatigueToolResults.MaximumStrain)                                                                      | Gets the  MaximumStrain.                                      |
| [`MaximumStress`](#FatigueToolResults.MaximumStress)                                                                      | Gets the  MaximumStress.                                      |
| [`MinimumStrain`](#FatigueToolResults.MinimumStrain)                                                                      | Gets the  MinimumStrain.                                      |
| [`MinimumStress`](#FatigueToolResults.MinimumStress)                                                                      | Gets the  MinimumStress.                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id378)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id379)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id380)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id381)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id383)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id384)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id385)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id386)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id387)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id388)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id389)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id390)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id392)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id394)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id395)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id396)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id397)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id617)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id401)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id402)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id403)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id404)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id407)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id409)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id410)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id412)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id413)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id372"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueHysteresis
```

<a id="id373"></a>

## Property detail

<a id="id374"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.PointsPerSegment"></a>

### *property* FatigueToolResults.PointsPerSegment *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointsPerSegment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumStrain"></a>

### *property* FatigueToolResults.MaximumStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MaximumStrain.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MaximumStress"></a>

### *property* FatigueToolResults.MaximumStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MaximumStress.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumStrain"></a>

### *property* FatigueToolResults.MinimumStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MinimumStrain.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.MinimumStress"></a>

### *property* FatigueToolResults.MinimumStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MinimumStress.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* FatigueToolResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* FatigueToolResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* FatigueToolResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* FatigueToolResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* FatigueToolResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* FatigueToolResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* FatigueToolResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* FatigueToolResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* FatigueToolResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* FatigueToolResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* FatigueToolResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* FatigueToolResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* FatigueToolResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* FatigueToolResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* FatigueToolResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* FatigueToolResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* FatigueToolResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* FatigueToolResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* FatigueToolResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* FatigueToolResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* FatigueToolResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* FatigueToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* FatigueToolResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* FatigueToolResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* FatigueToolResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* FatigueToolResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* FatigueToolResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* FatigueToolResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* FatigueToolResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* FatigueToolResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* FatigueToolResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* FatigueToolResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* FatigueToolResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

## Method detail

<a id="id424"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueLife"></a>

### *class* FatigueToolResults.FatigueLife

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueLife.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id588)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id589)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id591) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id592)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id593) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id641)         | CreateParameter method.                                                           |
| [`AddAlert`](#id595)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id596)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id602)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#id532)                                                                                                        | Gets the Method.                                                       |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#id534)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id535)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id537)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id538)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id539)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id540)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id541)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id542)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id543)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id544)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id547)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id548)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id549)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id550)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id552)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id553)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id554)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id555)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id556)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id557)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id558)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id560)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id561)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id562)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id564)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id565)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id567)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id568)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id569)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id570)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id572)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id574)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id575)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id576)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id580)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id443"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueLife
```

<a id="id444"></a>

## Property detail

<a id="id445"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* FatigueToolResults.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* FatigueToolResults.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* FatigueToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* FatigueToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* FatigueToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* FatigueToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* FatigueToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* FatigueToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* FatigueToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* FatigueToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* FatigueToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* FatigueToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* FatigueToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* FatigueToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* FatigueToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* FatigueToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* FatigueToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* FatigueToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* FatigueToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* FatigueToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* FatigueToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* FatigueToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* FatigueToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* FatigueToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* FatigueToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* FatigueToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* FatigueToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* FatigueToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* FatigueToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* FatigueToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* FatigueToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* FatigueToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* FatigueToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* FatigueToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* FatigueToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

## Method detail

<a id="id501"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### FatigueToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### FatigueToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### FatigueToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### FatigueToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### FatigueToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### FatigueToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### FatigueToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### FatigueToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueSafetyFactor"></a>

### *class* FatigueToolResults.FatigueSafetyFactor

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueSafetyFactor.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id586)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id587)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id588)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id589)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id590)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id591) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id592)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id593) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id641)         | CreateParameter method.                                                           |
| [`AddAlert`](#id595)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id596)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id628) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id629)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id602)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id633)                | Creates a new child Image.                                                        |
| [`Activate`](#id634)                | Activate the current object.                                                      |
| [`CopyTo`](#id635)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id642)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#id532)                                                                                                        | Gets the Method.                                                       |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#id534)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id535)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id537)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id538)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id539)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id540)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id541)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id542)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id543)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id544)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id545)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id547)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id548)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id549)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id550)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id552)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id553)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id554)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id555)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id556)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id557)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id558)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id559)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id560)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id561)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id562)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id563)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id564)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id565)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id566)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id567)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id568)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id569)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id570)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id572)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id573)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id574)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id575)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id576)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id580)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id528"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueSafetyFactor
```

<a id="id529"></a>

## Property detail

<a id="id530"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* FatigueToolResults.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### *property* FatigueToolResults.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* FatigueToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* FatigueToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* FatigueToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* FatigueToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* FatigueToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* FatigueToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* FatigueToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* FatigueToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* FatigueToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* FatigueToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* FatigueToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* FatigueToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* FatigueToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* FatigueToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* FatigueToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* FatigueToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* FatigueToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* FatigueToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* FatigueToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* FatigueToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* FatigueToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* FatigueToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* FatigueToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* FatigueToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* FatigueToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* FatigueToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* FatigueToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* FatigueToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* FatigueToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* FatigueToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* FatigueToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* FatigueToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* FatigueToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* FatigueToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* FatigueToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* FatigueToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* FatigueToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* FatigueToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* FatigueToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* FatigueToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* FatigueToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

## Method detail

<a id="id586"></a>

### FatigueToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### FatigueToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### FatigueToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### FatigueToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### FatigueToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### FatigueToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### FatigueToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### FatigueToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### FatigueToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### FatigueToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### FatigueToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.FatigueSensitivity"></a>

### *class* FatigueToolResults.FatigueSensitivity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueSensitivity.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`RenameBasedOnDefinition`](#id628)   | Run the RenameBasedOnDefinition action.                                           |
|---------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id629)                    | Run the Delete action.                                                            |
| [`GetChildren`](#id631)               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id631)               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id632)                | Creates a new child Comment.                                                      |
| [`AddImage`](#id633)                  | Creates a new child Image.                                                        |
| [`Activate`](#id634)                  | Activate the current object.                                                      |
| [`CopyTo`](#id635)                    | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id636)                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id637)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id638)       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id639)            | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id640)         | Get a property by its API name.                                                   |
| [`CreateParameter`](#id641)           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id642)              | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id643)           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LowerVariation`](#FatigueToolResults.LowerVariation)                                                                    | Gets or sets the LowerVariation.                              |
| [`NumberOfFillPoints`](#FatigueToolResults.NumberOfFillPoints)                                                            | Gets or sets the NumberOfFillPoints.                          |
| [`DesignLife`](#id616)                                                                                                    | Gets or sets the DesignLife.                                  |
| [`UpperVariation`](#FatigueToolResults.UpperVariation)                                                                    | Gets or sets the UpperVariation.                              |
| [`ChartViewingStyle`](#id617)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`Sensitivity`](#FatigueToolResults.Sensitivity)                                                                          | Gets or sets the Sensitivity.                                 |
| [`Suppressed`](#id618)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`Location`](#id619)                                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id621)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id622)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id623)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id613"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueSensitivity
```

<a id="id614"></a>

## Property detail

<a id="id615"></a>

### *property* FatigueToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.LowerVariation"></a>

### *property* FatigueToolResults.LowerVariation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowerVariation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.NumberOfFillPoints"></a>

### *property* FatigueToolResults.NumberOfFillPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfFillPoints.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* FatigueToolResults.DesignLife *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.UpperVariation"></a>

### *property* FatigueToolResults.UpperVariation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpperVariation.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* FatigueToolResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResults.Sensitivity"></a>

### *property* FatigueToolResults.Sensitivity *: [Ansys.Mechanical.DataModel.Enums.FatigueSensitivityType](../../../../../Mechanical/DataModel/Enums/FatigueSensitivityType.md#FatigueSensitivityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Sensitivity.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* FatigueToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* FatigueToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* FatigueToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* FatigueToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* FatigueToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* FatigueToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* FatigueToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* FatigueToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* FatigueToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

## Method detail

<a id="id628"></a>

### FatigueToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### FatigueToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### FatigueToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### FatigueToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### FatigueToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### FatigueToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### FatigueToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### FatigueToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### FatigueToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### FatigueToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### FatigueToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### FatigueToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### FatigueToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### FatigueToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### FatigueToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### FatigueToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
