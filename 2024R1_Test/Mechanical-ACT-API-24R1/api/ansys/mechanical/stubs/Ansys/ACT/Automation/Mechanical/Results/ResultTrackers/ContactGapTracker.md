# ContactGapTracker

<a id="ContactGapTracker"></a>

### *class* ContactGapTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactGapTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactGapTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactGapTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactGapTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactGapTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactGapTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactGapTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactGapTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactGapTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactGapTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactGapTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactGapTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactGapTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactGapTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactGapTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactGapTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactGapTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactGapTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactGapTracker.ContactSide)                                                                           | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactGapTracker.IsSolved)                                                                                 | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactGapTracker.BoundaryCondition)                                                               | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactGapTracker.CutFrequency)                                                                         | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactGapTracker.SectorNumber)                                                                         | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactGapTracker.GeometrySelectionString)                                                   | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactGapTracker.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactGapTracker.ReportedFrequency)                                                               | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactGapTracker.Duration)                                                                                 | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactGapTracker.FilterMaximum)                                                                       | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactGapTracker.FilterMinimum)                                                                       | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactGapTracker.FrequencyAtMaximumAmplitude)                                           | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactGapTracker.ImaginaryAtMaximumAmplitude)                                           | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactGapTracker.MaximumAmplitude)                                                                 | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactGapTracker.MaximumFrequency)                                                                 | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactGapTracker.Maximum)                                                                                   | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactGapTracker.MinimumFrequency)                                                                 | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactGapTracker.Minimum)                                                                                   | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactGapTracker.PhaseAngle)                                                                             | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactGapTracker.RealAtMaximumAmplitude)                                                     | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactGapTracker.RequestedFrequency)                                                             | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactGapTracker.AccelerationType)                                                                 | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactGapTracker.ChartViewingStyle)                                                               | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactGapTracker.SpatialResolution)                                                               | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactGapTracker.NormalOrientation)                                                               | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactGapTracker.CurvesAppearanceDisplay)                                                   | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactGapTracker.ResultChartType)                                                                   | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactGapTracker.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactGapTracker.ShearOrientation)                                                                 | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactGapTracker.TimeHistoryDisplay)                                                             | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactGapTracker.VelocityType)                                                                         | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactGapTracker.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactGapTracker.EnhancedTracking)                                                                 | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactGapTracker.UseParentFrequencyRange)                                                   | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactGapTracker.Location)                                                                                 | Gets or sets the Location.                                    |
| [`Children`](#ContactGapTracker.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#ContactGapTracker.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Images`](#ContactGapTracker.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactGapTracker.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactGapTracker.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactGapTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactGapTracker.InternalObject"></a>

### *property* ContactGapTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ContactSide"></a>

### *property* ContactGapTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](./../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ContactRegion"></a>

### *property* ContactGapTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.DataModelObjectCategory"></a>

### *property* ContactGapTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.IsSolved"></a>

### *property* ContactGapTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ChartDimensions"></a>

### *property* ContactGapTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.BoundaryCondition"></a>

### *property* ContactGapTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.CutFrequency"></a>

### *property* ContactGapTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.SectorNumber"></a>

### *property* ContactGapTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.GeometrySelectionString"></a>

### *property* ContactGapTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.LoadStepNumber"></a>

### *property* ContactGapTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ReportedFrequency"></a>

### *property* ContactGapTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Duration"></a>

### *property* ContactGapTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.FilterMaximum"></a>

### *property* ContactGapTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.FilterMinimum"></a>

### *property* ContactGapTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactGapTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactGapTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.MaximumAmplitude"></a>

### *property* ContactGapTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.MaximumFrequency"></a>

### *property* ContactGapTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Maximum"></a>

### *property* ContactGapTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.MinimumFrequency"></a>

### *property* ContactGapTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Minimum"></a>

### *property* ContactGapTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.PhaseAngle"></a>

### *property* ContactGapTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.RealAtMaximumAmplitude"></a>

### *property* ContactGapTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.RequestedFrequency"></a>

### *property* ContactGapTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.AccelerationType"></a>

### *property* ContactGapTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ChartViewingStyle"></a>

### *property* ContactGapTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.DeformationType"></a>

### *property* ContactGapTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.FilterType"></a>

### *property* ContactGapTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.SpatialResolution"></a>

### *property* ContactGapTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.NormalOrientation"></a>

### *property* ContactGapTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.CurvesAppearanceDisplay"></a>

### *property* ContactGapTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ResultChartType"></a>

### *property* ContactGapTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.DpfEvaluation"></a>

### *property* ContactGapTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.XAxisValues"></a>

### *property* ContactGapTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ShearOrientation"></a>

### *property* ContactGapTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.StressStrainType"></a>

### *property* ContactGapTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.TimeHistoryDisplay"></a>

### *property* ContactGapTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.VelocityType"></a>

### *property* ContactGapTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Suppressed"></a>

### *property* ContactGapTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.EnhancedTracking"></a>

### *property* ContactGapTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.UseParentFrequencyRange"></a>

### *property* ContactGapTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.CoordinateSystem"></a>

### *property* ContactGapTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Spring"></a>

### *property* ContactGapTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Location"></a>

### *property* ContactGapTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Children"></a>

### *property* ContactGapTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Comments"></a>

### *property* ContactGapTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Images"></a>

### *property* ContactGapTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactGapTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Properties"></a>

### *property* ContactGapTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.VisibleProperties"></a>

### *property* ContactGapTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactGapTracker.ExportAnimation"></a>

### ContactGapTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.ClearGeneratedData"></a>

### ContactGapTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.EvaluateAllResults"></a>

### ContactGapTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.RenameBasedOnDefinition"></a>

### ContactGapTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Delete"></a>

### ContactGapTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.GetChildren"></a>

### ContactGapTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactGapTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.AddComment"></a>

### ContactGapTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.AddImage"></a>

### ContactGapTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Activate"></a>

### ContactGapTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.CopyTo"></a>

### ContactGapTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.Duplicate"></a>

### ContactGapTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.GroupAllSimilarChildren"></a>

### ContactGapTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.GroupSimilarObjects"></a>

### ContactGapTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.PropertyByName"></a>

### ContactGapTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.PropertyByAPIName"></a>

### ContactGapTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.CreateParameter"></a>

### ContactGapTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.GetParameter"></a>

### ContactGapTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactGapTracker.RemoveParameter"></a>

### ContactGapTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
