# ContactNumberWithTooMuchSlidingTracker

### *class* ContactNumberWithTooMuchSlidingTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactNumberWithTooMuchSlidingTracker.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ContactNumberWithTooMuchSlidingTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ContactNumberWithTooMuchSlidingTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactNumberWithTooMuchSlidingTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactNumberWithTooMuchSlidingTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactNumberWithTooMuchSlidingTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactNumberWithTooMuchSlidingTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactNumberWithTooMuchSlidingTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactNumberWithTooMuchSlidingTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactNumberWithTooMuchSlidingTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactNumberWithTooMuchSlidingTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactNumberWithTooMuchSlidingTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactNumberWithTooMuchSlidingTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactNumberWithTooMuchSlidingTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactNumberWithTooMuchSlidingTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactNumberWithTooMuchSlidingTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactNumberWithTooMuchSlidingTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactNumberWithTooMuchSlidingTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactNumberWithTooMuchSlidingTracker.IsSolved)                                                            | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactNumberWithTooMuchSlidingTracker.BoundaryCondition)                                          | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactNumberWithTooMuchSlidingTracker.CutFrequency)                                                    | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactNumberWithTooMuchSlidingTracker.SectorNumber)                                                    | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactNumberWithTooMuchSlidingTracker.GeometrySelectionString)                              | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactNumberWithTooMuchSlidingTracker.LoadStepNumber)                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactNumberWithTooMuchSlidingTracker.ReportedFrequency)                                          | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactNumberWithTooMuchSlidingTracker.Duration)                                                            | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactNumberWithTooMuchSlidingTracker.FilterMaximum)                                                  | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactNumberWithTooMuchSlidingTracker.FilterMinimum)                                                  | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactNumberWithTooMuchSlidingTracker.FrequencyAtMaximumAmplitude)                      | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactNumberWithTooMuchSlidingTracker.ImaginaryAtMaximumAmplitude)                      | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactNumberWithTooMuchSlidingTracker.MaximumAmplitude)                                            | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactNumberWithTooMuchSlidingTracker.MaximumFrequency)                                            | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactNumberWithTooMuchSlidingTracker.Maximum)                                                              | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactNumberWithTooMuchSlidingTracker.MinimumFrequency)                                            | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactNumberWithTooMuchSlidingTracker.Minimum)                                                              | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactNumberWithTooMuchSlidingTracker.PhaseAngle)                                                        | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactNumberWithTooMuchSlidingTracker.RealAtMaximumAmplitude)                                | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactNumberWithTooMuchSlidingTracker.RequestedFrequency)                                        | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactNumberWithTooMuchSlidingTracker.AccelerationType)                                            | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactNumberWithTooMuchSlidingTracker.ChartViewingStyle)                                          | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactNumberWithTooMuchSlidingTracker.SpatialResolution)                                          | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactNumberWithTooMuchSlidingTracker.NormalOrientation)                                          | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactNumberWithTooMuchSlidingTracker.CurvesAppearanceDisplay)                              | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactNumberWithTooMuchSlidingTracker.ResultChartType)                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactNumberWithTooMuchSlidingTracker.DpfEvaluation)                                                  | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactNumberWithTooMuchSlidingTracker.ShearOrientation)                                            | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactNumberWithTooMuchSlidingTracker.TimeHistoryDisplay)                                        | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactNumberWithTooMuchSlidingTracker.VelocityType)                                                    | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactNumberWithTooMuchSlidingTracker.Suppressed)                                                        | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactNumberWithTooMuchSlidingTracker.EnhancedTracking)                                            | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactNumberWithTooMuchSlidingTracker.UseParentFrequencyRange)                              | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactNumberWithTooMuchSlidingTracker.Location)                                                            | Gets or sets the Location.                                    |
| [`Children`](#ContactNumberWithTooMuchSlidingTracker.Children)                                                            | Gets the list of children.                                    |
| [`Comments`](#ContactNumberWithTooMuchSlidingTracker.Comments)                                                            | Gets the list of associated comments.                         |
| [`Images`](#ContactNumberWithTooMuchSlidingTracker.Images)                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactNumberWithTooMuchSlidingTracker.Properties)                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactNumberWithTooMuchSlidingTracker.VisibleProperties)                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactNumberWithTooMuchSlidingTracker
```

## Property detail

### *property* ContactNumberWithTooMuchSlidingTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactNumberWithTooMuchSlidingTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactNumberWithTooMuchSlidingTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactNumberWithTooMuchSlidingTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
