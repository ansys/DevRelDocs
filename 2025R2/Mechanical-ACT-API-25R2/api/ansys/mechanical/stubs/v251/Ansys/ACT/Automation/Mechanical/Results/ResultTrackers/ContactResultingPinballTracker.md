# `ContactResultingPinballTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactResultingPinballTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactResultingPinballTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactResultingPinballTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactResultingPinballTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactResultingPinballTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactResultingPinballTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactResultingPinballTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactResultingPinballTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactResultingPinballTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactResultingPinballTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactResultingPinballTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactResultingPinballTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactResultingPinballTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactResultingPinballTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactResultingPinballTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactResultingPinballTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactResultingPinballTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactResultingPinballTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactResultingPinballTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactResultingPinballTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactResultingPinballTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#ContactResultingPinballTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#ContactResultingPinballTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#ContactResultingPinballTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#ContactResultingPinballTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#ContactResultingPinballTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#ContactResultingPinballTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`ContactRegion`](#ContactResultingPinballTracker.ContactRegion)                             | Gets or sets the ContactRegion.                                          |
| [`ContactSide`](#ContactResultingPinballTracker.ContactSide)                                 | Gets or sets the ContactSide.                                            |
| [`CoordinateSystem`](#ContactResultingPinballTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#ContactResultingPinballTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#ContactResultingPinballTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#ContactResultingPinballTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#ContactResultingPinballTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#ContactResultingPinballTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#ContactResultingPinballTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#ContactResultingPinballTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#ContactResultingPinballTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#ContactResultingPinballTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#ContactResultingPinballTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#ContactResultingPinballTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#ContactResultingPinballTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#ContactResultingPinballTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#ContactResultingPinballTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#ContactResultingPinballTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactResultingPinballTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#ContactResultingPinballTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactResultingPinballTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#ContactResultingPinballTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#ContactResultingPinballTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#ContactResultingPinballTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#ContactResultingPinballTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#ContactResultingPinballTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#ContactResultingPinballTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ContactResultingPinballTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#ContactResultingPinballTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#ContactResultingPinballTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactResultingPinballTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#ContactResultingPinballTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#ContactResultingPinballTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#ContactResultingPinballTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#ContactResultingPinballTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#ContactResultingPinballTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#ContactResultingPinballTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#ContactResultingPinballTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#ContactResultingPinballTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#ContactResultingPinballTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#ContactResultingPinballTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#ContactResultingPinballTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#ContactResultingPinballTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#ContactResultingPinballTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#ContactResultingPinballTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#ContactResultingPinballTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactResultingPinballTracker.AccelerationType"></a>

### *property* ContactResultingPinballTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.BoundaryCondition"></a>

### *property* ContactResultingPinballTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ChartDimensions"></a>

### *property* ContactResultingPinballTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ChartViewingStyle"></a>

### *property* ContactResultingPinballTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Children"></a>

### *property* ContactResultingPinballTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Comments"></a>

### *property* ContactResultingPinballTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ContactRegion"></a>

### *property* ContactResultingPinballTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ContactSide"></a>

### *property* ContactResultingPinballTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.CoordinateSystem"></a>

### *property* ContactResultingPinballTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.CurvesAppearanceDisplay"></a>

### *property* ContactResultingPinballTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.CutFrequency"></a>

### *property* ContactResultingPinballTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.DataModelObjectCategory"></a>

### *property* ContactResultingPinballTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.DeformationType"></a>

### *property* ContactResultingPinballTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.DpfEvaluation"></a>

### *property* ContactResultingPinballTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Duration"></a>

### *property* ContactResultingPinballTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.EnhancedTracking"></a>

### *property* ContactResultingPinballTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.FilterMaximum"></a>

### *property* ContactResultingPinballTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.FilterMinimum"></a>

### *property* ContactResultingPinballTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.FilterType"></a>

### *property* ContactResultingPinballTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactResultingPinballTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.GeometrySelectionString"></a>

### *property* ContactResultingPinballTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Images"></a>

### *property* ContactResultingPinballTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactResultingPinballTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.InternalObject"></a>

### *property* ContactResultingPinballTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.IsSolved"></a>

### *property* ContactResultingPinballTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.LoadStepNumber"></a>

### *property* ContactResultingPinballTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Location"></a>

### *property* ContactResultingPinballTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Maximum"></a>

### *property* ContactResultingPinballTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.MaximumAmplitude"></a>

### *property* ContactResultingPinballTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.MaximumFrequency"></a>

### *property* ContactResultingPinballTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Minimum"></a>

### *property* ContactResultingPinballTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.MinimumFrequency"></a>

### *property* ContactResultingPinballTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.NamedSelections"></a>

### *property* ContactResultingPinballTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.NormalOrientation"></a>

### *property* ContactResultingPinballTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.PhaseAngle"></a>

### *property* ContactResultingPinballTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Properties"></a>

### *property* ContactResultingPinballTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.RPMSelection"></a>

### *property* ContactResultingPinballTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.RealAtMaximumAmplitude"></a>

### *property* ContactResultingPinballTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ReportedFrequency"></a>

### *property* ContactResultingPinballTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.RequestedFrequency"></a>

### *property* ContactResultingPinballTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ResultChartType"></a>

### *property* ContactResultingPinballTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.SectorNumber"></a>

### *property* ContactResultingPinballTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ShearOrientation"></a>

### *property* ContactResultingPinballTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.SpatialResolution"></a>

### *property* ContactResultingPinballTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Spring"></a>

### *property* ContactResultingPinballTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.StressStrainType"></a>

### *property* ContactResultingPinballTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Suppressed"></a>

### *property* ContactResultingPinballTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.TimeHistoryDisplay"></a>

### *property* ContactResultingPinballTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.UseParentFrequencyRange"></a>

### *property* ContactResultingPinballTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.VelocityType"></a>

### *property* ContactResultingPinballTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.VisibleProperties"></a>

### *property* ContactResultingPinballTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.XAxisValues"></a>

### *property* ContactResultingPinballTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactResultingPinballTracker.Activate"></a>

### ContactResultingPinballTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.AddComment"></a>

### ContactResultingPinballTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.AddImage"></a>

### ContactResultingPinballTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ClearGeneratedData"></a>

### ContactResultingPinballTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.CopyTo"></a>

### ContactResultingPinballTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.CreateParameter"></a>

### ContactResultingPinballTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Delete"></a>

### ContactResultingPinballTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.Duplicate"></a>

### ContactResultingPinballTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.EvaluateAllResults"></a>

### ContactResultingPinballTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.ExportAnimation"></a>

### ContactResultingPinballTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.GetChildren"></a>

### ContactResultingPinballTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.GetParameter"></a>

### ContactResultingPinballTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.GroupAllSimilarChildren"></a>

### ContactResultingPinballTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.GroupSimilarObjects"></a>

### ContactResultingPinballTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.PropertyByAPIName"></a>

### ContactResultingPinballTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.PropertyByName"></a>

### ContactResultingPinballTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.RemoveParameter"></a>

### ContactResultingPinballTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactResultingPinballTracker.RenameBasedOnDefinition"></a>

### ContactResultingPinballTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

