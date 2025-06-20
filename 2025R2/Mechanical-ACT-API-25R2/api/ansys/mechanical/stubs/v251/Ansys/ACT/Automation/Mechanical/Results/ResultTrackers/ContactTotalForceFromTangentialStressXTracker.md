# `ContactTotalForceFromTangentialStressXTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressXTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressXTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactTotalForceFromTangentialStressXTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactTotalForceFromTangentialStressXTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactTotalForceFromTangentialStressXTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromTangentialStressXTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactTotalForceFromTangentialStressXTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactTotalForceFromTangentialStressXTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactTotalForceFromTangentialStressXTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactTotalForceFromTangentialStressXTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactTotalForceFromTangentialStressXTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactTotalForceFromTangentialStressXTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactTotalForceFromTangentialStressXTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactTotalForceFromTangentialStressXTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactTotalForceFromTangentialStressXTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromTangentialStressXTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromTangentialStressXTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactTotalForceFromTangentialStressXTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactTotalForceFromTangentialStressXTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactTotalForceFromTangentialStressXTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromTangentialStressXTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#ContactTotalForceFromTangentialStressXTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#ContactTotalForceFromTangentialStressXTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#ContactTotalForceFromTangentialStressXTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#ContactTotalForceFromTangentialStressXTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#ContactTotalForceFromTangentialStressXTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#ContactTotalForceFromTangentialStressXTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`ContactRegion`](#ContactTotalForceFromTangentialStressXTracker.ContactRegion)                             | Gets or sets the ContactRegion.                                          |
| [`CoordinateSystem`](#ContactTotalForceFromTangentialStressXTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromTangentialStressXTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#ContactTotalForceFromTangentialStressXTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#ContactTotalForceFromTangentialStressXTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#ContactTotalForceFromTangentialStressXTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#ContactTotalForceFromTangentialStressXTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#ContactTotalForceFromTangentialStressXTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#ContactTotalForceFromTangentialStressXTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#ContactTotalForceFromTangentialStressXTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#ContactTotalForceFromTangentialStressXTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#ContactTotalForceFromTangentialStressXTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#ContactTotalForceFromTangentialStressXTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#ContactTotalForceFromTangentialStressXTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#ContactTotalForceFromTangentialStressXTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactTotalForceFromTangentialStressXTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#ContactTotalForceFromTangentialStressXTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactTotalForceFromTangentialStressXTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#ContactTotalForceFromTangentialStressXTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#ContactTotalForceFromTangentialStressXTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#ContactTotalForceFromTangentialStressXTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#ContactTotalForceFromTangentialStressXTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#ContactTotalForceFromTangentialStressXTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ContactTotalForceFromTangentialStressXTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#ContactTotalForceFromTangentialStressXTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#ContactTotalForceFromTangentialStressXTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactTotalForceFromTangentialStressXTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#ContactTotalForceFromTangentialStressXTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#ContactTotalForceFromTangentialStressXTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#ContactTotalForceFromTangentialStressXTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#ContactTotalForceFromTangentialStressXTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#ContactTotalForceFromTangentialStressXTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#ContactTotalForceFromTangentialStressXTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#ContactTotalForceFromTangentialStressXTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#ContactTotalForceFromTangentialStressXTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#ContactTotalForceFromTangentialStressXTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#ContactTotalForceFromTangentialStressXTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#ContactTotalForceFromTangentialStressXTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#ContactTotalForceFromTangentialStressXTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#ContactTotalForceFromTangentialStressXTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#ContactTotalForceFromTangentialStressXTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactTotalForceFromTangentialStressXTracker.AccelerationType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.BoundaryCondition"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ChartDimensions"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ChartViewingStyle"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Children"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Comments"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ContactRegion"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CoordinateSystem"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CutFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.DataModelObjectCategory"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.DeformationType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.DpfEvaluation"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Duration"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.EnhancedTracking"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FilterMaximum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FilterMinimum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FilterType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GeometrySelectionString"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Images"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.InternalObject"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.IsSolved"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.LoadStepNumber"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Location"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Maximum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.MaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.MaximumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Minimum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.MinimumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.NamedSelections"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.NormalOrientation"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.PhaseAngle"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Properties"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RPMSelection"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ReportedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RequestedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ResultChartType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.SectorNumber"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ShearOrientation"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.SpatialResolution"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Spring"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.StressStrainType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Suppressed"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.TimeHistoryDisplay"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.UseParentFrequencyRange"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.VelocityType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.VisibleProperties"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.XAxisValues"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTotalForceFromTangentialStressXTracker.Activate"></a>

### ContactTotalForceFromTangentialStressXTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.AddComment"></a>

### ContactTotalForceFromTangentialStressXTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.AddImage"></a>

### ContactTotalForceFromTangentialStressXTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ClearGeneratedData"></a>

### ContactTotalForceFromTangentialStressXTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CopyTo"></a>

### ContactTotalForceFromTangentialStressXTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CreateParameter"></a>

### ContactTotalForceFromTangentialStressXTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Delete"></a>

### ContactTotalForceFromTangentialStressXTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Duplicate"></a>

### ContactTotalForceFromTangentialStressXTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.EvaluateAllResults"></a>

### ContactTotalForceFromTangentialStressXTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ExportAnimation"></a>

### ContactTotalForceFromTangentialStressXTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GetChildren"></a>

### ContactTotalForceFromTangentialStressXTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GetParameter"></a>

### ContactTotalForceFromTangentialStressXTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GroupAllSimilarChildren"></a>

### ContactTotalForceFromTangentialStressXTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GroupSimilarObjects"></a>

### ContactTotalForceFromTangentialStressXTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.PropertyByAPIName"></a>

### ContactTotalForceFromTangentialStressXTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.PropertyByName"></a>

### ContactTotalForceFromTangentialStressXTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RemoveParameter"></a>

### ContactTotalForceFromTangentialStressXTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RenameBasedOnDefinition"></a>

### ContactTotalForceFromTangentialStressXTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

