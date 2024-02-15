# UserDefinedResult

### *class* UserDefinedResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a UserDefinedResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#UserDefinedResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FetchRemoteResults`](#UserDefinedResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#UserDefinedResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#UserDefinedResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#UserDefinedResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#UserDefinedResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`PromoteToNamedSelection`](#UserDefinedResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateResultsAtAllSets`](#UserDefinedResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`RenameBasedOnDefinition`](#UserDefinedResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#UserDefinedResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#UserDefinedResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#UserDefinedResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#UserDefinedResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#UserDefinedResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#UserDefinedResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#UserDefinedResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#UserDefinedResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#UserDefinedResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#UserDefinedResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#UserDefinedResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#UserDefinedResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#UserDefinedResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#UserDefinedResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`PlotData`](#UserDefinedResult.PlotData)                                                                              | Gets the result table.                                                 |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](#UserDefinedResult.Mode)                                                                                      | Gets or sets the Mode (Result Set Number).                             |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`Ply`](#UserDefinedResult.Ply)                                                                                        | Gets or sets the Ply selection.                                        |
| [`Plies`](#UserDefinedResult.Plies)                                                                                    | Plies property.                                                        |
| [`IsSolved`](#UserDefinedResult.IsSolved)                                                                              | Gets the IsSolved.                                                     |
| [`Location`](#UserDefinedResult.Location)                                                                              | Gets or sets the Location.                                             |
| [`ScopingMethod`](#UserDefinedResult.ScopingMethod)                                                                    | Gets or sets the ScopingMethod.                                        |
| [`ScaleFactorValue`](#UserDefinedResult.ScaleFactorValue)                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`OutputUnit`](#UserDefinedResult.OutputUnit)                                                                          | Gets or sets the OutputUnit.                                           |
| [`SetNumber`](#UserDefinedResult.SetNumber)                                                                            | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#UserDefinedResult.CombinationNumber)                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#UserDefinedResult.SolutionCombinationDriver)                                            | Gets or sets the SolutionCombinationDriver.                            |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`CyclicMode`](#UserDefinedResult.CyclicMode)                                                                          | Gets or sets the CyclicMode.                                           |
| [`Expression`](#UserDefinedResult.Expression)                                                                          | Gets or sets the Expression.                                           |
| [`GlobalIDs`](#UserDefinedResult.GlobalIDs)                                                                            | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#UserDefinedResult.Identifier)                                                                          | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#UserDefinedResult.IterationNumber)                                                                | Gets the IterationNumber.                                              |
| [`Layer`](#UserDefinedResult.Layer)                                                                                    | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#UserDefinedResult.LoadMultiplier)                                                                  | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#UserDefinedResult.LoadStep)                                                                              | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#UserDefinedResult.MaximumOccursOn)                                                                | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#UserDefinedResult.MinimumOccursOn)                                                                | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#UserDefinedResult.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#UserDefinedResult.SolverComponentIDs)                                                          | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#UserDefinedResult.Substep)                                                                                | Gets the Substep.                                                      |
| [`Type`](#UserDefinedResult.Type)                                                                                      | Gets the Type.                                                         |
| [`ReportedFrequency`](#UserDefinedResult.ReportedFrequency)                                                            | Gets the ReportedFrequency.                                            |
| [`Average`](#UserDefinedResult.Average)                                                                                | Gets the Average.                                                      |
| [`DisplayTime`](#UserDefinedResult.DisplayTime)                                                                        | Gets or sets the DisplayTime.                                          |
| [`Maximum`](#UserDefinedResult.Maximum)                                                                                | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#UserDefinedResult.MaximumOfMaximumOverTime)                                              | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#UserDefinedResult.MaximumOfMinimumOverTime)                                              | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#UserDefinedResult.Minimum)                                                                                | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#UserDefinedResult.MinimumOfMaximumOverTime)                                              | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#UserDefinedResult.MinimumOfMinimumOverTime)                                              | Gets the MinimumOfMinimumOverTime.                                     |
| [`SweepingPhase`](#UserDefinedResult.SweepingPhase)                                                                    | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#UserDefinedResult.PhaseIncrement)                                                                  | Gets or sets the PhaseIncrement.                                       |
| [`RequestedFrequency`](#UserDefinedResult.RequestedFrequency)                                                          | Gets or sets the RequestedFrequency.                                   |
| [`Time`](#UserDefinedResult.Time)                                                                                      | Gets the Time.                                                         |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`ResponseType`](#UserDefinedResult.ResponseType)                                                                      | Gets or sets the ResponseType.                                         |
| [`DisplayOption`](#UserDefinedResult.DisplayOption)                                                                    | Gets or sets the DisplayOption.                                        |
| [`ScaleFactor`](#UserDefinedResult.ScaleFactor)                                                                        | Gets or sets the ScaleFactor.                                          |
| [`By`](#UserDefinedResult.By)                                                                                          | Gets or sets the By.                                                   |
| [`Position`](ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`ItemType`](#UserDefinedResult.ItemType)                                                                              | Gets or sets the ItemType.                                             |
| [`SubScopeBy`](#UserDefinedResult.SubScopeBy)                                                                          | Gets or sets the SubScopeBy.                                           |
| [`InputUnitSystem`](#UserDefinedResult.InputUnitSystem)                                                                | Gets the InputUnitSystem.                                              |
| [`CalculateTimeHistory`](#UserDefinedResult.CalculateTimeHistory)                                                      | Gets or sets the CalculateTimeHistory.                                 |
| [`AverageAcrossBodies`](#UserDefinedResult.AverageAcrossBodies)                                                        | Gets or sets the AverageAcrossBodies.                                  |
| [`Suppressed`](#UserDefinedResult.Suppressed)                                                                          | Gets or sets the Suppressed.                                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Children`](#UserDefinedResult.Children)                                                                              | Gets the list of children.                                             |
| [`Comments`](#UserDefinedResult.Comments)                                                                              | Gets the list of associated comments.                                  |
| [`Figures`](#UserDefinedResult.Figures)                                                                                | Gets the list of associated figures.                                   |
| [`Images`](#UserDefinedResult.Images)                                                                                  | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#UserDefinedResult.Properties)                                                                          | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#UserDefinedResult.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import UserDefinedResult
```

## Property detail

### *property* UserDefinedResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode (Result Set Number).

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCustomResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Expression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Expression.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.ResponseType *: [Ansys.Mechanical.DataModel.Enums.CoreResultType](../../../../Mechanical/DataModel/Enums/CoreResultType.md#CoreResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResponseType.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.InputUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InputUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### UserDefinedResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### UserDefinedResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
