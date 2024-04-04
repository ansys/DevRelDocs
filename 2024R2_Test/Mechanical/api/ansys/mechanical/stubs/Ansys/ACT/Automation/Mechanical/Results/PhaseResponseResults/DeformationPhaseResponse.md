# DeformationPhaseResponse

### *class* DeformationPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DeformationPhaseResponse.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#DeformationPhaseResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DeformationPhaseResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DeformationPhaseResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#DeformationPhaseResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DeformationPhaseResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DeformationPhaseResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#DeformationPhaseResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DeformationPhaseResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DeformationPhaseResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DeformationPhaseResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DeformationPhaseResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DeformationPhaseResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DeformationPhaseResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DeformationPhaseResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DeformationPhaseResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DeformationPhaseResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DeformationPhaseResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#DeformationPhaseResponse.IsSolved)                                                                          | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#DeformationPhaseResponse.BoundaryCondition)                                                        | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#DeformationPhaseResponse.CutFrequency)                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#DeformationPhaseResponse.SectorNumber)                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#DeformationPhaseResponse.GeometrySelectionString)                                            | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#DeformationPhaseResponse.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#DeformationPhaseResponse.ReportedFrequency)                                                        | Gets the ReportedFrequency.                                   |
| [`Duration`](#DeformationPhaseResponse.Duration)                                                                          | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#DeformationPhaseResponse.FilterMaximum)                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#DeformationPhaseResponse.FilterMinimum)                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#DeformationPhaseResponse.FrequencyAtMaximumAmplitude)                                    | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#DeformationPhaseResponse.ImaginaryAtMaximumAmplitude)                                    | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#DeformationPhaseResponse.MaximumAmplitude)                                                          | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#DeformationPhaseResponse.MaximumFrequency)                                                          | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#DeformationPhaseResponse.Maximum)                                                                            | Gets the Maximum.                                             |
| [`MinimumFrequency`](#DeformationPhaseResponse.MinimumFrequency)                                                          | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#DeformationPhaseResponse.Minimum)                                                                            | Gets the Minimum.                                             |
| [`PhaseAngle`](#DeformationPhaseResponse.PhaseAngle)                                                                      | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#DeformationPhaseResponse.RealAtMaximumAmplitude)                                              | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#DeformationPhaseResponse.RequestedFrequency)                                                      | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#DeformationPhaseResponse.AccelerationType)                                                          | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#DeformationPhaseResponse.ChartViewingStyle)                                                        | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#DeformationPhaseResponse.SpatialResolution)                                                        | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#DeformationPhaseResponse.NormalOrientation)                                                        | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#DeformationPhaseResponse.CurvesAppearanceDisplay)                                            | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#DeformationPhaseResponse.ResultChartType)                                                            | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#DeformationPhaseResponse.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#DeformationPhaseResponse.ShearOrientation)                                                          | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#DeformationPhaseResponse.TimeHistoryDisplay)                                                      | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#DeformationPhaseResponse.VelocityType)                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#DeformationPhaseResponse.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#DeformationPhaseResponse.EnhancedTracking)                                                          | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#DeformationPhaseResponse.UseParentFrequencyRange)                                            | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#DeformationPhaseResponse.Location)                                                                          | Gets or sets the Location.                                    |
| [`Children`](#DeformationPhaseResponse.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#DeformationPhaseResponse.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Images`](#DeformationPhaseResponse.Images)                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DeformationPhaseResponse.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DeformationPhaseResponse.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import DeformationPhaseResponse
```

## Property detail

### *property* DeformationPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DeformationPhaseResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DeformationPhaseResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DeformationPhaseResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
