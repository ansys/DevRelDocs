# `ContactTotalForceFromContactPressureYTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureYTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureYTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactTotalForceFromContactPressureYTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactTotalForceFromContactPressureYTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactTotalForceFromContactPressureYTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromContactPressureYTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactTotalForceFromContactPressureYTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactTotalForceFromContactPressureYTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactTotalForceFromContactPressureYTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactTotalForceFromContactPressureYTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactTotalForceFromContactPressureYTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactTotalForceFromContactPressureYTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactTotalForceFromContactPressureYTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactTotalForceFromContactPressureYTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactTotalForceFromContactPressureYTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromContactPressureYTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromContactPressureYTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactTotalForceFromContactPressureYTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactTotalForceFromContactPressureYTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactTotalForceFromContactPressureYTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromContactPressureYTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#ContactTotalForceFromContactPressureYTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#ContactTotalForceFromContactPressureYTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#ContactTotalForceFromContactPressureYTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#ContactTotalForceFromContactPressureYTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#ContactTotalForceFromContactPressureYTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#ContactTotalForceFromContactPressureYTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`ContactRegion`](#ContactTotalForceFromContactPressureYTracker.ContactRegion)                             | Gets or sets the ContactRegion.                                          |
| [`CoordinateSystem`](#ContactTotalForceFromContactPressureYTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromContactPressureYTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#ContactTotalForceFromContactPressureYTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#ContactTotalForceFromContactPressureYTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#ContactTotalForceFromContactPressureYTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#ContactTotalForceFromContactPressureYTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#ContactTotalForceFromContactPressureYTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#ContactTotalForceFromContactPressureYTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#ContactTotalForceFromContactPressureYTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#ContactTotalForceFromContactPressureYTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#ContactTotalForceFromContactPressureYTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#ContactTotalForceFromContactPressureYTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#ContactTotalForceFromContactPressureYTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#ContactTotalForceFromContactPressureYTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactTotalForceFromContactPressureYTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#ContactTotalForceFromContactPressureYTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactTotalForceFromContactPressureYTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#ContactTotalForceFromContactPressureYTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#ContactTotalForceFromContactPressureYTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#ContactTotalForceFromContactPressureYTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#ContactTotalForceFromContactPressureYTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#ContactTotalForceFromContactPressureYTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ContactTotalForceFromContactPressureYTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#ContactTotalForceFromContactPressureYTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#ContactTotalForceFromContactPressureYTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactTotalForceFromContactPressureYTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromContactPressureYTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#ContactTotalForceFromContactPressureYTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#ContactTotalForceFromContactPressureYTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#ContactTotalForceFromContactPressureYTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#ContactTotalForceFromContactPressureYTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#ContactTotalForceFromContactPressureYTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#ContactTotalForceFromContactPressureYTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#ContactTotalForceFromContactPressureYTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#ContactTotalForceFromContactPressureYTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#ContactTotalForceFromContactPressureYTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#ContactTotalForceFromContactPressureYTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#ContactTotalForceFromContactPressureYTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#ContactTotalForceFromContactPressureYTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#ContactTotalForceFromContactPressureYTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#ContactTotalForceFromContactPressureYTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactTotalForceFromContactPressureYTracker.AccelerationType"></a>

### *property* ContactTotalForceFromContactPressureYTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.BoundaryCondition"></a>

### *property* ContactTotalForceFromContactPressureYTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ChartDimensions"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ChartViewingStyle"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Children"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Comments"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ContactRegion"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.CoordinateSystem"></a>

### *property* ContactTotalForceFromContactPressureYTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTotalForceFromContactPressureYTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.CutFrequency"></a>

### *property* ContactTotalForceFromContactPressureYTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.DataModelObjectCategory"></a>

### *property* ContactTotalForceFromContactPressureYTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.DeformationType"></a>

### *property* ContactTotalForceFromContactPressureYTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.DpfEvaluation"></a>

### *property* ContactTotalForceFromContactPressureYTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Duration"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.EnhancedTracking"></a>

### *property* ContactTotalForceFromContactPressureYTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.FilterMaximum"></a>

### *property* ContactTotalForceFromContactPressureYTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.FilterMinimum"></a>

### *property* ContactTotalForceFromContactPressureYTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.FilterType"></a>

### *property* ContactTotalForceFromContactPressureYTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromContactPressureYTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.GeometrySelectionString"></a>

### *property* ContactTotalForceFromContactPressureYTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Images"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.InternalObject"></a>

### *property* ContactTotalForceFromContactPressureYTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.IsSolved"></a>

### *property* ContactTotalForceFromContactPressureYTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.LoadStepNumber"></a>

### *property* ContactTotalForceFromContactPressureYTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Location"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Maximum"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.MaximumAmplitude"></a>

### *property* ContactTotalForceFromContactPressureYTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.MaximumFrequency"></a>

### *property* ContactTotalForceFromContactPressureYTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Minimum"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.MinimumFrequency"></a>

### *property* ContactTotalForceFromContactPressureYTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.NamedSelections"></a>

### *property* ContactTotalForceFromContactPressureYTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.NormalOrientation"></a>

### *property* ContactTotalForceFromContactPressureYTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.PhaseAngle"></a>

### *property* ContactTotalForceFromContactPressureYTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Properties"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.RPMSelection"></a>

### *property* ContactTotalForceFromContactPressureYTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromContactPressureYTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ReportedFrequency"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.RequestedFrequency"></a>

### *property* ContactTotalForceFromContactPressureYTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ResultChartType"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.SectorNumber"></a>

### *property* ContactTotalForceFromContactPressureYTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ShearOrientation"></a>

### *property* ContactTotalForceFromContactPressureYTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.SpatialResolution"></a>

### *property* ContactTotalForceFromContactPressureYTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Spring"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.StressStrainType"></a>

### *property* ContactTotalForceFromContactPressureYTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Suppressed"></a>

### *property* ContactTotalForceFromContactPressureYTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.TimeHistoryDisplay"></a>

### *property* ContactTotalForceFromContactPressureYTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.UseParentFrequencyRange"></a>

### *property* ContactTotalForceFromContactPressureYTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.VelocityType"></a>

### *property* ContactTotalForceFromContactPressureYTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.VisibleProperties"></a>

### *property* ContactTotalForceFromContactPressureYTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.XAxisValues"></a>

### *property* ContactTotalForceFromContactPressureYTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTotalForceFromContactPressureYTracker.Activate"></a>

### ContactTotalForceFromContactPressureYTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.AddComment"></a>

### ContactTotalForceFromContactPressureYTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.AddImage"></a>

### ContactTotalForceFromContactPressureYTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ClearGeneratedData"></a>

### ContactTotalForceFromContactPressureYTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.CopyTo"></a>

### ContactTotalForceFromContactPressureYTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.CreateParameter"></a>

### ContactTotalForceFromContactPressureYTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Delete"></a>

### ContactTotalForceFromContactPressureYTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.Duplicate"></a>

### ContactTotalForceFromContactPressureYTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.EvaluateAllResults"></a>

### ContactTotalForceFromContactPressureYTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.ExportAnimation"></a>

### ContactTotalForceFromContactPressureYTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.GetChildren"></a>

### ContactTotalForceFromContactPressureYTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.GetParameter"></a>

### ContactTotalForceFromContactPressureYTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.GroupAllSimilarChildren"></a>

### ContactTotalForceFromContactPressureYTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.GroupSimilarObjects"></a>

### ContactTotalForceFromContactPressureYTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.PropertyByAPIName"></a>

### ContactTotalForceFromContactPressureYTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.PropertyByName"></a>

### ContactTotalForceFromContactPressureYTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.RemoveParameter"></a>

### ContactTotalForceFromContactPressureYTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromContactPressureYTracker.RenameBasedOnDefinition"></a>

### ContactTotalForceFromContactPressureYTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

