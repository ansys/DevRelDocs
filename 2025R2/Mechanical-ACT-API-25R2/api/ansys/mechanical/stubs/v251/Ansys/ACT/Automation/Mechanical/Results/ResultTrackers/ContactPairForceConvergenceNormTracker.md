# `ContactPairForceConvergenceNormTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPairForceConvergenceNormTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPairForceConvergenceNormTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactPairForceConvergenceNormTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactPairForceConvergenceNormTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactPairForceConvergenceNormTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactPairForceConvergenceNormTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactPairForceConvergenceNormTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactPairForceConvergenceNormTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactPairForceConvergenceNormTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactPairForceConvergenceNormTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactPairForceConvergenceNormTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactPairForceConvergenceNormTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactPairForceConvergenceNormTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactPairForceConvergenceNormTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactPairForceConvergenceNormTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactPairForceConvergenceNormTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactPairForceConvergenceNormTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactPairForceConvergenceNormTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactPairForceConvergenceNormTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactPairForceConvergenceNormTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactPairForceConvergenceNormTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#ContactPairForceConvergenceNormTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#ContactPairForceConvergenceNormTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#ContactPairForceConvergenceNormTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#ContactPairForceConvergenceNormTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#ContactPairForceConvergenceNormTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#ContactPairForceConvergenceNormTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`ContactRegion`](#ContactPairForceConvergenceNormTracker.ContactRegion)                             | Gets or sets the ContactRegion.                                          |
| [`CoordinateSystem`](#ContactPairForceConvergenceNormTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#ContactPairForceConvergenceNormTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#ContactPairForceConvergenceNormTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#ContactPairForceConvergenceNormTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#ContactPairForceConvergenceNormTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#ContactPairForceConvergenceNormTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#ContactPairForceConvergenceNormTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#ContactPairForceConvergenceNormTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#ContactPairForceConvergenceNormTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#ContactPairForceConvergenceNormTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#ContactPairForceConvergenceNormTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#ContactPairForceConvergenceNormTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#ContactPairForceConvergenceNormTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#ContactPairForceConvergenceNormTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#ContactPairForceConvergenceNormTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#ContactPairForceConvergenceNormTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactPairForceConvergenceNormTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#ContactPairForceConvergenceNormTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactPairForceConvergenceNormTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#ContactPairForceConvergenceNormTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#ContactPairForceConvergenceNormTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#ContactPairForceConvergenceNormTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#ContactPairForceConvergenceNormTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#ContactPairForceConvergenceNormTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#ContactPairForceConvergenceNormTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ContactPairForceConvergenceNormTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#ContactPairForceConvergenceNormTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#ContactPairForceConvergenceNormTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactPairForceConvergenceNormTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#ContactPairForceConvergenceNormTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#ContactPairForceConvergenceNormTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#ContactPairForceConvergenceNormTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#ContactPairForceConvergenceNormTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#ContactPairForceConvergenceNormTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#ContactPairForceConvergenceNormTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#ContactPairForceConvergenceNormTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#ContactPairForceConvergenceNormTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#ContactPairForceConvergenceNormTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#ContactPairForceConvergenceNormTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#ContactPairForceConvergenceNormTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#ContactPairForceConvergenceNormTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#ContactPairForceConvergenceNormTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#ContactPairForceConvergenceNormTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#ContactPairForceConvergenceNormTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactPairForceConvergenceNormTracker.AccelerationType"></a>

### *property* ContactPairForceConvergenceNormTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.BoundaryCondition"></a>

### *property* ContactPairForceConvergenceNormTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ChartDimensions"></a>

### *property* ContactPairForceConvergenceNormTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ChartViewingStyle"></a>

### *property* ContactPairForceConvergenceNormTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Children"></a>

### *property* ContactPairForceConvergenceNormTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Comments"></a>

### *property* ContactPairForceConvergenceNormTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ContactRegion"></a>

### *property* ContactPairForceConvergenceNormTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.CoordinateSystem"></a>

### *property* ContactPairForceConvergenceNormTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.CurvesAppearanceDisplay"></a>

### *property* ContactPairForceConvergenceNormTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.CutFrequency"></a>

### *property* ContactPairForceConvergenceNormTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.DataModelObjectCategory"></a>

### *property* ContactPairForceConvergenceNormTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.DeformationType"></a>

### *property* ContactPairForceConvergenceNormTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.DpfEvaluation"></a>

### *property* ContactPairForceConvergenceNormTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Duration"></a>

### *property* ContactPairForceConvergenceNormTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.EnhancedTracking"></a>

### *property* ContactPairForceConvergenceNormTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.FilterMaximum"></a>

### *property* ContactPairForceConvergenceNormTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.FilterMinimum"></a>

### *property* ContactPairForceConvergenceNormTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.FilterType"></a>

### *property* ContactPairForceConvergenceNormTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactPairForceConvergenceNormTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.GeometrySelectionString"></a>

### *property* ContactPairForceConvergenceNormTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Images"></a>

### *property* ContactPairForceConvergenceNormTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactPairForceConvergenceNormTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.InternalObject"></a>

### *property* ContactPairForceConvergenceNormTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.IsSolved"></a>

### *property* ContactPairForceConvergenceNormTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.LoadStepNumber"></a>

### *property* ContactPairForceConvergenceNormTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Location"></a>

### *property* ContactPairForceConvergenceNormTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Maximum"></a>

### *property* ContactPairForceConvergenceNormTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.MaximumAmplitude"></a>

### *property* ContactPairForceConvergenceNormTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.MaximumFrequency"></a>

### *property* ContactPairForceConvergenceNormTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Minimum"></a>

### *property* ContactPairForceConvergenceNormTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.MinimumFrequency"></a>

### *property* ContactPairForceConvergenceNormTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.NamedSelections"></a>

### *property* ContactPairForceConvergenceNormTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.NormalOrientation"></a>

### *property* ContactPairForceConvergenceNormTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.PhaseAngle"></a>

### *property* ContactPairForceConvergenceNormTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Properties"></a>

### *property* ContactPairForceConvergenceNormTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.RPMSelection"></a>

### *property* ContactPairForceConvergenceNormTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.RealAtMaximumAmplitude"></a>

### *property* ContactPairForceConvergenceNormTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ReportedFrequency"></a>

### *property* ContactPairForceConvergenceNormTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.RequestedFrequency"></a>

### *property* ContactPairForceConvergenceNormTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ResultChartType"></a>

### *property* ContactPairForceConvergenceNormTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.SectorNumber"></a>

### *property* ContactPairForceConvergenceNormTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ShearOrientation"></a>

### *property* ContactPairForceConvergenceNormTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.SpatialResolution"></a>

### *property* ContactPairForceConvergenceNormTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Spring"></a>

### *property* ContactPairForceConvergenceNormTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.StressStrainType"></a>

### *property* ContactPairForceConvergenceNormTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Suppressed"></a>

### *property* ContactPairForceConvergenceNormTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.TimeHistoryDisplay"></a>

### *property* ContactPairForceConvergenceNormTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.UseParentFrequencyRange"></a>

### *property* ContactPairForceConvergenceNormTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.VelocityType"></a>

### *property* ContactPairForceConvergenceNormTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.VisibleProperties"></a>

### *property* ContactPairForceConvergenceNormTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.XAxisValues"></a>

### *property* ContactPairForceConvergenceNormTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactPairForceConvergenceNormTracker.Activate"></a>

### ContactPairForceConvergenceNormTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.AddComment"></a>

### ContactPairForceConvergenceNormTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.AddImage"></a>

### ContactPairForceConvergenceNormTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ClearGeneratedData"></a>

### ContactPairForceConvergenceNormTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.CopyTo"></a>

### ContactPairForceConvergenceNormTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.CreateParameter"></a>

### ContactPairForceConvergenceNormTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Delete"></a>

### ContactPairForceConvergenceNormTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.Duplicate"></a>

### ContactPairForceConvergenceNormTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.EvaluateAllResults"></a>

### ContactPairForceConvergenceNormTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.ExportAnimation"></a>

### ContactPairForceConvergenceNormTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.GetChildren"></a>

### ContactPairForceConvergenceNormTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.GetParameter"></a>

### ContactPairForceConvergenceNormTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.GroupAllSimilarChildren"></a>

### ContactPairForceConvergenceNormTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.GroupSimilarObjects"></a>

### ContactPairForceConvergenceNormTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.PropertyByAPIName"></a>

### ContactPairForceConvergenceNormTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.PropertyByName"></a>

### ContactPairForceConvergenceNormTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.RemoveParameter"></a>

### ContactPairForceConvergenceNormTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPairForceConvergenceNormTracker.RenameBasedOnDefinition"></a>

### ContactPairForceConvergenceNormTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

