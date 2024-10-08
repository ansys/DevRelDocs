# `ElasticStrainPhaseResponse`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.ElasticStrainPhaseResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.ElasticStrainPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElasticStrainPhaseResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElasticStrainPhaseResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ElasticStrainPhaseResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ElasticStrainPhaseResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ElasticStrainPhaseResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ElasticStrainPhaseResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElasticStrainPhaseResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ElasticStrainPhaseResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElasticStrainPhaseResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ElasticStrainPhaseResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ElasticStrainPhaseResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ElasticStrainPhaseResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElasticStrainPhaseResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElasticStrainPhaseResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElasticStrainPhaseResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ElasticStrainPhaseResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElasticStrainPhaseResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElasticStrainPhaseResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ElasticStrainPhaseResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AccelerationType`](#ElasticStrainPhaseResponse.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`BoundaryCondition`](#ElasticStrainPhaseResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`ChartDimensions`](#ElasticStrainPhaseResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`ChartViewingStyle`](#ElasticStrainPhaseResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#ElasticStrainPhaseResponse.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ElasticStrainPhaseResponse.Comments)                                       | Gets the list of associated comments.                         |
| [`ContactRegion`](#ElasticStrainPhaseResponse.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`CoordinateSystem`](#ElasticStrainPhaseResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`CurvesAppearanceDisplay`](#ElasticStrainPhaseResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`CutFrequency`](#ElasticStrainPhaseResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`DataModelObjectCategory`](#ElasticStrainPhaseResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DeformationType`](#ElasticStrainPhaseResponse.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`DpfEvaluation`](#ElasticStrainPhaseResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`Duration`](#ElasticStrainPhaseResponse.Duration)                                       | Gets or sets the Duration.                                    |
| [`EnhancedTracking`](#ElasticStrainPhaseResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`FilterMaximum`](#ElasticStrainPhaseResponse.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ElasticStrainPhaseResponse.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FilterType`](#ElasticStrainPhaseResponse.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`FrequencyAtMaximumAmplitude`](#ElasticStrainPhaseResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`GeometrySelectionString`](#ElasticStrainPhaseResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`Images`](#ElasticStrainPhaseResponse.Images)                                           | Gets the list of associated images.                           |
| [`ImaginaryAtMaximumAmplitude`](#ElasticStrainPhaseResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`InternalObject`](#ElasticStrainPhaseResponse.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`IsSolved`](#ElasticStrainPhaseResponse.IsSolved)                                       | Gets the IsSolved.                                            |
| [`LoadStepNumber`](#ElasticStrainPhaseResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`Location`](#ElasticStrainPhaseResponse.Location)                                       | Gets or sets the Location.                                    |
| [`Maximum`](#ElasticStrainPhaseResponse.Maximum)                                         | Gets the Maximum.                                             |
| [`MaximumAmplitude`](#ElasticStrainPhaseResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ElasticStrainPhaseResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Minimum`](#ElasticStrainPhaseResponse.Minimum)                                         | Gets the Minimum.                                             |
| [`MinimumFrequency`](#ElasticStrainPhaseResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`NormalOrientation`](#ElasticStrainPhaseResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`PhaseAngle`](#ElasticStrainPhaseResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`Properties`](#ElasticStrainPhaseResponse.Properties)                                   | Gets the list of properties for this object.                  |
| [`RealAtMaximumAmplitude`](#ElasticStrainPhaseResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`ReportedFrequency`](#ElasticStrainPhaseResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`RequestedFrequency`](#ElasticStrainPhaseResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`ResultChartType`](#ElasticStrainPhaseResponse.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`SectorNumber`](#ElasticStrainPhaseResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`ShearOrientation`](#ElasticStrainPhaseResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`SpatialResolution`](#ElasticStrainPhaseResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`Spring`](#ElasticStrainPhaseResponse.Spring)                                           | Gets or sets the Spring.                                      |
| [`StressStrainType`](#ElasticStrainPhaseResponse.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`Suppressed`](#ElasticStrainPhaseResponse.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TimeHistoryDisplay`](#ElasticStrainPhaseResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`UseParentFrequencyRange`](#ElasticStrainPhaseResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`VelocityType`](#ElasticStrainPhaseResponse.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`VisibleProperties`](#ElasticStrainPhaseResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XAxisValues`](#ElasticStrainPhaseResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |

<a id="property-detail"></a>

## Property detail

<a id="ElasticStrainPhaseResponse.AccelerationType"></a>

### *property* ElasticStrainPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.BoundaryCondition"></a>

### *property* ElasticStrainPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ChartDimensions"></a>

### *property* ElasticStrainPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ChartViewingStyle"></a>

### *property* ElasticStrainPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Children"></a>

### *property* ElasticStrainPhaseResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Comments"></a>

### *property* ElasticStrainPhaseResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ContactRegion"></a>

### *property* ElasticStrainPhaseResponse.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.CoordinateSystem"></a>

### *property* ElasticStrainPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.CurvesAppearanceDisplay"></a>

### *property* ElasticStrainPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.CutFrequency"></a>

### *property* ElasticStrainPhaseResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.DataModelObjectCategory"></a>

### *property* ElasticStrainPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.DeformationType"></a>

### *property* ElasticStrainPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.DpfEvaluation"></a>

### *property* ElasticStrainPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Duration"></a>

### *property* ElasticStrainPhaseResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.EnhancedTracking"></a>

### *property* ElasticStrainPhaseResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.FilterMaximum"></a>

### *property* ElasticStrainPhaseResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.FilterMinimum"></a>

### *property* ElasticStrainPhaseResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.FilterType"></a>

### *property* ElasticStrainPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.FrequencyAtMaximumAmplitude"></a>

### *property* ElasticStrainPhaseResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.GeometrySelectionString"></a>

### *property* ElasticStrainPhaseResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Images"></a>

### *property* ElasticStrainPhaseResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* ElasticStrainPhaseResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.InternalObject"></a>

### *property* ElasticStrainPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.IsSolved"></a>

### *property* ElasticStrainPhaseResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.LoadStepNumber"></a>

### *property* ElasticStrainPhaseResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Location"></a>

### *property* ElasticStrainPhaseResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Maximum"></a>

### *property* ElasticStrainPhaseResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.MaximumAmplitude"></a>

### *property* ElasticStrainPhaseResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.MaximumFrequency"></a>

### *property* ElasticStrainPhaseResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Minimum"></a>

### *property* ElasticStrainPhaseResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.MinimumFrequency"></a>

### *property* ElasticStrainPhaseResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.NormalOrientation"></a>

### *property* ElasticStrainPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.PhaseAngle"></a>

### *property* ElasticStrainPhaseResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Properties"></a>

### *property* ElasticStrainPhaseResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.RealAtMaximumAmplitude"></a>

### *property* ElasticStrainPhaseResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ReportedFrequency"></a>

### *property* ElasticStrainPhaseResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.RequestedFrequency"></a>

### *property* ElasticStrainPhaseResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ResultChartType"></a>

### *property* ElasticStrainPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.SectorNumber"></a>

### *property* ElasticStrainPhaseResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ShearOrientation"></a>

### *property* ElasticStrainPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.SpatialResolution"></a>

### *property* ElasticStrainPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Spring"></a>

### *property* ElasticStrainPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.StressStrainType"></a>

### *property* ElasticStrainPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Suppressed"></a>

### *property* ElasticStrainPhaseResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.TimeHistoryDisplay"></a>

### *property* ElasticStrainPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.UseParentFrequencyRange"></a>

### *property* ElasticStrainPhaseResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.VelocityType"></a>

### *property* ElasticStrainPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.VisibleProperties"></a>

### *property* ElasticStrainPhaseResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.XAxisValues"></a>

### *property* ElasticStrainPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElasticStrainPhaseResponse.Activate"></a>

### ElasticStrainPhaseResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.AddComment"></a>

### ElasticStrainPhaseResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.AddImage"></a>

### ElasticStrainPhaseResponse.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ClearGeneratedData"></a>

### ElasticStrainPhaseResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.CopyTo"></a>

### ElasticStrainPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.CreateParameter"></a>

### ElasticStrainPhaseResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Delete"></a>

### ElasticStrainPhaseResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.Duplicate"></a>

### ElasticStrainPhaseResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.EvaluateAllResults"></a>

### ElasticStrainPhaseResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.ExportAnimation"></a>

### ElasticStrainPhaseResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.GetChildren"></a>

### ElasticStrainPhaseResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.GetParameter"></a>

### ElasticStrainPhaseResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.GroupAllSimilarChildren"></a>

### ElasticStrainPhaseResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.GroupSimilarObjects"></a>

### ElasticStrainPhaseResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.PropertyByAPIName"></a>

### ElasticStrainPhaseResponse.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.PropertyByName"></a>

### ElasticStrainPhaseResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.RemoveParameter"></a>

### ElasticStrainPhaseResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainPhaseResponse.RenameBasedOnDefinition"></a>

### ElasticStrainPhaseResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

