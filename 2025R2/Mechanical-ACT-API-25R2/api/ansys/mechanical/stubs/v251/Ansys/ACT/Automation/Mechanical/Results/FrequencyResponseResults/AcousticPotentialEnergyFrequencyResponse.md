# `AcousticPotentialEnergyFrequencyResponse`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticPotentialEnergyFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticPotentialEnergyFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticPotentialEnergyFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticPotentialEnergyFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#AcousticPotentialEnergyFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#AcousticPotentialEnergyFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticPotentialEnergyFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticPotentialEnergyFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticPotentialEnergyFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#AcousticPotentialEnergyFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#AcousticPotentialEnergyFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#AcousticPotentialEnergyFrequencyResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticPotentialEnergyFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticPotentialEnergyFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPotentialEnergyFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AcousticPotentialEnergyFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticPotentialEnergyFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticPotentialEnergyFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AcousticPotentialEnergyFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#AcousticPotentialEnergyFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#AcousticPotentialEnergyFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#AcousticPotentialEnergyFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#AcousticPotentialEnergyFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#AcousticPotentialEnergyFrequencyResponse.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#AcousticPotentialEnergyFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticPotentialEnergyFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#AcousticPotentialEnergyFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#AcousticPotentialEnergyFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#AcousticPotentialEnergyFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#AcousticPotentialEnergyFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#AcousticPotentialEnergyFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#AcousticPotentialEnergyFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#AcousticPotentialEnergyFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#AcousticPotentialEnergyFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#AcousticPotentialEnergyFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#AcousticPotentialEnergyFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#AcousticPotentialEnergyFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#AcousticPotentialEnergyFrequencyResponse.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#AcousticPotentialEnergyFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticPotentialEnergyFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#AcousticPotentialEnergyFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticPotentialEnergyFrequencyResponse.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#AcousticPotentialEnergyFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#AcousticPotentialEnergyFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#AcousticPotentialEnergyFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#AcousticPotentialEnergyFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#AcousticPotentialEnergyFrequencyResponse.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#AcousticPotentialEnergyFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#AcousticPotentialEnergyFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#AcousticPotentialEnergyFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticPotentialEnergyFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#AcousticPotentialEnergyFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#AcousticPotentialEnergyFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#AcousticPotentialEnergyFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#AcousticPotentialEnergyFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#AcousticPotentialEnergyFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#AcousticPotentialEnergyFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#AcousticPotentialEnergyFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#AcousticPotentialEnergyFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#AcousticPotentialEnergyFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#AcousticPotentialEnergyFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#AcousticPotentialEnergyFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#AcousticPotentialEnergyFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#AcousticPotentialEnergyFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#AcousticPotentialEnergyFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPotentialEnergyFrequencyResponse.AccelerationType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ChartDimensions"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Children"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Comments"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CutFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.DeformationType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Duration"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FilterMaximum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FilterMinimum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FilterType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Images"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.InternalObject"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.IsSolved"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Location"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Maximum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Minimum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.NamedSelections"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.NormalOrientation"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PhaseAngle"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Properties"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RPMSelection"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ResultChartType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.SectorNumber"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ShearOrientation"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.SpatialResolution"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Spring"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.StressStrainType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Suppressed"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.VelocityType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.VisibleProperties"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.XAxisValues"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPotentialEnergyFrequencyResponse.Activate"></a>

### AcousticPotentialEnergyFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.AddComment"></a>

### AcousticPotentialEnergyFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.AddImage"></a>

### AcousticPotentialEnergyFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ClearGeneratedData"></a>

### AcousticPotentialEnergyFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CopyTo"></a>

### AcousticPotentialEnergyFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CreateParameter"></a>

### AcousticPotentialEnergyFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Delete"></a>

### AcousticPotentialEnergyFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Duplicate"></a>

### AcousticPotentialEnergyFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.EvaluateAllResults"></a>

### AcousticPotentialEnergyFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ExportAnimation"></a>

### AcousticPotentialEnergyFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetChildren"></a>

### AcousticPotentialEnergyFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetParameter"></a>

### AcousticPotentialEnergyFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticPotentialEnergyFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GroupSimilarObjects"></a>

### AcousticPotentialEnergyFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PropertyByAPIName"></a>

### AcousticPotentialEnergyFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PropertyByName"></a>

### AcousticPotentialEnergyFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RemoveParameter"></a>

### AcousticPotentialEnergyFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticPotentialEnergyFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

