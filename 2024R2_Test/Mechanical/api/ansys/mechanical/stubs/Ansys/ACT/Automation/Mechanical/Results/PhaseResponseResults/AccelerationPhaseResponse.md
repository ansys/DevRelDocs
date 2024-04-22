<a id="accelerationphaseresponse"></a>

# AccelerationPhaseResponse

<a id="AccelerationPhaseResponse"></a>

### *class* AccelerationPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AccelerationPhaseResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#AccelerationPhaseResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#AccelerationPhaseResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AccelerationPhaseResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AccelerationPhaseResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AccelerationPhaseResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AccelerationPhaseResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AccelerationPhaseResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AccelerationPhaseResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AccelerationPhaseResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AccelerationPhaseResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AccelerationPhaseResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AccelerationPhaseResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AccelerationPhaseResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AccelerationPhaseResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AccelerationPhaseResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AccelerationPhaseResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AccelerationPhaseResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AccelerationPhaseResponse.IsSolved)                                                                         | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AccelerationPhaseResponse.BoundaryCondition)                                                       | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AccelerationPhaseResponse.CutFrequency)                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AccelerationPhaseResponse.SectorNumber)                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AccelerationPhaseResponse.GeometrySelectionString)                                           | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AccelerationPhaseResponse.LoadStepNumber)                                                             | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AccelerationPhaseResponse.ReportedFrequency)                                                       | Gets the ReportedFrequency.                                   |
| [`Duration`](#AccelerationPhaseResponse.Duration)                                                                         | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AccelerationPhaseResponse.FilterMaximum)                                                               | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AccelerationPhaseResponse.FilterMinimum)                                                               | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AccelerationPhaseResponse.FrequencyAtMaximumAmplitude)                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AccelerationPhaseResponse.ImaginaryAtMaximumAmplitude)                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AccelerationPhaseResponse.MaximumAmplitude)                                                         | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AccelerationPhaseResponse.MaximumFrequency)                                                         | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AccelerationPhaseResponse.Maximum)                                                                           | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AccelerationPhaseResponse.MinimumFrequency)                                                         | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AccelerationPhaseResponse.Minimum)                                                                           | Gets the Minimum.                                             |
| [`PhaseAngle`](#AccelerationPhaseResponse.PhaseAngle)                                                                     | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AccelerationPhaseResponse.RealAtMaximumAmplitude)                                             | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AccelerationPhaseResponse.RequestedFrequency)                                                     | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AccelerationPhaseResponse.AccelerationType)                                                         | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AccelerationPhaseResponse.ChartViewingStyle)                                                       | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AccelerationPhaseResponse.SpatialResolution)                                                       | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AccelerationPhaseResponse.NormalOrientation)                                                       | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AccelerationPhaseResponse.CurvesAppearanceDisplay)                                           | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AccelerationPhaseResponse.ResultChartType)                                                           | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AccelerationPhaseResponse.DpfEvaluation)                                                               | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AccelerationPhaseResponse.ShearOrientation)                                                         | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AccelerationPhaseResponse.TimeHistoryDisplay)                                                     | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AccelerationPhaseResponse.VelocityType)                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AccelerationPhaseResponse.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AccelerationPhaseResponse.EnhancedTracking)                                                         | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AccelerationPhaseResponse.UseParentFrequencyRange)                                           | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#AccelerationPhaseResponse.Location)                                                                         | Gets or sets the Location.                                    |
| [`Children`](#AccelerationPhaseResponse.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#AccelerationPhaseResponse.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Images`](#AccelerationPhaseResponse.Images)                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AccelerationPhaseResponse.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AccelerationPhaseResponse.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import AccelerationPhaseResponse
```

<a id="property-detail"></a>

## Property detail

<a id="AccelerationPhaseResponse.InternalObject"></a>

### *property* AccelerationPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ContactRegion"></a>

### *property* AccelerationPhaseResponse.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.DataModelObjectCategory"></a>

### *property* AccelerationPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.IsSolved"></a>

### *property* AccelerationPhaseResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ChartDimensions"></a>

### *property* AccelerationPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.BoundaryCondition"></a>

### *property* AccelerationPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CutFrequency"></a>

### *property* AccelerationPhaseResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.SectorNumber"></a>

### *property* AccelerationPhaseResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GeometrySelectionString"></a>

### *property* AccelerationPhaseResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.LoadStepNumber"></a>

### *property* AccelerationPhaseResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ReportedFrequency"></a>

### *property* AccelerationPhaseResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Duration"></a>

### *property* AccelerationPhaseResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FilterMaximum"></a>

### *property* AccelerationPhaseResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FilterMinimum"></a>

### *property* AccelerationPhaseResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.MaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.MaximumFrequency"></a>

### *property* AccelerationPhaseResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Maximum"></a>

### *property* AccelerationPhaseResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.MinimumFrequency"></a>

### *property* AccelerationPhaseResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Minimum"></a>

### *property* AccelerationPhaseResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PhaseAngle"></a>

### *property* AccelerationPhaseResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RealAtMaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RequestedFrequency"></a>

### *property* AccelerationPhaseResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.AccelerationType"></a>

### *property* AccelerationPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ChartViewingStyle"></a>

### *property* AccelerationPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.DeformationType"></a>

### *property* AccelerationPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FilterType"></a>

### *property* AccelerationPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.SpatialResolution"></a>

### *property* AccelerationPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.NormalOrientation"></a>

### *property* AccelerationPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CurvesAppearanceDisplay"></a>

### *property* AccelerationPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ResultChartType"></a>

### *property* AccelerationPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.DpfEvaluation"></a>

### *property* AccelerationPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.XAxisValues"></a>

### *property* AccelerationPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ShearOrientation"></a>

### *property* AccelerationPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.StressStrainType"></a>

### *property* AccelerationPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.TimeHistoryDisplay"></a>

### *property* AccelerationPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.VelocityType"></a>

### *property* AccelerationPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Suppressed"></a>

### *property* AccelerationPhaseResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.EnhancedTracking"></a>

### *property* AccelerationPhaseResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.UseParentFrequencyRange"></a>

### *property* AccelerationPhaseResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CoordinateSystem"></a>

### *property* AccelerationPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Spring"></a>

### *property* AccelerationPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Location"></a>

### *property* AccelerationPhaseResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Children"></a>

### *property* AccelerationPhaseResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Comments"></a>

### *property* AccelerationPhaseResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Images"></a>

### *property* AccelerationPhaseResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AccelerationPhaseResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Properties"></a>

### *property* AccelerationPhaseResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.VisibleProperties"></a>

### *property* AccelerationPhaseResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AccelerationPhaseResponse.ExportAnimation"></a>

### AccelerationPhaseResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ClearGeneratedData"></a>

### AccelerationPhaseResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.EvaluateAllResults"></a>

### AccelerationPhaseResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RenameBasedOnDefinition"></a>

### AccelerationPhaseResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Delete"></a>

### AccelerationPhaseResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetChildren"></a>

### AccelerationPhaseResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AccelerationPhaseResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.AddComment"></a>

### AccelerationPhaseResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.AddImage"></a>

### AccelerationPhaseResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Activate"></a>

### AccelerationPhaseResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CopyTo"></a>

### AccelerationPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Duplicate"></a>

### AccelerationPhaseResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GroupAllSimilarChildren"></a>

### AccelerationPhaseResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GroupSimilarObjects"></a>

### AccelerationPhaseResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PropertyByName"></a>

### AccelerationPhaseResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PropertyByAPIName"></a>

### AccelerationPhaseResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CreateParameter"></a>

### AccelerationPhaseResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetParameter"></a>

### AccelerationPhaseResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RemoveParameter"></a>

### AccelerationPhaseResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
