<a id="springelasticforcetracker"></a>

# SpringElasticForceTracker

<a id="SpringElasticForceTracker"></a>

### *class* SpringElasticForceTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SpringElasticForceTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#SpringElasticForceTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#SpringElasticForceTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#SpringElasticForceTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#SpringElasticForceTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#SpringElasticForceTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SpringElasticForceTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#SpringElasticForceTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SpringElasticForceTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SpringElasticForceTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SpringElasticForceTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SpringElasticForceTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpringElasticForceTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SpringElasticForceTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SpringElasticForceTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SpringElasticForceTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SpringElasticForceTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SpringElasticForceTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#SpringElasticForceTracker.IsSolved)                                                                         | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#SpringElasticForceTracker.BoundaryCondition)                                                       | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#SpringElasticForceTracker.CutFrequency)                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#SpringElasticForceTracker.SectorNumber)                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#SpringElasticForceTracker.GeometrySelectionString)                                           | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#SpringElasticForceTracker.LoadStepNumber)                                                             | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#SpringElasticForceTracker.ReportedFrequency)                                                       | Gets the ReportedFrequency.                                   |
| [`Duration`](#SpringElasticForceTracker.Duration)                                                                         | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#SpringElasticForceTracker.FilterMaximum)                                                               | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#SpringElasticForceTracker.FilterMinimum)                                                               | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#SpringElasticForceTracker.FrequencyAtMaximumAmplitude)                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#SpringElasticForceTracker.ImaginaryAtMaximumAmplitude)                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#SpringElasticForceTracker.MaximumAmplitude)                                                         | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#SpringElasticForceTracker.MaximumFrequency)                                                         | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#SpringElasticForceTracker.Maximum)                                                                           | Gets the Maximum.                                             |
| [`MinimumFrequency`](#SpringElasticForceTracker.MinimumFrequency)                                                         | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#SpringElasticForceTracker.Minimum)                                                                           | Gets the Minimum.                                             |
| [`PhaseAngle`](#SpringElasticForceTracker.PhaseAngle)                                                                     | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#SpringElasticForceTracker.RealAtMaximumAmplitude)                                             | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#SpringElasticForceTracker.RequestedFrequency)                                                     | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#SpringElasticForceTracker.AccelerationType)                                                         | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#SpringElasticForceTracker.ChartViewingStyle)                                                       | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#SpringElasticForceTracker.SpatialResolution)                                                       | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#SpringElasticForceTracker.NormalOrientation)                                                       | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#SpringElasticForceTracker.CurvesAppearanceDisplay)                                           | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#SpringElasticForceTracker.ResultChartType)                                                           | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#SpringElasticForceTracker.DpfEvaluation)                                                               | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#SpringElasticForceTracker.ShearOrientation)                                                         | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#SpringElasticForceTracker.TimeHistoryDisplay)                                                     | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#SpringElasticForceTracker.VelocityType)                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#SpringElasticForceTracker.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#SpringElasticForceTracker.EnhancedTracking)                                                         | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#SpringElasticForceTracker.UseParentFrequencyRange)                                           | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#SpringElasticForceTracker.Location)                                                                         | Gets or sets the Location.                                    |
| [`Children`](#SpringElasticForceTracker.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#SpringElasticForceTracker.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Images`](#SpringElasticForceTracker.Images)                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SpringElasticForceTracker.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SpringElasticForceTracker.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import SpringElasticForceTracker
```

<a id="property-detail"></a>

## Property detail

<a id="SpringElasticForceTracker.InternalObject"></a>

### *property* SpringElasticForceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.DataModelObjectCategory"></a>

### *property* SpringElasticForceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.IsSolved"></a>

### *property* SpringElasticForceTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ChartDimensions"></a>

### *property* SpringElasticForceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.BoundaryCondition"></a>

### *property* SpringElasticForceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CutFrequency"></a>

### *property* SpringElasticForceTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.SectorNumber"></a>

### *property* SpringElasticForceTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GeometrySelectionString"></a>

### *property* SpringElasticForceTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.LoadStepNumber"></a>

### *property* SpringElasticForceTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ReportedFrequency"></a>

### *property* SpringElasticForceTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Duration"></a>

### *property* SpringElasticForceTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FilterMaximum"></a>

### *property* SpringElasticForceTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FilterMinimum"></a>

### *property* SpringElasticForceTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* SpringElasticForceTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* SpringElasticForceTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.MaximumAmplitude"></a>

### *property* SpringElasticForceTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.MaximumFrequency"></a>

### *property* SpringElasticForceTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Maximum"></a>

### *property* SpringElasticForceTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.MinimumFrequency"></a>

### *property* SpringElasticForceTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Minimum"></a>

### *property* SpringElasticForceTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.PhaseAngle"></a>

### *property* SpringElasticForceTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RealAtMaximumAmplitude"></a>

### *property* SpringElasticForceTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RequestedFrequency"></a>

### *property* SpringElasticForceTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.AccelerationType"></a>

### *property* SpringElasticForceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ChartViewingStyle"></a>

### *property* SpringElasticForceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.DeformationType"></a>

### *property* SpringElasticForceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FilterType"></a>

### *property* SpringElasticForceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.SpatialResolution"></a>

### *property* SpringElasticForceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.NormalOrientation"></a>

### *property* SpringElasticForceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CurvesAppearanceDisplay"></a>

### *property* SpringElasticForceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ResultChartType"></a>

### *property* SpringElasticForceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.DpfEvaluation"></a>

### *property* SpringElasticForceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.XAxisValues"></a>

### *property* SpringElasticForceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ShearOrientation"></a>

### *property* SpringElasticForceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.StressStrainType"></a>

### *property* SpringElasticForceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.TimeHistoryDisplay"></a>

### *property* SpringElasticForceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.VelocityType"></a>

### *property* SpringElasticForceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Suppressed"></a>

### *property* SpringElasticForceTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.EnhancedTracking"></a>

### *property* SpringElasticForceTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.UseParentFrequencyRange"></a>

### *property* SpringElasticForceTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CoordinateSystem"></a>

### *property* SpringElasticForceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Spring"></a>

### *property* SpringElasticForceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Location"></a>

### *property* SpringElasticForceTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Children"></a>

### *property* SpringElasticForceTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Comments"></a>

### *property* SpringElasticForceTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Images"></a>

### *property* SpringElasticForceTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SpringElasticForceTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Properties"></a>

### *property* SpringElasticForceTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.VisibleProperties"></a>

### *property* SpringElasticForceTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpringElasticForceTracker.ExportAnimation"></a>

### SpringElasticForceTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ClearGeneratedData"></a>

### SpringElasticForceTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.EvaluateAllResults"></a>

### SpringElasticForceTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RenameBasedOnDefinition"></a>

### SpringElasticForceTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Delete"></a>

### SpringElasticForceTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GetChildren"></a>

### SpringElasticForceTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SpringElasticForceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.AddComment"></a>

### SpringElasticForceTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.AddImage"></a>

### SpringElasticForceTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Activate"></a>

### SpringElasticForceTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CopyTo"></a>

### SpringElasticForceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Duplicate"></a>

### SpringElasticForceTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GroupAllSimilarChildren"></a>

### SpringElasticForceTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GroupSimilarObjects"></a>

### SpringElasticForceTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.PropertyByName"></a>

### SpringElasticForceTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.PropertyByAPIName"></a>

### SpringElasticForceTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CreateParameter"></a>

### SpringElasticForceTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GetParameter"></a>

### SpringElasticForceTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RemoveParameter"></a>

### SpringElasticForceTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
