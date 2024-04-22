<a id="stressphaseresponse"></a>

# StressPhaseResponse

<a id="StressPhaseResponse"></a>

### *class* StressPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressPhaseResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#StressPhaseResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#StressPhaseResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#StressPhaseResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#StressPhaseResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#StressPhaseResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StressPhaseResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#StressPhaseResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StressPhaseResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StressPhaseResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StressPhaseResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StressPhaseResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressPhaseResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StressPhaseResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StressPhaseResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#StressPhaseResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#StressPhaseResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StressPhaseResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#StressPhaseResponse.IsSolved)                                                                               | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#StressPhaseResponse.BoundaryCondition)                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#StressPhaseResponse.CutFrequency)                                                                       | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#StressPhaseResponse.SectorNumber)                                                                       | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#StressPhaseResponse.GeometrySelectionString)                                                 | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#StressPhaseResponse.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#StressPhaseResponse.ReportedFrequency)                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#StressPhaseResponse.Duration)                                                                               | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#StressPhaseResponse.FilterMaximum)                                                                     | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#StressPhaseResponse.FilterMinimum)                                                                     | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#StressPhaseResponse.FrequencyAtMaximumAmplitude)                                         | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#StressPhaseResponse.ImaginaryAtMaximumAmplitude)                                         | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#StressPhaseResponse.MaximumAmplitude)                                                               | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#StressPhaseResponse.MaximumFrequency)                                                               | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#StressPhaseResponse.Maximum)                                                                                 | Gets the Maximum.                                             |
| [`MinimumFrequency`](#StressPhaseResponse.MinimumFrequency)                                                               | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#StressPhaseResponse.Minimum)                                                                                 | Gets the Minimum.                                             |
| [`PhaseAngle`](#StressPhaseResponse.PhaseAngle)                                                                           | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#StressPhaseResponse.RealAtMaximumAmplitude)                                                   | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#StressPhaseResponse.RequestedFrequency)                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#StressPhaseResponse.AccelerationType)                                                               | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#StressPhaseResponse.ChartViewingStyle)                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#StressPhaseResponse.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#StressPhaseResponse.NormalOrientation)                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#StressPhaseResponse.CurvesAppearanceDisplay)                                                 | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#StressPhaseResponse.ResultChartType)                                                                 | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#StressPhaseResponse.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#StressPhaseResponse.ShearOrientation)                                                               | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#StressPhaseResponse.TimeHistoryDisplay)                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#StressPhaseResponse.VelocityType)                                                                       | Gets or sets the VelocityType.                                |
| [`Suppressed`](#StressPhaseResponse.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#StressPhaseResponse.EnhancedTracking)                                                               | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#StressPhaseResponse.UseParentFrequencyRange)                                                 | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#StressPhaseResponse.Location)                                                                               | Gets or sets the Location.                                    |
| [`Children`](#StressPhaseResponse.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#StressPhaseResponse.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Images`](#StressPhaseResponse.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#StressPhaseResponse.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#StressPhaseResponse.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import StressPhaseResponse
```

<a id="property-detail"></a>

## Property detail

<a id="StressPhaseResponse.InternalObject"></a>

### *property* StressPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.DataModelObjectCategory"></a>

### *property* StressPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.IsSolved"></a>

### *property* StressPhaseResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ChartDimensions"></a>

### *property* StressPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.BoundaryCondition"></a>

### *property* StressPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.CutFrequency"></a>

### *property* StressPhaseResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.SectorNumber"></a>

### *property* StressPhaseResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.GeometrySelectionString"></a>

### *property* StressPhaseResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.LoadStepNumber"></a>

### *property* StressPhaseResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ReportedFrequency"></a>

### *property* StressPhaseResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Duration"></a>

### *property* StressPhaseResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.FilterMaximum"></a>

### *property* StressPhaseResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.FilterMinimum"></a>

### *property* StressPhaseResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.FrequencyAtMaximumAmplitude"></a>

### *property* StressPhaseResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* StressPhaseResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.MaximumAmplitude"></a>

### *property* StressPhaseResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.MaximumFrequency"></a>

### *property* StressPhaseResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Maximum"></a>

### *property* StressPhaseResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.MinimumFrequency"></a>

### *property* StressPhaseResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Minimum"></a>

### *property* StressPhaseResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.PhaseAngle"></a>

### *property* StressPhaseResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.RealAtMaximumAmplitude"></a>

### *property* StressPhaseResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.RequestedFrequency"></a>

### *property* StressPhaseResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.AccelerationType"></a>

### *property* StressPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ChartViewingStyle"></a>

### *property* StressPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.DeformationType"></a>

### *property* StressPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.FilterType"></a>

### *property* StressPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.SpatialResolution"></a>

### *property* StressPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.NormalOrientation"></a>

### *property* StressPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.CurvesAppearanceDisplay"></a>

### *property* StressPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ResultChartType"></a>

### *property* StressPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.DpfEvaluation"></a>

### *property* StressPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.XAxisValues"></a>

### *property* StressPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ShearOrientation"></a>

### *property* StressPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.StressStrainType"></a>

### *property* StressPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.TimeHistoryDisplay"></a>

### *property* StressPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.VelocityType"></a>

### *property* StressPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Suppressed"></a>

### *property* StressPhaseResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.EnhancedTracking"></a>

### *property* StressPhaseResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.UseParentFrequencyRange"></a>

### *property* StressPhaseResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.CoordinateSystem"></a>

### *property* StressPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Spring"></a>

### *property* StressPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Location"></a>

### *property* StressPhaseResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Children"></a>

### *property* StressPhaseResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Comments"></a>

### *property* StressPhaseResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Images"></a>

### *property* StressPhaseResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StressPhaseResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Properties"></a>

### *property* StressPhaseResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.VisibleProperties"></a>

### *property* StressPhaseResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressPhaseResponse.ExportAnimation"></a>

### StressPhaseResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.ClearGeneratedData"></a>

### StressPhaseResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.EvaluateAllResults"></a>

### StressPhaseResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.RenameBasedOnDefinition"></a>

### StressPhaseResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Delete"></a>

### StressPhaseResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.GetChildren"></a>

### StressPhaseResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StressPhaseResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.AddComment"></a>

### StressPhaseResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.AddImage"></a>

### StressPhaseResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Activate"></a>

### StressPhaseResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.CopyTo"></a>

### StressPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.Duplicate"></a>

### StressPhaseResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.GroupAllSimilarChildren"></a>

### StressPhaseResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.GroupSimilarObjects"></a>

### StressPhaseResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.PropertyByName"></a>

### StressPhaseResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.PropertyByAPIName"></a>

### StressPhaseResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.CreateParameter"></a>

### StressPhaseResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.GetParameter"></a>

### StressPhaseResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressPhaseResponse.RemoveParameter"></a>

### StressPhaseResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
