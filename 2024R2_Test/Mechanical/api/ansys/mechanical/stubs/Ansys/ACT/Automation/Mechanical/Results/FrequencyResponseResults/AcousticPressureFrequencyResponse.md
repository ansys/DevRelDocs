# AcousticPressureFrequencyResponse

### *class* AcousticPressureFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPressureFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#AcousticPressureFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticPressureFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticPressureFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AcousticPressureFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticPressureFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticPressureFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticPressureFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticPressureFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticPressureFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticPressureFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticPressureFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPressureFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticPressureFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticPressureFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticPressureFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticPressureFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticPressureFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AcousticPressureFrequencyResponse.IsSolved)                                                                 | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AcousticPressureFrequencyResponse.BoundaryCondition)                                               | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AcousticPressureFrequencyResponse.CutFrequency)                                                         | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AcousticPressureFrequencyResponse.SectorNumber)                                                         | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AcousticPressureFrequencyResponse.GeometrySelectionString)                                   | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AcousticPressureFrequencyResponse.LoadStepNumber)                                                     | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AcousticPressureFrequencyResponse.ReportedFrequency)                                               | Gets the ReportedFrequency.                                   |
| [`Duration`](#AcousticPressureFrequencyResponse.Duration)                                                                 | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AcousticPressureFrequencyResponse.FilterMaximum)                                                       | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AcousticPressureFrequencyResponse.FilterMinimum)                                                       | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude)                           | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude)                           | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AcousticPressureFrequencyResponse.MaximumAmplitude)                                                 | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AcousticPressureFrequencyResponse.MaximumFrequency)                                                 | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AcousticPressureFrequencyResponse.Maximum)                                                                   | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AcousticPressureFrequencyResponse.MinimumFrequency)                                                 | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AcousticPressureFrequencyResponse.Minimum)                                                                   | Gets the Minimum.                                             |
| [`PhaseAngle`](#AcousticPressureFrequencyResponse.PhaseAngle)                                                             | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.RealAtMaximumAmplitude)                                     | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AcousticPressureFrequencyResponse.RequestedFrequency)                                             | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AcousticPressureFrequencyResponse.AccelerationType)                                                 | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AcousticPressureFrequencyResponse.ChartViewingStyle)                                               | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AcousticPressureFrequencyResponse.SpatialResolution)                                               | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AcousticPressureFrequencyResponse.NormalOrientation)                                               | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AcousticPressureFrequencyResponse.CurvesAppearanceDisplay)                                   | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AcousticPressureFrequencyResponse.ResultChartType)                                                   | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AcousticPressureFrequencyResponse.DpfEvaluation)                                                       | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AcousticPressureFrequencyResponse.ShearOrientation)                                                 | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AcousticPressureFrequencyResponse.TimeHistoryDisplay)                                             | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AcousticPressureFrequencyResponse.VelocityType)                                                         | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AcousticPressureFrequencyResponse.Suppressed)                                                             | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AcousticPressureFrequencyResponse.EnhancedTracking)                                                 | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AcousticPressureFrequencyResponse.UseParentFrequencyRange)                                   | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#AcousticPressureFrequencyResponse.Location)                                                                 | Gets or sets the Location.                                    |
| [`Children`](#AcousticPressureFrequencyResponse.Children)                                                                 | Gets the list of children.                                    |
| [`Comments`](#AcousticPressureFrequencyResponse.Comments)                                                                 | Gets the list of associated comments.                         |
| [`Images`](#AcousticPressureFrequencyResponse.Images)                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticPressureFrequencyResponse.Properties)                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticPressureFrequencyResponse.VisibleProperties)                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticPressureFrequencyResponse
```

## Property detail

### *property* AcousticPressureFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPressureFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticPressureFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticPressureFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
