# ContactStrainEnergyTracker

<a id="ContactStrainEnergyTracker"></a>

### *class* ContactStrainEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactStrainEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactStrainEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactStrainEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactStrainEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactStrainEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactStrainEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactStrainEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactStrainEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactStrainEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactStrainEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactStrainEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactStrainEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactStrainEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactStrainEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactStrainEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactStrainEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactStrainEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactStrainEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactStrainEnergyTracker.IsSolved)                                                                        | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactStrainEnergyTracker.BoundaryCondition)                                                      | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactStrainEnergyTracker.CutFrequency)                                                                | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactStrainEnergyTracker.SectorNumber)                                                                | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactStrainEnergyTracker.GeometrySelectionString)                                          | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactStrainEnergyTracker.LoadStepNumber)                                                            | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactStrainEnergyTracker.ReportedFrequency)                                                      | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactStrainEnergyTracker.Duration)                                                                        | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactStrainEnergyTracker.FilterMaximum)                                                              | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactStrainEnergyTracker.FilterMinimum)                                                              | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactStrainEnergyTracker.FrequencyAtMaximumAmplitude)                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactStrainEnergyTracker.ImaginaryAtMaximumAmplitude)                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactStrainEnergyTracker.MaximumAmplitude)                                                        | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactStrainEnergyTracker.MaximumFrequency)                                                        | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactStrainEnergyTracker.Maximum)                                                                          | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactStrainEnergyTracker.MinimumFrequency)                                                        | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactStrainEnergyTracker.Minimum)                                                                          | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactStrainEnergyTracker.PhaseAngle)                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactStrainEnergyTracker.RealAtMaximumAmplitude)                                            | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactStrainEnergyTracker.RequestedFrequency)                                                    | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactStrainEnergyTracker.AccelerationType)                                                        | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactStrainEnergyTracker.ChartViewingStyle)                                                      | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactStrainEnergyTracker.SpatialResolution)                                                      | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactStrainEnergyTracker.NormalOrientation)                                                      | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactStrainEnergyTracker.CurvesAppearanceDisplay)                                          | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactStrainEnergyTracker.ResultChartType)                                                          | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactStrainEnergyTracker.DpfEvaluation)                                                              | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactStrainEnergyTracker.ShearOrientation)                                                        | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactStrainEnergyTracker.TimeHistoryDisplay)                                                    | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactStrainEnergyTracker.VelocityType)                                                                | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactStrainEnergyTracker.Suppressed)                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactStrainEnergyTracker.EnhancedTracking)                                                        | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactStrainEnergyTracker.UseParentFrequencyRange)                                          | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactStrainEnergyTracker.Location)                                                                        | Gets or sets the Location.                                    |
| [`Children`](#ContactStrainEnergyTracker.Children)                                                                        | Gets the list of children.                                    |
| [`Comments`](#ContactStrainEnergyTracker.Comments)                                                                        | Gets the list of associated comments.                         |
| [`Images`](#ContactStrainEnergyTracker.Images)                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactStrainEnergyTracker.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactStrainEnergyTracker.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactStrainEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactStrainEnergyTracker.InternalObject"></a>

### *property* ContactStrainEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ContactRegion"></a>

### *property* ContactStrainEnergyTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.DataModelObjectCategory"></a>

### *property* ContactStrainEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.IsSolved"></a>

### *property* ContactStrainEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ChartDimensions"></a>

### *property* ContactStrainEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.BoundaryCondition"></a>

### *property* ContactStrainEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.CutFrequency"></a>

### *property* ContactStrainEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.SectorNumber"></a>

### *property* ContactStrainEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.GeometrySelectionString"></a>

### *property* ContactStrainEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.LoadStepNumber"></a>

### *property* ContactStrainEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ReportedFrequency"></a>

### *property* ContactStrainEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Duration"></a>

### *property* ContactStrainEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.FilterMaximum"></a>

### *property* ContactStrainEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.FilterMinimum"></a>

### *property* ContactStrainEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactStrainEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactStrainEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.MaximumAmplitude"></a>

### *property* ContactStrainEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.MaximumFrequency"></a>

### *property* ContactStrainEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Maximum"></a>

### *property* ContactStrainEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.MinimumFrequency"></a>

### *property* ContactStrainEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Minimum"></a>

### *property* ContactStrainEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.PhaseAngle"></a>

### *property* ContactStrainEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* ContactStrainEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.RequestedFrequency"></a>

### *property* ContactStrainEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.AccelerationType"></a>

### *property* ContactStrainEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ChartViewingStyle"></a>

### *property* ContactStrainEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.DeformationType"></a>

### *property* ContactStrainEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.FilterType"></a>

### *property* ContactStrainEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.SpatialResolution"></a>

### *property* ContactStrainEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.NormalOrientation"></a>

### *property* ContactStrainEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* ContactStrainEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ResultChartType"></a>

### *property* ContactStrainEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.DpfEvaluation"></a>

### *property* ContactStrainEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.XAxisValues"></a>

### *property* ContactStrainEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ShearOrientation"></a>

### *property* ContactStrainEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.StressStrainType"></a>

### *property* ContactStrainEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.TimeHistoryDisplay"></a>

### *property* ContactStrainEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.VelocityType"></a>

### *property* ContactStrainEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Suppressed"></a>

### *property* ContactStrainEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.EnhancedTracking"></a>

### *property* ContactStrainEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.UseParentFrequencyRange"></a>

### *property* ContactStrainEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.CoordinateSystem"></a>

### *property* ContactStrainEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Spring"></a>

### *property* ContactStrainEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Location"></a>

### *property* ContactStrainEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Children"></a>

### *property* ContactStrainEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Comments"></a>

### *property* ContactStrainEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Images"></a>

### *property* ContactStrainEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactStrainEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Properties"></a>

### *property* ContactStrainEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.VisibleProperties"></a>

### *property* ContactStrainEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactStrainEnergyTracker.ExportAnimation"></a>

### ContactStrainEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.ClearGeneratedData"></a>

### ContactStrainEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.EvaluateAllResults"></a>

### ContactStrainEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.RenameBasedOnDefinition"></a>

### ContactStrainEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Delete"></a>

### ContactStrainEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.GetChildren"></a>

### ContactStrainEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactStrainEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.AddComment"></a>

### ContactStrainEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.AddImage"></a>

### ContactStrainEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Activate"></a>

### ContactStrainEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.CopyTo"></a>

### ContactStrainEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.Duplicate"></a>

### ContactStrainEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.GroupAllSimilarChildren"></a>

### ContactStrainEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.GroupSimilarObjects"></a>

### ContactStrainEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.PropertyByName"></a>

### ContactStrainEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.PropertyByAPIName"></a>

### ContactStrainEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.CreateParameter"></a>

### ContactStrainEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.GetParameter"></a>

### ContactStrainEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStrainEnergyTracker.RemoveParameter"></a>

### ContactStrainEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
