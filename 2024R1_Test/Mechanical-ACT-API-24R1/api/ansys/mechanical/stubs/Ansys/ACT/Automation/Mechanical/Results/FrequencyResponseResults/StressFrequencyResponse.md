# StressFrequencyResponse

<a id="StressFrequencyResponse"></a>

### *class* StressFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#StressFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#StressFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#StressFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#StressFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#StressFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StressFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#StressFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StressFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StressFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StressFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StressFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StressFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StressFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#StressFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#StressFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StressFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#StressFrequencyResponse.RemotePointSelection)                                                   | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#StressFrequencyResponse.IsSolved)                                                                           | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#StressFrequencyResponse.BoundaryCondition)                                                         | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#StressFrequencyResponse.CutFrequency)                                                                   | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#StressFrequencyResponse.SectorNumber)                                                                   | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#StressFrequencyResponse.GeometrySelectionString)                                             | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#StressFrequencyResponse.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#StressFrequencyResponse.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#StressFrequencyResponse.Duration)                                                                           | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#StressFrequencyResponse.FilterMaximum)                                                                 | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#StressFrequencyResponse.FilterMinimum)                                                                 | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#StressFrequencyResponse.FrequencyAtMaximumAmplitude)                                     | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#StressFrequencyResponse.ImaginaryAtMaximumAmplitude)                                     | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#StressFrequencyResponse.MaximumAmplitude)                                                           | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#StressFrequencyResponse.MaximumFrequency)                                                           | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#StressFrequencyResponse.Maximum)                                                                             | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#StressFrequencyResponse.MinimumFrequency)                                                           | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#StressFrequencyResponse.Minimum)                                                                             | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#StressFrequencyResponse.PhaseAngle)                                                                       | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#StressFrequencyResponse.RealAtMaximumAmplitude)                                               | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#StressFrequencyResponse.RequestedFrequency)                                                       | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#StressFrequencyResponse.AccelerationType)                                                           | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#StressFrequencyResponse.ChartViewingStyle)                                                         | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#StressFrequencyResponse.SpatialResolution)                                                         | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#StressFrequencyResponse.NormalOrientation)                                                         | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#StressFrequencyResponse.CurvesAppearanceDisplay)                                             | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#StressFrequencyResponse.ResultChartType)                                                             | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#StressFrequencyResponse.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#StressFrequencyResponse.ShearOrientation)                                                           | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#StressFrequencyResponse.TimeHistoryDisplay)                                                       | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#StressFrequencyResponse.VelocityType)                                                                   | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#StressFrequencyResponse.Suppressed)                                                                       | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#StressFrequencyResponse.EnhancedTracking)                                                           | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#StressFrequencyResponse.UseParentFrequencyRange)                                             | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#StressFrequencyResponse.Location)                                                                           | Gets or sets the Location.                                                                       |
| [`Children`](#StressFrequencyResponse.Children)                                                                           | Gets the list of children.                                                                       |
| [`Comments`](#StressFrequencyResponse.Comments)                                                                           | Gets the list of associated comments.                                                            |
| [`Images`](#StressFrequencyResponse.Images)                                                                               | Gets the list of associated images.                                                              |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#StressFrequencyResponse.Properties)                                                                       | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#StressFrequencyResponse.VisibleProperties)                                                         | Gets the list of properties that are visible for this object.                                    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import StressFrequencyResponse
```

<a id="property-detail"></a>

## Property detail

<a id="StressFrequencyResponse.InternalObject"></a>

### *property* StressFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.DataModelObjectCategory"></a>

### *property* StressFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CoordinateSystem"></a>

### *property* StressFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RemotePointSelection"></a>

### *property* StressFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](./../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.IsSolved"></a>

### *property* StressFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ChartDimensions"></a>

### *property* StressFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.BoundaryCondition"></a>

### *property* StressFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CutFrequency"></a>

### *property* StressFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.SectorNumber"></a>

### *property* StressFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GeometrySelectionString"></a>

### *property* StressFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.LoadStepNumber"></a>

### *property* StressFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ReportedFrequency"></a>

### *property* StressFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Duration"></a>

### *property* StressFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FilterMaximum"></a>

### *property* StressFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FilterMinimum"></a>

### *property* StressFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* StressFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* StressFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.MaximumAmplitude"></a>

### *property* StressFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.MaximumFrequency"></a>

### *property* StressFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Maximum"></a>

### *property* StressFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.MinimumFrequency"></a>

### *property* StressFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Minimum"></a>

### *property* StressFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.PhaseAngle"></a>

### *property* StressFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* StressFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RequestedFrequency"></a>

### *property* StressFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.AccelerationType"></a>

### *property* StressFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ChartViewingStyle"></a>

### *property* StressFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.DeformationType"></a>

### *property* StressFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FilterType"></a>

### *property* StressFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.SpatialResolution"></a>

### *property* StressFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.NormalOrientation"></a>

### *property* StressFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* StressFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ResultChartType"></a>

### *property* StressFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.DpfEvaluation"></a>

### *property* StressFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.XAxisValues"></a>

### *property* StressFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ShearOrientation"></a>

### *property* StressFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.StressStrainType"></a>

### *property* StressFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.TimeHistoryDisplay"></a>

### *property* StressFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.VelocityType"></a>

### *property* StressFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Suppressed"></a>

### *property* StressFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.EnhancedTracking"></a>

### *property* StressFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.UseParentFrequencyRange"></a>

### *property* StressFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Spring"></a>

### *property* StressFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Location"></a>

### *property* StressFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Children"></a>

### *property* StressFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Comments"></a>

### *property* StressFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Images"></a>

### *property* StressFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StressFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Properties"></a>

### *property* StressFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.VisibleProperties"></a>

### *property* StressFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressFrequencyResponse.ExportAnimation"></a>

### StressFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ClearGeneratedData"></a>

### StressFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.EvaluateAllResults"></a>

### StressFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RenameBasedOnDefinition"></a>

### StressFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Delete"></a>

### StressFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GetChildren"></a>

### StressFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StressFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.AddComment"></a>

### StressFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.AddImage"></a>

### StressFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Activate"></a>

### StressFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CopyTo"></a>

### StressFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Duplicate"></a>

### StressFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GroupAllSimilarChildren"></a>

### StressFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GroupSimilarObjects"></a>

### StressFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.PropertyByName"></a>

### StressFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.PropertyByAPIName"></a>

### StressFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CreateParameter"></a>

### StressFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GetParameter"></a>

### StressFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RemoveParameter"></a>

### StressFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
