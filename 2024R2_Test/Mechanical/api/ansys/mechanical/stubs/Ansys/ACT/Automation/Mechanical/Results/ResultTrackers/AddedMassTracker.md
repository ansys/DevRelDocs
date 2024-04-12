<a id="addedmasstracker"></a>

# AddedMassTracker

<a id="AddedMassTracker"></a>

### *class* AddedMassTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AddedMassTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#AddedMassTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AddedMassTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AddedMassTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AddedMassTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AddedMassTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AddedMassTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AddedMassTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AddedMassTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AddedMassTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AddedMassTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AddedMassTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AddedMassTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AddedMassTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AddedMassTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AddedMassTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AddedMassTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AddedMassTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AddedMassTracker.IsSolved)                                                                                  | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AddedMassTracker.BoundaryCondition)                                                                | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AddedMassTracker.CutFrequency)                                                                          | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AddedMassTracker.SectorNumber)                                                                          | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AddedMassTracker.GeometrySelectionString)                                                    | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AddedMassTracker.LoadStepNumber)                                                                      | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AddedMassTracker.ReportedFrequency)                                                                | Gets the ReportedFrequency.                                   |
| [`Duration`](#AddedMassTracker.Duration)                                                                                  | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AddedMassTracker.FilterMaximum)                                                                        | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AddedMassTracker.FilterMinimum)                                                                        | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AddedMassTracker.FrequencyAtMaximumAmplitude)                                            | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AddedMassTracker.ImaginaryAtMaximumAmplitude)                                            | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AddedMassTracker.MaximumAmplitude)                                                                  | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AddedMassTracker.MaximumFrequency)                                                                  | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AddedMassTracker.Maximum)                                                                                    | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AddedMassTracker.MinimumFrequency)                                                                  | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AddedMassTracker.Minimum)                                                                                    | Gets the Minimum.                                             |
| [`PhaseAngle`](#AddedMassTracker.PhaseAngle)                                                                              | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AddedMassTracker.RealAtMaximumAmplitude)                                                      | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AddedMassTracker.RequestedFrequency)                                                              | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AddedMassTracker.AccelerationType)                                                                  | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AddedMassTracker.ChartViewingStyle)                                                                | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AddedMassTracker.SpatialResolution)                                                                | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AddedMassTracker.NormalOrientation)                                                                | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AddedMassTracker.CurvesAppearanceDisplay)                                                    | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AddedMassTracker.ResultChartType)                                                                    | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AddedMassTracker.DpfEvaluation)                                                                        | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AddedMassTracker.ShearOrientation)                                                                  | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AddedMassTracker.TimeHistoryDisplay)                                                              | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AddedMassTracker.VelocityType)                                                                          | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AddedMassTracker.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AddedMassTracker.EnhancedTracking)                                                                  | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AddedMassTracker.UseParentFrequencyRange)                                                    | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#AddedMassTracker.Location)                                                                                  | Gets or sets the Location.                                    |
| [`Children`](#AddedMassTracker.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#AddedMassTracker.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Images`](#AddedMassTracker.Images)                                                                                      | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AddedMassTracker.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AddedMassTracker.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import AddedMassTracker
```

<a id="property-detail"></a>

## Property detail

<a id="AddedMassTracker.InternalObject"></a>

### *property* AddedMassTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.DataModelObjectCategory"></a>

### *property* AddedMassTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.IsSolved"></a>

### *property* AddedMassTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ChartDimensions"></a>

### *property* AddedMassTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.BoundaryCondition"></a>

### *property* AddedMassTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.CutFrequency"></a>

### *property* AddedMassTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.SectorNumber"></a>

### *property* AddedMassTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.GeometrySelectionString"></a>

### *property* AddedMassTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.LoadStepNumber"></a>

### *property* AddedMassTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ReportedFrequency"></a>

### *property* AddedMassTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Duration"></a>

### *property* AddedMassTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.FilterMaximum"></a>

### *property* AddedMassTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.FilterMinimum"></a>

### *property* AddedMassTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.FrequencyAtMaximumAmplitude"></a>

### *property* AddedMassTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* AddedMassTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.MaximumAmplitude"></a>

### *property* AddedMassTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.MaximumFrequency"></a>

### *property* AddedMassTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Maximum"></a>

### *property* AddedMassTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.MinimumFrequency"></a>

### *property* AddedMassTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Minimum"></a>

### *property* AddedMassTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.PhaseAngle"></a>

### *property* AddedMassTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.RealAtMaximumAmplitude"></a>

### *property* AddedMassTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.RequestedFrequency"></a>

### *property* AddedMassTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.AccelerationType"></a>

### *property* AddedMassTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ChartViewingStyle"></a>

### *property* AddedMassTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.DeformationType"></a>

### *property* AddedMassTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.FilterType"></a>

### *property* AddedMassTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.SpatialResolution"></a>

### *property* AddedMassTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.NormalOrientation"></a>

### *property* AddedMassTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.CurvesAppearanceDisplay"></a>

### *property* AddedMassTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ResultChartType"></a>

### *property* AddedMassTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.DpfEvaluation"></a>

### *property* AddedMassTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.XAxisValues"></a>

### *property* AddedMassTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ShearOrientation"></a>

### *property* AddedMassTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.StressStrainType"></a>

### *property* AddedMassTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.TimeHistoryDisplay"></a>

### *property* AddedMassTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.VelocityType"></a>

### *property* AddedMassTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Suppressed"></a>

### *property* AddedMassTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.EnhancedTracking"></a>

### *property* AddedMassTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.UseParentFrequencyRange"></a>

### *property* AddedMassTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.CoordinateSystem"></a>

### *property* AddedMassTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Spring"></a>

### *property* AddedMassTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Location"></a>

### *property* AddedMassTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Children"></a>

### *property* AddedMassTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Comments"></a>

### *property* AddedMassTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Images"></a>

### *property* AddedMassTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AddedMassTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Properties"></a>

### *property* AddedMassTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.VisibleProperties"></a>

### *property* AddedMassTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AddedMassTracker.ExportAnimation"></a>

### AddedMassTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.ClearGeneratedData"></a>

### AddedMassTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.EvaluateAllResults"></a>

### AddedMassTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.RenameBasedOnDefinition"></a>

### AddedMassTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Delete"></a>

### AddedMassTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.GetChildren"></a>

### AddedMassTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AddedMassTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.AddComment"></a>

### AddedMassTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.AddImage"></a>

### AddedMassTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Activate"></a>

### AddedMassTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.CopyTo"></a>

### AddedMassTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.Duplicate"></a>

### AddedMassTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.GroupAllSimilarChildren"></a>

### AddedMassTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.GroupSimilarObjects"></a>

### AddedMassTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.PropertyByName"></a>

### AddedMassTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.PropertyByAPIName"></a>

### AddedMassTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.CreateParameter"></a>

### AddedMassTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.GetParameter"></a>

### AddedMassTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AddedMassTracker.RemoveParameter"></a>

### AddedMassTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
