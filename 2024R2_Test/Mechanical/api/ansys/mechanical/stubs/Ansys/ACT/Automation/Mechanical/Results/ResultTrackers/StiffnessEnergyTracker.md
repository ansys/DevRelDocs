<a id="stiffnessenergytracker"></a>

# StiffnessEnergyTracker

<a id="StiffnessEnergyTracker"></a>

### *class* StiffnessEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StiffnessEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#StiffnessEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#StiffnessEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#StiffnessEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#StiffnessEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#StiffnessEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StiffnessEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#StiffnessEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StiffnessEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StiffnessEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StiffnessEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StiffnessEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StiffnessEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StiffnessEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StiffnessEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#StiffnessEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#StiffnessEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StiffnessEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#StiffnessEnergyTracker.IsSolved)                                                                            | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#StiffnessEnergyTracker.BoundaryCondition)                                                          | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#StiffnessEnergyTracker.CutFrequency)                                                                    | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#StiffnessEnergyTracker.SectorNumber)                                                                    | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#StiffnessEnergyTracker.GeometrySelectionString)                                              | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#StiffnessEnergyTracker.LoadStepNumber)                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#StiffnessEnergyTracker.ReportedFrequency)                                                          | Gets the ReportedFrequency.                                   |
| [`Duration`](#StiffnessEnergyTracker.Duration)                                                                            | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#StiffnessEnergyTracker.FilterMaximum)                                                                  | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#StiffnessEnergyTracker.FilterMinimum)                                                                  | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#StiffnessEnergyTracker.FrequencyAtMaximumAmplitude)                                      | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#StiffnessEnergyTracker.ImaginaryAtMaximumAmplitude)                                      | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#StiffnessEnergyTracker.MaximumAmplitude)                                                            | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#StiffnessEnergyTracker.MaximumFrequency)                                                            | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#StiffnessEnergyTracker.Maximum)                                                                              | Gets the Maximum.                                             |
| [`MinimumFrequency`](#StiffnessEnergyTracker.MinimumFrequency)                                                            | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#StiffnessEnergyTracker.Minimum)                                                                              | Gets the Minimum.                                             |
| [`PhaseAngle`](#StiffnessEnergyTracker.PhaseAngle)                                                                        | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#StiffnessEnergyTracker.RealAtMaximumAmplitude)                                                | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#StiffnessEnergyTracker.RequestedFrequency)                                                        | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#StiffnessEnergyTracker.AccelerationType)                                                            | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#StiffnessEnergyTracker.ChartViewingStyle)                                                          | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#StiffnessEnergyTracker.SpatialResolution)                                                          | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#StiffnessEnergyTracker.NormalOrientation)                                                          | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#StiffnessEnergyTracker.CurvesAppearanceDisplay)                                              | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#StiffnessEnergyTracker.ResultChartType)                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#StiffnessEnergyTracker.DpfEvaluation)                                                                  | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#StiffnessEnergyTracker.ShearOrientation)                                                            | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#StiffnessEnergyTracker.TimeHistoryDisplay)                                                        | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#StiffnessEnergyTracker.VelocityType)                                                                    | Gets or sets the VelocityType.                                |
| [`Suppressed`](#StiffnessEnergyTracker.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#StiffnessEnergyTracker.EnhancedTracking)                                                            | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#StiffnessEnergyTracker.UseParentFrequencyRange)                                              | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#StiffnessEnergyTracker.Location)                                                                            | Gets or sets the Location.                                    |
| [`Children`](#StiffnessEnergyTracker.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#StiffnessEnergyTracker.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Images`](#StiffnessEnergyTracker.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#StiffnessEnergyTracker.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#StiffnessEnergyTracker.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import StiffnessEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="StiffnessEnergyTracker.InternalObject"></a>

### *property* StiffnessEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.DataModelObjectCategory"></a>

### *property* StiffnessEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.IsSolved"></a>

### *property* StiffnessEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ChartDimensions"></a>

### *property* StiffnessEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.BoundaryCondition"></a>

### *property* StiffnessEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.CutFrequency"></a>

### *property* StiffnessEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.SectorNumber"></a>

### *property* StiffnessEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.GeometrySelectionString"></a>

### *property* StiffnessEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.LoadStepNumber"></a>

### *property* StiffnessEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ReportedFrequency"></a>

### *property* StiffnessEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Duration"></a>

### *property* StiffnessEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.FilterMaximum"></a>

### *property* StiffnessEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.FilterMinimum"></a>

### *property* StiffnessEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* StiffnessEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* StiffnessEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.MaximumAmplitude"></a>

### *property* StiffnessEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.MaximumFrequency"></a>

### *property* StiffnessEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Maximum"></a>

### *property* StiffnessEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.MinimumFrequency"></a>

### *property* StiffnessEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Minimum"></a>

### *property* StiffnessEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.PhaseAngle"></a>

### *property* StiffnessEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* StiffnessEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.RequestedFrequency"></a>

### *property* StiffnessEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.AccelerationType"></a>

### *property* StiffnessEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ChartViewingStyle"></a>

### *property* StiffnessEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.DeformationType"></a>

### *property* StiffnessEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.FilterType"></a>

### *property* StiffnessEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.SpatialResolution"></a>

### *property* StiffnessEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.NormalOrientation"></a>

### *property* StiffnessEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* StiffnessEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ResultChartType"></a>

### *property* StiffnessEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.DpfEvaluation"></a>

### *property* StiffnessEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.XAxisValues"></a>

### *property* StiffnessEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ShearOrientation"></a>

### *property* StiffnessEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.StressStrainType"></a>

### *property* StiffnessEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.TimeHistoryDisplay"></a>

### *property* StiffnessEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.VelocityType"></a>

### *property* StiffnessEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Suppressed"></a>

### *property* StiffnessEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.EnhancedTracking"></a>

### *property* StiffnessEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.UseParentFrequencyRange"></a>

### *property* StiffnessEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.CoordinateSystem"></a>

### *property* StiffnessEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Spring"></a>

### *property* StiffnessEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Location"></a>

### *property* StiffnessEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Children"></a>

### *property* StiffnessEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Comments"></a>

### *property* StiffnessEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Images"></a>

### *property* StiffnessEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StiffnessEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Properties"></a>

### *property* StiffnessEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.VisibleProperties"></a>

### *property* StiffnessEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StiffnessEnergyTracker.ExportAnimation"></a>

### StiffnessEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.ClearGeneratedData"></a>

### StiffnessEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.EvaluateAllResults"></a>

### StiffnessEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.RenameBasedOnDefinition"></a>

### StiffnessEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Delete"></a>

### StiffnessEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.GetChildren"></a>

### StiffnessEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StiffnessEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.AddComment"></a>

### StiffnessEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.AddImage"></a>

### StiffnessEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Activate"></a>

### StiffnessEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.CopyTo"></a>

### StiffnessEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.Duplicate"></a>

### StiffnessEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.GroupAllSimilarChildren"></a>

### StiffnessEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.GroupSimilarObjects"></a>

### StiffnessEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.PropertyByName"></a>

### StiffnessEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.PropertyByAPIName"></a>

### StiffnessEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.CreateParameter"></a>

### StiffnessEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.GetParameter"></a>

### StiffnessEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StiffnessEnergyTracker.RemoveParameter"></a>

### StiffnessEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
