<a id="contactmaximumtangentialstiffnesstracker"></a>

# ContactMaximumTangentialStiffnessTracker

<a id="ContactMaximumTangentialStiffnessTracker"></a>

### *class* ContactMaximumTangentialStiffnessTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMaximumTangentialStiffnessTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactMaximumTangentialStiffnessTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactMaximumTangentialStiffnessTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactMaximumTangentialStiffnessTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactMaximumTangentialStiffnessTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactMaximumTangentialStiffnessTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMaximumTangentialStiffnessTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactMaximumTangentialStiffnessTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactMaximumTangentialStiffnessTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactMaximumTangentialStiffnessTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMaximumTangentialStiffnessTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMaximumTangentialStiffnessTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMaximumTangentialStiffnessTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMaximumTangentialStiffnessTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMaximumTangentialStiffnessTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMaximumTangentialStiffnessTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMaximumTangentialStiffnessTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMaximumTangentialStiffnessTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactMaximumTangentialStiffnessTracker.ContactSide)                                                    | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactMaximumTangentialStiffnessTracker.IsSolved)                                                          | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactMaximumTangentialStiffnessTracker.BoundaryCondition)                                        | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactMaximumTangentialStiffnessTracker.CutFrequency)                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactMaximumTangentialStiffnessTracker.SectorNumber)                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactMaximumTangentialStiffnessTracker.GeometrySelectionString)                            | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactMaximumTangentialStiffnessTracker.LoadStepNumber)                                              | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactMaximumTangentialStiffnessTracker.ReportedFrequency)                                        | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactMaximumTangentialStiffnessTracker.Duration)                                                          | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactMaximumTangentialStiffnessTracker.FilterMaximum)                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactMaximumTangentialStiffnessTracker.FilterMinimum)                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactMaximumTangentialStiffnessTracker.FrequencyAtMaximumAmplitude)                    | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactMaximumTangentialStiffnessTracker.ImaginaryAtMaximumAmplitude)                    | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactMaximumTangentialStiffnessTracker.MaximumAmplitude)                                          | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactMaximumTangentialStiffnessTracker.MaximumFrequency)                                          | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactMaximumTangentialStiffnessTracker.Maximum)                                                            | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactMaximumTangentialStiffnessTracker.MinimumFrequency)                                          | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactMaximumTangentialStiffnessTracker.Minimum)                                                            | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactMaximumTangentialStiffnessTracker.PhaseAngle)                                                      | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactMaximumTangentialStiffnessTracker.RealAtMaximumAmplitude)                              | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactMaximumTangentialStiffnessTracker.RequestedFrequency)                                      | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactMaximumTangentialStiffnessTracker.AccelerationType)                                          | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactMaximumTangentialStiffnessTracker.ChartViewingStyle)                                        | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactMaximumTangentialStiffnessTracker.SpatialResolution)                                        | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactMaximumTangentialStiffnessTracker.NormalOrientation)                                        | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactMaximumTangentialStiffnessTracker.CurvesAppearanceDisplay)                            | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactMaximumTangentialStiffnessTracker.ResultChartType)                                            | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactMaximumTangentialStiffnessTracker.DpfEvaluation)                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactMaximumTangentialStiffnessTracker.ShearOrientation)                                          | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactMaximumTangentialStiffnessTracker.TimeHistoryDisplay)                                      | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactMaximumTangentialStiffnessTracker.VelocityType)                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactMaximumTangentialStiffnessTracker.Suppressed)                                                      | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactMaximumTangentialStiffnessTracker.EnhancedTracking)                                          | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactMaximumTangentialStiffnessTracker.UseParentFrequencyRange)                            | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactMaximumTangentialStiffnessTracker.Location)                                                          | Gets or sets the Location.                                    |
| [`Children`](#ContactMaximumTangentialStiffnessTracker.Children)                                                          | Gets the list of children.                                    |
| [`Comments`](#ContactMaximumTangentialStiffnessTracker.Comments)                                                          | Gets the list of associated comments.                         |
| [`Images`](#ContactMaximumTangentialStiffnessTracker.Images)                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMaximumTangentialStiffnessTracker.Properties)                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMaximumTangentialStiffnessTracker.VisibleProperties)                                        | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactMaximumTangentialStiffnessTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactMaximumTangentialStiffnessTracker.InternalObject"></a>

### *property* ContactMaximumTangentialStiffnessTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ContactSide"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ContactRegion"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.DataModelObjectCategory"></a>

### *property* ContactMaximumTangentialStiffnessTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.IsSolved"></a>

### *property* ContactMaximumTangentialStiffnessTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ChartDimensions"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.BoundaryCondition"></a>

### *property* ContactMaximumTangentialStiffnessTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.CutFrequency"></a>

### *property* ContactMaximumTangentialStiffnessTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.SectorNumber"></a>

### *property* ContactMaximumTangentialStiffnessTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.GeometrySelectionString"></a>

### *property* ContactMaximumTangentialStiffnessTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.LoadStepNumber"></a>

### *property* ContactMaximumTangentialStiffnessTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ReportedFrequency"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Duration"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.FilterMaximum"></a>

### *property* ContactMaximumTangentialStiffnessTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.FilterMinimum"></a>

### *property* ContactMaximumTangentialStiffnessTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMaximumTangentialStiffnessTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.MaximumAmplitude"></a>

### *property* ContactMaximumTangentialStiffnessTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.MaximumFrequency"></a>

### *property* ContactMaximumTangentialStiffnessTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Maximum"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.MinimumFrequency"></a>

### *property* ContactMaximumTangentialStiffnessTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Minimum"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.PhaseAngle"></a>

### *property* ContactMaximumTangentialStiffnessTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMaximumTangentialStiffnessTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.RequestedFrequency"></a>

### *property* ContactMaximumTangentialStiffnessTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.AccelerationType"></a>

### *property* ContactMaximumTangentialStiffnessTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ChartViewingStyle"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.DeformationType"></a>

### *property* ContactMaximumTangentialStiffnessTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.FilterType"></a>

### *property* ContactMaximumTangentialStiffnessTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.SpatialResolution"></a>

### *property* ContactMaximumTangentialStiffnessTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.NormalOrientation"></a>

### *property* ContactMaximumTangentialStiffnessTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMaximumTangentialStiffnessTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ResultChartType"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.DpfEvaluation"></a>

### *property* ContactMaximumTangentialStiffnessTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.XAxisValues"></a>

### *property* ContactMaximumTangentialStiffnessTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ShearOrientation"></a>

### *property* ContactMaximumTangentialStiffnessTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.StressStrainType"></a>

### *property* ContactMaximumTangentialStiffnessTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.TimeHistoryDisplay"></a>

### *property* ContactMaximumTangentialStiffnessTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.VelocityType"></a>

### *property* ContactMaximumTangentialStiffnessTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Suppressed"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.EnhancedTracking"></a>

### *property* ContactMaximumTangentialStiffnessTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.UseParentFrequencyRange"></a>

### *property* ContactMaximumTangentialStiffnessTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.CoordinateSystem"></a>

### *property* ContactMaximumTangentialStiffnessTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Spring"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Location"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Children"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Comments"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Images"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactMaximumTangentialStiffnessTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Properties"></a>

### *property* ContactMaximumTangentialStiffnessTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.VisibleProperties"></a>

### *property* ContactMaximumTangentialStiffnessTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMaximumTangentialStiffnessTracker.ExportAnimation"></a>

### ContactMaximumTangentialStiffnessTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.ClearGeneratedData"></a>

### ContactMaximumTangentialStiffnessTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.EvaluateAllResults"></a>

### ContactMaximumTangentialStiffnessTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.RenameBasedOnDefinition"></a>

### ContactMaximumTangentialStiffnessTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Delete"></a>

### ContactMaximumTangentialStiffnessTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.GetChildren"></a>

### ContactMaximumTangentialStiffnessTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactMaximumTangentialStiffnessTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.AddComment"></a>

### ContactMaximumTangentialStiffnessTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.AddImage"></a>

### ContactMaximumTangentialStiffnessTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Activate"></a>

### ContactMaximumTangentialStiffnessTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.CopyTo"></a>

### ContactMaximumTangentialStiffnessTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.Duplicate"></a>

### ContactMaximumTangentialStiffnessTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.GroupAllSimilarChildren"></a>

### ContactMaximumTangentialStiffnessTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.GroupSimilarObjects"></a>

### ContactMaximumTangentialStiffnessTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.PropertyByName"></a>

### ContactMaximumTangentialStiffnessTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.PropertyByAPIName"></a>

### ContactMaximumTangentialStiffnessTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.CreateParameter"></a>

### ContactMaximumTangentialStiffnessTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.GetParameter"></a>

### ContactMaximumTangentialStiffnessTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumTangentialStiffnessTracker.RemoveParameter"></a>

### ContactMaximumTangentialStiffnessTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
