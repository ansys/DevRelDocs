# DampingEnergyTracker

<a id="DampingEnergyTracker"></a>

### *class* DampingEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DampingEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#DampingEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#DampingEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DampingEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#DampingEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DampingEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DampingEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#DampingEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DampingEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DampingEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DampingEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DampingEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DampingEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DampingEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DampingEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DampingEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DampingEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DampingEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#DampingEnergyTracker.IsSolved)                                                                              | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#DampingEnergyTracker.BoundaryCondition)                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#DampingEnergyTracker.CutFrequency)                                                                      | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#DampingEnergyTracker.SectorNumber)                                                                      | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#DampingEnergyTracker.GeometrySelectionString)                                                | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#DampingEnergyTracker.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#DampingEnergyTracker.ReportedFrequency)                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#DampingEnergyTracker.Duration)                                                                              | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#DampingEnergyTracker.FilterMaximum)                                                                    | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#DampingEnergyTracker.FilterMinimum)                                                                    | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#DampingEnergyTracker.FrequencyAtMaximumAmplitude)                                        | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#DampingEnergyTracker.ImaginaryAtMaximumAmplitude)                                        | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#DampingEnergyTracker.MaximumAmplitude)                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#DampingEnergyTracker.MaximumFrequency)                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#DampingEnergyTracker.Maximum)                                                                                | Gets the Maximum.                                             |
| [`MinimumFrequency`](#DampingEnergyTracker.MinimumFrequency)                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#DampingEnergyTracker.Minimum)                                                                                | Gets the Minimum.                                             |
| [`PhaseAngle`](#DampingEnergyTracker.PhaseAngle)                                                                          | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#DampingEnergyTracker.RealAtMaximumAmplitude)                                                  | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#DampingEnergyTracker.RequestedFrequency)                                                          | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#DampingEnergyTracker.AccelerationType)                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#DampingEnergyTracker.ChartViewingStyle)                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#DampingEnergyTracker.SpatialResolution)                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#DampingEnergyTracker.NormalOrientation)                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#DampingEnergyTracker.CurvesAppearanceDisplay)                                                | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#DampingEnergyTracker.ResultChartType)                                                                | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#DampingEnergyTracker.DpfEvaluation)                                                                    | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#DampingEnergyTracker.ShearOrientation)                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#DampingEnergyTracker.TimeHistoryDisplay)                                                          | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#DampingEnergyTracker.VelocityType)                                                                      | Gets or sets the VelocityType.                                |
| [`Suppressed`](#DampingEnergyTracker.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#DampingEnergyTracker.EnhancedTracking)                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#DampingEnergyTracker.UseParentFrequencyRange)                                                | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#DampingEnergyTracker.Location)                                                                              | Gets or sets the Location.                                    |
| [`Children`](#DampingEnergyTracker.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#DampingEnergyTracker.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Images`](#DampingEnergyTracker.Images)                                                                                  | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DampingEnergyTracker.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DampingEnergyTracker.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import DampingEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="DampingEnergyTracker.InternalObject"></a>

### *property* DampingEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.DataModelObjectCategory"></a>

### *property* DampingEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.IsSolved"></a>

### *property* DampingEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ChartDimensions"></a>

### *property* DampingEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.BoundaryCondition"></a>

### *property* DampingEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.CutFrequency"></a>

### *property* DampingEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.SectorNumber"></a>

### *property* DampingEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.GeometrySelectionString"></a>

### *property* DampingEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.LoadStepNumber"></a>

### *property* DampingEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ReportedFrequency"></a>

### *property* DampingEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Duration"></a>

### *property* DampingEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.FilterMaximum"></a>

### *property* DampingEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.FilterMinimum"></a>

### *property* DampingEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* DampingEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* DampingEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.MaximumAmplitude"></a>

### *property* DampingEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.MaximumFrequency"></a>

### *property* DampingEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Maximum"></a>

### *property* DampingEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.MinimumFrequency"></a>

### *property* DampingEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Minimum"></a>

### *property* DampingEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.PhaseAngle"></a>

### *property* DampingEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* DampingEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.RequestedFrequency"></a>

### *property* DampingEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.AccelerationType"></a>

### *property* DampingEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ChartViewingStyle"></a>

### *property* DampingEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.DeformationType"></a>

### *property* DampingEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.FilterType"></a>

### *property* DampingEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.SpatialResolution"></a>

### *property* DampingEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.NormalOrientation"></a>

### *property* DampingEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* DampingEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ResultChartType"></a>

### *property* DampingEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.DpfEvaluation"></a>

### *property* DampingEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.XAxisValues"></a>

### *property* DampingEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ShearOrientation"></a>

### *property* DampingEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.StressStrainType"></a>

### *property* DampingEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.TimeHistoryDisplay"></a>

### *property* DampingEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.VelocityType"></a>

### *property* DampingEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Suppressed"></a>

### *property* DampingEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.EnhancedTracking"></a>

### *property* DampingEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.UseParentFrequencyRange"></a>

### *property* DampingEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.CoordinateSystem"></a>

### *property* DampingEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Spring"></a>

### *property* DampingEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Location"></a>

### *property* DampingEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Children"></a>

### *property* DampingEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Comments"></a>

### *property* DampingEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Images"></a>

### *property* DampingEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DampingEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Properties"></a>

### *property* DampingEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.VisibleProperties"></a>

### *property* DampingEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DampingEnergyTracker.ExportAnimation"></a>

### DampingEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.ClearGeneratedData"></a>

### DampingEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.EvaluateAllResults"></a>

### DampingEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.RenameBasedOnDefinition"></a>

### DampingEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Delete"></a>

### DampingEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.GetChildren"></a>

### DampingEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DampingEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.AddComment"></a>

### DampingEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.AddImage"></a>

### DampingEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Activate"></a>

### DampingEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.CopyTo"></a>

### DampingEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.Duplicate"></a>

### DampingEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.GroupAllSimilarChildren"></a>

### DampingEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.GroupSimilarObjects"></a>

### DampingEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.PropertyByName"></a>

### DampingEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.PropertyByAPIName"></a>

### DampingEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.CreateParameter"></a>

### DampingEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.GetParameter"></a>

### DampingEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DampingEnergyTracker.RemoveParameter"></a>

### DampingEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
