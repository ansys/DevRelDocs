# ForceReactionFrequencyResponse

### *class* ForceReactionFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ForceReactionFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ForceReactionFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ForceReactionFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ForceReactionFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ForceReactionFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ForceReactionFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ForceReactionFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ForceReactionFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ForceReactionFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ForceReactionFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ForceReactionFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ForceReactionFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ForceReactionFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ForceReactionFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ForceReactionFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ForceReactionFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ForceReactionFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ForceReactionFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`LocationMethod`](#ForceReactionFrequencyResponse.LocationMethod)                                                        | Gets or sets the LocationMethod.                                                                 |
| [`Beam`](../../Connections/Beam.md#Beam)                                                                                  | Gets or sets the Beam.                                                                           |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                                                                  |
| [`RemotePoint`](../../RemotePoint.md#RemotePoint)                                                                         | Gets or sets the RemotePoint.                                                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#ForceReactionFrequencyResponse.RemotePointSelection)                                            | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#ForceReactionFrequencyResponse.IsSolved)                                                                    | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#ForceReactionFrequencyResponse.BoundaryCondition)                                                  | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#ForceReactionFrequencyResponse.CutFrequency)                                                            | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#ForceReactionFrequencyResponse.SectorNumber)                                                            | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#ForceReactionFrequencyResponse.GeometrySelectionString)                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#ForceReactionFrequencyResponse.LoadStepNumber)                                                        | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#ForceReactionFrequencyResponse.ReportedFrequency)                                                  | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#ForceReactionFrequencyResponse.Duration)                                                                    | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#ForceReactionFrequencyResponse.FilterMaximum)                                                          | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#ForceReactionFrequencyResponse.FilterMinimum)                                                          | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#ForceReactionFrequencyResponse.FrequencyAtMaximumAmplitude)                              | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#ForceReactionFrequencyResponse.ImaginaryAtMaximumAmplitude)                              | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#ForceReactionFrequencyResponse.MaximumAmplitude)                                                    | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#ForceReactionFrequencyResponse.MaximumFrequency)                                                    | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#ForceReactionFrequencyResponse.Maximum)                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#ForceReactionFrequencyResponse.MinimumFrequency)                                                    | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#ForceReactionFrequencyResponse.Minimum)                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#ForceReactionFrequencyResponse.PhaseAngle)                                                                | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#ForceReactionFrequencyResponse.RealAtMaximumAmplitude)                                        | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#ForceReactionFrequencyResponse.RequestedFrequency)                                                | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#ForceReactionFrequencyResponse.AccelerationType)                                                    | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#ForceReactionFrequencyResponse.ChartViewingStyle)                                                  | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#ForceReactionFrequencyResponse.SpatialResolution)                                                  | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#ForceReactionFrequencyResponse.NormalOrientation)                                                  | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#ForceReactionFrequencyResponse.CurvesAppearanceDisplay)                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#ForceReactionFrequencyResponse.ResultChartType)                                                      | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#ForceReactionFrequencyResponse.DpfEvaluation)                                                          | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#ForceReactionFrequencyResponse.ShearOrientation)                                                    | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#ForceReactionFrequencyResponse.TimeHistoryDisplay)                                                | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#ForceReactionFrequencyResponse.VelocityType)                                                            | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#ForceReactionFrequencyResponse.Suppressed)                                                                | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#ForceReactionFrequencyResponse.EnhancedTracking)                                                    | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#ForceReactionFrequencyResponse.UseParentFrequencyRange)                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#ForceReactionFrequencyResponse.Location)                                                                    | Gets or sets the Location.                                                                       |
| [`Children`](#ForceReactionFrequencyResponse.Children)                                                                    | Gets the list of children.                                                                       |
| [`Comments`](#ForceReactionFrequencyResponse.Comments)                                                                    | Gets the list of associated comments.                                                            |
| [`Images`](#ForceReactionFrequencyResponse.Images)                                                                        | Gets the list of associated images.                                                              |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#ForceReactionFrequencyResponse.Properties)                                                                | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#ForceReactionFrequencyResponse.VisibleProperties)                                                  | Gets the list of properties that are visible for this object.                                    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ForceReactionFrequencyResponse
```

## Property detail

### *property* ForceReactionFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Beam *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Beam.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoint.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ForceReactionFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ForceReactionFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ForceReactionFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
