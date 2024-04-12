<a id="plasticworktracker"></a>

# PlasticWorkTracker

<a id="PlasticWorkTracker"></a>

### *class* PlasticWorkTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PlasticWorkTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#PlasticWorkTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#PlasticWorkTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#PlasticWorkTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#PlasticWorkTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#PlasticWorkTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PlasticWorkTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#PlasticWorkTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PlasticWorkTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PlasticWorkTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PlasticWorkTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PlasticWorkTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PlasticWorkTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PlasticWorkTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PlasticWorkTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PlasticWorkTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PlasticWorkTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PlasticWorkTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#PlasticWorkTracker.IsSolved)                                                                                | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#PlasticWorkTracker.BoundaryCondition)                                                              | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#PlasticWorkTracker.CutFrequency)                                                                        | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#PlasticWorkTracker.SectorNumber)                                                                        | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#PlasticWorkTracker.GeometrySelectionString)                                                  | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#PlasticWorkTracker.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#PlasticWorkTracker.ReportedFrequency)                                                              | Gets the ReportedFrequency.                                   |
| [`Duration`](#PlasticWorkTracker.Duration)                                                                                | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#PlasticWorkTracker.FilterMaximum)                                                                      | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#PlasticWorkTracker.FilterMinimum)                                                                      | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#PlasticWorkTracker.FrequencyAtMaximumAmplitude)                                          | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#PlasticWorkTracker.ImaginaryAtMaximumAmplitude)                                          | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#PlasticWorkTracker.MaximumAmplitude)                                                                | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#PlasticWorkTracker.MaximumFrequency)                                                                | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#PlasticWorkTracker.Maximum)                                                                                  | Gets the Maximum.                                             |
| [`MinimumFrequency`](#PlasticWorkTracker.MinimumFrequency)                                                                | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#PlasticWorkTracker.Minimum)                                                                                  | Gets the Minimum.                                             |
| [`PhaseAngle`](#PlasticWorkTracker.PhaseAngle)                                                                            | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#PlasticWorkTracker.RealAtMaximumAmplitude)                                                    | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#PlasticWorkTracker.RequestedFrequency)                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#PlasticWorkTracker.AccelerationType)                                                                | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#PlasticWorkTracker.ChartViewingStyle)                                                              | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#PlasticWorkTracker.SpatialResolution)                                                              | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#PlasticWorkTracker.NormalOrientation)                                                              | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#PlasticWorkTracker.CurvesAppearanceDisplay)                                                  | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#PlasticWorkTracker.ResultChartType)                                                                  | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#PlasticWorkTracker.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#PlasticWorkTracker.ShearOrientation)                                                                | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#PlasticWorkTracker.TimeHistoryDisplay)                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#PlasticWorkTracker.VelocityType)                                                                        | Gets or sets the VelocityType.                                |
| [`Suppressed`](#PlasticWorkTracker.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#PlasticWorkTracker.EnhancedTracking)                                                                | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#PlasticWorkTracker.UseParentFrequencyRange)                                                  | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#PlasticWorkTracker.Location)                                                                                | Gets or sets the Location.                                    |
| [`Children`](#PlasticWorkTracker.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#PlasticWorkTracker.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Images`](#PlasticWorkTracker.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PlasticWorkTracker.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PlasticWorkTracker.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import PlasticWorkTracker
```

<a id="property-detail"></a>

## Property detail

<a id="PlasticWorkTracker.InternalObject"></a>

### *property* PlasticWorkTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.DataModelObjectCategory"></a>

### *property* PlasticWorkTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.IsSolved"></a>

### *property* PlasticWorkTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ChartDimensions"></a>

### *property* PlasticWorkTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.BoundaryCondition"></a>

### *property* PlasticWorkTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.CutFrequency"></a>

### *property* PlasticWorkTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.SectorNumber"></a>

### *property* PlasticWorkTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.GeometrySelectionString"></a>

### *property* PlasticWorkTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.LoadStepNumber"></a>

### *property* PlasticWorkTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ReportedFrequency"></a>

### *property* PlasticWorkTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Duration"></a>

### *property* PlasticWorkTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.FilterMaximum"></a>

### *property* PlasticWorkTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.FilterMinimum"></a>

### *property* PlasticWorkTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.FrequencyAtMaximumAmplitude"></a>

### *property* PlasticWorkTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* PlasticWorkTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.MaximumAmplitude"></a>

### *property* PlasticWorkTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.MaximumFrequency"></a>

### *property* PlasticWorkTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Maximum"></a>

### *property* PlasticWorkTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.MinimumFrequency"></a>

### *property* PlasticWorkTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Minimum"></a>

### *property* PlasticWorkTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.PhaseAngle"></a>

### *property* PlasticWorkTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.RealAtMaximumAmplitude"></a>

### *property* PlasticWorkTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.RequestedFrequency"></a>

### *property* PlasticWorkTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.AccelerationType"></a>

### *property* PlasticWorkTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ChartViewingStyle"></a>

### *property* PlasticWorkTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.DeformationType"></a>

### *property* PlasticWorkTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.FilterType"></a>

### *property* PlasticWorkTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.SpatialResolution"></a>

### *property* PlasticWorkTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.NormalOrientation"></a>

### *property* PlasticWorkTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.CurvesAppearanceDisplay"></a>

### *property* PlasticWorkTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ResultChartType"></a>

### *property* PlasticWorkTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.DpfEvaluation"></a>

### *property* PlasticWorkTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.XAxisValues"></a>

### *property* PlasticWorkTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ShearOrientation"></a>

### *property* PlasticWorkTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.StressStrainType"></a>

### *property* PlasticWorkTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.TimeHistoryDisplay"></a>

### *property* PlasticWorkTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.VelocityType"></a>

### *property* PlasticWorkTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Suppressed"></a>

### *property* PlasticWorkTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.EnhancedTracking"></a>

### *property* PlasticWorkTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.UseParentFrequencyRange"></a>

### *property* PlasticWorkTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.CoordinateSystem"></a>

### *property* PlasticWorkTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Spring"></a>

### *property* PlasticWorkTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Location"></a>

### *property* PlasticWorkTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Children"></a>

### *property* PlasticWorkTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Comments"></a>

### *property* PlasticWorkTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Images"></a>

### *property* PlasticWorkTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PlasticWorkTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Properties"></a>

### *property* PlasticWorkTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.VisibleProperties"></a>

### *property* PlasticWorkTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PlasticWorkTracker.ExportAnimation"></a>

### PlasticWorkTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.ClearGeneratedData"></a>

### PlasticWorkTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.EvaluateAllResults"></a>

### PlasticWorkTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.RenameBasedOnDefinition"></a>

### PlasticWorkTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Delete"></a>

### PlasticWorkTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.GetChildren"></a>

### PlasticWorkTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PlasticWorkTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.AddComment"></a>

### PlasticWorkTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.AddImage"></a>

### PlasticWorkTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Activate"></a>

### PlasticWorkTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.CopyTo"></a>

### PlasticWorkTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.Duplicate"></a>

### PlasticWorkTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.GroupAllSimilarChildren"></a>

### PlasticWorkTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.GroupSimilarObjects"></a>

### PlasticWorkTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.PropertyByName"></a>

### PlasticWorkTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.PropertyByAPIName"></a>

### PlasticWorkTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.CreateParameter"></a>

### PlasticWorkTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.GetParameter"></a>

### PlasticWorkTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticWorkTracker.RemoveParameter"></a>

### PlasticWorkTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
