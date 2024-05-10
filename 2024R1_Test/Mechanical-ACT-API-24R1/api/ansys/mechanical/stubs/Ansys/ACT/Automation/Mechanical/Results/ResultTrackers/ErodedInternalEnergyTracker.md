# ErodedInternalEnergyTracker

<a id="ErodedInternalEnergyTracker"></a>

### *class* ErodedInternalEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ErodedInternalEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ErodedInternalEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ErodedInternalEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ErodedInternalEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ErodedInternalEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ErodedInternalEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ErodedInternalEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ErodedInternalEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ErodedInternalEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ErodedInternalEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ErodedInternalEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ErodedInternalEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ErodedInternalEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ErodedInternalEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ErodedInternalEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ErodedInternalEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ErodedInternalEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ErodedInternalEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ErodedInternalEnergyTracker.IsSolved)                                                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ErodedInternalEnergyTracker.BoundaryCondition)                                                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ErodedInternalEnergyTracker.CutFrequency)                                                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ErodedInternalEnergyTracker.SectorNumber)                                                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ErodedInternalEnergyTracker.GeometrySelectionString)                                         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ErodedInternalEnergyTracker.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ErodedInternalEnergyTracker.ReportedFrequency)                                                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#ErodedInternalEnergyTracker.Duration)                                                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ErodedInternalEnergyTracker.FilterMaximum)                                                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ErodedInternalEnergyTracker.FilterMinimum)                                                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ErodedInternalEnergyTracker.FrequencyAtMaximumAmplitude)                                 | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ErodedInternalEnergyTracker.ImaginaryAtMaximumAmplitude)                                 | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ErodedInternalEnergyTracker.MaximumAmplitude)                                                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ErodedInternalEnergyTracker.MaximumFrequency)                                                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ErodedInternalEnergyTracker.Maximum)                                                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ErodedInternalEnergyTracker.MinimumFrequency)                                                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ErodedInternalEnergyTracker.Minimum)                                                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#ErodedInternalEnergyTracker.PhaseAngle)                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ErodedInternalEnergyTracker.RealAtMaximumAmplitude)                                           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ErodedInternalEnergyTracker.RequestedFrequency)                                                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ErodedInternalEnergyTracker.AccelerationType)                                                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ErodedInternalEnergyTracker.ChartViewingStyle)                                                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ErodedInternalEnergyTracker.SpatialResolution)                                                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ErodedInternalEnergyTracker.NormalOrientation)                                                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ErodedInternalEnergyTracker.CurvesAppearanceDisplay)                                         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ErodedInternalEnergyTracker.ResultChartType)                                                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ErodedInternalEnergyTracker.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ErodedInternalEnergyTracker.ShearOrientation)                                                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ErodedInternalEnergyTracker.TimeHistoryDisplay)                                                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ErodedInternalEnergyTracker.VelocityType)                                                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ErodedInternalEnergyTracker.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ErodedInternalEnergyTracker.EnhancedTracking)                                                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ErodedInternalEnergyTracker.UseParentFrequencyRange)                                         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ErodedInternalEnergyTracker.Location)                                                                       | Gets or sets the Location.                                    |
| [`Children`](#ErodedInternalEnergyTracker.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#ErodedInternalEnergyTracker.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Images`](#ErodedInternalEnergyTracker.Images)                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ErodedInternalEnergyTracker.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ErodedInternalEnergyTracker.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ErodedInternalEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ErodedInternalEnergyTracker.InternalObject"></a>

### *property* ErodedInternalEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.DataModelObjectCategory"></a>

### *property* ErodedInternalEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.IsSolved"></a>

### *property* ErodedInternalEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ChartDimensions"></a>

### *property* ErodedInternalEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.BoundaryCondition"></a>

### *property* ErodedInternalEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.CutFrequency"></a>

### *property* ErodedInternalEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.SectorNumber"></a>

### *property* ErodedInternalEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.GeometrySelectionString"></a>

### *property* ErodedInternalEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.LoadStepNumber"></a>

### *property* ErodedInternalEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ReportedFrequency"></a>

### *property* ErodedInternalEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Duration"></a>

### *property* ErodedInternalEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.FilterMaximum"></a>

### *property* ErodedInternalEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.FilterMinimum"></a>

### *property* ErodedInternalEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ErodedInternalEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ErodedInternalEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.MaximumAmplitude"></a>

### *property* ErodedInternalEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.MaximumFrequency"></a>

### *property* ErodedInternalEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Maximum"></a>

### *property* ErodedInternalEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.MinimumFrequency"></a>

### *property* ErodedInternalEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Minimum"></a>

### *property* ErodedInternalEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.PhaseAngle"></a>

### *property* ErodedInternalEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* ErodedInternalEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.RequestedFrequency"></a>

### *property* ErodedInternalEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.AccelerationType"></a>

### *property* ErodedInternalEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ChartViewingStyle"></a>

### *property* ErodedInternalEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.DeformationType"></a>

### *property* ErodedInternalEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.FilterType"></a>

### *property* ErodedInternalEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.SpatialResolution"></a>

### *property* ErodedInternalEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.NormalOrientation"></a>

### *property* ErodedInternalEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* ErodedInternalEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ResultChartType"></a>

### *property* ErodedInternalEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.DpfEvaluation"></a>

### *property* ErodedInternalEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.XAxisValues"></a>

### *property* ErodedInternalEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ShearOrientation"></a>

### *property* ErodedInternalEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.StressStrainType"></a>

### *property* ErodedInternalEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.TimeHistoryDisplay"></a>

### *property* ErodedInternalEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.VelocityType"></a>

### *property* ErodedInternalEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Suppressed"></a>

### *property* ErodedInternalEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.EnhancedTracking"></a>

### *property* ErodedInternalEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.UseParentFrequencyRange"></a>

### *property* ErodedInternalEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.CoordinateSystem"></a>

### *property* ErodedInternalEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Spring"></a>

### *property* ErodedInternalEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Location"></a>

### *property* ErodedInternalEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Children"></a>

### *property* ErodedInternalEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Comments"></a>

### *property* ErodedInternalEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Images"></a>

### *property* ErodedInternalEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ErodedInternalEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Properties"></a>

### *property* ErodedInternalEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.VisibleProperties"></a>

### *property* ErodedInternalEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ErodedInternalEnergyTracker.ExportAnimation"></a>

### ErodedInternalEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.ClearGeneratedData"></a>

### ErodedInternalEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.EvaluateAllResults"></a>

### ErodedInternalEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.RenameBasedOnDefinition"></a>

### ErodedInternalEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Delete"></a>

### ErodedInternalEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.GetChildren"></a>

### ErodedInternalEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ErodedInternalEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.AddComment"></a>

### ErodedInternalEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.AddImage"></a>

### ErodedInternalEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Activate"></a>

### ErodedInternalEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.CopyTo"></a>

### ErodedInternalEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.Duplicate"></a>

### ErodedInternalEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.GroupAllSimilarChildren"></a>

### ErodedInternalEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.GroupSimilarObjects"></a>

### ErodedInternalEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.PropertyByName"></a>

### ErodedInternalEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.PropertyByAPIName"></a>

### ErodedInternalEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.CreateParameter"></a>

### ErodedInternalEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.GetParameter"></a>

### ErodedInternalEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ErodedInternalEnergyTracker.RemoveParameter"></a>

### ErodedInternalEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
