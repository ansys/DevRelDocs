# ContactTotalForceFromContactPressureZTracker

### *class* ContactTotalForceFromContactPressureZTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTotalForceFromContactPressureZTracker.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ContactTotalForceFromContactPressureZTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ContactTotalForceFromContactPressureZTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTotalForceFromContactPressureZTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromContactPressureZTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTotalForceFromContactPressureZTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTotalForceFromContactPressureZTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromContactPressureZTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTotalForceFromContactPressureZTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTotalForceFromContactPressureZTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTotalForceFromContactPressureZTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromContactPressureZTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromContactPressureZTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTotalForceFromContactPressureZTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTotalForceFromContactPressureZTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTotalForceFromContactPressureZTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTotalForceFromContactPressureZTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTotalForceFromContactPressureZTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactTotalForceFromContactPressureZTracker.IsSolved)                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTotalForceFromContactPressureZTracker.BoundaryCondition)                                    | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTotalForceFromContactPressureZTracker.CutFrequency)                                              | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTotalForceFromContactPressureZTracker.SectorNumber)                                              | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTotalForceFromContactPressureZTracker.GeometrySelectionString)                        | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTotalForceFromContactPressureZTracker.LoadStepNumber)                                          | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTotalForceFromContactPressureZTracker.ReportedFrequency)                                    | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTotalForceFromContactPressureZTracker.Duration)                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTotalForceFromContactPressureZTracker.FilterMaximum)                                            | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTotalForceFromContactPressureZTracker.FilterMinimum)                                            | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromContactPressureZTracker.FrequencyAtMaximumAmplitude)                | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromContactPressureZTracker.ImaginaryAtMaximumAmplitude)                | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTotalForceFromContactPressureZTracker.MaximumAmplitude)                                      | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTotalForceFromContactPressureZTracker.MaximumFrequency)                                      | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTotalForceFromContactPressureZTracker.Maximum)                                                        | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTotalForceFromContactPressureZTracker.MinimumFrequency)                                      | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTotalForceFromContactPressureZTracker.Minimum)                                                        | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTotalForceFromContactPressureZTracker.PhaseAngle)                                                  | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromContactPressureZTracker.RealAtMaximumAmplitude)                          | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTotalForceFromContactPressureZTracker.RequestedFrequency)                                  | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTotalForceFromContactPressureZTracker.AccelerationType)                                      | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTotalForceFromContactPressureZTracker.ChartViewingStyle)                                    | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTotalForceFromContactPressureZTracker.SpatialResolution)                                    | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTotalForceFromContactPressureZTracker.NormalOrientation)                                    | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromContactPressureZTracker.CurvesAppearanceDisplay)                        | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTotalForceFromContactPressureZTracker.ResultChartType)                                        | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTotalForceFromContactPressureZTracker.DpfEvaluation)                                            | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTotalForceFromContactPressureZTracker.ShearOrientation)                                      | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTotalForceFromContactPressureZTracker.TimeHistoryDisplay)                                  | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTotalForceFromContactPressureZTracker.VelocityType)                                              | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTotalForceFromContactPressureZTracker.Suppressed)                                                  | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTotalForceFromContactPressureZTracker.EnhancedTracking)                                      | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTotalForceFromContactPressureZTracker.UseParentFrequencyRange)                        | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactTotalForceFromContactPressureZTracker.Location)                                                      | Gets or sets the Location.                                    |
| [`Children`](#ContactTotalForceFromContactPressureZTracker.Children)                                                      | Gets the list of children.                                    |
| [`Comments`](#ContactTotalForceFromContactPressureZTracker.Comments)                                                      | Gets the list of associated comments.                         |
| [`Images`](#ContactTotalForceFromContactPressureZTracker.Images)                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTotalForceFromContactPressureZTracker.Properties)                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTotalForceFromContactPressureZTracker.VisibleProperties)                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactTotalForceFromContactPressureZTracker
```

## Property detail

### *property* ContactTotalForceFromContactPressureZTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactTotalForceFromContactPressureZTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactTotalForceFromContactPressureZTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactTotalForceFromContactPressureZTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
