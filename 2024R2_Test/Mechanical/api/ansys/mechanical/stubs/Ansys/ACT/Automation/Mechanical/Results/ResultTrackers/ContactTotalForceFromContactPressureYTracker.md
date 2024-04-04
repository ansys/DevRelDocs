# ContactTotalForceFromContactPressureYTracker

### *class* ContactTotalForceFromContactPressureYTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTotalForceFromContactPressureYTracker.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ContactTotalForceFromContactPressureYTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ContactTotalForceFromContactPressureYTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTotalForceFromContactPressureYTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromContactPressureYTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTotalForceFromContactPressureYTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTotalForceFromContactPressureYTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromContactPressureYTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTotalForceFromContactPressureYTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTotalForceFromContactPressureYTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTotalForceFromContactPressureYTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromContactPressureYTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromContactPressureYTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTotalForceFromContactPressureYTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTotalForceFromContactPressureYTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTotalForceFromContactPressureYTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTotalForceFromContactPressureYTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTotalForceFromContactPressureYTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactTotalForceFromContactPressureYTracker.IsSolved)                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTotalForceFromContactPressureYTracker.BoundaryCondition)                                    | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTotalForceFromContactPressureYTracker.CutFrequency)                                              | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTotalForceFromContactPressureYTracker.SectorNumber)                                              | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTotalForceFromContactPressureYTracker.GeometrySelectionString)                        | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTotalForceFromContactPressureYTracker.LoadStepNumber)                                          | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTotalForceFromContactPressureYTracker.ReportedFrequency)                                    | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTotalForceFromContactPressureYTracker.Duration)                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTotalForceFromContactPressureYTracker.FilterMaximum)                                            | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTotalForceFromContactPressureYTracker.FilterMinimum)                                            | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.FrequencyAtMaximumAmplitude)                | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.ImaginaryAtMaximumAmplitude)                | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.MaximumAmplitude)                                      | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTotalForceFromContactPressureYTracker.MaximumFrequency)                                      | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTotalForceFromContactPressureYTracker.Maximum)                                                        | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTotalForceFromContactPressureYTracker.MinimumFrequency)                                      | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTotalForceFromContactPressureYTracker.Minimum)                                                        | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTotalForceFromContactPressureYTracker.PhaseAngle)                                                  | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.RealAtMaximumAmplitude)                          | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTotalForceFromContactPressureYTracker.RequestedFrequency)                                  | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTotalForceFromContactPressureYTracker.AccelerationType)                                      | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTotalForceFromContactPressureYTracker.ChartViewingStyle)                                    | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTotalForceFromContactPressureYTracker.SpatialResolution)                                    | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTotalForceFromContactPressureYTracker.NormalOrientation)                                    | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromContactPressureYTracker.CurvesAppearanceDisplay)                        | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTotalForceFromContactPressureYTracker.ResultChartType)                                        | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTotalForceFromContactPressureYTracker.DpfEvaluation)                                            | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTotalForceFromContactPressureYTracker.ShearOrientation)                                      | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTotalForceFromContactPressureYTracker.TimeHistoryDisplay)                                  | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTotalForceFromContactPressureYTracker.VelocityType)                                              | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTotalForceFromContactPressureYTracker.Suppressed)                                                  | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTotalForceFromContactPressureYTracker.EnhancedTracking)                                      | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTotalForceFromContactPressureYTracker.UseParentFrequencyRange)                        | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactTotalForceFromContactPressureYTracker.Location)                                                      | Gets or sets the Location.                                    |
| [`Children`](#ContactTotalForceFromContactPressureYTracker.Children)                                                      | Gets the list of children.                                    |
| [`Comments`](#ContactTotalForceFromContactPressureYTracker.Comments)                                                      | Gets the list of associated comments.                         |
| [`Images`](#ContactTotalForceFromContactPressureYTracker.Images)                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTotalForceFromContactPressureYTracker.Properties)                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTotalForceFromContactPressureYTracker.VisibleProperties)                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactTotalForceFromContactPressureYTracker
```

## Property detail

### *property* ContactTotalForceFromContactPressureYTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureYTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactTotalForceFromContactPressureYTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureYTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
