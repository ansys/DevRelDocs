# NumberContactingTracker

<a id="NumberContactingTracker"></a>

### *class* NumberContactingTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NumberContactingTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#NumberContactingTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#NumberContactingTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#NumberContactingTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#NumberContactingTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NumberContactingTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NumberContactingTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#NumberContactingTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NumberContactingTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NumberContactingTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NumberContactingTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NumberContactingTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NumberContactingTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NumberContactingTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NumberContactingTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NumberContactingTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NumberContactingTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NumberContactingTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#NumberContactingTracker.ContactSide)                                                                     | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#NumberContactingTracker.IsSolved)                                                                           | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#NumberContactingTracker.BoundaryCondition)                                                         | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#NumberContactingTracker.CutFrequency)                                                                   | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#NumberContactingTracker.SectorNumber)                                                                   | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#NumberContactingTracker.GeometrySelectionString)                                             | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#NumberContactingTracker.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#NumberContactingTracker.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                   |
| [`Duration`](#NumberContactingTracker.Duration)                                                                           | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#NumberContactingTracker.FilterMaximum)                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#NumberContactingTracker.FilterMinimum)                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#NumberContactingTracker.FrequencyAtMaximumAmplitude)                                     | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#NumberContactingTracker.ImaginaryAtMaximumAmplitude)                                     | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#NumberContactingTracker.MaximumAmplitude)                                                           | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#NumberContactingTracker.MaximumFrequency)                                                           | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#NumberContactingTracker.Maximum)                                                                             | Gets the Maximum.                                             |
| [`MinimumFrequency`](#NumberContactingTracker.MinimumFrequency)                                                           | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#NumberContactingTracker.Minimum)                                                                             | Gets the Minimum.                                             |
| [`PhaseAngle`](#NumberContactingTracker.PhaseAngle)                                                                       | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#NumberContactingTracker.RealAtMaximumAmplitude)                                               | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#NumberContactingTracker.RequestedFrequency)                                                       | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#NumberContactingTracker.AccelerationType)                                                           | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#NumberContactingTracker.ChartViewingStyle)                                                         | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#NumberContactingTracker.SpatialResolution)                                                         | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#NumberContactingTracker.NormalOrientation)                                                         | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#NumberContactingTracker.CurvesAppearanceDisplay)                                             | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#NumberContactingTracker.ResultChartType)                                                             | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#NumberContactingTracker.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#NumberContactingTracker.ShearOrientation)                                                           | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#NumberContactingTracker.TimeHistoryDisplay)                                                       | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#NumberContactingTracker.VelocityType)                                                                   | Gets or sets the VelocityType.                                |
| [`Suppressed`](#NumberContactingTracker.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#NumberContactingTracker.EnhancedTracking)                                                           | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#NumberContactingTracker.UseParentFrequencyRange)                                             | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#NumberContactingTracker.Location)                                                                           | Gets or sets the Location.                                    |
| [`Children`](#NumberContactingTracker.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#NumberContactingTracker.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Images`](#NumberContactingTracker.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NumberContactingTracker.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NumberContactingTracker.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import NumberContactingTracker
```

<a id="property-detail"></a>

## Property detail

<a id="NumberContactingTracker.InternalObject"></a>

### *property* NumberContactingTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ContactSide"></a>

### *property* NumberContactingTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](./../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ContactRegion"></a>

### *property* NumberContactingTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.DataModelObjectCategory"></a>

### *property* NumberContactingTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.IsSolved"></a>

### *property* NumberContactingTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ChartDimensions"></a>

### *property* NumberContactingTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.BoundaryCondition"></a>

### *property* NumberContactingTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.CutFrequency"></a>

### *property* NumberContactingTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.SectorNumber"></a>

### *property* NumberContactingTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.GeometrySelectionString"></a>

### *property* NumberContactingTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.LoadStepNumber"></a>

### *property* NumberContactingTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ReportedFrequency"></a>

### *property* NumberContactingTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Duration"></a>

### *property* NumberContactingTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.FilterMaximum"></a>

### *property* NumberContactingTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.FilterMinimum"></a>

### *property* NumberContactingTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.FrequencyAtMaximumAmplitude"></a>

### *property* NumberContactingTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* NumberContactingTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.MaximumAmplitude"></a>

### *property* NumberContactingTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.MaximumFrequency"></a>

### *property* NumberContactingTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Maximum"></a>

### *property* NumberContactingTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.MinimumFrequency"></a>

### *property* NumberContactingTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Minimum"></a>

### *property* NumberContactingTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.PhaseAngle"></a>

### *property* NumberContactingTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.RealAtMaximumAmplitude"></a>

### *property* NumberContactingTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.RequestedFrequency"></a>

### *property* NumberContactingTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.AccelerationType"></a>

### *property* NumberContactingTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ChartViewingStyle"></a>

### *property* NumberContactingTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.DeformationType"></a>

### *property* NumberContactingTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.FilterType"></a>

### *property* NumberContactingTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.SpatialResolution"></a>

### *property* NumberContactingTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.NormalOrientation"></a>

### *property* NumberContactingTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.CurvesAppearanceDisplay"></a>

### *property* NumberContactingTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ResultChartType"></a>

### *property* NumberContactingTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.DpfEvaluation"></a>

### *property* NumberContactingTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.XAxisValues"></a>

### *property* NumberContactingTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ShearOrientation"></a>

### *property* NumberContactingTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.StressStrainType"></a>

### *property* NumberContactingTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.TimeHistoryDisplay"></a>

### *property* NumberContactingTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.VelocityType"></a>

### *property* NumberContactingTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Suppressed"></a>

### *property* NumberContactingTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.EnhancedTracking"></a>

### *property* NumberContactingTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.UseParentFrequencyRange"></a>

### *property* NumberContactingTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.CoordinateSystem"></a>

### *property* NumberContactingTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Spring"></a>

### *property* NumberContactingTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Location"></a>

### *property* NumberContactingTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Children"></a>

### *property* NumberContactingTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Comments"></a>

### *property* NumberContactingTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Images"></a>

### *property* NumberContactingTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NumberContactingTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Properties"></a>

### *property* NumberContactingTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.VisibleProperties"></a>

### *property* NumberContactingTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NumberContactingTracker.ExportAnimation"></a>

### NumberContactingTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.ClearGeneratedData"></a>

### NumberContactingTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.EvaluateAllResults"></a>

### NumberContactingTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.RenameBasedOnDefinition"></a>

### NumberContactingTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Delete"></a>

### NumberContactingTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.GetChildren"></a>

### NumberContactingTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NumberContactingTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.AddComment"></a>

### NumberContactingTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.AddImage"></a>

### NumberContactingTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Activate"></a>

### NumberContactingTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.CopyTo"></a>

### NumberContactingTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.Duplicate"></a>

### NumberContactingTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.GroupAllSimilarChildren"></a>

### NumberContactingTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.GroupSimilarObjects"></a>

### NumberContactingTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.PropertyByName"></a>

### NumberContactingTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.PropertyByAPIName"></a>

### NumberContactingTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.CreateParameter"></a>

### NumberContactingTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.GetParameter"></a>

### NumberContactingTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NumberContactingTracker.RemoveParameter"></a>

### NumberContactingTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
