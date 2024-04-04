# RigidBodyVelocityTracker

### *class* RigidBodyVelocityTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RigidBodyVelocityTracker.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#RigidBodyVelocityTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#RigidBodyVelocityTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#RigidBodyVelocityTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#RigidBodyVelocityTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#RigidBodyVelocityTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RigidBodyVelocityTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#RigidBodyVelocityTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RigidBodyVelocityTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RigidBodyVelocityTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RigidBodyVelocityTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RigidBodyVelocityTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RigidBodyVelocityTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RigidBodyVelocityTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RigidBodyVelocityTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RigidBodyVelocityTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RigidBodyVelocityTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RigidBodyVelocityTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#RigidBodyVelocityTracker.IsSolved)                                                                          | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#RigidBodyVelocityTracker.BoundaryCondition)                                                        | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#RigidBodyVelocityTracker.CutFrequency)                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#RigidBodyVelocityTracker.SectorNumber)                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#RigidBodyVelocityTracker.GeometrySelectionString)                                            | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#RigidBodyVelocityTracker.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#RigidBodyVelocityTracker.ReportedFrequency)                                                        | Gets the ReportedFrequency.                                   |
| [`Duration`](#RigidBodyVelocityTracker.Duration)                                                                          | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#RigidBodyVelocityTracker.FilterMaximum)                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#RigidBodyVelocityTracker.FilterMinimum)                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#RigidBodyVelocityTracker.FrequencyAtMaximumAmplitude)                                    | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#RigidBodyVelocityTracker.ImaginaryAtMaximumAmplitude)                                    | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#RigidBodyVelocityTracker.MaximumAmplitude)                                                          | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#RigidBodyVelocityTracker.MaximumFrequency)                                                          | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#RigidBodyVelocityTracker.Maximum)                                                                            | Gets the Maximum.                                             |
| [`MinimumFrequency`](#RigidBodyVelocityTracker.MinimumFrequency)                                                          | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#RigidBodyVelocityTracker.Minimum)                                                                            | Gets the Minimum.                                             |
| [`PhaseAngle`](#RigidBodyVelocityTracker.PhaseAngle)                                                                      | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#RigidBodyVelocityTracker.RealAtMaximumAmplitude)                                              | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#RigidBodyVelocityTracker.RequestedFrequency)                                                      | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#RigidBodyVelocityTracker.AccelerationType)                                                          | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#RigidBodyVelocityTracker.ChartViewingStyle)                                                        | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#RigidBodyVelocityTracker.SpatialResolution)                                                        | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#RigidBodyVelocityTracker.NormalOrientation)                                                        | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#RigidBodyVelocityTracker.CurvesAppearanceDisplay)                                            | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#RigidBodyVelocityTracker.ResultChartType)                                                            | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#RigidBodyVelocityTracker.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#RigidBodyVelocityTracker.ShearOrientation)                                                          | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#RigidBodyVelocityTracker.TimeHistoryDisplay)                                                      | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#RigidBodyVelocityTracker.VelocityType)                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#RigidBodyVelocityTracker.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#RigidBodyVelocityTracker.EnhancedTracking)                                                          | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#RigidBodyVelocityTracker.UseParentFrequencyRange)                                            | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#RigidBodyVelocityTracker.Location)                                                                          | Gets or sets the Location.                                    |
| [`Children`](#RigidBodyVelocityTracker.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#RigidBodyVelocityTracker.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Images`](#RigidBodyVelocityTracker.Images)                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RigidBodyVelocityTracker.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RigidBodyVelocityTracker.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import RigidBodyVelocityTracker
```

## Property detail

### *property* RigidBodyVelocityTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RigidBodyVelocityTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RigidBodyVelocityTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RigidBodyVelocityTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
