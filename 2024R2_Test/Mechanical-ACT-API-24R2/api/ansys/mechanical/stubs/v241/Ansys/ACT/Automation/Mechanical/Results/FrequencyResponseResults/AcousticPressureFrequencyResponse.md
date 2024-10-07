# `AcousticPressureFrequencyResponse`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPressureFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPressureFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticPressureFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticPressureFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticPressureFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticPressureFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#AcousticPressureFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#AcousticPressureFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticPressureFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticPressureFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticPressureFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#AcousticPressureFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#AcousticPressureFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#AcousticPressureFrequencyResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticPressureFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticPressureFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPressureFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AcousticPressureFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticPressureFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticPressureFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AcousticPressureFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AccelerationType`](#AcousticPressureFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`BoundaryCondition`](#AcousticPressureFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`ChartDimensions`](#AcousticPressureFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`ChartViewingStyle`](#AcousticPressureFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#AcousticPressureFrequencyResponse.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#AcousticPressureFrequencyResponse.Comments)                                       | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#AcousticPressureFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`CurvesAppearanceDisplay`](#AcousticPressureFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`CutFrequency`](#AcousticPressureFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`DataModelObjectCategory`](#AcousticPressureFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DeformationType`](#AcousticPressureFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`DpfEvaluation`](#AcousticPressureFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`Duration`](#AcousticPressureFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                    |
| [`EnhancedTracking`](#AcousticPressureFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`FilterMaximum`](#AcousticPressureFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AcousticPressureFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FilterType`](#AcousticPressureFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`FrequencyAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`GeometrySelectionString`](#AcousticPressureFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`Images`](#AcousticPressureFrequencyResponse.Images)                                           | Gets the list of associated images.                           |
| [`ImaginaryAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`InternalObject`](#AcousticPressureFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`IsSolved`](#AcousticPressureFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                            |
| [`LoadStepNumber`](#AcousticPressureFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`Location`](#AcousticPressureFrequencyResponse.Location)                                       | Gets or sets the Location.                                    |
| [`Maximum`](#AcousticPressureFrequencyResponse.Maximum)                                         | Gets the Maximum.                                             |
| [`MaximumAmplitude`](#AcousticPressureFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AcousticPressureFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Minimum`](#AcousticPressureFrequencyResponse.Minimum)                                         | Gets the Minimum.                                             |
| [`MinimumFrequency`](#AcousticPressureFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`NormalOrientation`](#AcousticPressureFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`PhaseAngle`](#AcousticPressureFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`Properties`](#AcousticPressureFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                  |
| [`RealAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`ReportedFrequency`](#AcousticPressureFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`RequestedFrequency`](#AcousticPressureFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`ResultChartType`](#AcousticPressureFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`SectorNumber`](#AcousticPressureFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`ShearOrientation`](#AcousticPressureFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`SpatialResolution`](#AcousticPressureFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`Spring`](#AcousticPressureFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                      |
| [`StressStrainType`](#AcousticPressureFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`Suppressed`](#AcousticPressureFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TimeHistoryDisplay`](#AcousticPressureFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`UseParentFrequencyRange`](#AcousticPressureFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`VelocityType`](#AcousticPressureFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`VisibleProperties`](#AcousticPressureFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XAxisValues`](#AcousticPressureFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPressureFrequencyResponse.AccelerationType"></a>

### *property* AcousticPressureFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticPressureFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ChartDimensions"></a>

### *property* AcousticPressureFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticPressureFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Children"></a>

### *property* AcousticPressureFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Comments"></a>

### *property* AcousticPressureFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticPressureFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticPressureFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CutFrequency"></a>

### *property* AcousticPressureFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticPressureFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.DeformationType"></a>

### *property* AcousticPressureFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticPressureFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Duration"></a>

### *property* AcousticPressureFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticPressureFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FilterMaximum"></a>

### *property* AcousticPressureFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FilterMinimum"></a>

### *property* AcousticPressureFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FilterType"></a>

### *property* AcousticPressureFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticPressureFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Images"></a>

### *property* AcousticPressureFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.InternalObject"></a>

### *property* AcousticPressureFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.IsSolved"></a>

### *property* AcousticPressureFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticPressureFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Location"></a>

### *property* AcousticPressureFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Maximum"></a>

### *property* AcousticPressureFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticPressureFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Minimum"></a>

### *property* AcousticPressureFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticPressureFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.NormalOrientation"></a>

### *property* AcousticPressureFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PhaseAngle"></a>

### *property* AcousticPressureFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Properties"></a>

### *property* AcousticPressureFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticPressureFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticPressureFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ResultChartType"></a>

### *property* AcousticPressureFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.SectorNumber"></a>

### *property* AcousticPressureFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ShearOrientation"></a>

### *property* AcousticPressureFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.SpatialResolution"></a>

### *property* AcousticPressureFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Spring"></a>

### *property* AcousticPressureFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.StressStrainType"></a>

### *property* AcousticPressureFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Suppressed"></a>

### *property* AcousticPressureFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticPressureFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticPressureFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.VelocityType"></a>

### *property* AcousticPressureFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.VisibleProperties"></a>

### *property* AcousticPressureFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.XAxisValues"></a>

### *property* AcousticPressureFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPressureFrequencyResponse.Activate"></a>

### AcousticPressureFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.AddComment"></a>

### AcousticPressureFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.AddImage"></a>

### AcousticPressureFrequencyResponse.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ClearGeneratedData"></a>

### AcousticPressureFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CopyTo"></a>

### AcousticPressureFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CreateParameter"></a>

### AcousticPressureFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Delete"></a>

### AcousticPressureFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Duplicate"></a>

### AcousticPressureFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.EvaluateAllResults"></a>

### AcousticPressureFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ExportAnimation"></a>

### AcousticPressureFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetChildren"></a>

### AcousticPressureFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetParameter"></a>

### AcousticPressureFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticPressureFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GroupSimilarObjects"></a>

### AcousticPressureFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PropertyByAPIName"></a>

### AcousticPressureFrequencyResponse.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PropertyByName"></a>

### AcousticPressureFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RemoveParameter"></a>

### AcousticPressureFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticPressureFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

