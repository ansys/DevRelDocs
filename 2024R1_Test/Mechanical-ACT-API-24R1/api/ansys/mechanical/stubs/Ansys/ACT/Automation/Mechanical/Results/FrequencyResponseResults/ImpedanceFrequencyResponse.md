# ImpedanceFrequencyResponse

<a id="ImpedanceFrequencyResponse"></a>

### *class* ImpedanceFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImpedanceFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ImpedanceFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ImpedanceFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ImpedanceFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ImpedanceFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ImpedanceFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImpedanceFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ImpedanceFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImpedanceFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImpedanceFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImpedanceFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImpedanceFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImpedanceFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImpedanceFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImpedanceFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImpedanceFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImpedanceFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImpedanceFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`LocationMethod`](#ImpedanceFrequencyResponse.LocationMethod)                                                            | Gets or sets the LocationMethod.                                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#ImpedanceFrequencyResponse.RemotePointSelection)                                                | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#ImpedanceFrequencyResponse.IsSolved)                                                                        | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#ImpedanceFrequencyResponse.BoundaryCondition)                                                      | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#ImpedanceFrequencyResponse.CutFrequency)                                                                | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#ImpedanceFrequencyResponse.SectorNumber)                                                                | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#ImpedanceFrequencyResponse.GeometrySelectionString)                                          | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#ImpedanceFrequencyResponse.LoadStepNumber)                                                            | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#ImpedanceFrequencyResponse.ReportedFrequency)                                                      | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#ImpedanceFrequencyResponse.Duration)                                                                        | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#ImpedanceFrequencyResponse.FilterMaximum)                                                              | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#ImpedanceFrequencyResponse.FilterMinimum)                                                              | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#ImpedanceFrequencyResponse.FrequencyAtMaximumAmplitude)                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#ImpedanceFrequencyResponse.ImaginaryAtMaximumAmplitude)                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#ImpedanceFrequencyResponse.MaximumAmplitude)                                                        | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#ImpedanceFrequencyResponse.MaximumFrequency)                                                        | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#ImpedanceFrequencyResponse.Maximum)                                                                          | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#ImpedanceFrequencyResponse.MinimumFrequency)                                                        | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#ImpedanceFrequencyResponse.Minimum)                                                                          | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#ImpedanceFrequencyResponse.PhaseAngle)                                                                    | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#ImpedanceFrequencyResponse.RealAtMaximumAmplitude)                                            | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#ImpedanceFrequencyResponse.RequestedFrequency)                                                    | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#ImpedanceFrequencyResponse.AccelerationType)                                                        | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#ImpedanceFrequencyResponse.ChartViewingStyle)                                                      | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#ImpedanceFrequencyResponse.SpatialResolution)                                                      | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#ImpedanceFrequencyResponse.NormalOrientation)                                                      | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#ImpedanceFrequencyResponse.CurvesAppearanceDisplay)                                          | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#ImpedanceFrequencyResponse.ResultChartType)                                                          | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#ImpedanceFrequencyResponse.DpfEvaluation)                                                              | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#ImpedanceFrequencyResponse.ShearOrientation)                                                        | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#ImpedanceFrequencyResponse.TimeHistoryDisplay)                                                    | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#ImpedanceFrequencyResponse.VelocityType)                                                                | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#ImpedanceFrequencyResponse.Suppressed)                                                                    | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#ImpedanceFrequencyResponse.EnhancedTracking)                                                        | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#ImpedanceFrequencyResponse.UseParentFrequencyRange)                                          | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#ImpedanceFrequencyResponse.Location)                                                                        | Gets or sets the Location.                                                                       |
| [`Children`](#ImpedanceFrequencyResponse.Children)                                                                        | Gets the list of children.                                                                       |
| [`Comments`](#ImpedanceFrequencyResponse.Comments)                                                                        | Gets the list of associated comments.                                                            |
| [`Images`](#ImpedanceFrequencyResponse.Images)                                                                            | Gets the list of associated images.                                                              |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#ImpedanceFrequencyResponse.Properties)                                                                    | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#ImpedanceFrequencyResponse.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.                                    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ImpedanceFrequencyResponse
```

<a id="property-detail"></a>

## Property detail

<a id="ImpedanceFrequencyResponse.InternalObject"></a>

### *property* ImpedanceFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.LocationMethod"></a>

### *property* ImpedanceFrequencyResponse.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.DataModelObjectCategory"></a>

### *property* ImpedanceFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.CoordinateSystem"></a>

### *property* ImpedanceFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.RemotePointSelection"></a>

### *property* ImpedanceFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.IsSolved"></a>

### *property* ImpedanceFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ChartDimensions"></a>

### *property* ImpedanceFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.BoundaryCondition"></a>

### *property* ImpedanceFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.CutFrequency"></a>

### *property* ImpedanceFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.SectorNumber"></a>

### *property* ImpedanceFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.GeometrySelectionString"></a>

### *property* ImpedanceFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.LoadStepNumber"></a>

### *property* ImpedanceFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ReportedFrequency"></a>

### *property* ImpedanceFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Duration"></a>

### *property* ImpedanceFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.FilterMaximum"></a>

### *property* ImpedanceFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.FilterMinimum"></a>

### *property* ImpedanceFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* ImpedanceFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* ImpedanceFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.MaximumAmplitude"></a>

### *property* ImpedanceFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.MaximumFrequency"></a>

### *property* ImpedanceFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Maximum"></a>

### *property* ImpedanceFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.MinimumFrequency"></a>

### *property* ImpedanceFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Minimum"></a>

### *property* ImpedanceFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.PhaseAngle"></a>

### *property* ImpedanceFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* ImpedanceFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.RequestedFrequency"></a>

### *property* ImpedanceFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.AccelerationType"></a>

### *property* ImpedanceFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ChartViewingStyle"></a>

### *property* ImpedanceFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.DeformationType"></a>

### *property* ImpedanceFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.FilterType"></a>

### *property* ImpedanceFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.SpatialResolution"></a>

### *property* ImpedanceFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.NormalOrientation"></a>

### *property* ImpedanceFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* ImpedanceFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ResultChartType"></a>

### *property* ImpedanceFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.DpfEvaluation"></a>

### *property* ImpedanceFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.XAxisValues"></a>

### *property* ImpedanceFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ShearOrientation"></a>

### *property* ImpedanceFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.StressStrainType"></a>

### *property* ImpedanceFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.TimeHistoryDisplay"></a>

### *property* ImpedanceFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.VelocityType"></a>

### *property* ImpedanceFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Suppressed"></a>

### *property* ImpedanceFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.EnhancedTracking"></a>

### *property* ImpedanceFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.UseParentFrequencyRange"></a>

### *property* ImpedanceFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Spring"></a>

### *property* ImpedanceFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Location"></a>

### *property* ImpedanceFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Children"></a>

### *property* ImpedanceFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Comments"></a>

### *property* ImpedanceFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Images"></a>

### *property* ImpedanceFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImpedanceFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Properties"></a>

### *property* ImpedanceFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.VisibleProperties"></a>

### *property* ImpedanceFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImpedanceFrequencyResponse.ExportAnimation"></a>

### ImpedanceFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.ClearGeneratedData"></a>

### ImpedanceFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.EvaluateAllResults"></a>

### ImpedanceFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.RenameBasedOnDefinition"></a>

### ImpedanceFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Delete"></a>

### ImpedanceFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.GetChildren"></a>

### ImpedanceFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImpedanceFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.AddComment"></a>

### ImpedanceFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.AddImage"></a>

### ImpedanceFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Activate"></a>

### ImpedanceFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.CopyTo"></a>

### ImpedanceFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.Duplicate"></a>

### ImpedanceFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.GroupAllSimilarChildren"></a>

### ImpedanceFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.GroupSimilarObjects"></a>

### ImpedanceFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.PropertyByName"></a>

### ImpedanceFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.PropertyByAPIName"></a>

### ImpedanceFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.CreateParameter"></a>

### ImpedanceFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.GetParameter"></a>

### ImpedanceFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceFrequencyResponse.RemoveParameter"></a>

### ImpedanceFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
