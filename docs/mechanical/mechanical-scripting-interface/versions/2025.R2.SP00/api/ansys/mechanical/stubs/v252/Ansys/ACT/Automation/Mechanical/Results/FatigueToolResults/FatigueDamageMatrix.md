# `FatigueDamageMatrix`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamageMatrix"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamageMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueDamageMatrix.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueDamageMatrix.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FatigueDamageMatrix.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueDamageMatrix.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FatigueDamageMatrix.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FatigueDamageMatrix.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueDamageMatrix.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FatigueDamageMatrix.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueDamageMatrix.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#FatigueDamageMatrix.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FatigueDamageMatrix.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#FatigueDamageMatrix.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueDamageMatrix.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueDamageMatrix.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueDamageMatrix.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FatigueDamageMatrix.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueDamageMatrix.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueDamageMatrix.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FatigueDamageMatrix.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#FatigueDamageMatrix.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#FatigueDamageMatrix.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#FatigueDamageMatrix.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#FatigueDamageMatrix.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#FatigueDamageMatrix.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#FatigueDamageMatrix.Comments)                                       | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FatigueDamageMatrix.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#FatigueDamageMatrix.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#FatigueDamageMatrix.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#FatigueDamageMatrix.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#FatigueDamageMatrix.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DesignLife`](#FatigueDamageMatrix.DesignLife)                                   | Gets or sets the DesignLife.                                             |
| [`DpfEvaluation`](#FatigueDamageMatrix.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#FatigueDamageMatrix.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#FatigueDamageMatrix.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#FatigueDamageMatrix.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#FatigueDamageMatrix.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#FatigueDamageMatrix.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#FatigueDamageMatrix.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#FatigueDamageMatrix.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#FatigueDamageMatrix.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#FatigueDamageMatrix.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#FatigueDamageMatrix.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FatigueDamageMatrix.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#FatigueDamageMatrix.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FatigueDamageMatrix.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#FatigueDamageMatrix.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#FatigueDamageMatrix.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#FatigueDamageMatrix.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`MaximumMean`](#FatigueDamageMatrix.MaximumMean)                                 | Gets the MaximumMean.                                                    |
| [`MaximumRange`](#FatigueDamageMatrix.MaximumRange)                               | Gets the MaximumRange.                                                   |
| [`Minimum`](#FatigueDamageMatrix.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#FatigueDamageMatrix.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`MinimumMean`](#FatigueDamageMatrix.MinimumMean)                                 | Gets the MinimumMean.                                                    |
| [`MinimumRange`](#FatigueDamageMatrix.MinimumRange)                               | Gets the MinimumRange.                                                   |
| [`NamedSelections`](#FatigueDamageMatrix.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#FatigueDamageMatrix.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`OutputUnit`](#FatigueDamageMatrix.OutputUnit)                                   | Gets or sets the OutputUnit.                                             |
| [`PhaseAngle`](#FatigueDamageMatrix.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#FatigueDamageMatrix.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FatigueDamageMatrix.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#FatigueDamageMatrix.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#FatigueDamageMatrix.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#FatigueDamageMatrix.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#FatigueDamageMatrix.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#FatigueDamageMatrix.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#FatigueDamageMatrix.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#FatigueDamageMatrix.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#FatigueDamageMatrix.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#FatigueDamageMatrix.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#FatigueDamageMatrix.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#FatigueDamageMatrix.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#FatigueDamageMatrix.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#FatigueDamageMatrix.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#FatigueDamageMatrix.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#FatigueDamageMatrix.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="FatigueDamageMatrix.AccelerationType"></a>

### *property* FatigueDamageMatrix.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.BoundaryCondition"></a>

### *property* FatigueDamageMatrix.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ChartDimensions"></a>

### *property* FatigueDamageMatrix.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ChartViewingStyle"></a>

### *property* FatigueDamageMatrix.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Children"></a>

### *property* FatigueDamageMatrix.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Comments"></a>

### *property* FatigueDamageMatrix.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CoordinateSystem"></a>

### *property* FatigueDamageMatrix.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CurvesAppearanceDisplay"></a>

### *property* FatigueDamageMatrix.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CutFrequency"></a>

### *property* FatigueDamageMatrix.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DataModelObjectCategory"></a>

### *property* FatigueDamageMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DeformationType"></a>

### *property* FatigueDamageMatrix.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DesignLife"></a>

### *property* FatigueDamageMatrix.DesignLife *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DpfEvaluation"></a>

### *property* FatigueDamageMatrix.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Duration"></a>

### *property* FatigueDamageMatrix.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.EnhancedTracking"></a>

### *property* FatigueDamageMatrix.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FilterMaximum"></a>

### *property* FatigueDamageMatrix.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FilterMinimum"></a>

### *property* FatigueDamageMatrix.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FilterType"></a>

### *property* FatigueDamageMatrix.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueDamageMatrix.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GeometrySelectionString"></a>

### *property* FatigueDamageMatrix.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Images"></a>

### *property* FatigueDamageMatrix.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueDamageMatrix.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.InternalObject"></a>

### *property* FatigueDamageMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.IsSolved"></a>

### *property* FatigueDamageMatrix.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.LoadStepNumber"></a>

### *property* FatigueDamageMatrix.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Location"></a>

### *property* FatigueDamageMatrix.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Maximum"></a>

### *property* FatigueDamageMatrix.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumAmplitude"></a>

### *property* FatigueDamageMatrix.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumFrequency"></a>

### *property* FatigueDamageMatrix.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumMean"></a>

### *property* FatigueDamageMatrix.MaximumMean *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumRange"></a>

### *property* FatigueDamageMatrix.MaximumRange *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Minimum"></a>

### *property* FatigueDamageMatrix.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MinimumFrequency"></a>

### *property* FatigueDamageMatrix.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MinimumMean"></a>

### *property* FatigueDamageMatrix.MinimumMean *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MinimumRange"></a>

### *property* FatigueDamageMatrix.MinimumRange *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.NamedSelections"></a>

### *property* FatigueDamageMatrix.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.NormalOrientation"></a>

### *property* FatigueDamageMatrix.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.OutputUnit"></a>

### *property* FatigueDamageMatrix.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.PhaseAngle"></a>

### *property* FatigueDamageMatrix.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Properties"></a>

### *property* FatigueDamageMatrix.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RPMSelection"></a>

### *property* FatigueDamageMatrix.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RealAtMaximumAmplitude"></a>

### *property* FatigueDamageMatrix.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ReportedFrequency"></a>

### *property* FatigueDamageMatrix.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RequestedFrequency"></a>

### *property* FatigueDamageMatrix.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ResultChartType"></a>

### *property* FatigueDamageMatrix.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.SectorNumber"></a>

### *property* FatigueDamageMatrix.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ShearOrientation"></a>

### *property* FatigueDamageMatrix.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.SpatialResolution"></a>

### *property* FatigueDamageMatrix.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Spring"></a>

### *property* FatigueDamageMatrix.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.StressStrainType"></a>

### *property* FatigueDamageMatrix.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Suppressed"></a>

### *property* FatigueDamageMatrix.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.TimeHistoryDisplay"></a>

### *property* FatigueDamageMatrix.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.UseParentFrequencyRange"></a>

### *property* FatigueDamageMatrix.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.VelocityType"></a>

### *property* FatigueDamageMatrix.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.VisibleProperties"></a>

### *property* FatigueDamageMatrix.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.XAxisValues"></a>

### *property* FatigueDamageMatrix.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueDamageMatrix.Activate"></a>

### FatigueDamageMatrix.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.AddComment"></a>

### FatigueDamageMatrix.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.AddImage"></a>

### FatigueDamageMatrix.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ClearGeneratedData"></a>

### FatigueDamageMatrix.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CopyTo"></a>

### FatigueDamageMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CreateParameter"></a>

### FatigueDamageMatrix.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Delete"></a>

### FatigueDamageMatrix.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Duplicate"></a>

### FatigueDamageMatrix.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.EvaluateAllResults"></a>

### FatigueDamageMatrix.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ExportAnimation"></a>

### FatigueDamageMatrix.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GetChildren"></a>

### FatigueDamageMatrix.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GetParameter"></a>

### FatigueDamageMatrix.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GroupAllSimilarChildren"></a>

### FatigueDamageMatrix.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GroupSimilarObjects"></a>

### FatigueDamageMatrix.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.PropertyByAPIName"></a>

### FatigueDamageMatrix.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.PropertyByName"></a>

### FatigueDamageMatrix.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RemoveParameter"></a>

### FatigueDamageMatrix.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RenameBasedOnDefinition"></a>

### FatigueDamageMatrix.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

