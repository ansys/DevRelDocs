# AcousticSPLFrequencyResponse

### *class* AcousticSPLFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticSPLFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToXMLFile`](#AcousticSPLFrequencyResponse.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#AcousticSPLFrequencyResponse.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ExportAnimation`](#AcousticSPLFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#AcousticSPLFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticSPLFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AcousticSPLFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticSPLFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticSPLFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticSPLFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticSPLFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticSPLFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticSPLFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticSPLFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticSPLFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticSPLFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticSPLFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticSPLFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticSPLFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticSPLFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AcousticSPLFrequencyResponse.IsSolved)                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AcousticSPLFrequencyResponse.BoundaryCondition)                                                    | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AcousticSPLFrequencyResponse.CutFrequency)                                                              | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AcousticSPLFrequencyResponse.SectorNumber)                                                              | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AcousticSPLFrequencyResponse.GeometrySelectionString)                                        | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AcousticSPLFrequencyResponse.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AcousticSPLFrequencyResponse.ReportedFrequency)                                                    | Gets the ReportedFrequency.                                   |
| [`Duration`](#AcousticSPLFrequencyResponse.Duration)                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AcousticSPLFrequencyResponse.FilterMaximum)                                                            | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AcousticSPLFrequencyResponse.FilterMinimum)                                                            | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticSPLFrequencyResponse.FrequencyAtMaximumAmplitude)                                | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AcousticSPLFrequencyResponse.ImaginaryAtMaximumAmplitude)                                | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AcousticSPLFrequencyResponse.MaximumAmplitude)                                                      | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AcousticSPLFrequencyResponse.MaximumFrequency)                                                      | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AcousticSPLFrequencyResponse.Maximum)                                                                        | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AcousticSPLFrequencyResponse.MinimumFrequency)                                                      | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AcousticSPLFrequencyResponse.Minimum)                                                                        | Gets the Minimum.                                             |
| [`PhaseAngle`](#AcousticSPLFrequencyResponse.PhaseAngle)                                                                  | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AcousticSPLFrequencyResponse.RealAtMaximumAmplitude)                                          | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AcousticSPLFrequencyResponse.RequestedFrequency)                                                  | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AcousticSPLFrequencyResponse.AccelerationType)                                                      | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AcousticSPLFrequencyResponse.ChartViewingStyle)                                                    | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AcousticSPLFrequencyResponse.SpatialResolution)                                                    | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AcousticSPLFrequencyResponse.NormalOrientation)                                                    | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AcousticSPLFrequencyResponse.CurvesAppearanceDisplay)                                        | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AcousticSPLFrequencyResponse.ResultChartType)                                                        | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AcousticSPLFrequencyResponse.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AcousticSPLFrequencyResponse.ShearOrientation)                                                      | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AcousticSPLFrequencyResponse.TimeHistoryDisplay)                                                  | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AcousticSPLFrequencyResponse.VelocityType)                                                              | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AcousticSPLFrequencyResponse.Suppressed)                                                                  | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AcousticSPLFrequencyResponse.EnhancedTracking)                                                      | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AcousticSPLFrequencyResponse.UseParentFrequencyRange)                                        | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#AcousticSPLFrequencyResponse.Location)                                                                      | Gets or sets the Location.                                    |
| [`Children`](#AcousticSPLFrequencyResponse.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#AcousticSPLFrequencyResponse.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Images`](#AcousticSPLFrequencyResponse.Images)                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticSPLFrequencyResponse.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticSPLFrequencyResponse.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticSPLFrequencyResponse
```

## Property detail

### *property* AcousticSPLFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSPLFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticSPLFrequencyResponse.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticSPLFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
