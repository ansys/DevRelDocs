<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults"></a>

<a id="the-thermalresults-package"></a>

# The `ThermalResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------------|---------------------------------------|
| [`DirectionalHeatFlux`](DirectionalHeatFlux.md#DirectionalHeatFlux)                      | Defines a DirectionalHeatFlux.        |
| [`ThermalResult`](ThermalResult.md#ThermalResult)                                        | Defines a ThermalResult.              |
| [`DirectionalThermalHeatFlux`](DirectionalThermalHeatFlux.md#DirectionalThermalHeatFlux) | Defines a DirectionalThermalHeatFlux. |
| [`FluidFlowRate`](FluidFlowRate.md#FluidFlowRate)                                        | Defines a FluidFlowRate.              |
| [`FluidHeatConductionRate`](FluidHeatConductionRate.md#FluidHeatConductionRate)          | Defines a FluidHeatConductionRate.    |
| [`FluidHeatTransportRate`](FluidHeatTransportRate.md#FluidHeatTransportRate)             | Defines a FluidHeatTransportRate.     |
| [`TemperatureResult`](TemperatureResult.md#TemperatureResult)                            | Defines a TemperatureResult.          |
| [`ThermalError`](ThermalError.md#ThermalError)                                           | Defines a ThermalError.               |
| [`TotalHeatFlux`](TotalHeatFlux.md#TotalHeatFlux)                                        | Defines a TotalHeatFlux.              |
| [`VectorHeatFlux`](VectorHeatFlux.md#VectorHeatFlux)                                     | Defines a VectorHeatFlux.             |

<a id="description"></a>

## Description

ThermalResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ThermalResults.DirectionalHeatFlux"></a>

### *class* ThermalResults.DirectionalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalHeatFlux.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Ply`](#ThermalResults.Ply)                                                                                              | Gets or sets the Ply selection.                                        |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import DirectionalHeatFlux
```

<a id="property-detail"></a>

## Property detail

<a id="ThermalResults.Ply"></a>

### *property* ThermalResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.InternalObject"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.DataModelObjectCategory"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Layer"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ThermalResultType"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.NormalOrientation"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Position"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.AverageAcrossBodies"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.PlotData"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Location"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.TimeForMinimumOfMinimumValues"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.TimeForMinimumOfMaximumValues"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.TimeForMaximumOfMinimumValues"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.TimeForMaximumOfMaximumValues"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.IsSolved"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CoordinateSystem"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ScopingMethod"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.SetNumber"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CombinationNumber"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.SolutionCombinationDriver"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Surface"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CrackFrontNumber"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.GlobalIDs"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Identifier"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.IterationNumber"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.LoadStep"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.MaximumOccursOn"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.MinimumOccursOn"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.LoadStepNumber"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.SolverComponentIDs"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Substep"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Average"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Maximum"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.MaximumOfMaximumOverTime"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.MaximumOfMinimumOverTime"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Minimum"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.MinimumOfMaximumOverTime"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.MinimumOfMinimumOverTime"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Time"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.DisplayTime"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.GraphControlsXAxis"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.DisplayOption"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.DpfEvaluation"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.By"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ItemType"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CalculateTimeHistory"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Suppressed"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Children"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Comments"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Figures"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Images"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Properties"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.VisibleProperties"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalResults.ClearGeneratedData"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.EvaluateAllResults"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.FetchRemoteResults"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ExportToTextFile"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ExportAnimation"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.DuplicateWithoutResults"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CreateResultsAtAllSets"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.PromoteToNamedSelection"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CreateParameter"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.AddAlert"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.AddConvergence"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.RenameBasedOnDefinition"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Delete"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.GetChildren"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.AddComment"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.AddFigure"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.AddImage"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Activate"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.CopyTo"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.Duplicate"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.GroupAllSimilarChildren"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.GroupSimilarObjects"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.PropertyByName"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.PropertyByAPIName"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.GetParameter"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.RemoveParameter"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ThermalResult"></a>

### *class* ThermalResults.ThermalResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ThermalResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import ThermalResult
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

## Method detail

<a id="id62"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.DirectionalThermalHeatFlux"></a>

### *class* ThermalResults.DirectionalThermalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalThermalHeatFlux.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id89"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import DirectionalThermalHeatFlux
```

<a id="id90"></a>

## Property detail

<a id="id91"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

## Method detail

<a id="id149"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.FluidFlowRate"></a>

### *class* ThermalResults.FluidFlowRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidFlowRate.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id176"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import FluidFlowRate
```

<a id="id177"></a>

## Property detail

<a id="id178"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

## Method detail

<a id="id236"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.FluidHeatConductionRate"></a>

### *class* ThermalResults.FluidHeatConductionRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidHeatConductionRate.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id263"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import FluidHeatConductionRate
```

<a id="id264"></a>

## Property detail

<a id="id265"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

## Method detail

<a id="id323"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.FluidHeatTransportRate"></a>

### *class* ThermalResults.FluidHeatTransportRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidHeatTransportRate.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id350"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import FluidHeatTransportRate
```

<a id="id351"></a>

## Property detail

<a id="id352"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

## Method detail

<a id="id410"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.TemperatureResult"></a>

### *class* ThermalResults.TemperatureResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TemperatureResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id437"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import TemperatureResult
```

<a id="id438"></a>

## Property detail

<a id="id439"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

## Method detail

<a id="id497"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.ThermalError"></a>

### *class* ThermalResults.ThermalError

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ThermalError.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id524"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import ThermalError
```

<a id="id525"></a>

## Property detail

<a id="id526"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

## Method detail

<a id="id584"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.TotalHeatFlux"></a>

### *class* ThermalResults.TotalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalHeatFlux.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#id615)                                                                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#id616)                                                                                             | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#id617)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#id619)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id611"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import TotalHeatFlux
```

<a id="id612"></a>

## Property detail

<a id="id613"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* ThermalResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* ThermalResults.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* ThermalResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* ThermalResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* ThermalResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

## Method detail

<a id="id671"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalResults.VectorHeatFlux"></a>

### *class* ThermalResults.VectorHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorHeatFlux.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id753)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id754)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id755)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id756)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id757)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id758) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id759)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id760) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id761)         | CreateParameter method.                                                           |
| [`AddAlert`](#id762)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id763)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id764) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id765)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id767)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id768)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id769)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id770)                | Creates a new child Image.                                                        |
| [`Activate`](#id771)                | Activate the current object.                                                      |
| [`CopyTo`](#id772)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id773)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id774) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id775)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id776)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id777)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id778)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id779)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id702)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id703)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id704)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id705)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id706)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id707)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id708)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id709)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id710)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id711)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id712)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id714)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id715)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id716)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id717)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id719)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id720)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id721)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id722)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id723)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id724)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id725)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id726)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id727)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id728)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id729)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id730)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id731)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id732)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id733)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id734)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id735)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id736)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id737)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id739)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id740)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id741)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id742)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id743)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id744)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id745)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id746)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id747)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id748)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id749)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id750)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id751)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id698"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import VectorHeatFlux
```

<a id="id699"></a>

## Property detail

<a id="id700"></a>

### *property* ThermalResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* ThermalResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* ThermalResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* ThermalResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* ThermalResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* ThermalResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* ThermalResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* ThermalResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* ThermalResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* ThermalResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* ThermalResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* ThermalResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* ThermalResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* ThermalResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* ThermalResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### *property* ThermalResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### *property* ThermalResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### *property* ThermalResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### *property* ThermalResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### *property* ThermalResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### *property* ThermalResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### *property* ThermalResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### *property* ThermalResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### *property* ThermalResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### *property* ThermalResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### *property* ThermalResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### *property* ThermalResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### *property* ThermalResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### *property* ThermalResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### *property* ThermalResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### *property* ThermalResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### *property* ThermalResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### *property* ThermalResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### *property* ThermalResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### *property* ThermalResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### *property* ThermalResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### *property* ThermalResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### *property* ThermalResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### *property* ThermalResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### *property* ThermalResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### *property* ThermalResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* ThermalResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* ThermalResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* ThermalResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* ThermalResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* ThermalResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* ThermalResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* ThermalResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* ThermalResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* ThermalResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* ThermalResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* ThermalResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

## Method detail

<a id="id753"></a>

### ThermalResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### ThermalResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### ThermalResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### ThermalResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### ThermalResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### ThermalResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### ThermalResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### ThermalResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### ThermalResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### ThermalResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### ThermalResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### ThermalResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### ThermalResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### ThermalResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### ThermalResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### ThermalResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### ThermalResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### ThermalResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### ThermalResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### ThermalResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### ThermalResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### ThermalResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### ThermalResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### ThermalResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### ThermalResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### ThermalResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### ThermalResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
