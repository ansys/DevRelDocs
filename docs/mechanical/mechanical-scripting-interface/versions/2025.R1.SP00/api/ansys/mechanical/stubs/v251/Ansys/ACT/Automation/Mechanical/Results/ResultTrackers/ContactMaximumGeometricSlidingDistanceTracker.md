# `ContactMaximumGeometricSlidingDistanceTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumGeometricSlidingDistanceTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumGeometricSlidingDistanceTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactMaximumGeometricSlidingDistanceTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactMaximumGeometricSlidingDistanceTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactMaximumGeometricSlidingDistanceTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactMaximumGeometricSlidingDistanceTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactMaximumGeometricSlidingDistanceTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactMaximumGeometricSlidingDistanceTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactMaximumGeometricSlidingDistanceTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactMaximumGeometricSlidingDistanceTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactMaximumGeometricSlidingDistanceTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactMaximumGeometricSlidingDistanceTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#ContactMaximumGeometricSlidingDistanceTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#ContactMaximumGeometricSlidingDistanceTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#ContactMaximumGeometricSlidingDistanceTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`ContactRegion`](#ContactMaximumGeometricSlidingDistanceTracker.ContactRegion)                             | Gets or sets the ContactRegion.                                          |
| [`ContactSide`](#ContactMaximumGeometricSlidingDistanceTracker.ContactSide)                                 | Gets or sets the ContactSide.                                            |
| [`CoordinateSystem`](#ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#ContactMaximumGeometricSlidingDistanceTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#ContactMaximumGeometricSlidingDistanceTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#ContactMaximumGeometricSlidingDistanceTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#ContactMaximumGeometricSlidingDistanceTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#ContactMaximumGeometricSlidingDistanceTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactMaximumGeometricSlidingDistanceTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactMaximumGeometricSlidingDistanceTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#ContactMaximumGeometricSlidingDistanceTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#ContactMaximumGeometricSlidingDistanceTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#ContactMaximumGeometricSlidingDistanceTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#ContactMaximumGeometricSlidingDistanceTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactMaximumGeometricSlidingDistanceTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#ContactMaximumGeometricSlidingDistanceTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#ContactMaximumGeometricSlidingDistanceTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#ContactMaximumGeometricSlidingDistanceTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#ContactMaximumGeometricSlidingDistanceTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#ContactMaximumGeometricSlidingDistanceTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#ContactMaximumGeometricSlidingDistanceTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#ContactMaximumGeometricSlidingDistanceTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactMaximumGeometricSlidingDistanceTracker.AccelerationType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Children"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Comments"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ContactRegion"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ContactSide"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CutFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DeformationType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Duration"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Images"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.InternalObject"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.IsSolved"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Location"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Maximum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Minimum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.NamedSelections"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Properties"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RPMSelection"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ResultChartType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.SectorNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Spring"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.StressStrainType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Suppressed"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.VelocityType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.XAxisValues"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMaximumGeometricSlidingDistanceTracker.Activate"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AddComment"></a>

### ContactMaximumGeometricSlidingDistanceTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AddImage"></a>

### ContactMaximumGeometricSlidingDistanceTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData"></a>

### ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CopyTo"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CreateParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Delete"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Duplicate"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults"></a>

### ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation"></a>

### ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetChildren"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyByName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

