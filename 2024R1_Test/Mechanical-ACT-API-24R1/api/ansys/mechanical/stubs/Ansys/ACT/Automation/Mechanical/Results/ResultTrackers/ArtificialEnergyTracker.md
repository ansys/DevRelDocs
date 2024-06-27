# ArtificialEnergyTracker

<a id="ArtificialEnergyTracker"></a>

### *class* ArtificialEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ArtificialEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ArtificialEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ArtificialEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ArtificialEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ArtificialEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ArtificialEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ArtificialEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ArtificialEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ArtificialEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ArtificialEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ArtificialEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ArtificialEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ArtificialEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ArtificialEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ArtificialEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ArtificialEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ArtificialEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ArtificialEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ArtificialEnergyTracker.IsSolved)                                                                           | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ArtificialEnergyTracker.BoundaryCondition)                                                         | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ArtificialEnergyTracker.CutFrequency)                                                                   | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ArtificialEnergyTracker.SectorNumber)                                                                   | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ArtificialEnergyTracker.GeometrySelectionString)                                             | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ArtificialEnergyTracker.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ArtificialEnergyTracker.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                   |
| [`Duration`](#ArtificialEnergyTracker.Duration)                                                                           | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ArtificialEnergyTracker.FilterMaximum)                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ArtificialEnergyTracker.FilterMinimum)                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ArtificialEnergyTracker.FrequencyAtMaximumAmplitude)                                     | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ArtificialEnergyTracker.ImaginaryAtMaximumAmplitude)                                     | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ArtificialEnergyTracker.MaximumAmplitude)                                                           | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ArtificialEnergyTracker.MaximumFrequency)                                                           | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ArtificialEnergyTracker.Maximum)                                                                             | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ArtificialEnergyTracker.MinimumFrequency)                                                           | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ArtificialEnergyTracker.Minimum)                                                                             | Gets the Minimum.                                             |
| [`PhaseAngle`](#ArtificialEnergyTracker.PhaseAngle)                                                                       | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ArtificialEnergyTracker.RealAtMaximumAmplitude)                                               | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ArtificialEnergyTracker.RequestedFrequency)                                                       | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ArtificialEnergyTracker.AccelerationType)                                                           | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ArtificialEnergyTracker.ChartViewingStyle)                                                         | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ArtificialEnergyTracker.SpatialResolution)                                                         | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ArtificialEnergyTracker.NormalOrientation)                                                         | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ArtificialEnergyTracker.CurvesAppearanceDisplay)                                             | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ArtificialEnergyTracker.ResultChartType)                                                             | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ArtificialEnergyTracker.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ArtificialEnergyTracker.ShearOrientation)                                                           | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ArtificialEnergyTracker.TimeHistoryDisplay)                                                       | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ArtificialEnergyTracker.VelocityType)                                                                   | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ArtificialEnergyTracker.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ArtificialEnergyTracker.EnhancedTracking)                                                           | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ArtificialEnergyTracker.UseParentFrequencyRange)                                             | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ArtificialEnergyTracker.Location)                                                                           | Gets or sets the Location.                                    |
| [`Children`](#ArtificialEnergyTracker.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#ArtificialEnergyTracker.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Images`](#ArtificialEnergyTracker.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ArtificialEnergyTracker.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ArtificialEnergyTracker.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ArtificialEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ArtificialEnergyTracker.InternalObject"></a>

### *property* ArtificialEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.DataModelObjectCategory"></a>

### *property* ArtificialEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.IsSolved"></a>

### *property* ArtificialEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ChartDimensions"></a>

### *property* ArtificialEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.BoundaryCondition"></a>

### *property* ArtificialEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.CutFrequency"></a>

### *property* ArtificialEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.SectorNumber"></a>

### *property* ArtificialEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.GeometrySelectionString"></a>

### *property* ArtificialEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.LoadStepNumber"></a>

### *property* ArtificialEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ReportedFrequency"></a>

### *property* ArtificialEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Duration"></a>

### *property* ArtificialEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.FilterMaximum"></a>

### *property* ArtificialEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.FilterMinimum"></a>

### *property* ArtificialEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ArtificialEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ArtificialEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.MaximumAmplitude"></a>

### *property* ArtificialEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.MaximumFrequency"></a>

### *property* ArtificialEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Maximum"></a>

### *property* ArtificialEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.MinimumFrequency"></a>

### *property* ArtificialEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Minimum"></a>

### *property* ArtificialEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.PhaseAngle"></a>

### *property* ArtificialEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* ArtificialEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.RequestedFrequency"></a>

### *property* ArtificialEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.AccelerationType"></a>

### *property* ArtificialEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ChartViewingStyle"></a>

### *property* ArtificialEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.DeformationType"></a>

### *property* ArtificialEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.FilterType"></a>

### *property* ArtificialEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.SpatialResolution"></a>

### *property* ArtificialEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.NormalOrientation"></a>

### *property* ArtificialEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* ArtificialEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ResultChartType"></a>

### *property* ArtificialEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.DpfEvaluation"></a>

### *property* ArtificialEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.XAxisValues"></a>

### *property* ArtificialEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ShearOrientation"></a>

### *property* ArtificialEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.StressStrainType"></a>

### *property* ArtificialEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.TimeHistoryDisplay"></a>

### *property* ArtificialEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.VelocityType"></a>

### *property* ArtificialEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Suppressed"></a>

### *property* ArtificialEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.EnhancedTracking"></a>

### *property* ArtificialEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.UseParentFrequencyRange"></a>

### *property* ArtificialEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.CoordinateSystem"></a>

### *property* ArtificialEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Spring"></a>

### *property* ArtificialEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Location"></a>

### *property* ArtificialEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Children"></a>

### *property* ArtificialEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Comments"></a>

### *property* ArtificialEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Images"></a>

### *property* ArtificialEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ArtificialEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Properties"></a>

### *property* ArtificialEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.VisibleProperties"></a>

### *property* ArtificialEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ArtificialEnergyTracker.ExportAnimation"></a>

### ArtificialEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.ClearGeneratedData"></a>

### ArtificialEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.EvaluateAllResults"></a>

### ArtificialEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.RenameBasedOnDefinition"></a>

### ArtificialEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Delete"></a>

### ArtificialEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.GetChildren"></a>

### ArtificialEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ArtificialEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.AddComment"></a>

### ArtificialEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.AddImage"></a>

### ArtificialEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Activate"></a>

### ArtificialEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.CopyTo"></a>

### ArtificialEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.Duplicate"></a>

### ArtificialEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.GroupAllSimilarChildren"></a>

### ArtificialEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.GroupSimilarObjects"></a>

### ArtificialEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.PropertyByName"></a>

### ArtificialEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.PropertyByAPIName"></a>

### ArtificialEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.CreateParameter"></a>

### ArtificialEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.GetParameter"></a>

### ArtificialEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ArtificialEnergyTracker.RemoveParameter"></a>

### ArtificialEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
