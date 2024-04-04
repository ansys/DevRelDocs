# KrylovResidualNorm

### *class* KrylovResidualNorm

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a KrylovResidualNorm.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#KrylovResidualNorm.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#KrylovResidualNorm.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#KrylovResidualNorm.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#KrylovResidualNorm.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#KrylovResidualNorm.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#KrylovResidualNorm.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#KrylovResidualNorm.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#KrylovResidualNorm.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#KrylovResidualNorm.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#KrylovResidualNorm.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#KrylovResidualNorm.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#KrylovResidualNorm.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#KrylovResidualNorm.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#KrylovResidualNorm.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#KrylovResidualNorm.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#KrylovResidualNorm.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#KrylovResidualNorm.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                        | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                                                 |
| [`RemotePointSelection`](#KrylovResidualNorm.RemotePointSelection)                                   | Gets or sets the RemotePointSelection.                                                             |
| [`IsSolved`](#KrylovResidualNorm.IsSolved)                                                           | Gets the IsSolved.                                                                                 |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)    | Gets or sets the Chart Dimensions                                                                  |
| [`BoundaryCondition`](#KrylovResidualNorm.BoundaryCondition)                                         | Gets or sets the BoundaryCondition.                                                                |
| [`CutFrequency`](#KrylovResidualNorm.CutFrequency)                                                   | Gets or sets the CutFrequency.                                                                     |
| [`SectorNumber`](#KrylovResidualNorm.SectorNumber)                                                   | Gets or sets the SectorNumber.                                                                     |
| [`GeometrySelectionString`](#KrylovResidualNorm.GeometrySelectionString)                             | Gets or sets the GeometrySelectionString.                                                          |
| [`LoadStepNumber`](#KrylovResidualNorm.LoadStepNumber)                                               | Gets or sets the LoadStepNumber.                                                                   |
| [`ReportedFrequency`](#KrylovResidualNorm.ReportedFrequency)                                         | Gets the ReportedFrequency.                                                                        |
| [`Duration`](#KrylovResidualNorm.Duration)                                                           | Gets or sets the Duration.                                                                         |
| [`FilterMaximum`](#KrylovResidualNorm.FilterMaximum)                                                 | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#KrylovResidualNorm.FilterMinimum)                                                 | Gets the FilterMinimum.                                                                            |
| [`FrequencyAtMaximumAmplitude`](#KrylovResidualNorm.FrequencyAtMaximumAmplitude)                     | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#KrylovResidualNorm.ImaginaryAtMaximumAmplitude)                     | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`MaximumAmplitude`](#KrylovResidualNorm.MaximumAmplitude)                                           | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#KrylovResidualNorm.MaximumFrequency)                                           | Gets or sets the MaximumFrequency.                                                                 |
| [`Maximum`](#KrylovResidualNorm.Maximum)                                                             | Gets the Maximum.                                                                                  |
| [`MinimumFrequency`](#KrylovResidualNorm.MinimumFrequency)                                           | Gets or sets the MinimumFrequency.                                                                 |
| [`Minimum`](#KrylovResidualNorm.Minimum)                                                             | Gets the Minimum.                                                                                  |
| [`PhaseAngle`](#KrylovResidualNorm.PhaseAngle)                                                       | Gets the PhaseAngle.                                                                               |
| [`RealAtMaximumAmplitude`](#KrylovResidualNorm.RealAtMaximumAmplitude)                               | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RequestedFrequency`](#KrylovResidualNorm.RequestedFrequency)                                       | Gets or sets the RequestedFrequency.                                                               |
| [`AccelerationType`](#KrylovResidualNorm.AccelerationType)                                           | Gets or sets the AccelerationType.                                                                 |
| [`ChartViewingStyle`](#KrylovResidualNorm.ChartViewingStyle)                                         | Gets or sets the ChartViewingStyle.                                                                |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)    | Gets or sets the DeformationType.                                                                  |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                   | Gets or sets the FilterType.                                                                       |
| [`SpatialResolution`](#KrylovResidualNorm.SpatialResolution)                                         | Gets or sets the SpatialResolution.                                                                |
| [`NormalOrientation`](#KrylovResidualNorm.NormalOrientation)                                         | Gets or sets the NormalOrientation.                                                                |
| [`CurvesAppearanceDisplay`](#KrylovResidualNorm.CurvesAppearanceDisplay)                             | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`ResultChartType`](#KrylovResidualNorm.ResultChartType)                                             | Gets the ResultChartType.                                                                          |
| [`DpfEvaluation`](#KrylovResidualNorm.DpfEvaluation)                                                 | Gets or sets the DpfEvaluation.                                                                    |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                | Gets or sets the XAxisValues.                                                                      |
| [`ShearOrientation`](#KrylovResidualNorm.ShearOrientation)                                           | Gets or sets the ShearOrientation.                                                                 |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | Gets or sets the StressStrainType.                                                                 |
| [`TimeHistoryDisplay`](#KrylovResidualNorm.TimeHistoryDisplay)                                       | Gets or sets the TimeHistoryDisplay.                                                               |
| [`VelocityType`](#KrylovResidualNorm.VelocityType)                                                   | Gets or sets the VelocityType.                                                                     |
| [`Suppressed`](#KrylovResidualNorm.Suppressed)                                                       | Gets or sets the Suppressed.                                                                       |
| [`EnhancedTracking`](#KrylovResidualNorm.EnhancedTracking)                                           | Gets the EnhancedTracking.                                                                         |
| [`UseParentFrequencyRange`](#KrylovResidualNorm.UseParentFrequencyRange)                             | Gets or sets the UseParentFrequencyRange.                                                          |
| [`Spring`](../../Connections/Spring.md#Spring)                                                       | Gets or sets the Spring.                                                                           |
| [`Location`](#KrylovResidualNorm.Location)                                                           | Gets or sets the Location.                                                                         |
| [`Children`](#KrylovResidualNorm.Children)                                                           | Gets the list of children.                                                                         |
| [`Comments`](#KrylovResidualNorm.Comments)                                                           | Gets the list of associated comments.                                                              |
| [`Images`](#KrylovResidualNorm.Images)                                                               | Gets the list of associated images.                                                                |
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                                                 |
| [`Properties`](#KrylovResidualNorm.Properties)                                                       | Gets the list of properties for this object.                                                       |
| [`VisibleProperties`](#KrylovResidualNorm.VisibleProperties)                                         | Gets the list of properties that are visible for this object.                                      |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import KrylovResidualNorm
```

## Property detail

### *property* KrylovResidualNorm.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* KrylovResidualNorm.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### KrylovResidualNorm.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### KrylovResidualNorm.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
