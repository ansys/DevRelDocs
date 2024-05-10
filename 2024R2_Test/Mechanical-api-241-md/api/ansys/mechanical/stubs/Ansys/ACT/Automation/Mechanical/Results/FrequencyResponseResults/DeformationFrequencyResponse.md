<a id="deformationfrequencyresponse"></a>

# DeformationFrequencyResponse

<a id="DeformationFrequencyResponse"></a>

### *class* DeformationFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DeformationFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#DeformationFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DeformationFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DeformationFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#DeformationFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DeformationFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DeformationFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#DeformationFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DeformationFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DeformationFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DeformationFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DeformationFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DeformationFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DeformationFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DeformationFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DeformationFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DeformationFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DeformationFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                                                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#DeformationFrequencyResponse.RemotePointSelection)                                              | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#DeformationFrequencyResponse.IsSolved)                                                                      | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#DeformationFrequencyResponse.BoundaryCondition)                                                    | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#DeformationFrequencyResponse.CutFrequency)                                                              | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#DeformationFrequencyResponse.SectorNumber)                                                              | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#DeformationFrequencyResponse.GeometrySelectionString)                                        | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#DeformationFrequencyResponse.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#DeformationFrequencyResponse.ReportedFrequency)                                                    | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#DeformationFrequencyResponse.Duration)                                                                      | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#DeformationFrequencyResponse.FilterMaximum)                                                            | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#DeformationFrequencyResponse.FilterMinimum)                                                            | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#DeformationFrequencyResponse.FrequencyAtMaximumAmplitude)                                | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#DeformationFrequencyResponse.ImaginaryAtMaximumAmplitude)                                | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#DeformationFrequencyResponse.MaximumAmplitude)                                                      | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#DeformationFrequencyResponse.MaximumFrequency)                                                      | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#DeformationFrequencyResponse.Maximum)                                                                        | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#DeformationFrequencyResponse.MinimumFrequency)                                                      | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#DeformationFrequencyResponse.Minimum)                                                                        | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#DeformationFrequencyResponse.PhaseAngle)                                                                  | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#DeformationFrequencyResponse.RealAtMaximumAmplitude)                                          | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#DeformationFrequencyResponse.RequestedFrequency)                                                  | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#DeformationFrequencyResponse.AccelerationType)                                                      | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#DeformationFrequencyResponse.ChartViewingStyle)                                                    | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#DeformationFrequencyResponse.SpatialResolution)                                                    | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#DeformationFrequencyResponse.NormalOrientation)                                                    | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#DeformationFrequencyResponse.CurvesAppearanceDisplay)                                        | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#DeformationFrequencyResponse.ResultChartType)                                                        | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#DeformationFrequencyResponse.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#DeformationFrequencyResponse.ShearOrientation)                                                      | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#DeformationFrequencyResponse.TimeHistoryDisplay)                                                  | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#DeformationFrequencyResponse.VelocityType)                                                              | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#DeformationFrequencyResponse.Suppressed)                                                                  | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#DeformationFrequencyResponse.EnhancedTracking)                                                      | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#DeformationFrequencyResponse.UseParentFrequencyRange)                                        | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#DeformationFrequencyResponse.Location)                                                                      | Gets or sets the Location.                                                                       |
| [`Children`](#DeformationFrequencyResponse.Children)                                                                      | Gets the list of children.                                                                       |
| [`Comments`](#DeformationFrequencyResponse.Comments)                                                                      | Gets the list of associated comments.                                                            |
| [`Images`](#DeformationFrequencyResponse.Images)                                                                          | Gets the list of associated images.                                                              |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#DeformationFrequencyResponse.Properties)                                                                  | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#DeformationFrequencyResponse.VisibleProperties)                                                    | Gets the list of properties that are visible for this object.                                    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import DeformationFrequencyResponse
```

<a id="property-detail"></a>

## Property detail

<a id="DeformationFrequencyResponse.InternalObject"></a>

### *property* DeformationFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ContactRegion"></a>

### *property* DeformationFrequencyResponse.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.DataModelObjectCategory"></a>

### *property* DeformationFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.CoordinateSystem"></a>

### *property* DeformationFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.RemotePointSelection"></a>

### *property* DeformationFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.IsSolved"></a>

### *property* DeformationFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ChartDimensions"></a>

### *property* DeformationFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.BoundaryCondition"></a>

### *property* DeformationFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.CutFrequency"></a>

### *property* DeformationFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.SectorNumber"></a>

### *property* DeformationFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.GeometrySelectionString"></a>

### *property* DeformationFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.LoadStepNumber"></a>

### *property* DeformationFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ReportedFrequency"></a>

### *property* DeformationFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Duration"></a>

### *property* DeformationFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.FilterMaximum"></a>

### *property* DeformationFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.FilterMinimum"></a>

### *property* DeformationFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* DeformationFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* DeformationFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.MaximumAmplitude"></a>

### *property* DeformationFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.MaximumFrequency"></a>

### *property* DeformationFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Maximum"></a>

### *property* DeformationFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.MinimumFrequency"></a>

### *property* DeformationFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Minimum"></a>

### *property* DeformationFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.PhaseAngle"></a>

### *property* DeformationFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* DeformationFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.RequestedFrequency"></a>

### *property* DeformationFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.AccelerationType"></a>

### *property* DeformationFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ChartViewingStyle"></a>

### *property* DeformationFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.DeformationType"></a>

### *property* DeformationFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.FilterType"></a>

### *property* DeformationFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.SpatialResolution"></a>

### *property* DeformationFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.NormalOrientation"></a>

### *property* DeformationFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* DeformationFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ResultChartType"></a>

### *property* DeformationFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.DpfEvaluation"></a>

### *property* DeformationFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.XAxisValues"></a>

### *property* DeformationFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ShearOrientation"></a>

### *property* DeformationFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.StressStrainType"></a>

### *property* DeformationFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.TimeHistoryDisplay"></a>

### *property* DeformationFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.VelocityType"></a>

### *property* DeformationFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Suppressed"></a>

### *property* DeformationFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.EnhancedTracking"></a>

### *property* DeformationFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.UseParentFrequencyRange"></a>

### *property* DeformationFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Spring"></a>

### *property* DeformationFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Location"></a>

### *property* DeformationFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Children"></a>

### *property* DeformationFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Comments"></a>

### *property* DeformationFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Images"></a>

### *property* DeformationFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DeformationFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Properties"></a>

### *property* DeformationFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.VisibleProperties"></a>

### *property* DeformationFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DeformationFrequencyResponse.ExportAnimation"></a>

### DeformationFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.ClearGeneratedData"></a>

### DeformationFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.EvaluateAllResults"></a>

### DeformationFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.RenameBasedOnDefinition"></a>

### DeformationFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Delete"></a>

### DeformationFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.GetChildren"></a>

### DeformationFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DeformationFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.AddComment"></a>

### DeformationFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.AddImage"></a>

### DeformationFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Activate"></a>

### DeformationFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.CopyTo"></a>

### DeformationFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.Duplicate"></a>

### DeformationFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.GroupAllSimilarChildren"></a>

### DeformationFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.GroupSimilarObjects"></a>

### DeformationFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.PropertyByName"></a>

### DeformationFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.PropertyByAPIName"></a>

### DeformationFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.CreateParameter"></a>

### DeformationFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.GetParameter"></a>

### DeformationFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationFrequencyResponse.RemoveParameter"></a>

### DeformationFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
