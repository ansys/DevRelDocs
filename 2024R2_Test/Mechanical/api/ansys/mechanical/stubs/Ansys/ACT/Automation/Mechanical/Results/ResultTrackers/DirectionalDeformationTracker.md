<a id="directionaldeformationtracker"></a>

# DirectionalDeformationTracker

<a id="DirectionalDeformationTracker"></a>

### *class* DirectionalDeformationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalDeformationTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#DirectionalDeformationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#DirectionalDeformationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalDeformationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#DirectionalDeformationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalDeformationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalDeformationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#DirectionalDeformationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalDeformationTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalDeformationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalDeformationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalDeformationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalDeformationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalDeformationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalDeformationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DirectionalDeformationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DirectionalDeformationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalDeformationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`LocationXCoordinate`](#DirectionalDeformationTracker.LocationXCoordinate)                                               | Gets or sets the LocationXCoordinate.                         |
| [`LocationYCoordinate`](#DirectionalDeformationTracker.LocationYCoordinate)                                               | Gets or sets the LocationYCoordinate.                         |
| [`LocationZCoordinate`](#DirectionalDeformationTracker.LocationZCoordinate)                                               | Gets or sets the LocationZCoordinate.                         |
| [`LocationMethod`](#DirectionalDeformationTracker.LocationMethod)                                                         | Gets or sets the LocationMethod.                              |
| [`LocationCoordinateSystem`](#DirectionalDeformationTracker.LocationCoordinateSystem)                                     | Gets or sets the LocationCoordinateSystem.                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#DirectionalDeformationTracker.IsSolved)                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#DirectionalDeformationTracker.BoundaryCondition)                                                   | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#DirectionalDeformationTracker.CutFrequency)                                                             | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#DirectionalDeformationTracker.SectorNumber)                                                             | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#DirectionalDeformationTracker.GeometrySelectionString)                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#DirectionalDeformationTracker.LoadStepNumber)                                                         | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#DirectionalDeformationTracker.ReportedFrequency)                                                   | Gets the ReportedFrequency.                                   |
| [`Duration`](#DirectionalDeformationTracker.Duration)                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#DirectionalDeformationTracker.FilterMaximum)                                                           | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#DirectionalDeformationTracker.FilterMinimum)                                                           | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#DirectionalDeformationTracker.FrequencyAtMaximumAmplitude)                               | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#DirectionalDeformationTracker.ImaginaryAtMaximumAmplitude)                               | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#DirectionalDeformationTracker.MaximumAmplitude)                                                     | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#DirectionalDeformationTracker.MaximumFrequency)                                                     | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#DirectionalDeformationTracker.Maximum)                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#DirectionalDeformationTracker.MinimumFrequency)                                                     | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#DirectionalDeformationTracker.Minimum)                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#DirectionalDeformationTracker.PhaseAngle)                                                                 | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#DirectionalDeformationTracker.RealAtMaximumAmplitude)                                         | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#DirectionalDeformationTracker.RequestedFrequency)                                                 | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#DirectionalDeformationTracker.AccelerationType)                                                     | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#DirectionalDeformationTracker.ChartViewingStyle)                                                   | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#DirectionalDeformationTracker.SpatialResolution)                                                   | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#DirectionalDeformationTracker.NormalOrientation)                                                   | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#DirectionalDeformationTracker.CurvesAppearanceDisplay)                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#DirectionalDeformationTracker.ResultChartType)                                                       | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#DirectionalDeformationTracker.DpfEvaluation)                                                           | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#DirectionalDeformationTracker.ShearOrientation)                                                     | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#DirectionalDeformationTracker.TimeHistoryDisplay)                                                 | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#DirectionalDeformationTracker.VelocityType)                                                             | Gets or sets the VelocityType.                                |
| [`Suppressed`](#DirectionalDeformationTracker.Suppressed)                                                                 | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#DirectionalDeformationTracker.EnhancedTracking)                                                     | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#DirectionalDeformationTracker.UseParentFrequencyRange)                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#DirectionalDeformationTracker.Location)                                                                     | Gets or sets the Location.                                    |
| [`Children`](#DirectionalDeformationTracker.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#DirectionalDeformationTracker.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Images`](#DirectionalDeformationTracker.Images)                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DirectionalDeformationTracker.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DirectionalDeformationTracker.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import DirectionalDeformationTracker
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalDeformationTracker.InternalObject"></a>

### *property* DirectionalDeformationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationXCoordinate"></a>

### *property* DirectionalDeformationTracker.LocationXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationYCoordinate"></a>

### *property* DirectionalDeformationTracker.LocationYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationZCoordinate"></a>

### *property* DirectionalDeformationTracker.LocationZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationMethod"></a>

### *property* DirectionalDeformationTracker.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationCoordinateSystem"></a>

### *property* DirectionalDeformationTracker.LocationCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.DataModelObjectCategory"></a>

### *property* DirectionalDeformationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.IsSolved"></a>

### *property* DirectionalDeformationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ChartDimensions"></a>

### *property* DirectionalDeformationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.BoundaryCondition"></a>

### *property* DirectionalDeformationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CutFrequency"></a>

### *property* DirectionalDeformationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.SectorNumber"></a>

### *property* DirectionalDeformationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GeometrySelectionString"></a>

### *property* DirectionalDeformationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LoadStepNumber"></a>

### *property* DirectionalDeformationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ReportedFrequency"></a>

### *property* DirectionalDeformationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Duration"></a>

### *property* DirectionalDeformationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FilterMaximum"></a>

### *property* DirectionalDeformationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FilterMinimum"></a>

### *property* DirectionalDeformationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.MaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.MaximumFrequency"></a>

### *property* DirectionalDeformationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Maximum"></a>

### *property* DirectionalDeformationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.MinimumFrequency"></a>

### *property* DirectionalDeformationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Minimum"></a>

### *property* DirectionalDeformationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PhaseAngle"></a>

### *property* DirectionalDeformationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RealAtMaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RequestedFrequency"></a>

### *property* DirectionalDeformationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.AccelerationType"></a>

### *property* DirectionalDeformationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ChartViewingStyle"></a>

### *property* DirectionalDeformationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.DeformationType"></a>

### *property* DirectionalDeformationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FilterType"></a>

### *property* DirectionalDeformationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.SpatialResolution"></a>

### *property* DirectionalDeformationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.NormalOrientation"></a>

### *property* DirectionalDeformationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CurvesAppearanceDisplay"></a>

### *property* DirectionalDeformationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ResultChartType"></a>

### *property* DirectionalDeformationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.DpfEvaluation"></a>

### *property* DirectionalDeformationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.XAxisValues"></a>

### *property* DirectionalDeformationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ShearOrientation"></a>

### *property* DirectionalDeformationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.StressStrainType"></a>

### *property* DirectionalDeformationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.TimeHistoryDisplay"></a>

### *property* DirectionalDeformationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.VelocityType"></a>

### *property* DirectionalDeformationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Suppressed"></a>

### *property* DirectionalDeformationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.EnhancedTracking"></a>

### *property* DirectionalDeformationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.UseParentFrequencyRange"></a>

### *property* DirectionalDeformationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CoordinateSystem"></a>

### *property* DirectionalDeformationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Spring"></a>

### *property* DirectionalDeformationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Location"></a>

### *property* DirectionalDeformationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Children"></a>

### *property* DirectionalDeformationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Comments"></a>

### *property* DirectionalDeformationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Images"></a>

### *property* DirectionalDeformationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalDeformationTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Properties"></a>

### *property* DirectionalDeformationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.VisibleProperties"></a>

### *property* DirectionalDeformationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalDeformationTracker.ExportAnimation"></a>

### DirectionalDeformationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ClearGeneratedData"></a>

### DirectionalDeformationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.EvaluateAllResults"></a>

### DirectionalDeformationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RenameBasedOnDefinition"></a>

### DirectionalDeformationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Delete"></a>

### DirectionalDeformationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetChildren"></a>

### DirectionalDeformationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalDeformationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.AddComment"></a>

### DirectionalDeformationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.AddImage"></a>

### DirectionalDeformationTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Activate"></a>

### DirectionalDeformationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CopyTo"></a>

### DirectionalDeformationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Duplicate"></a>

### DirectionalDeformationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GroupAllSimilarChildren"></a>

### DirectionalDeformationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GroupSimilarObjects"></a>

### DirectionalDeformationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PropertyByName"></a>

### DirectionalDeformationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PropertyByAPIName"></a>

### DirectionalDeformationTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CreateParameter"></a>

### DirectionalDeformationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetParameter"></a>

### DirectionalDeformationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RemoveParameter"></a>

### DirectionalDeformationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
