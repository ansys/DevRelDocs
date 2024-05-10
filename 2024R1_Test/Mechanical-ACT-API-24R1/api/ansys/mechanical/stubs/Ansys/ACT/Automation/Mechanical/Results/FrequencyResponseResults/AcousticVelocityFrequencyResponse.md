# AcousticVelocityFrequencyResponse

<a id="AcousticVelocityFrequencyResponse"></a>

### *class* AcousticVelocityFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticVelocityFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#AcousticVelocityFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#AcousticVelocityFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticVelocityFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AcousticVelocityFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticVelocityFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticVelocityFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticVelocityFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticVelocityFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticVelocityFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticVelocityFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticVelocityFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticVelocityFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticVelocityFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticVelocityFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticVelocityFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticVelocityFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticVelocityFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AcousticVelocityFrequencyResponse.IsSolved)                                                                 | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AcousticVelocityFrequencyResponse.BoundaryCondition)                                               | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AcousticVelocityFrequencyResponse.CutFrequency)                                                         | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AcousticVelocityFrequencyResponse.SectorNumber)                                                         | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AcousticVelocityFrequencyResponse.GeometrySelectionString)                                   | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AcousticVelocityFrequencyResponse.LoadStepNumber)                                                     | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AcousticVelocityFrequencyResponse.ReportedFrequency)                                               | Gets the ReportedFrequency.                                   |
| [`Duration`](#AcousticVelocityFrequencyResponse.Duration)                                                                 | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AcousticVelocityFrequencyResponse.FilterMaximum)                                                       | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AcousticVelocityFrequencyResponse.FilterMinimum)                                                       | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticVelocityFrequencyResponse.FrequencyAtMaximumAmplitude)                           | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AcousticVelocityFrequencyResponse.ImaginaryAtMaximumAmplitude)                           | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AcousticVelocityFrequencyResponse.MaximumAmplitude)                                                 | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AcousticVelocityFrequencyResponse.MaximumFrequency)                                                 | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AcousticVelocityFrequencyResponse.Maximum)                                                                   | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AcousticVelocityFrequencyResponse.MinimumFrequency)                                                 | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AcousticVelocityFrequencyResponse.Minimum)                                                                   | Gets the Minimum.                                             |
| [`PhaseAngle`](#AcousticVelocityFrequencyResponse.PhaseAngle)                                                             | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AcousticVelocityFrequencyResponse.RealAtMaximumAmplitude)                                     | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AcousticVelocityFrequencyResponse.RequestedFrequency)                                             | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AcousticVelocityFrequencyResponse.AccelerationType)                                                 | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AcousticVelocityFrequencyResponse.ChartViewingStyle)                                               | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AcousticVelocityFrequencyResponse.SpatialResolution)                                               | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AcousticVelocityFrequencyResponse.NormalOrientation)                                               | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AcousticVelocityFrequencyResponse.CurvesAppearanceDisplay)                                   | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AcousticVelocityFrequencyResponse.ResultChartType)                                                   | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AcousticVelocityFrequencyResponse.DpfEvaluation)                                                       | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AcousticVelocityFrequencyResponse.ShearOrientation)                                                 | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AcousticVelocityFrequencyResponse.TimeHistoryDisplay)                                             | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AcousticVelocityFrequencyResponse.VelocityType)                                                         | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AcousticVelocityFrequencyResponse.Suppressed)                                                             | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AcousticVelocityFrequencyResponse.EnhancedTracking)                                                 | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AcousticVelocityFrequencyResponse.UseParentFrequencyRange)                                   | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#AcousticVelocityFrequencyResponse.Location)                                                                 | Gets or sets the Location.                                    |
| [`Children`](#AcousticVelocityFrequencyResponse.Children)                                                                 | Gets the list of children.                                    |
| [`Comments`](#AcousticVelocityFrequencyResponse.Comments)                                                                 | Gets the list of associated comments.                         |
| [`Images`](#AcousticVelocityFrequencyResponse.Images)                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticVelocityFrequencyResponse.Properties)                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticVelocityFrequencyResponse.VisibleProperties)                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticVelocityFrequencyResponse
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticVelocityFrequencyResponse.InternalObject"></a>

### *property* AcousticVelocityFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticVelocityFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.IsSolved"></a>

### *property* AcousticVelocityFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ChartDimensions"></a>

### *property* AcousticVelocityFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticVelocityFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.CutFrequency"></a>

### *property* AcousticVelocityFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.SectorNumber"></a>

### *property* AcousticVelocityFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticVelocityFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticVelocityFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticVelocityFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Duration"></a>

### *property* AcousticVelocityFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.FilterMaximum"></a>

### *property* AcousticVelocityFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.FilterMinimum"></a>

### *property* AcousticVelocityFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticVelocityFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticVelocityFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticVelocityFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticVelocityFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Maximum"></a>

### *property* AcousticVelocityFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticVelocityFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Minimum"></a>

### *property* AcousticVelocityFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.PhaseAngle"></a>

### *property* AcousticVelocityFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticVelocityFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticVelocityFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.AccelerationType"></a>

### *property* AcousticVelocityFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticVelocityFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.DeformationType"></a>

### *property* AcousticVelocityFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.FilterType"></a>

### *property* AcousticVelocityFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.SpatialResolution"></a>

### *property* AcousticVelocityFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.NormalOrientation"></a>

### *property* AcousticVelocityFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticVelocityFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ResultChartType"></a>

### *property* AcousticVelocityFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticVelocityFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.XAxisValues"></a>

### *property* AcousticVelocityFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ShearOrientation"></a>

### *property* AcousticVelocityFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.StressStrainType"></a>

### *property* AcousticVelocityFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticVelocityFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.VelocityType"></a>

### *property* AcousticVelocityFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Suppressed"></a>

### *property* AcousticVelocityFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticVelocityFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticVelocityFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticVelocityFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Spring"></a>

### *property* AcousticVelocityFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Location"></a>

### *property* AcousticVelocityFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Children"></a>

### *property* AcousticVelocityFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Comments"></a>

### *property* AcousticVelocityFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Images"></a>

### *property* AcousticVelocityFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticVelocityFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Properties"></a>

### *property* AcousticVelocityFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.VisibleProperties"></a>

### *property* AcousticVelocityFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticVelocityFrequencyResponse.ExportAnimation"></a>

### AcousticVelocityFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.ClearGeneratedData"></a>

### AcousticVelocityFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.EvaluateAllResults"></a>

### AcousticVelocityFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticVelocityFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Delete"></a>

### AcousticVelocityFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.GetChildren"></a>

### AcousticVelocityFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticVelocityFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.AddComment"></a>

### AcousticVelocityFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.AddImage"></a>

### AcousticVelocityFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Activate"></a>

### AcousticVelocityFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.CopyTo"></a>

### AcousticVelocityFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.Duplicate"></a>

### AcousticVelocityFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticVelocityFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.GroupSimilarObjects"></a>

### AcousticVelocityFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.PropertyByName"></a>

### AcousticVelocityFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.PropertyByAPIName"></a>

### AcousticVelocityFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.CreateParameter"></a>

### AcousticVelocityFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.GetParameter"></a>

### AcousticVelocityFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticVelocityFrequencyResponse.RemoveParameter"></a>

### AcousticVelocityFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
