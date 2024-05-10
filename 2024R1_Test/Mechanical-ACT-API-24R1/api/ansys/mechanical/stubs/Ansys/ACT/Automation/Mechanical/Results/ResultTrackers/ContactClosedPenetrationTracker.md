# ContactClosedPenetrationTracker

<a id="ContactClosedPenetrationTracker"></a>

### *class* ContactClosedPenetrationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactClosedPenetrationTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactClosedPenetrationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactClosedPenetrationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactClosedPenetrationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactClosedPenetrationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactClosedPenetrationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactClosedPenetrationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactClosedPenetrationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactClosedPenetrationTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactClosedPenetrationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactClosedPenetrationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactClosedPenetrationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactClosedPenetrationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactClosedPenetrationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactClosedPenetrationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactClosedPenetrationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactClosedPenetrationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactClosedPenetrationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactClosedPenetrationTracker.IsSolved)                                                                   | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactClosedPenetrationTracker.BoundaryCondition)                                                 | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactClosedPenetrationTracker.CutFrequency)                                                           | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactClosedPenetrationTracker.SectorNumber)                                                           | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactClosedPenetrationTracker.GeometrySelectionString)                                     | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactClosedPenetrationTracker.LoadStepNumber)                                                       | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactClosedPenetrationTracker.ReportedFrequency)                                                 | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactClosedPenetrationTracker.Duration)                                                                   | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactClosedPenetrationTracker.FilterMaximum)                                                         | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactClosedPenetrationTracker.FilterMinimum)                                                         | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactClosedPenetrationTracker.FrequencyAtMaximumAmplitude)                             | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactClosedPenetrationTracker.ImaginaryAtMaximumAmplitude)                             | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactClosedPenetrationTracker.MaximumAmplitude)                                                   | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactClosedPenetrationTracker.MaximumFrequency)                                                   | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactClosedPenetrationTracker.Maximum)                                                                     | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactClosedPenetrationTracker.MinimumFrequency)                                                   | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactClosedPenetrationTracker.Minimum)                                                                     | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactClosedPenetrationTracker.PhaseAngle)                                                               | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactClosedPenetrationTracker.RealAtMaximumAmplitude)                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactClosedPenetrationTracker.RequestedFrequency)                                               | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactClosedPenetrationTracker.AccelerationType)                                                   | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactClosedPenetrationTracker.ChartViewingStyle)                                                 | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactClosedPenetrationTracker.SpatialResolution)                                                 | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactClosedPenetrationTracker.NormalOrientation)                                                 | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactClosedPenetrationTracker.CurvesAppearanceDisplay)                                     | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactClosedPenetrationTracker.ResultChartType)                                                     | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactClosedPenetrationTracker.DpfEvaluation)                                                         | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactClosedPenetrationTracker.ShearOrientation)                                                   | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactClosedPenetrationTracker.TimeHistoryDisplay)                                               | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactClosedPenetrationTracker.VelocityType)                                                           | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactClosedPenetrationTracker.Suppressed)                                                               | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactClosedPenetrationTracker.EnhancedTracking)                                                   | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactClosedPenetrationTracker.UseParentFrequencyRange)                                     | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactClosedPenetrationTracker.Location)                                                                   | Gets or sets the Location.                                    |
| [`Children`](#ContactClosedPenetrationTracker.Children)                                                                   | Gets the list of children.                                    |
| [`Comments`](#ContactClosedPenetrationTracker.Comments)                                                                   | Gets the list of associated comments.                         |
| [`Images`](#ContactClosedPenetrationTracker.Images)                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactClosedPenetrationTracker.Properties)                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactClosedPenetrationTracker.VisibleProperties)                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactClosedPenetrationTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactClosedPenetrationTracker.InternalObject"></a>

### *property* ContactClosedPenetrationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ContactRegion"></a>

### *property* ContactClosedPenetrationTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.DataModelObjectCategory"></a>

### *property* ContactClosedPenetrationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.IsSolved"></a>

### *property* ContactClosedPenetrationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ChartDimensions"></a>

### *property* ContactClosedPenetrationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.BoundaryCondition"></a>

### *property* ContactClosedPenetrationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CutFrequency"></a>

### *property* ContactClosedPenetrationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.SectorNumber"></a>

### *property* ContactClosedPenetrationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GeometrySelectionString"></a>

### *property* ContactClosedPenetrationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.LoadStepNumber"></a>

### *property* ContactClosedPenetrationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ReportedFrequency"></a>

### *property* ContactClosedPenetrationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Duration"></a>

### *property* ContactClosedPenetrationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FilterMaximum"></a>

### *property* ContactClosedPenetrationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FilterMinimum"></a>

### *property* ContactClosedPenetrationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.MaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.MaximumFrequency"></a>

### *property* ContactClosedPenetrationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Maximum"></a>

### *property* ContactClosedPenetrationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.MinimumFrequency"></a>

### *property* ContactClosedPenetrationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Minimum"></a>

### *property* ContactClosedPenetrationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.PhaseAngle"></a>

### *property* ContactClosedPenetrationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RealAtMaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RequestedFrequency"></a>

### *property* ContactClosedPenetrationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.AccelerationType"></a>

### *property* ContactClosedPenetrationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ChartViewingStyle"></a>

### *property* ContactClosedPenetrationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.DeformationType"></a>

### *property* ContactClosedPenetrationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FilterType"></a>

### *property* ContactClosedPenetrationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.SpatialResolution"></a>

### *property* ContactClosedPenetrationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.NormalOrientation"></a>

### *property* ContactClosedPenetrationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CurvesAppearanceDisplay"></a>

### *property* ContactClosedPenetrationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ResultChartType"></a>

### *property* ContactClosedPenetrationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.DpfEvaluation"></a>

### *property* ContactClosedPenetrationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.XAxisValues"></a>

### *property* ContactClosedPenetrationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ShearOrientation"></a>

### *property* ContactClosedPenetrationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.StressStrainType"></a>

### *property* ContactClosedPenetrationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.TimeHistoryDisplay"></a>

### *property* ContactClosedPenetrationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.VelocityType"></a>

### *property* ContactClosedPenetrationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Suppressed"></a>

### *property* ContactClosedPenetrationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.EnhancedTracking"></a>

### *property* ContactClosedPenetrationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.UseParentFrequencyRange"></a>

### *property* ContactClosedPenetrationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CoordinateSystem"></a>

### *property* ContactClosedPenetrationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Spring"></a>

### *property* ContactClosedPenetrationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Location"></a>

### *property* ContactClosedPenetrationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Children"></a>

### *property* ContactClosedPenetrationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Comments"></a>

### *property* ContactClosedPenetrationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Images"></a>

### *property* ContactClosedPenetrationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactClosedPenetrationTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Properties"></a>

### *property* ContactClosedPenetrationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.VisibleProperties"></a>

### *property* ContactClosedPenetrationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactClosedPenetrationTracker.ExportAnimation"></a>

### ContactClosedPenetrationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ClearGeneratedData"></a>

### ContactClosedPenetrationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.EvaluateAllResults"></a>

### ContactClosedPenetrationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RenameBasedOnDefinition"></a>

### ContactClosedPenetrationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Delete"></a>

### ContactClosedPenetrationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GetChildren"></a>

### ContactClosedPenetrationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactClosedPenetrationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.AddComment"></a>

### ContactClosedPenetrationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.AddImage"></a>

### ContactClosedPenetrationTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Activate"></a>

### ContactClosedPenetrationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CopyTo"></a>

### ContactClosedPenetrationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Duplicate"></a>

### ContactClosedPenetrationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GroupAllSimilarChildren"></a>

### ContactClosedPenetrationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GroupSimilarObjects"></a>

### ContactClosedPenetrationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.PropertyByName"></a>

### ContactClosedPenetrationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.PropertyByAPIName"></a>

### ContactClosedPenetrationTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CreateParameter"></a>

### ContactClosedPenetrationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GetParameter"></a>

### ContactClosedPenetrationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RemoveParameter"></a>

### ContactClosedPenetrationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
