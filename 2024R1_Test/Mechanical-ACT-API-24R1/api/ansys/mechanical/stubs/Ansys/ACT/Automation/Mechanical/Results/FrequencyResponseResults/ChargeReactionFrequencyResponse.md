# ChargeReactionFrequencyResponse

<a id="ChargeReactionFrequencyResponse"></a>

### *class* ChargeReactionFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ChargeReactionFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ChargeReactionFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ChargeReactionFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ChargeReactionFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ChargeReactionFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ChargeReactionFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ChargeReactionFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ChargeReactionFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ChargeReactionFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ChargeReactionFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ChargeReactionFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ChargeReactionFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ChargeReactionFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ChargeReactionFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ChargeReactionFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ChargeReactionFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ChargeReactionFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ChargeReactionFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`LocationMethod`](#ChargeReactionFrequencyResponse.LocationMethod)                                                       | Gets or sets the LocationMethod.                                                                 |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#ChargeReactionFrequencyResponse.RemotePointSelection)                                           | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#ChargeReactionFrequencyResponse.IsSolved)                                                                   | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#ChargeReactionFrequencyResponse.BoundaryCondition)                                                 | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#ChargeReactionFrequencyResponse.CutFrequency)                                                           | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#ChargeReactionFrequencyResponse.SectorNumber)                                                           | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#ChargeReactionFrequencyResponse.GeometrySelectionString)                                     | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#ChargeReactionFrequencyResponse.LoadStepNumber)                                                       | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#ChargeReactionFrequencyResponse.ReportedFrequency)                                                 | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#ChargeReactionFrequencyResponse.Duration)                                                                   | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#ChargeReactionFrequencyResponse.FilterMaximum)                                                         | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#ChargeReactionFrequencyResponse.FilterMinimum)                                                         | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude)                             | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude)                             | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#ChargeReactionFrequencyResponse.MaximumAmplitude)                                                   | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#ChargeReactionFrequencyResponse.MaximumFrequency)                                                   | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#ChargeReactionFrequencyResponse.Maximum)                                                                     | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#ChargeReactionFrequencyResponse.MinimumFrequency)                                                   | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#ChargeReactionFrequencyResponse.Minimum)                                                                     | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#ChargeReactionFrequencyResponse.PhaseAngle)                                                               | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.RealAtMaximumAmplitude)                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#ChargeReactionFrequencyResponse.RequestedFrequency)                                               | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#ChargeReactionFrequencyResponse.AccelerationType)                                                   | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#ChargeReactionFrequencyResponse.ChartViewingStyle)                                                 | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#ChargeReactionFrequencyResponse.SpatialResolution)                                                 | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#ChargeReactionFrequencyResponse.NormalOrientation)                                                 | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#ChargeReactionFrequencyResponse.CurvesAppearanceDisplay)                                     | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#ChargeReactionFrequencyResponse.ResultChartType)                                                     | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#ChargeReactionFrequencyResponse.DpfEvaluation)                                                         | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#ChargeReactionFrequencyResponse.ShearOrientation)                                                   | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#ChargeReactionFrequencyResponse.TimeHistoryDisplay)                                               | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#ChargeReactionFrequencyResponse.VelocityType)                                                           | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#ChargeReactionFrequencyResponse.Suppressed)                                                               | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#ChargeReactionFrequencyResponse.EnhancedTracking)                                                   | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#ChargeReactionFrequencyResponse.UseParentFrequencyRange)                                     | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#ChargeReactionFrequencyResponse.Location)                                                                   | Gets or sets the Location.                                                                       |
| [`Children`](#ChargeReactionFrequencyResponse.Children)                                                                   | Gets the list of children.                                                                       |
| [`Comments`](#ChargeReactionFrequencyResponse.Comments)                                                                   | Gets the list of associated comments.                                                            |
| [`Images`](#ChargeReactionFrequencyResponse.Images)                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#ChargeReactionFrequencyResponse.Properties)                                                               | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#ChargeReactionFrequencyResponse.VisibleProperties)                                                 | Gets the list of properties that are visible for this object.                                    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ChargeReactionFrequencyResponse
```

<a id="property-detail"></a>

## Property detail

<a id="ChargeReactionFrequencyResponse.InternalObject"></a>

### *property* ChargeReactionFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.LocationMethod"></a>

### *property* ChargeReactionFrequencyResponse.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](./../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DataModelObjectCategory"></a>

### *property* ChargeReactionFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CoordinateSystem"></a>

### *property* ChargeReactionFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemotePointSelection"></a>

### *property* ChargeReactionFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](./../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.IsSolved"></a>

### *property* ChargeReactionFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ChartDimensions"></a>

### *property* ChargeReactionFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.BoundaryCondition"></a>

### *property* ChargeReactionFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CutFrequency"></a>

### *property* ChargeReactionFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.SectorNumber"></a>

### *property* ChargeReactionFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GeometrySelectionString"></a>

### *property* ChargeReactionFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.LoadStepNumber"></a>

### *property* ChargeReactionFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ReportedFrequency"></a>

### *property* ChargeReactionFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Duration"></a>

### *property* ChargeReactionFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterMaximum"></a>

### *property* ChargeReactionFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterMinimum"></a>

### *property* ChargeReactionFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MaximumFrequency"></a>

### *property* ChargeReactionFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Maximum"></a>

### *property* ChargeReactionFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MinimumFrequency"></a>

### *property* ChargeReactionFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Minimum"></a>

### *property* ChargeReactionFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PhaseAngle"></a>

### *property* ChargeReactionFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RequestedFrequency"></a>

### *property* ChargeReactionFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AccelerationType"></a>

### *property* ChargeReactionFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ChartViewingStyle"></a>

### *property* ChargeReactionFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DeformationType"></a>

### *property* ChargeReactionFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterType"></a>

### *property* ChargeReactionFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.SpatialResolution"></a>

### *property* ChargeReactionFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.NormalOrientation"></a>

### *property* ChargeReactionFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* ChargeReactionFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ResultChartType"></a>

### *property* ChargeReactionFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DpfEvaluation"></a>

### *property* ChargeReactionFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.XAxisValues"></a>

### *property* ChargeReactionFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ShearOrientation"></a>

### *property* ChargeReactionFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.StressStrainType"></a>

### *property* ChargeReactionFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.TimeHistoryDisplay"></a>

### *property* ChargeReactionFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.VelocityType"></a>

### *property* ChargeReactionFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Suppressed"></a>

### *property* ChargeReactionFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.EnhancedTracking"></a>

### *property* ChargeReactionFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.UseParentFrequencyRange"></a>

### *property* ChargeReactionFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Spring"></a>

### *property* ChargeReactionFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Location"></a>

### *property* ChargeReactionFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Children"></a>

### *property* ChargeReactionFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Comments"></a>

### *property* ChargeReactionFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Images"></a>

### *property* ChargeReactionFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ChargeReactionFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Properties"></a>

### *property* ChargeReactionFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.VisibleProperties"></a>

### *property* ChargeReactionFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChargeReactionFrequencyResponse.ExportAnimation"></a>

### ChargeReactionFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ClearGeneratedData"></a>

### ChargeReactionFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.EvaluateAllResults"></a>

### ChargeReactionFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RenameBasedOnDefinition"></a>

### ChargeReactionFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Delete"></a>

### ChargeReactionFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetChildren"></a>

### ChargeReactionFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ChargeReactionFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AddComment"></a>

### ChargeReactionFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AddImage"></a>

### ChargeReactionFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Activate"></a>

### ChargeReactionFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CopyTo"></a>

### ChargeReactionFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Duplicate"></a>

### ChargeReactionFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupAllSimilarChildren"></a>

### ChargeReactionFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupSimilarObjects"></a>

### ChargeReactionFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyByName"></a>

### ChargeReactionFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyByAPIName"></a>

### ChargeReactionFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CreateParameter"></a>

### ChargeReactionFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetParameter"></a>

### ChargeReactionFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemoveParameter"></a>

### ChargeReactionFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
