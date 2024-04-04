# SpringElongationTracker

### *class* SpringElongationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SpringElongationTracker.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#SpringElongationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#SpringElongationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#SpringElongationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#SpringElongationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#SpringElongationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SpringElongationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#SpringElongationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SpringElongationTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SpringElongationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SpringElongationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SpringElongationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpringElongationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SpringElongationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SpringElongationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SpringElongationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SpringElongationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SpringElongationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#SpringElongationTracker.IsSolved)                                                                           | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#SpringElongationTracker.BoundaryCondition)                                                         | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#SpringElongationTracker.CutFrequency)                                                                   | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#SpringElongationTracker.SectorNumber)                                                                   | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#SpringElongationTracker.GeometrySelectionString)                                             | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#SpringElongationTracker.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#SpringElongationTracker.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                   |
| [`Duration`](#SpringElongationTracker.Duration)                                                                           | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#SpringElongationTracker.FilterMaximum)                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#SpringElongationTracker.FilterMinimum)                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#SpringElongationTracker.FrequencyAtMaximumAmplitude)                                     | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#SpringElongationTracker.ImaginaryAtMaximumAmplitude)                                     | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#SpringElongationTracker.MaximumAmplitude)                                                           | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#SpringElongationTracker.MaximumFrequency)                                                           | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#SpringElongationTracker.Maximum)                                                                             | Gets the Maximum.                                             |
| [`MinimumFrequency`](#SpringElongationTracker.MinimumFrequency)                                                           | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#SpringElongationTracker.Minimum)                                                                             | Gets the Minimum.                                             |
| [`PhaseAngle`](#SpringElongationTracker.PhaseAngle)                                                                       | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#SpringElongationTracker.RealAtMaximumAmplitude)                                               | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#SpringElongationTracker.RequestedFrequency)                                                       | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#SpringElongationTracker.AccelerationType)                                                           | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#SpringElongationTracker.ChartViewingStyle)                                                         | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#SpringElongationTracker.SpatialResolution)                                                         | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#SpringElongationTracker.NormalOrientation)                                                         | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#SpringElongationTracker.CurvesAppearanceDisplay)                                             | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#SpringElongationTracker.ResultChartType)                                                             | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#SpringElongationTracker.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#SpringElongationTracker.ShearOrientation)                                                           | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#SpringElongationTracker.TimeHistoryDisplay)                                                       | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#SpringElongationTracker.VelocityType)                                                                   | Gets or sets the VelocityType.                                |
| [`Suppressed`](#SpringElongationTracker.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#SpringElongationTracker.EnhancedTracking)                                                           | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#SpringElongationTracker.UseParentFrequencyRange)                                             | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#SpringElongationTracker.Location)                                                                           | Gets or sets the Location.                                    |
| [`Children`](#SpringElongationTracker.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#SpringElongationTracker.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Images`](#SpringElongationTracker.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SpringElongationTracker.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SpringElongationTracker.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import SpringElongationTracker
```

## Property detail

### *property* SpringElongationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SpringElongationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### SpringElongationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SpringElongationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
