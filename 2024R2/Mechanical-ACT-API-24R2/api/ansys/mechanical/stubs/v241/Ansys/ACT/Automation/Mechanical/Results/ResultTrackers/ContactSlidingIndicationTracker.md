# `ContactSlidingIndicationTracker`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactSlidingIndicationTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactSlidingIndicationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactSlidingIndicationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactSlidingIndicationTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactSlidingIndicationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactSlidingIndicationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactSlidingIndicationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactSlidingIndicationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactSlidingIndicationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactSlidingIndicationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactSlidingIndicationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactSlidingIndicationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactSlidingIndicationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactSlidingIndicationTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactSlidingIndicationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactSlidingIndicationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactSlidingIndicationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactSlidingIndicationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactSlidingIndicationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactSlidingIndicationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactSlidingIndicationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AccelerationType`](#ContactSlidingIndicationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`BoundaryCondition`](#ContactSlidingIndicationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`ChartDimensions`](#ContactSlidingIndicationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`ChartViewingStyle`](#ContactSlidingIndicationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#ContactSlidingIndicationTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ContactSlidingIndicationTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`ContactRegion`](#ContactSlidingIndicationTracker.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`CoordinateSystem`](#ContactSlidingIndicationTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`CurvesAppearanceDisplay`](#ContactSlidingIndicationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`CutFrequency`](#ContactSlidingIndicationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`DataModelObjectCategory`](#ContactSlidingIndicationTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DeformationType`](#ContactSlidingIndicationTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`DpfEvaluation`](#ContactSlidingIndicationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`Duration`](#ContactSlidingIndicationTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`EnhancedTracking`](#ContactSlidingIndicationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`FilterMaximum`](#ContactSlidingIndicationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactSlidingIndicationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FilterType`](#ContactSlidingIndicationTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`FrequencyAtMaximumAmplitude`](#ContactSlidingIndicationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`GeometrySelectionString`](#ContactSlidingIndicationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`Images`](#ContactSlidingIndicationTracker.Images)                                           | Gets the list of associated images.                           |
| [`ImaginaryAtMaximumAmplitude`](#ContactSlidingIndicationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`InternalObject`](#ContactSlidingIndicationTracker.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`IsSolved`](#ContactSlidingIndicationTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`LoadStepNumber`](#ContactSlidingIndicationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`Location`](#ContactSlidingIndicationTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Maximum`](#ContactSlidingIndicationTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MaximumAmplitude`](#ContactSlidingIndicationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactSlidingIndicationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Minimum`](#ContactSlidingIndicationTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`MinimumFrequency`](#ContactSlidingIndicationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`NormalOrientation`](#ContactSlidingIndicationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`PhaseAngle`](#ContactSlidingIndicationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`Properties`](#ContactSlidingIndicationTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`RealAtMaximumAmplitude`](#ContactSlidingIndicationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`ReportedFrequency`](#ContactSlidingIndicationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`RequestedFrequency`](#ContactSlidingIndicationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`ResultChartType`](#ContactSlidingIndicationTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`SectorNumber`](#ContactSlidingIndicationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`ShearOrientation`](#ContactSlidingIndicationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`SpatialResolution`](#ContactSlidingIndicationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`Spring`](#ContactSlidingIndicationTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`StressStrainType`](#ContactSlidingIndicationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`Suppressed`](#ContactSlidingIndicationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TimeHistoryDisplay`](#ContactSlidingIndicationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`UseParentFrequencyRange`](#ContactSlidingIndicationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`VelocityType`](#ContactSlidingIndicationTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`VisibleProperties`](#ContactSlidingIndicationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XAxisValues`](#ContactSlidingIndicationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |

<a id="property-detail"></a>

## Property detail

<a id="ContactSlidingIndicationTracker.AccelerationType"></a>

### *property* ContactSlidingIndicationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.BoundaryCondition"></a>

### *property* ContactSlidingIndicationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ChartDimensions"></a>

### *property* ContactSlidingIndicationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ChartViewingStyle"></a>

### *property* ContactSlidingIndicationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Children"></a>

### *property* ContactSlidingIndicationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Comments"></a>

### *property* ContactSlidingIndicationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ContactRegion"></a>

### *property* ContactSlidingIndicationTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.CoordinateSystem"></a>

### *property* ContactSlidingIndicationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.CurvesAppearanceDisplay"></a>

### *property* ContactSlidingIndicationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.CutFrequency"></a>

### *property* ContactSlidingIndicationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.DataModelObjectCategory"></a>

### *property* ContactSlidingIndicationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.DeformationType"></a>

### *property* ContactSlidingIndicationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.DpfEvaluation"></a>

### *property* ContactSlidingIndicationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Duration"></a>

### *property* ContactSlidingIndicationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.EnhancedTracking"></a>

### *property* ContactSlidingIndicationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.FilterMaximum"></a>

### *property* ContactSlidingIndicationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.FilterMinimum"></a>

### *property* ContactSlidingIndicationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.FilterType"></a>

### *property* ContactSlidingIndicationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactSlidingIndicationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.GeometrySelectionString"></a>

### *property* ContactSlidingIndicationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Images"></a>

### *property* ContactSlidingIndicationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactSlidingIndicationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.InternalObject"></a>

### *property* ContactSlidingIndicationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.IsSolved"></a>

### *property* ContactSlidingIndicationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.LoadStepNumber"></a>

### *property* ContactSlidingIndicationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Location"></a>

### *property* ContactSlidingIndicationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Maximum"></a>

### *property* ContactSlidingIndicationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.MaximumAmplitude"></a>

### *property* ContactSlidingIndicationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.MaximumFrequency"></a>

### *property* ContactSlidingIndicationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Minimum"></a>

### *property* ContactSlidingIndicationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.MinimumFrequency"></a>

### *property* ContactSlidingIndicationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.NormalOrientation"></a>

### *property* ContactSlidingIndicationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.PhaseAngle"></a>

### *property* ContactSlidingIndicationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Properties"></a>

### *property* ContactSlidingIndicationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.RealAtMaximumAmplitude"></a>

### *property* ContactSlidingIndicationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ReportedFrequency"></a>

### *property* ContactSlidingIndicationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.RequestedFrequency"></a>

### *property* ContactSlidingIndicationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ResultChartType"></a>

### *property* ContactSlidingIndicationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.SectorNumber"></a>

### *property* ContactSlidingIndicationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ShearOrientation"></a>

### *property* ContactSlidingIndicationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.SpatialResolution"></a>

### *property* ContactSlidingIndicationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Spring"></a>

### *property* ContactSlidingIndicationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.StressStrainType"></a>

### *property* ContactSlidingIndicationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Suppressed"></a>

### *property* ContactSlidingIndicationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.TimeHistoryDisplay"></a>

### *property* ContactSlidingIndicationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.UseParentFrequencyRange"></a>

### *property* ContactSlidingIndicationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.VelocityType"></a>

### *property* ContactSlidingIndicationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.VisibleProperties"></a>

### *property* ContactSlidingIndicationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.XAxisValues"></a>

### *property* ContactSlidingIndicationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSlidingIndicationTracker.Activate"></a>

### ContactSlidingIndicationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.AddComment"></a>

### ContactSlidingIndicationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.AddImage"></a>

### ContactSlidingIndicationTracker.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ClearGeneratedData"></a>

### ContactSlidingIndicationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.CopyTo"></a>

### ContactSlidingIndicationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.CreateParameter"></a>

### ContactSlidingIndicationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Delete"></a>

### ContactSlidingIndicationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.Duplicate"></a>

### ContactSlidingIndicationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.EvaluateAllResults"></a>

### ContactSlidingIndicationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.ExportAnimation"></a>

### ContactSlidingIndicationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.GetChildren"></a>

### ContactSlidingIndicationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.GetParameter"></a>

### ContactSlidingIndicationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.GroupAllSimilarChildren"></a>

### ContactSlidingIndicationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.GroupSimilarObjects"></a>

### ContactSlidingIndicationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.PropertyByAPIName"></a>

### ContactSlidingIndicationTracker.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.PropertyByName"></a>

### ContactSlidingIndicationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.RemoveParameter"></a>

### ContactSlidingIndicationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSlidingIndicationTracker.RenameBasedOnDefinition"></a>

### ContactSlidingIndicationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

