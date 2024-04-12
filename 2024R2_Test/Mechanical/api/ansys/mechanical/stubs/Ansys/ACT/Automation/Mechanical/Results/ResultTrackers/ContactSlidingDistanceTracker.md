<a id="contactslidingdistancetracker"></a>

# ContactSlidingDistanceTracker

<a id="ContactSlidingDistanceTracker"></a>

### *class* ContactSlidingDistanceTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactSlidingDistanceTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactSlidingDistanceTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactSlidingDistanceTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactSlidingDistanceTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactSlidingDistanceTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactSlidingDistanceTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactSlidingDistanceTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactSlidingDistanceTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactSlidingDistanceTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactSlidingDistanceTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactSlidingDistanceTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactSlidingDistanceTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactSlidingDistanceTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactSlidingDistanceTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactSlidingDistanceTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactSlidingDistanceTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactSlidingDistanceTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactSlidingDistanceTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactSlidingDistanceTracker.ContactSide)                                                               | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactSlidingDistanceTracker.IsSolved)                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactSlidingDistanceTracker.BoundaryCondition)                                                   | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactSlidingDistanceTracker.CutFrequency)                                                             | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactSlidingDistanceTracker.SectorNumber)                                                             | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactSlidingDistanceTracker.GeometrySelectionString)                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactSlidingDistanceTracker.LoadStepNumber)                                                         | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactSlidingDistanceTracker.ReportedFrequency)                                                   | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactSlidingDistanceTracker.Duration)                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactSlidingDistanceTracker.FilterMaximum)                                                           | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactSlidingDistanceTracker.FilterMinimum)                                                           | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactSlidingDistanceTracker.FrequencyAtMaximumAmplitude)                               | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactSlidingDistanceTracker.ImaginaryAtMaximumAmplitude)                               | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactSlidingDistanceTracker.MaximumAmplitude)                                                     | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactSlidingDistanceTracker.MaximumFrequency)                                                     | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactSlidingDistanceTracker.Maximum)                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactSlidingDistanceTracker.MinimumFrequency)                                                     | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactSlidingDistanceTracker.Minimum)                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactSlidingDistanceTracker.PhaseAngle)                                                                 | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactSlidingDistanceTracker.RealAtMaximumAmplitude)                                         | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactSlidingDistanceTracker.RequestedFrequency)                                                 | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactSlidingDistanceTracker.AccelerationType)                                                     | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactSlidingDistanceTracker.ChartViewingStyle)                                                   | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactSlidingDistanceTracker.SpatialResolution)                                                   | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactSlidingDistanceTracker.NormalOrientation)                                                   | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactSlidingDistanceTracker.CurvesAppearanceDisplay)                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactSlidingDistanceTracker.ResultChartType)                                                       | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactSlidingDistanceTracker.DpfEvaluation)                                                           | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactSlidingDistanceTracker.ShearOrientation)                                                     | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactSlidingDistanceTracker.TimeHistoryDisplay)                                                 | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactSlidingDistanceTracker.VelocityType)                                                             | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactSlidingDistanceTracker.Suppressed)                                                                 | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactSlidingDistanceTracker.EnhancedTracking)                                                     | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactSlidingDistanceTracker.UseParentFrequencyRange)                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactSlidingDistanceTracker.Location)                                                                     | Gets or sets the Location.                                    |
| [`Children`](#ContactSlidingDistanceTracker.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#ContactSlidingDistanceTracker.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Images`](#ContactSlidingDistanceTracker.Images)                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactSlidingDistanceTracker.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactSlidingDistanceTracker.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactSlidingDistanceTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactSlidingDistanceTracker.InternalObject"></a>

### *property* ContactSlidingDistanceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ContactSide"></a>

### *property* ContactSlidingDistanceTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ContactRegion"></a>

### *property* ContactSlidingDistanceTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.DataModelObjectCategory"></a>

### *property* ContactSlidingDistanceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.IsSolved"></a>

### *property* ContactSlidingDistanceTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ChartDimensions"></a>

### *property* ContactSlidingDistanceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.BoundaryCondition"></a>

### *property* ContactSlidingDistanceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.CutFrequency"></a>

### *property* ContactSlidingDistanceTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.SectorNumber"></a>

### *property* ContactSlidingDistanceTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.GeometrySelectionString"></a>

### *property* ContactSlidingDistanceTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.LoadStepNumber"></a>

### *property* ContactSlidingDistanceTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ReportedFrequency"></a>

### *property* ContactSlidingDistanceTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Duration"></a>

### *property* ContactSlidingDistanceTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.FilterMaximum"></a>

### *property* ContactSlidingDistanceTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.FilterMinimum"></a>

### *property* ContactSlidingDistanceTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactSlidingDistanceTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactSlidingDistanceTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.MaximumAmplitude"></a>

### *property* ContactSlidingDistanceTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.MaximumFrequency"></a>

### *property* ContactSlidingDistanceTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Maximum"></a>

### *property* ContactSlidingDistanceTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.MinimumFrequency"></a>

### *property* ContactSlidingDistanceTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Minimum"></a>

### *property* ContactSlidingDistanceTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.PhaseAngle"></a>

### *property* ContactSlidingDistanceTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.RealAtMaximumAmplitude"></a>

### *property* ContactSlidingDistanceTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.RequestedFrequency"></a>

### *property* ContactSlidingDistanceTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.AccelerationType"></a>

### *property* ContactSlidingDistanceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ChartViewingStyle"></a>

### *property* ContactSlidingDistanceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.DeformationType"></a>

### *property* ContactSlidingDistanceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.FilterType"></a>

### *property* ContactSlidingDistanceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.SpatialResolution"></a>

### *property* ContactSlidingDistanceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.NormalOrientation"></a>

### *property* ContactSlidingDistanceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.CurvesAppearanceDisplay"></a>

### *property* ContactSlidingDistanceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ResultChartType"></a>

### *property* ContactSlidingDistanceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.DpfEvaluation"></a>

### *property* ContactSlidingDistanceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.XAxisValues"></a>

### *property* ContactSlidingDistanceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ShearOrientation"></a>

### *property* ContactSlidingDistanceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.StressStrainType"></a>

### *property* ContactSlidingDistanceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.TimeHistoryDisplay"></a>

### *property* ContactSlidingDistanceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.VelocityType"></a>

### *property* ContactSlidingDistanceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Suppressed"></a>

### *property* ContactSlidingDistanceTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.EnhancedTracking"></a>

### *property* ContactSlidingDistanceTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.UseParentFrequencyRange"></a>

### *property* ContactSlidingDistanceTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.CoordinateSystem"></a>

### *property* ContactSlidingDistanceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Spring"></a>

### *property* ContactSlidingDistanceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Location"></a>

### *property* ContactSlidingDistanceTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Children"></a>

### *property* ContactSlidingDistanceTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Comments"></a>

### *property* ContactSlidingDistanceTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Images"></a>

### *property* ContactSlidingDistanceTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactSlidingDistanceTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Properties"></a>

### *property* ContactSlidingDistanceTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.VisibleProperties"></a>

### *property* ContactSlidingDistanceTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSlidingDistanceTracker.ExportAnimation"></a>

### ContactSlidingDistanceTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.ClearGeneratedData"></a>

### ContactSlidingDistanceTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.EvaluateAllResults"></a>

### ContactSlidingDistanceTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.RenameBasedOnDefinition"></a>

### ContactSlidingDistanceTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Delete"></a>

### ContactSlidingDistanceTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.GetChildren"></a>

### ContactSlidingDistanceTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactSlidingDistanceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.AddComment"></a>

### ContactSlidingDistanceTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.AddImage"></a>

### ContactSlidingDistanceTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Activate"></a>

### ContactSlidingDistanceTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.CopyTo"></a>

### ContactSlidingDistanceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.Duplicate"></a>

### ContactSlidingDistanceTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.GroupAllSimilarChildren"></a>

### ContactSlidingDistanceTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.GroupSimilarObjects"></a>

### ContactSlidingDistanceTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.PropertyByName"></a>

### ContactSlidingDistanceTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.PropertyByAPIName"></a>

### ContactSlidingDistanceTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.CreateParameter"></a>

### ContactSlidingDistanceTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.GetParameter"></a>

### ContactSlidingDistanceTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingDistanceTracker.RemoveParameter"></a>

### ContactSlidingDistanceTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
