<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults"></a>

<a id="the-energyresults-package"></a>

# The `EnergyResults` package

<a id="summary"></a>

## Summary

### Classes

| [`EnergyResult`](EnergyResult.md#EnergyResult)                               | Defines a EnergyResult.           |
|------------------------------------------------------------------------------|-----------------------------------|
| [`ElementalStrainEnergy`](ElementalStrainEnergy.md#ElementalStrainEnergy)    | Defines a ElementalStrainEnergy.  |
| [`StabilizationEnergy`](StabilizationEnergy.md#StabilizationEnergy)          | Defines a StabilizationEnergy.    |
| [`StructuralStrainEnergy`](StructuralStrainEnergy.md#StructuralStrainEnergy) | Defines a StructuralStrainEnergy. |
| [`ThermalStrainEnergy`](ThermalStrainEnergy.md#ThermalStrainEnergy)          | Defines a ThermalStrainEnergy.    |

<a id="description"></a>

## Description

EnergyResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="EnergyResults.EnergyResult"></a>

### *class* EnergyResults.EnergyResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EnergyResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id303)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id304)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id305)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id306)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id307)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id308) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id309)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id310) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id311)         | CreateParameter method.                                                           |
| [`AddAlert`](#id312)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id313)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id314) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id315)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id318)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id319)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id320)                | Creates a new child Image.                                                        |
| [`Activate`](#id321)                | Activate the current object.                                                      |
| [`CopyTo`](#id322)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id323)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id324) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id325)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id326)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id327)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id328)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id329)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id252)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id253)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id254)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id255)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id256)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id257)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id258)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id259)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id260)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id261)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id262)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id264)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id265)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id266)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id267)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id269)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id270)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id271)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id272)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id273)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id274)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id275)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id276)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id277)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id278)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id279)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id280)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id281)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id282)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id283)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id284)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id285)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id286)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id287)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id289)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id290)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id291)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id292)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id293)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id294)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id295)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id296)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id297)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id298)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id300)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id301)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults import EnergyResult
```

<a id="property-detail"></a>

## Property detail

<a id="EnergyResults.InternalObject"></a>

### *property* EnergyResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.DataModelObjectCategory"></a>

### *property* EnergyResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.PlotData"></a>

### *property* EnergyResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Location"></a>

### *property* EnergyResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.TimeForMinimumOfMinimumValues"></a>

### *property* EnergyResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.TimeForMinimumOfMaximumValues"></a>

### *property* EnergyResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* EnergyResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* EnergyResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.TimeForMaximumOfMinimumValues"></a>

### *property* EnergyResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.TimeForMaximumOfMaximumValues"></a>

### *property* EnergyResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* EnergyResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* EnergyResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.IsSolved"></a>

### *property* EnergyResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CoordinateSystem"></a>

### *property* EnergyResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.ScopingMethod"></a>

### *property* EnergyResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.SetNumber"></a>

### *property* EnergyResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CombinationNumber"></a>

### *property* EnergyResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.SolutionCombinationDriver"></a>

### *property* EnergyResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Surface"></a>

### *property* EnergyResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CrackFrontNumber"></a>

### *property* EnergyResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.GlobalIDs"></a>

### *property* EnergyResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Identifier"></a>

### *property* EnergyResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.IterationNumber"></a>

### *property* EnergyResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.LoadStep"></a>

### *property* EnergyResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.MaximumOccursOn"></a>

### *property* EnergyResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.MinimumOccursOn"></a>

### *property* EnergyResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.LoadStepNumber"></a>

### *property* EnergyResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.SolverComponentIDs"></a>

### *property* EnergyResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Substep"></a>

### *property* EnergyResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Average"></a>

### *property* EnergyResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Maximum"></a>

### *property* EnergyResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.MaximumOfMaximumOverTime"></a>

### *property* EnergyResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.MaximumOfMinimumOverTime"></a>

### *property* EnergyResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Minimum"></a>

### *property* EnergyResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.MinimumOfMaximumOverTime"></a>

### *property* EnergyResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.MinimumOfMinimumOverTime"></a>

### *property* EnergyResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Time"></a>

### *property* EnergyResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.DisplayTime"></a>

### *property* EnergyResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.GraphControlsXAxis"></a>

### *property* EnergyResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.DisplayOption"></a>

### *property* EnergyResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.DpfEvaluation"></a>

### *property* EnergyResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.By"></a>

### *property* EnergyResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.ItemType"></a>

### *property* EnergyResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CalculateTimeHistory"></a>

### *property* EnergyResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Suppressed"></a>

### *property* EnergyResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Children"></a>

### *property* EnergyResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Comments"></a>

### *property* EnergyResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Figures"></a>

### *property* EnergyResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Images"></a>

### *property* EnergyResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EnergyResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Properties"></a>

### *property* EnergyResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.VisibleProperties"></a>

### *property* EnergyResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EnergyResults.ClearGeneratedData"></a>

### EnergyResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.EvaluateAllResults"></a>

### EnergyResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.FetchRemoteResults"></a>

### EnergyResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.ExportToTextFile"></a>

### EnergyResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.ExportAnimation"></a>

### EnergyResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.DuplicateWithoutResults"></a>

### EnergyResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CreateResultsAtAllSets"></a>

### EnergyResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.PromoteToNamedSelection"></a>

### EnergyResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CreateParameter"></a>

### EnergyResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.AddAlert"></a>

### EnergyResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.AddConvergence"></a>

### EnergyResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.RenameBasedOnDefinition"></a>

### EnergyResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Delete"></a>

### EnergyResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.GetChildren"></a>

### EnergyResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EnergyResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.AddComment"></a>

### EnergyResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.AddFigure"></a>

### EnergyResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.AddImage"></a>

### EnergyResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Activate"></a>

### EnergyResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.CopyTo"></a>

### EnergyResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Duplicate"></a>

### EnergyResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.GroupAllSimilarChildren"></a>

### EnergyResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.GroupSimilarObjects"></a>

### EnergyResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.PropertyByName"></a>

### EnergyResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.PropertyByAPIName"></a>

### EnergyResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.GetParameter"></a>

### EnergyResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.RemoveParameter"></a>

### EnergyResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.ElementalStrainEnergy"></a>

### *class* EnergyResults.ElementalStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalStrainEnergy.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id303)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id304)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id305)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id306)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id307)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id308) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id309)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id310) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id311)         | CreateParameter method.                                                           |
| [`AddAlert`](#id312)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id313)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id314) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id315)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id318)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id319)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id320)                | Creates a new child Image.                                                        |
| [`Activate`](#id321)                | Activate the current object.                                                      |
| [`CopyTo`](#id322)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id323)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id324) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id325)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id326)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id327)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id328)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id329)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id252)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id253)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id254)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id255)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id256)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id257)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id258)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id259)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id260)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id261)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id262)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id264)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id265)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id266)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id267)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id269)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id270)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id271)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id272)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id273)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id274)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id275)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id276)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id277)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id278)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id279)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id280)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id281)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id282)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id283)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id284)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id285)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id286)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id287)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id289)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id290)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id291)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id292)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id293)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id294)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id295)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id296)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id297)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id298)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id300)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id301)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults import ElementalStrainEnergy
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* EnergyResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* EnergyResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* EnergyResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* EnergyResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* EnergyResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* EnergyResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* EnergyResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* EnergyResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* EnergyResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* EnergyResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* EnergyResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* EnergyResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* EnergyResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* EnergyResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* EnergyResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* EnergyResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* EnergyResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* EnergyResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* EnergyResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* EnergyResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* EnergyResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* EnergyResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* EnergyResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* EnergyResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* EnergyResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* EnergyResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* EnergyResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* EnergyResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* EnergyResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* EnergyResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* EnergyResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* EnergyResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* EnergyResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* EnergyResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* EnergyResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* EnergyResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* EnergyResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* EnergyResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* EnergyResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* EnergyResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* EnergyResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* EnergyResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* EnergyResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* EnergyResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* EnergyResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* EnergyResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* EnergyResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* EnergyResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* EnergyResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* EnergyResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* EnergyResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* EnergyResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

## Method detail

<a id="id57"></a>

### EnergyResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### EnergyResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### EnergyResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### EnergyResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### EnergyResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### EnergyResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### EnergyResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### EnergyResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### EnergyResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### EnergyResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### EnergyResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### EnergyResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### EnergyResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### EnergyResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### EnergyResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### EnergyResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### EnergyResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### EnergyResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### EnergyResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### EnergyResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### EnergyResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### EnergyResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### EnergyResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### EnergyResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### EnergyResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### EnergyResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### EnergyResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.StabilizationEnergy"></a>

### *class* EnergyResults.StabilizationEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StabilizationEnergy.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id303)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id304)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id305)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id306)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id307)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id308) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id309)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id310) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id311)         | CreateParameter method.                                                           |
| [`AddAlert`](#id312)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id313)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id314) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id315)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id318)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id319)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id320)                | Creates a new child Image.                                                        |
| [`Activate`](#id321)                | Activate the current object.                                                      |
| [`CopyTo`](#id322)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id323)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id324) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id325)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id326)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id327)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id328)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id329)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id252)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id253)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id254)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id255)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id256)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id257)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id258)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id259)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id260)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id261)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id262)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id264)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id265)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id266)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id267)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id269)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id270)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id271)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id272)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id273)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id274)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id275)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id276)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id277)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id278)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id279)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id280)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id281)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id282)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id283)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id284)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id285)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id286)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id287)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id289)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id290)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id291)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id292)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id293)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id294)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id295)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id296)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id297)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id298)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id300)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id301)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id84"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults import StabilizationEnergy
```

<a id="id85"></a>

## Property detail

<a id="id86"></a>

### *property* EnergyResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* EnergyResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* EnergyResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* EnergyResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* EnergyResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* EnergyResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* EnergyResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* EnergyResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* EnergyResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* EnergyResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* EnergyResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* EnergyResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* EnergyResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* EnergyResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* EnergyResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* EnergyResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* EnergyResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* EnergyResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* EnergyResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* EnergyResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* EnergyResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* EnergyResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* EnergyResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* EnergyResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* EnergyResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* EnergyResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* EnergyResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* EnergyResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* EnergyResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* EnergyResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* EnergyResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* EnergyResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* EnergyResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* EnergyResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* EnergyResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* EnergyResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* EnergyResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* EnergyResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* EnergyResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* EnergyResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* EnergyResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* EnergyResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* EnergyResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* EnergyResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* EnergyResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* EnergyResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* EnergyResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* EnergyResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* EnergyResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* EnergyResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* EnergyResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* EnergyResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

## Method detail

<a id="id139"></a>

### EnergyResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### EnergyResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### EnergyResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### EnergyResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### EnergyResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### EnergyResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### EnergyResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### EnergyResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### EnergyResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### EnergyResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### EnergyResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### EnergyResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### EnergyResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### EnergyResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### EnergyResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### EnergyResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### EnergyResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### EnergyResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### EnergyResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### EnergyResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### EnergyResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### EnergyResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### EnergyResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### EnergyResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### EnergyResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### EnergyResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### EnergyResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.StructuralStrainEnergy"></a>

### *class* EnergyResults.StructuralStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StructuralStrainEnergy.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id303)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id304)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id305)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id306)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id307)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id308) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id309)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id310) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id311)         | CreateParameter method.                                                           |
| [`AddAlert`](#id312)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id313)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id314) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id315)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id318)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id319)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id320)                | Creates a new child Image.                                                        |
| [`Activate`](#id321)                | Activate the current object.                                                      |
| [`CopyTo`](#id322)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id323)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id324) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id325)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id326)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id327)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id328)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id329)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Total`](#EnergyResults.Total)                                                                                           | Gets the Total.                                                        |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id252)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id253)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id254)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id255)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id256)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id257)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id258)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id259)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id260)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id261)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id262)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id264)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id265)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id266)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id267)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id269)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id270)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id271)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id272)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id273)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id274)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id275)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id276)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id277)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id278)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id279)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id280)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id281)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id282)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id283)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id284)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id285)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id286)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id287)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id289)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id290)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id291)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id292)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id293)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id294)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id295)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id296)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id297)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id298)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id300)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id301)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id166"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults import StructuralStrainEnergy
```

<a id="id167"></a>

## Property detail

<a id="id168"></a>

### *property* EnergyResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.Total"></a>

### *property* EnergyResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* EnergyResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* EnergyResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* EnergyResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* EnergyResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* EnergyResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* EnergyResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* EnergyResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* EnergyResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* EnergyResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* EnergyResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* EnergyResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* EnergyResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* EnergyResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* EnergyResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* EnergyResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* EnergyResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* EnergyResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* EnergyResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* EnergyResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* EnergyResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* EnergyResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* EnergyResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* EnergyResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* EnergyResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* EnergyResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* EnergyResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* EnergyResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* EnergyResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* EnergyResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* EnergyResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* EnergyResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* EnergyResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* EnergyResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* EnergyResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* EnergyResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* EnergyResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* EnergyResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* EnergyResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* EnergyResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* EnergyResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* EnergyResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* EnergyResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* EnergyResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* EnergyResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* EnergyResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* EnergyResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* EnergyResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* EnergyResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* EnergyResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* EnergyResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* EnergyResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

## Method detail

<a id="id221"></a>

### EnergyResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### EnergyResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### EnergyResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### EnergyResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### EnergyResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### EnergyResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### EnergyResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### EnergyResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### EnergyResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### EnergyResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### EnergyResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### EnergyResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### EnergyResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### EnergyResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### EnergyResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### EnergyResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### EnergyResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### EnergyResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### EnergyResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### EnergyResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### EnergyResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### EnergyResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### EnergyResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### EnergyResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### EnergyResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### EnergyResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### EnergyResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResults.ThermalStrainEnergy"></a>

### *class* EnergyResults.ThermalStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ThermalStrainEnergy.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id303)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id304)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id305)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id306)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id307)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id308) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id309)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id310) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id311)         | CreateParameter method.                                                           |
| [`AddAlert`](#id312)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id313)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id314) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id315)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id317)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id318)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id319)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id320)                | Creates a new child Image.                                                        |
| [`Activate`](#id321)                | Activate the current object.                                                      |
| [`CopyTo`](#id322)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id323)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id324) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id325)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id326)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id327)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id328)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id329)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id252)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id253)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id254)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id255)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id256)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id257)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id258)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id259)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id260)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id261)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id262)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id264)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id265)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id266)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id267)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id269)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id270)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id271)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id272)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id273)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id274)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id275)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id276)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id277)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id278)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id279)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id280)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id281)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id282)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id283)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id284)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id285)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id286)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id287)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id289)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id290)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id291)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id292)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id293)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id294)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id295)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id296)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id297)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id298)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id299)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id300)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id301)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id248"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults import ThermalStrainEnergy
```

<a id="id249"></a>

## Property detail

<a id="id250"></a>

### *property* EnergyResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* EnergyResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* EnergyResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* EnergyResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* EnergyResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* EnergyResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* EnergyResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* EnergyResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* EnergyResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* EnergyResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* EnergyResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* EnergyResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* EnergyResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* EnergyResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* EnergyResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* EnergyResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* EnergyResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* EnergyResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* EnergyResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* EnergyResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* EnergyResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* EnergyResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* EnergyResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* EnergyResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* EnergyResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* EnergyResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* EnergyResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* EnergyResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* EnergyResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* EnergyResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* EnergyResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* EnergyResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* EnergyResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* EnergyResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* EnergyResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* EnergyResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* EnergyResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* EnergyResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* EnergyResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* EnergyResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* EnergyResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* EnergyResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* EnergyResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* EnergyResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* EnergyResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* EnergyResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* EnergyResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* EnergyResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* EnergyResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* EnergyResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* EnergyResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* EnergyResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

## Method detail

<a id="id303"></a>

### EnergyResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### EnergyResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### EnergyResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### EnergyResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### EnergyResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### EnergyResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### EnergyResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### EnergyResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### EnergyResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### EnergyResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### EnergyResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### EnergyResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### EnergyResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### EnergyResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### EnergyResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### EnergyResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### EnergyResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### EnergyResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### EnergyResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### EnergyResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### EnergyResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### EnergyResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### EnergyResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### EnergyResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### EnergyResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### EnergyResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### EnergyResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
