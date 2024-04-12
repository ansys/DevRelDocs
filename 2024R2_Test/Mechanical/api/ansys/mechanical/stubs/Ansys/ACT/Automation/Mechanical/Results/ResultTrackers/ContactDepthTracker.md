<a id="contactdepthtracker"></a>

# ContactDepthTracker

<a id="ContactDepthTracker"></a>

### *class* ContactDepthTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactDepthTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactDepthTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactDepthTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactDepthTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactDepthTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactDepthTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactDepthTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactDepthTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactDepthTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactDepthTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactDepthTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactDepthTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactDepthTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactDepthTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactDepthTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactDepthTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactDepthTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactDepthTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactDepthTracker.IsSolved)                                                                               | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactDepthTracker.BoundaryCondition)                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactDepthTracker.CutFrequency)                                                                       | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactDepthTracker.SectorNumber)                                                                       | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactDepthTracker.GeometrySelectionString)                                                 | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactDepthTracker.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactDepthTracker.ReportedFrequency)                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactDepthTracker.Duration)                                                                               | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactDepthTracker.FilterMaximum)                                                                     | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactDepthTracker.FilterMinimum)                                                                     | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactDepthTracker.FrequencyAtMaximumAmplitude)                                         | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactDepthTracker.ImaginaryAtMaximumAmplitude)                                         | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactDepthTracker.MaximumAmplitude)                                                               | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactDepthTracker.MaximumFrequency)                                                               | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactDepthTracker.Maximum)                                                                                 | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactDepthTracker.MinimumFrequency)                                                               | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactDepthTracker.Minimum)                                                                                 | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactDepthTracker.PhaseAngle)                                                                           | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactDepthTracker.RealAtMaximumAmplitude)                                                   | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactDepthTracker.RequestedFrequency)                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactDepthTracker.AccelerationType)                                                               | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactDepthTracker.ChartViewingStyle)                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactDepthTracker.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactDepthTracker.NormalOrientation)                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactDepthTracker.CurvesAppearanceDisplay)                                                 | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactDepthTracker.ResultChartType)                                                                 | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactDepthTracker.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactDepthTracker.ShearOrientation)                                                               | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactDepthTracker.TimeHistoryDisplay)                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactDepthTracker.VelocityType)                                                                       | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactDepthTracker.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactDepthTracker.EnhancedTracking)                                                               | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactDepthTracker.UseParentFrequencyRange)                                                 | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactDepthTracker.Location)                                                                               | Gets or sets the Location.                                    |
| [`Children`](#ContactDepthTracker.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#ContactDepthTracker.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Images`](#ContactDepthTracker.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactDepthTracker.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactDepthTracker.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactDepthTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactDepthTracker.InternalObject"></a>

### *property* ContactDepthTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ContactRegion"></a>

### *property* ContactDepthTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.DataModelObjectCategory"></a>

### *property* ContactDepthTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.IsSolved"></a>

### *property* ContactDepthTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ChartDimensions"></a>

### *property* ContactDepthTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.BoundaryCondition"></a>

### *property* ContactDepthTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.CutFrequency"></a>

### *property* ContactDepthTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.SectorNumber"></a>

### *property* ContactDepthTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.GeometrySelectionString"></a>

### *property* ContactDepthTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.LoadStepNumber"></a>

### *property* ContactDepthTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ReportedFrequency"></a>

### *property* ContactDepthTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Duration"></a>

### *property* ContactDepthTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.FilterMaximum"></a>

### *property* ContactDepthTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.FilterMinimum"></a>

### *property* ContactDepthTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactDepthTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactDepthTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.MaximumAmplitude"></a>

### *property* ContactDepthTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.MaximumFrequency"></a>

### *property* ContactDepthTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Maximum"></a>

### *property* ContactDepthTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.MinimumFrequency"></a>

### *property* ContactDepthTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Minimum"></a>

### *property* ContactDepthTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.PhaseAngle"></a>

### *property* ContactDepthTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.RealAtMaximumAmplitude"></a>

### *property* ContactDepthTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.RequestedFrequency"></a>

### *property* ContactDepthTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.AccelerationType"></a>

### *property* ContactDepthTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ChartViewingStyle"></a>

### *property* ContactDepthTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.DeformationType"></a>

### *property* ContactDepthTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.FilterType"></a>

### *property* ContactDepthTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.SpatialResolution"></a>

### *property* ContactDepthTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.NormalOrientation"></a>

### *property* ContactDepthTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.CurvesAppearanceDisplay"></a>

### *property* ContactDepthTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ResultChartType"></a>

### *property* ContactDepthTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.DpfEvaluation"></a>

### *property* ContactDepthTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.XAxisValues"></a>

### *property* ContactDepthTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ShearOrientation"></a>

### *property* ContactDepthTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.StressStrainType"></a>

### *property* ContactDepthTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.TimeHistoryDisplay"></a>

### *property* ContactDepthTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.VelocityType"></a>

### *property* ContactDepthTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Suppressed"></a>

### *property* ContactDepthTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.EnhancedTracking"></a>

### *property* ContactDepthTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.UseParentFrequencyRange"></a>

### *property* ContactDepthTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.CoordinateSystem"></a>

### *property* ContactDepthTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Spring"></a>

### *property* ContactDepthTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Location"></a>

### *property* ContactDepthTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Children"></a>

### *property* ContactDepthTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Comments"></a>

### *property* ContactDepthTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Images"></a>

### *property* ContactDepthTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactDepthTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Properties"></a>

### *property* ContactDepthTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.VisibleProperties"></a>

### *property* ContactDepthTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDepthTracker.ExportAnimation"></a>

### ContactDepthTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.ClearGeneratedData"></a>

### ContactDepthTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.EvaluateAllResults"></a>

### ContactDepthTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.RenameBasedOnDefinition"></a>

### ContactDepthTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Delete"></a>

### ContactDepthTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.GetChildren"></a>

### ContactDepthTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactDepthTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.AddComment"></a>

### ContactDepthTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.AddImage"></a>

### ContactDepthTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Activate"></a>

### ContactDepthTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.CopyTo"></a>

### ContactDepthTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.Duplicate"></a>

### ContactDepthTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.GroupAllSimilarChildren"></a>

### ContactDepthTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.GroupSimilarObjects"></a>

### ContactDepthTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.PropertyByName"></a>

### ContactDepthTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.PropertyByAPIName"></a>

### ContactDepthTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.CreateParameter"></a>

### ContactDepthTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.GetParameter"></a>

### ContactDepthTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDepthTracker.RemoveParameter"></a>

### ContactDepthTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
