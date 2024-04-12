<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults"></a>

<a id="the-phaseresponseresults-package"></a>

# The `PhaseResponseResults` package

<a id="summary"></a>

## Summary

### Classes

| [`AccelerationPhaseResponse`](AccelerationPhaseResponse.md#AccelerationPhaseResponse)    | Defines a AccelerationPhaseResponse.   |
|------------------------------------------------------------------------------------------|----------------------------------------|
| [`DeformationPhaseResponse`](DeformationPhaseResponse.md#DeformationPhaseResponse)       | Defines a DeformationPhaseResponse.    |
| [`ElasticStrainPhaseResponse`](ElasticStrainPhaseResponse.md#ElasticStrainPhaseResponse) | Defines a ElasticStrainPhaseResponse.  |
| [`StressPhaseResponse`](StressPhaseResponse.md#StressPhaseResponse)                      | Defines a StressPhaseResponse.         |
| [`VelocityPhaseResponse`](VelocityPhaseResponse.md#VelocityPhaseResponse)                | Defines a VelocityPhaseResponse.       |

<a id="description"></a>

## Description

PhaseResponseResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="PhaseResponseResults.AccelerationPhaseResponse"></a>

### *class* PhaseResponseResults.AccelerationPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AccelerationPhaseResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id269)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id270)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id271)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id272) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id273)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id276)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id277)                | Creates a new child Image.                                                        |
| [`Activate`](#id278)                | Activate the current object.                                                      |
| [`CopyTo`](#id279)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id280)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id281) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id282)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id283)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id284)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id285)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id286)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id287)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id221)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id223)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id224)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id225)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id226)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id227)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id228)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id229)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id230)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id231)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id232)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id233)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id234)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id235)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id236)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id237)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id238)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id239)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id240)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id241)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id242)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id243)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id246)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id247)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id248)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id249)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id250)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id252)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id254)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id255)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id256)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id257)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id258)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id261)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id262)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id263)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id264)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id266)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id267)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import AccelerationPhaseResponse
```

<a id="property-detail"></a>

## Property detail

<a id="PhaseResponseResults.InternalObject"></a>

### *property* PhaseResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ContactRegion"></a>

### *property* PhaseResponseResults.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.DataModelObjectCategory"></a>

### *property* PhaseResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.IsSolved"></a>

### *property* PhaseResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ChartDimensions"></a>

### *property* PhaseResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.BoundaryCondition"></a>

### *property* PhaseResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.CutFrequency"></a>

### *property* PhaseResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.SectorNumber"></a>

### *property* PhaseResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.GeometrySelectionString"></a>

### *property* PhaseResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.LoadStepNumber"></a>

### *property* PhaseResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ReportedFrequency"></a>

### *property* PhaseResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Duration"></a>

### *property* PhaseResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.FilterMaximum"></a>

### *property* PhaseResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.FilterMinimum"></a>

### *property* PhaseResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.FrequencyAtMaximumAmplitude"></a>

### *property* PhaseResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ImaginaryAtMaximumAmplitude"></a>

### *property* PhaseResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.MaximumAmplitude"></a>

### *property* PhaseResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.MaximumFrequency"></a>

### *property* PhaseResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Maximum"></a>

### *property* PhaseResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.MinimumFrequency"></a>

### *property* PhaseResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Minimum"></a>

### *property* PhaseResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.PhaseAngle"></a>

### *property* PhaseResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.RealAtMaximumAmplitude"></a>

### *property* PhaseResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.RequestedFrequency"></a>

### *property* PhaseResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.AccelerationType"></a>

### *property* PhaseResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ChartViewingStyle"></a>

### *property* PhaseResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.DeformationType"></a>

### *property* PhaseResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.FilterType"></a>

### *property* PhaseResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.SpatialResolution"></a>

### *property* PhaseResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.NormalOrientation"></a>

### *property* PhaseResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.CurvesAppearanceDisplay"></a>

### *property* PhaseResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ResultChartType"></a>

### *property* PhaseResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.DpfEvaluation"></a>

### *property* PhaseResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.XAxisValues"></a>

### *property* PhaseResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ShearOrientation"></a>

### *property* PhaseResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.StressStrainType"></a>

### *property* PhaseResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.TimeHistoryDisplay"></a>

### *property* PhaseResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.VelocityType"></a>

### *property* PhaseResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Suppressed"></a>

### *property* PhaseResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.EnhancedTracking"></a>

### *property* PhaseResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.UseParentFrequencyRange"></a>

### *property* PhaseResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.CoordinateSystem"></a>

### *property* PhaseResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Spring"></a>

### *property* PhaseResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Location"></a>

### *property* PhaseResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Children"></a>

### *property* PhaseResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Comments"></a>

### *property* PhaseResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Images"></a>

### *property* PhaseResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PhaseResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Properties"></a>

### *property* PhaseResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.VisibleProperties"></a>

### *property* PhaseResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PhaseResponseResults.ExportAnimation"></a>

### PhaseResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ClearGeneratedData"></a>

### PhaseResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.EvaluateAllResults"></a>

### PhaseResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.RenameBasedOnDefinition"></a>

### PhaseResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Delete"></a>

### PhaseResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.GetChildren"></a>

### PhaseResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PhaseResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.AddComment"></a>

### PhaseResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.AddImage"></a>

### PhaseResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Activate"></a>

### PhaseResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.CopyTo"></a>

### PhaseResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.Duplicate"></a>

### PhaseResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.GroupAllSimilarChildren"></a>

### PhaseResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.GroupSimilarObjects"></a>

### PhaseResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.PropertyByName"></a>

### PhaseResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.PropertyByAPIName"></a>

### PhaseResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.CreateParameter"></a>

### PhaseResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.GetParameter"></a>

### PhaseResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.RemoveParameter"></a>

### PhaseResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.DeformationPhaseResponse"></a>

### *class* PhaseResponseResults.DeformationPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DeformationPhaseResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id269)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id270)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id271)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id272) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id273)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id276)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id277)                | Creates a new child Image.                                                        |
| [`Activate`](#id278)                | Activate the current object.                                                      |
| [`CopyTo`](#id279)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id280)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id281) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id282)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id283)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id284)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id285)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id286)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id287)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id221)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id223)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id224)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id225)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id226)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id227)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id228)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id229)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id230)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id231)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id232)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id233)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id234)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id235)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id236)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id237)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id238)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id239)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id240)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id241)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id242)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id243)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id246)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id247)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id248)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id249)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id250)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id252)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id254)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id255)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id256)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id257)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id258)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id261)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id262)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id263)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id264)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id266)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id267)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import DeformationPhaseResponse
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* PhaseResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* PhaseResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* PhaseResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* PhaseResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* PhaseResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* PhaseResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* PhaseResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* PhaseResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* PhaseResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* PhaseResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* PhaseResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* PhaseResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* PhaseResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* PhaseResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* PhaseResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* PhaseResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* PhaseResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* PhaseResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* PhaseResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* PhaseResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* PhaseResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* PhaseResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* PhaseResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* PhaseResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* PhaseResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* PhaseResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* PhaseResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* PhaseResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* PhaseResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* PhaseResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* PhaseResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* PhaseResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* PhaseResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* PhaseResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* PhaseResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* PhaseResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* PhaseResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* PhaseResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* PhaseResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* PhaseResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* PhaseResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* PhaseResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* PhaseResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* PhaseResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* PhaseResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* PhaseResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* PhaseResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* PhaseResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* PhaseResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

## Method detail

<a id="id54"></a>

### PhaseResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### PhaseResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### PhaseResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### PhaseResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### PhaseResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### PhaseResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### PhaseResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### PhaseResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### PhaseResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### PhaseResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### PhaseResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### PhaseResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### PhaseResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### PhaseResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### PhaseResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### PhaseResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### PhaseResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### PhaseResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### PhaseResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.ElasticStrainPhaseResponse"></a>

### *class* PhaseResponseResults.ElasticStrainPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElasticStrainPhaseResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id269)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id270)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id271)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id272) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id273)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id276)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id277)                | Creates a new child Image.                                                        |
| [`Activate`](#id278)                | Activate the current object.                                                      |
| [`CopyTo`](#id279)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id280)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id281) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id282)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id283)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id284)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id285)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id286)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id287)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id221)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id223)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id224)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id225)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id226)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id227)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id228)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id229)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id230)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id231)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id232)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id233)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id234)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id235)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id236)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id237)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id238)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id239)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id240)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id241)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id242)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id243)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id246)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id247)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id248)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id249)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id250)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id252)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id254)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id255)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id256)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id257)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id258)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id261)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id262)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id263)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id264)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id266)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id267)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id73"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import ElasticStrainPhaseResponse
```

<a id="id74"></a>

## Property detail

<a id="id75"></a>

### *property* PhaseResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* PhaseResponseResults.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* PhaseResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* PhaseResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* PhaseResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* PhaseResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* PhaseResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* PhaseResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* PhaseResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* PhaseResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* PhaseResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* PhaseResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* PhaseResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* PhaseResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* PhaseResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* PhaseResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* PhaseResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* PhaseResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* PhaseResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* PhaseResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* PhaseResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* PhaseResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* PhaseResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* PhaseResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* PhaseResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* PhaseResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* PhaseResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* PhaseResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* PhaseResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* PhaseResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* PhaseResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* PhaseResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* PhaseResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* PhaseResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* PhaseResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* PhaseResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* PhaseResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* PhaseResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* PhaseResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* PhaseResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* PhaseResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* PhaseResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* PhaseResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* PhaseResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* PhaseResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* PhaseResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* PhaseResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* PhaseResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* PhaseResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* PhaseResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

## Method detail

<a id="id126"></a>

### PhaseResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### PhaseResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### PhaseResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### PhaseResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### PhaseResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### PhaseResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### PhaseResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### PhaseResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### PhaseResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### PhaseResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### PhaseResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### PhaseResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### PhaseResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### PhaseResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### PhaseResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### PhaseResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### PhaseResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### PhaseResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### PhaseResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.StressPhaseResponse"></a>

### *class* PhaseResponseResults.StressPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressPhaseResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id269)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id270)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id271)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id272) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id273)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id276)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id277)                | Creates a new child Image.                                                        |
| [`Activate`](#id278)                | Activate the current object.                                                      |
| [`CopyTo`](#id279)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id280)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id281) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id282)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id283)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id284)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id285)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id286)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id287)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id221)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id223)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id224)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id225)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id226)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id227)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id228)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id229)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id230)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id231)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id232)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id233)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id234)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id235)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id236)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id237)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id238)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id239)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id240)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id241)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id242)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id243)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id246)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id247)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id248)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id249)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id250)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id252)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id254)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id255)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id256)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id257)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id258)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id261)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id262)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id263)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id264)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id266)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id267)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id145"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import StressPhaseResponse
```

<a id="id146"></a>

## Property detail

<a id="id147"></a>

### *property* PhaseResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* PhaseResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* PhaseResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* PhaseResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* PhaseResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* PhaseResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* PhaseResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* PhaseResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* PhaseResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* PhaseResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* PhaseResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* PhaseResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* PhaseResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* PhaseResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* PhaseResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* PhaseResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* PhaseResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* PhaseResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* PhaseResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* PhaseResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* PhaseResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* PhaseResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* PhaseResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* PhaseResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* PhaseResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* PhaseResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* PhaseResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* PhaseResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* PhaseResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* PhaseResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* PhaseResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* PhaseResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* PhaseResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* PhaseResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* PhaseResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* PhaseResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* PhaseResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* PhaseResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* PhaseResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* PhaseResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* PhaseResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* PhaseResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* PhaseResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* PhaseResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* PhaseResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* PhaseResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* PhaseResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* PhaseResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* PhaseResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

## Method detail

<a id="id197"></a>

### PhaseResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### PhaseResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### PhaseResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### PhaseResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### PhaseResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### PhaseResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### PhaseResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### PhaseResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### PhaseResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### PhaseResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### PhaseResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### PhaseResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### PhaseResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### PhaseResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### PhaseResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### PhaseResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### PhaseResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### PhaseResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### PhaseResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhaseResponseResults.VelocityPhaseResponse"></a>

### *class* PhaseResponseResults.VelocityPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VelocityPhaseResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ExportAnimation`](#id269)         | Run the ExportAnimation action.                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id270)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id271)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id272) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id273)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id275)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id276)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id277)                | Creates a new child Image.                                                        |
| [`Activate`](#id278)                | Activate the current object.                                                      |
| [`CopyTo`](#id279)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id280)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id281) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id282)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id283)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id284)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id285)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id286)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id287)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id221)                                                                                                      | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id223)                                                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id224)                                                                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id225)                                                                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id226)                                                                                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id227)                                                                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id228)                                                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#id229)                                                                                                      | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id230)                                                                                                 | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id231)                                                                                                 | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id232)                                                                                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id233)                                                                                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id234)                                                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id235)                                                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id236)                                                                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id237)                                                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id238)                                                                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#id239)                                                                                                    | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id240)                                                                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id241)                                                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id242)                                                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id243)                                                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id246)                                                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id247)                                                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id248)                                                                                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id249)                                                                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id250)                                                                                                 | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id252)                                                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id254)                                                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id255)                                                                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id256)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id257)                                                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id258)                                                                                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id261)                                                                                                      | Gets or sets the Location.                                    |
| [`Children`](#id262)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id263)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id264)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id265)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id266)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id267)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id216"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults import VelocityPhaseResponse
```

<a id="id217"></a>

## Property detail

<a id="id218"></a>

### *property* PhaseResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* PhaseResponseResults.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* PhaseResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* PhaseResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* PhaseResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* PhaseResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* PhaseResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* PhaseResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* PhaseResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* PhaseResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* PhaseResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* PhaseResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* PhaseResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* PhaseResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* PhaseResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* PhaseResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* PhaseResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* PhaseResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* PhaseResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* PhaseResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* PhaseResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* PhaseResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* PhaseResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* PhaseResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* PhaseResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* PhaseResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* PhaseResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* PhaseResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* PhaseResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* PhaseResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* PhaseResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* PhaseResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* PhaseResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* PhaseResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* PhaseResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* PhaseResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* PhaseResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* PhaseResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* PhaseResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* PhaseResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* PhaseResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* PhaseResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* PhaseResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* PhaseResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* PhaseResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* PhaseResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* PhaseResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* PhaseResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* PhaseResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* PhaseResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

## Method detail

<a id="id269"></a>

### PhaseResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### PhaseResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### PhaseResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### PhaseResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### PhaseResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### PhaseResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### PhaseResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### PhaseResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### PhaseResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### PhaseResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### PhaseResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### PhaseResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### PhaseResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### PhaseResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### PhaseResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### PhaseResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### PhaseResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### PhaseResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### PhaseResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
