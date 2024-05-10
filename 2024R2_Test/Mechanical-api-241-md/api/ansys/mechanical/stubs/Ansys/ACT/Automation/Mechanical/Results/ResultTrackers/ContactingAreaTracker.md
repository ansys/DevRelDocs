<a id="contactingareatracker"></a>

# ContactingAreaTracker

<a id="ContactingAreaTracker"></a>

### *class* ContactingAreaTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactingAreaTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#ContactingAreaTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ContactingAreaTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactingAreaTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactingAreaTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactingAreaTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactingAreaTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactingAreaTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactingAreaTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactingAreaTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactingAreaTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactingAreaTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactingAreaTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactingAreaTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactingAreaTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactingAreaTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactingAreaTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactingAreaTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactSide`](#ContactingAreaTracker.ContactSide)                                                                       | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactingAreaTracker.IsSolved)                                                                             | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactingAreaTracker.BoundaryCondition)                                                           | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactingAreaTracker.CutFrequency)                                                                     | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactingAreaTracker.SectorNumber)                                                                     | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactingAreaTracker.GeometrySelectionString)                                               | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactingAreaTracker.LoadStepNumber)                                                                 | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactingAreaTracker.ReportedFrequency)                                                           | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactingAreaTracker.Duration)                                                                             | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactingAreaTracker.FilterMaximum)                                                                   | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactingAreaTracker.FilterMinimum)                                                                   | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactingAreaTracker.FrequencyAtMaximumAmplitude)                                       | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactingAreaTracker.ImaginaryAtMaximumAmplitude)                                       | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactingAreaTracker.MaximumAmplitude)                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactingAreaTracker.MaximumFrequency)                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactingAreaTracker.Maximum)                                                                               | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactingAreaTracker.MinimumFrequency)                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactingAreaTracker.Minimum)                                                                               | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactingAreaTracker.PhaseAngle)                                                                         | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactingAreaTracker.RealAtMaximumAmplitude)                                                 | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactingAreaTracker.RequestedFrequency)                                                         | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactingAreaTracker.AccelerationType)                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactingAreaTracker.ChartViewingStyle)                                                           | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactingAreaTracker.SpatialResolution)                                                           | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactingAreaTracker.NormalOrientation)                                                           | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactingAreaTracker.CurvesAppearanceDisplay)                                               | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactingAreaTracker.ResultChartType)                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactingAreaTracker.DpfEvaluation)                                                                   | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactingAreaTracker.ShearOrientation)                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactingAreaTracker.TimeHistoryDisplay)                                                         | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactingAreaTracker.VelocityType)                                                                     | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactingAreaTracker.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactingAreaTracker.EnhancedTracking)                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactingAreaTracker.UseParentFrequencyRange)                                               | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactingAreaTracker.Location)                                                                             | Gets or sets the Location.                                    |
| [`Children`](#ContactingAreaTracker.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#ContactingAreaTracker.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Images`](#ContactingAreaTracker.Images)                                                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactingAreaTracker.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactingAreaTracker.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactingAreaTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactingAreaTracker.InternalObject"></a>

### *property* ContactingAreaTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ContactSide"></a>

### *property* ContactingAreaTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ContactRegion"></a>

### *property* ContactingAreaTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.DataModelObjectCategory"></a>

### *property* ContactingAreaTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.IsSolved"></a>

### *property* ContactingAreaTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ChartDimensions"></a>

### *property* ContactingAreaTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.BoundaryCondition"></a>

### *property* ContactingAreaTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.CutFrequency"></a>

### *property* ContactingAreaTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.SectorNumber"></a>

### *property* ContactingAreaTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.GeometrySelectionString"></a>

### *property* ContactingAreaTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.LoadStepNumber"></a>

### *property* ContactingAreaTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ReportedFrequency"></a>

### *property* ContactingAreaTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Duration"></a>

### *property* ContactingAreaTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.FilterMaximum"></a>

### *property* ContactingAreaTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.FilterMinimum"></a>

### *property* ContactingAreaTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactingAreaTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactingAreaTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.MaximumAmplitude"></a>

### *property* ContactingAreaTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.MaximumFrequency"></a>

### *property* ContactingAreaTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Maximum"></a>

### *property* ContactingAreaTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.MinimumFrequency"></a>

### *property* ContactingAreaTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Minimum"></a>

### *property* ContactingAreaTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.PhaseAngle"></a>

### *property* ContactingAreaTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.RealAtMaximumAmplitude"></a>

### *property* ContactingAreaTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.RequestedFrequency"></a>

### *property* ContactingAreaTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.AccelerationType"></a>

### *property* ContactingAreaTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ChartViewingStyle"></a>

### *property* ContactingAreaTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.DeformationType"></a>

### *property* ContactingAreaTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.FilterType"></a>

### *property* ContactingAreaTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.SpatialResolution"></a>

### *property* ContactingAreaTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.NormalOrientation"></a>

### *property* ContactingAreaTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.CurvesAppearanceDisplay"></a>

### *property* ContactingAreaTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ResultChartType"></a>

### *property* ContactingAreaTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.DpfEvaluation"></a>

### *property* ContactingAreaTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.XAxisValues"></a>

### *property* ContactingAreaTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ShearOrientation"></a>

### *property* ContactingAreaTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.StressStrainType"></a>

### *property* ContactingAreaTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.TimeHistoryDisplay"></a>

### *property* ContactingAreaTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.VelocityType"></a>

### *property* ContactingAreaTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Suppressed"></a>

### *property* ContactingAreaTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.EnhancedTracking"></a>

### *property* ContactingAreaTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.UseParentFrequencyRange"></a>

### *property* ContactingAreaTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.CoordinateSystem"></a>

### *property* ContactingAreaTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Spring"></a>

### *property* ContactingAreaTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Location"></a>

### *property* ContactingAreaTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Children"></a>

### *property* ContactingAreaTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Comments"></a>

### *property* ContactingAreaTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Images"></a>

### *property* ContactingAreaTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactingAreaTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Properties"></a>

### *property* ContactingAreaTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.VisibleProperties"></a>

### *property* ContactingAreaTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactingAreaTracker.ExportAnimation"></a>

### ContactingAreaTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.ClearGeneratedData"></a>

### ContactingAreaTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.EvaluateAllResults"></a>

### ContactingAreaTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.RenameBasedOnDefinition"></a>

### ContactingAreaTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Delete"></a>

### ContactingAreaTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.GetChildren"></a>

### ContactingAreaTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactingAreaTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.AddComment"></a>

### ContactingAreaTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.AddImage"></a>

### ContactingAreaTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Activate"></a>

### ContactingAreaTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.CopyTo"></a>

### ContactingAreaTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.Duplicate"></a>

### ContactingAreaTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.GroupAllSimilarChildren"></a>

### ContactingAreaTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.GroupSimilarObjects"></a>

### ContactingAreaTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.PropertyByName"></a>

### ContactingAreaTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.PropertyByAPIName"></a>

### ContactingAreaTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.CreateParameter"></a>

### ContactingAreaTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.GetParameter"></a>

### ContactingAreaTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactingAreaTracker.RemoveParameter"></a>

### ContactingAreaTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
