# `FatigueHysteresis`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueHysteresis"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueHysteresis

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueHysteresis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueHysteresis.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FatigueHysteresis.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueHysteresis.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FatigueHysteresis.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FatigueHysteresis.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueHysteresis.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FatigueHysteresis.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueHysteresis.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#FatigueHysteresis.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FatigueHysteresis.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#FatigueHysteresis.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueHysteresis.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueHysteresis.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueHysteresis.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FatigueHysteresis.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueHysteresis.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueHysteresis.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FatigueHysteresis.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#FatigueHysteresis.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#FatigueHysteresis.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#FatigueHysteresis.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#FatigueHysteresis.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#FatigueHysteresis.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#FatigueHysteresis.Comments)                                       | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FatigueHysteresis.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#FatigueHysteresis.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#FatigueHysteresis.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#FatigueHysteresis.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#FatigueHysteresis.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#FatigueHysteresis.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#FatigueHysteresis.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#FatigueHysteresis.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#FatigueHysteresis.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#FatigueHysteresis.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#FatigueHysteresis.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#FatigueHysteresis.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#FatigueHysteresis.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#FatigueHysteresis.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#FatigueHysteresis.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#FatigueHysteresis.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FatigueHysteresis.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#FatigueHysteresis.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FatigueHysteresis.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#FatigueHysteresis.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#FatigueHysteresis.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#FatigueHysteresis.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`MaximumStrain`](#FatigueHysteresis.MaximumStrain)                             | Gets the  MaximumStrain.                                                 |
| [`MaximumStress`](#FatigueHysteresis.MaximumStress)                             | Gets the  MaximumStress.                                                 |
| [`Minimum`](#FatigueHysteresis.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#FatigueHysteresis.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`MinimumStrain`](#FatigueHysteresis.MinimumStrain)                             | Gets the  MinimumStrain.                                                 |
| [`MinimumStress`](#FatigueHysteresis.MinimumStress)                             | Gets the  MinimumStress.                                                 |
| [`NamedSelections`](#FatigueHysteresis.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#FatigueHysteresis.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#FatigueHysteresis.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`PointsPerSegment`](#FatigueHysteresis.PointsPerSegment)                       | Gets or sets the PointsPerSegment.                                       |
| [`Properties`](#FatigueHysteresis.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FatigueHysteresis.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#FatigueHysteresis.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#FatigueHysteresis.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#FatigueHysteresis.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#FatigueHysteresis.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#FatigueHysteresis.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#FatigueHysteresis.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#FatigueHysteresis.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#FatigueHysteresis.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#FatigueHysteresis.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#FatigueHysteresis.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#FatigueHysteresis.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#FatigueHysteresis.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#FatigueHysteresis.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#FatigueHysteresis.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#FatigueHysteresis.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="FatigueHysteresis.AccelerationType"></a>

### *property* FatigueHysteresis.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.BoundaryCondition"></a>

### *property* FatigueHysteresis.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ChartDimensions"></a>

### *property* FatigueHysteresis.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ChartViewingStyle"></a>

### *property* FatigueHysteresis.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Children"></a>

### *property* FatigueHysteresis.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Comments"></a>

### *property* FatigueHysteresis.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CoordinateSystem"></a>

### *property* FatigueHysteresis.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CurvesAppearanceDisplay"></a>

### *property* FatigueHysteresis.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CutFrequency"></a>

### *property* FatigueHysteresis.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.DataModelObjectCategory"></a>

### *property* FatigueHysteresis.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.DeformationType"></a>

### *property* FatigueHysteresis.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.DpfEvaluation"></a>

### *property* FatigueHysteresis.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Duration"></a>

### *property* FatigueHysteresis.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.EnhancedTracking"></a>

### *property* FatigueHysteresis.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FilterMaximum"></a>

### *property* FatigueHysteresis.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FilterMinimum"></a>

### *property* FatigueHysteresis.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FilterType"></a>

### *property* FatigueHysteresis.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueHysteresis.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GeometrySelectionString"></a>

### *property* FatigueHysteresis.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Images"></a>

### *property* FatigueHysteresis.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueHysteresis.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.InternalObject"></a>

### *property* FatigueHysteresis.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.IsSolved"></a>

### *property* FatigueHysteresis.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.LoadStepNumber"></a>

### *property* FatigueHysteresis.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Location"></a>

### *property* FatigueHysteresis.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Maximum"></a>

### *property* FatigueHysteresis.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumAmplitude"></a>

### *property* FatigueHysteresis.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumFrequency"></a>

### *property* FatigueHysteresis.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumStrain"></a>

### *property* FatigueHysteresis.MaximumStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MaximumStrain.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumStress"></a>

### *property* FatigueHysteresis.MaximumStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MaximumStress.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Minimum"></a>

### *property* FatigueHysteresis.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MinimumFrequency"></a>

### *property* FatigueHysteresis.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MinimumStrain"></a>

### *property* FatigueHysteresis.MinimumStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MinimumStrain.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MinimumStress"></a>

### *property* FatigueHysteresis.MinimumStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  MinimumStress.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.NamedSelections"></a>

### *property* FatigueHysteresis.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.NormalOrientation"></a>

### *property* FatigueHysteresis.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PhaseAngle"></a>

### *property* FatigueHysteresis.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PointsPerSegment"></a>

### *property* FatigueHysteresis.PointsPerSegment *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointsPerSegment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Properties"></a>

### *property* FatigueHysteresis.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RPMSelection"></a>

### *property* FatigueHysteresis.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RealAtMaximumAmplitude"></a>

### *property* FatigueHysteresis.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ReportedFrequency"></a>

### *property* FatigueHysteresis.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RequestedFrequency"></a>

### *property* FatigueHysteresis.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ResultChartType"></a>

### *property* FatigueHysteresis.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.SectorNumber"></a>

### *property* FatigueHysteresis.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ShearOrientation"></a>

### *property* FatigueHysteresis.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.SpatialResolution"></a>

### *property* FatigueHysteresis.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Spring"></a>

### *property* FatigueHysteresis.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.StressStrainType"></a>

### *property* FatigueHysteresis.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Suppressed"></a>

### *property* FatigueHysteresis.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.TimeHistoryDisplay"></a>

### *property* FatigueHysteresis.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.UseParentFrequencyRange"></a>

### *property* FatigueHysteresis.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.VelocityType"></a>

### *property* FatigueHysteresis.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.VisibleProperties"></a>

### *property* FatigueHysteresis.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.XAxisValues"></a>

### *property* FatigueHysteresis.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueHysteresis.Activate"></a>

### FatigueHysteresis.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.AddComment"></a>

### FatigueHysteresis.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.AddImage"></a>

### FatigueHysteresis.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ClearGeneratedData"></a>

### FatigueHysteresis.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CopyTo"></a>

### FatigueHysteresis.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CreateParameter"></a>

### FatigueHysteresis.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Delete"></a>

### FatigueHysteresis.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Duplicate"></a>

### FatigueHysteresis.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.EvaluateAllResults"></a>

### FatigueHysteresis.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ExportAnimation"></a>

### FatigueHysteresis.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetChildren"></a>

### FatigueHysteresis.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetParameter"></a>

### FatigueHysteresis.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GroupAllSimilarChildren"></a>

### FatigueHysteresis.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GroupSimilarObjects"></a>

### FatigueHysteresis.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PropertyByAPIName"></a>

### FatigueHysteresis.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PropertyByName"></a>

### FatigueHysteresis.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RemoveParameter"></a>

### FatigueHysteresis.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RenameBasedOnDefinition"></a>

### FatigueHysteresis.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

