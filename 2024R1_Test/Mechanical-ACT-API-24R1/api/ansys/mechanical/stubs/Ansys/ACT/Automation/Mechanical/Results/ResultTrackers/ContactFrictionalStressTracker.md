# ContactFrictionalStressTracker

<a id="ContactFrictionalStressTracker"></a>

### *class* ContactFrictionalStressTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactFrictionalStressTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactFrictionalStressTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactFrictionalStressTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactFrictionalStressTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactFrictionalStressTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactFrictionalStressTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactFrictionalStressTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactFrictionalStressTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactFrictionalStressTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactFrictionalStressTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactFrictionalStressTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactFrictionalStressTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactFrictionalStressTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactFrictionalStressTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactFrictionalStressTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactFrictionalStressTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactFrictionalStressTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactFrictionalStressTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactFrictionalStressTracker.ContactSide)                                                              | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactFrictionalStressTracker.IsSolved)                                                                    | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactFrictionalStressTracker.BoundaryCondition)                                                  | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactFrictionalStressTracker.CutFrequency)                                                            | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactFrictionalStressTracker.SectorNumber)                                                            | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactFrictionalStressTracker.GeometrySelectionString)                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactFrictionalStressTracker.LoadStepNumber)                                                        | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactFrictionalStressTracker.ReportedFrequency)                                                  | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactFrictionalStressTracker.Duration)                                                                    | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactFrictionalStressTracker.FilterMaximum)                                                          | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactFrictionalStressTracker.FilterMinimum)                                                          | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactFrictionalStressTracker.FrequencyAtMaximumAmplitude)                              | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactFrictionalStressTracker.ImaginaryAtMaximumAmplitude)                              | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactFrictionalStressTracker.MaximumAmplitude)                                                    | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactFrictionalStressTracker.MaximumFrequency)                                                    | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactFrictionalStressTracker.Maximum)                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactFrictionalStressTracker.MinimumFrequency)                                                    | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactFrictionalStressTracker.Minimum)                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactFrictionalStressTracker.PhaseAngle)                                                                | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactFrictionalStressTracker.RealAtMaximumAmplitude)                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactFrictionalStressTracker.RequestedFrequency)                                                | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactFrictionalStressTracker.AccelerationType)                                                    | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactFrictionalStressTracker.ChartViewingStyle)                                                  | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactFrictionalStressTracker.SpatialResolution)                                                  | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactFrictionalStressTracker.NormalOrientation)                                                  | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactFrictionalStressTracker.CurvesAppearanceDisplay)                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactFrictionalStressTracker.ResultChartType)                                                      | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactFrictionalStressTracker.DpfEvaluation)                                                          | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactFrictionalStressTracker.ShearOrientation)                                                    | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactFrictionalStressTracker.TimeHistoryDisplay)                                                | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactFrictionalStressTracker.VelocityType)                                                            | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactFrictionalStressTracker.Suppressed)                                                                | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactFrictionalStressTracker.EnhancedTracking)                                                    | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactFrictionalStressTracker.UseParentFrequencyRange)                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactFrictionalStressTracker.Location)                                                                    | Gets or sets the Location.                                    |
| [`Children`](#ContactFrictionalStressTracker.Children)                                                                    | Gets the list of children.                                    |
| [`Comments`](#ContactFrictionalStressTracker.Comments)                                                                    | Gets the list of associated comments.                         |
| [`Images`](#ContactFrictionalStressTracker.Images)                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactFrictionalStressTracker.Properties)                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactFrictionalStressTracker.VisibleProperties)                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactFrictionalStressTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactFrictionalStressTracker.InternalObject"></a>

### *property* ContactFrictionalStressTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ContactSide"></a>

### *property* ContactFrictionalStressTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ContactRegion"></a>

### *property* ContactFrictionalStressTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.DataModelObjectCategory"></a>

### *property* ContactFrictionalStressTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.IsSolved"></a>

### *property* ContactFrictionalStressTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ChartDimensions"></a>

### *property* ContactFrictionalStressTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.BoundaryCondition"></a>

### *property* ContactFrictionalStressTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.CutFrequency"></a>

### *property* ContactFrictionalStressTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.SectorNumber"></a>

### *property* ContactFrictionalStressTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.GeometrySelectionString"></a>

### *property* ContactFrictionalStressTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.LoadStepNumber"></a>

### *property* ContactFrictionalStressTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ReportedFrequency"></a>

### *property* ContactFrictionalStressTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Duration"></a>

### *property* ContactFrictionalStressTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.FilterMaximum"></a>

### *property* ContactFrictionalStressTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.FilterMinimum"></a>

### *property* ContactFrictionalStressTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactFrictionalStressTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactFrictionalStressTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.MaximumAmplitude"></a>

### *property* ContactFrictionalStressTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.MaximumFrequency"></a>

### *property* ContactFrictionalStressTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Maximum"></a>

### *property* ContactFrictionalStressTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.MinimumFrequency"></a>

### *property* ContactFrictionalStressTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Minimum"></a>

### *property* ContactFrictionalStressTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.PhaseAngle"></a>

### *property* ContactFrictionalStressTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.RealAtMaximumAmplitude"></a>

### *property* ContactFrictionalStressTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.RequestedFrequency"></a>

### *property* ContactFrictionalStressTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.AccelerationType"></a>

### *property* ContactFrictionalStressTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ChartViewingStyle"></a>

### *property* ContactFrictionalStressTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.DeformationType"></a>

### *property* ContactFrictionalStressTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.FilterType"></a>

### *property* ContactFrictionalStressTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.SpatialResolution"></a>

### *property* ContactFrictionalStressTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.NormalOrientation"></a>

### *property* ContactFrictionalStressTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.CurvesAppearanceDisplay"></a>

### *property* ContactFrictionalStressTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ResultChartType"></a>

### *property* ContactFrictionalStressTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.DpfEvaluation"></a>

### *property* ContactFrictionalStressTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.XAxisValues"></a>

### *property* ContactFrictionalStressTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ShearOrientation"></a>

### *property* ContactFrictionalStressTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.StressStrainType"></a>

### *property* ContactFrictionalStressTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.TimeHistoryDisplay"></a>

### *property* ContactFrictionalStressTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.VelocityType"></a>

### *property* ContactFrictionalStressTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Suppressed"></a>

### *property* ContactFrictionalStressTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.EnhancedTracking"></a>

### *property* ContactFrictionalStressTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.UseParentFrequencyRange"></a>

### *property* ContactFrictionalStressTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.CoordinateSystem"></a>

### *property* ContactFrictionalStressTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Spring"></a>

### *property* ContactFrictionalStressTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Location"></a>

### *property* ContactFrictionalStressTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Children"></a>

### *property* ContactFrictionalStressTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Comments"></a>

### *property* ContactFrictionalStressTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Images"></a>

### *property* ContactFrictionalStressTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactFrictionalStressTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Properties"></a>

### *property* ContactFrictionalStressTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.VisibleProperties"></a>

### *property* ContactFrictionalStressTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactFrictionalStressTracker.ExportAnimation"></a>

### ContactFrictionalStressTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.ClearGeneratedData"></a>

### ContactFrictionalStressTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.EvaluateAllResults"></a>

### ContactFrictionalStressTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.RenameBasedOnDefinition"></a>

### ContactFrictionalStressTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Delete"></a>

### ContactFrictionalStressTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.GetChildren"></a>

### ContactFrictionalStressTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactFrictionalStressTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.AddComment"></a>

### ContactFrictionalStressTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.AddImage"></a>

### ContactFrictionalStressTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Activate"></a>

### ContactFrictionalStressTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.CopyTo"></a>

### ContactFrictionalStressTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.Duplicate"></a>

### ContactFrictionalStressTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.GroupAllSimilarChildren"></a>

### ContactFrictionalStressTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.GroupSimilarObjects"></a>

### ContactFrictionalStressTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.PropertyByName"></a>

### ContactFrictionalStressTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.PropertyByAPIName"></a>

### ContactFrictionalStressTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.CreateParameter"></a>

### ContactFrictionalStressTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.GetParameter"></a>

### ContactFrictionalStressTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalStressTracker.RemoveParameter"></a>

### ContactFrictionalStressTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
