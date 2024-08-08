# `UserDefinedResult`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.UserDefinedResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a UserDefinedResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`FetchRemoteResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`PlotData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.PlotData)                                   | Gets the result table.                                                 |
| [`Mode`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Mode)                                           | Gets or sets the Mode (Result Set Number).                             |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CoordinateSystem)                   | Gets or sets the Coordinate System.                                    |
| [`Ply`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Ply)                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Plies)                                         | Plies property.                                                        |
| [`IsSolved`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.IsSolved)                                   | Gets the IsSolved.                                                     |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Location)                                   | Gets or sets the Location.                                             |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ScopingMethod)                         | Gets or sets the ScopingMethod.                                        |
| [`ScaleFactorValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ScaleFactorValue)                   | Gets or sets the ScaleFactorValue.                                     |
| [`OutputUnit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.OutputUnit)                               | Gets or sets the OutputUnit.                                           |
| [`SetNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.SetNumber)                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CombinationNumber)                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.SolutionCombinationDriver) | Gets or sets the SolutionCombinationDriver.                            |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#id0)                                                    | Gets the internal object. For advanced usage only.                     |
| [`CyclicMode`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CyclicMode)                               | Gets or sets the CyclicMode.                                           |
| [`Expression`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Expression)                               | Gets or sets the Expression.                                           |
| [`GlobalIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.GlobalIDs)                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Identifier)                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.IterationNumber)                     | Gets the IterationNumber.                                              |
| [`Layer`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Layer)                                         | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.LoadMultiplier)                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.LoadStep)                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.MaximumOccursOn)                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.MinimumOccursOn)                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.LoadStepNumber)                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.SolverComponentIDs)               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Substep)                                     | Gets the Substep.                                                      |
| [`Type`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Type)                                           | Gets the Type.                                                         |
| [`ReportedFrequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ReportedFrequency)                 | Gets the ReportedFrequency.                                            |
| [`Average`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Average)                                     | Gets the Average.                                                      |
| [`DisplayTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.DisplayTime)                             | Gets or sets the DisplayTime.                                          |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Maximum)                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.MaximumOfMaximumOverTime)   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.MaximumOfMinimumOverTime)   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Minimum)                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.MinimumOfMaximumOverTime)   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.MinimumOfMinimumOverTime)   | Gets the MinimumOfMinimumOverTime.                                     |
| [`SweepingPhase`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.SweepingPhase)                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.PhaseIncrement)                       | Gets or sets the PhaseIncrement.                                       |
| [`RequestedFrequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.RequestedFrequency)               | Gets or sets the RequestedFrequency.                                   |
| [`Time`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Time)                                           | Gets the Time.                                                         |
| [`GraphControlsXAxis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.GraphControlsXAxis)               | Gets or sets the GraphControlsXAxis.                                   |
| [`ResponseType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ResponseType)                           | Gets or sets the ResponseType.                                         |
| [`DisplayOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.DisplayOption)                         | Gets or sets the DisplayOption.                                        |
| [`ScaleFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ScaleFactor)                             | Gets or sets the ScaleFactor.                                          |
| [`By`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.By)                                               | Gets or sets the By.                                                   |
| [`Position`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Position)                                   | Gets or sets the Position.                                             |
| [`ItemType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.ItemType)                                   | Gets or sets the ItemType.                                             |
| [`SubScopeBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.SubScopeBy)                               | Gets or sets the SubScopeBy.                                           |
| [`InputUnitSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.InputUnitSystem)                     | Gets the InputUnitSystem.                                              |
| [`CalculateTimeHistory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.CalculateTimeHistory)           | Gets or sets the CalculateTimeHistory.                                 |
| [`AverageAcrossBodies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.AverageAcrossBodies)             | Gets or sets the AverageAcrossBodies.                                  |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Suppressed)                               | Gets or sets the Suppressed.                                           |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.DataModelObjectCategory)     | Gets the current DataModelObject's category.                           |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Children)                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Comments)                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Figures)                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Images)                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#id0)                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.Properties)                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/UserDefinedResult.md#UserDefinedResult.VisibleProperties)                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="UserDefinedResult.PlotData"></a>

### *property* UserDefinedResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Mode"></a>

### *property* UserDefinedResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode (Result Set Number).

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CoordinateSystem"></a>

### *property* UserDefinedResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Ply"></a>

### *property* UserDefinedResult.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Plies"></a>

### *property* UserDefinedResult.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.IsSolved"></a>

### *property* UserDefinedResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Location"></a>

### *property* UserDefinedResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ScopingMethod"></a>

### *property* UserDefinedResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ScaleFactorValue"></a>

### *property* UserDefinedResult.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.OutputUnit"></a>

### *property* UserDefinedResult.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SetNumber"></a>

### *property* UserDefinedResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CombinationNumber"></a>

### *property* UserDefinedResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SolutionCombinationDriver"></a>

### *property* UserDefinedResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.InternalObject"></a>

### *property* UserDefinedResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCustomResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CyclicMode"></a>

### *property* UserDefinedResult.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Expression"></a>

### *property* UserDefinedResult.Expression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Expression.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GlobalIDs"></a>

### *property* UserDefinedResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Identifier"></a>

### *property* UserDefinedResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.IterationNumber"></a>

### *property* UserDefinedResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Layer"></a>

### *property* UserDefinedResult.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.LoadMultiplier"></a>

### *property* UserDefinedResult.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.LoadStep"></a>

### *property* UserDefinedResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MaximumOccursOn"></a>

### *property* UserDefinedResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MinimumOccursOn"></a>

### *property* UserDefinedResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.LoadStepNumber"></a>

### *property* UserDefinedResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SolverComponentIDs"></a>

### *property* UserDefinedResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Substep"></a>

### *property* UserDefinedResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Type"></a>

### *property* UserDefinedResult.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ReportedFrequency"></a>

### *property* UserDefinedResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Average"></a>

### *property* UserDefinedResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DisplayTime"></a>

### *property* UserDefinedResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Maximum"></a>

### *property* UserDefinedResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MaximumOfMaximumOverTime"></a>

### *property* UserDefinedResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MaximumOfMinimumOverTime"></a>

### *property* UserDefinedResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Minimum"></a>

### *property* UserDefinedResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MinimumOfMaximumOverTime"></a>

### *property* UserDefinedResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MinimumOfMinimumOverTime"></a>

### *property* UserDefinedResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SweepingPhase"></a>

### *property* UserDefinedResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PhaseIncrement"></a>

### *property* UserDefinedResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.RequestedFrequency"></a>

### *property* UserDefinedResult.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Time"></a>

### *property* UserDefinedResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GraphControlsXAxis"></a>

### *property* UserDefinedResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ResponseType"></a>

### *property* UserDefinedResult.ResponseType *: [Ansys.Mechanical.DataModel.Enums.CoreResultType](../../../../Mechanical/DataModel/Enums/CoreResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoreResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResponseType.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DisplayOption"></a>

### *property* UserDefinedResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ScaleFactor"></a>

### *property* UserDefinedResult.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.By"></a>

### *property* UserDefinedResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Position"></a>

### *property* UserDefinedResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ItemType"></a>

### *property* UserDefinedResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SubScopeBy"></a>

### *property* UserDefinedResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.InputUnitSystem"></a>

### *property* UserDefinedResult.InputUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InputUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CalculateTimeHistory"></a>

### *property* UserDefinedResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.AverageAcrossBodies"></a>

### *property* UserDefinedResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Suppressed"></a>

### *property* UserDefinedResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DataModelObjectCategory"></a>

### *property* UserDefinedResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Children"></a>

### *property* UserDefinedResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Comments"></a>

### *property* UserDefinedResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Figures"></a>

### *property* UserDefinedResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Images"></a>

### *property* UserDefinedResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* UserDefinedResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Properties"></a>

### *property* UserDefinedResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.VisibleProperties"></a>

### *property* UserDefinedResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="UserDefinedResult.ClearGeneratedData"></a>

### UserDefinedResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.FetchRemoteResults"></a>

### UserDefinedResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ExportToTextFile"></a>

### UserDefinedResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ExportAnimation"></a>

### UserDefinedResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DuplicateWithoutResults"></a>

### UserDefinedResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.EvaluateAllResults"></a>

### UserDefinedResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PromoteToNamedSelection"></a>

### UserDefinedResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CreateResultsAtAllSets"></a>

### UserDefinedResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.RenameBasedOnDefinition"></a>

### UserDefinedResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Delete"></a>

### UserDefinedResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GetChildren"></a>

### UserDefinedResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### UserDefinedResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.AddComment"></a>

### UserDefinedResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.AddFigure"></a>

### UserDefinedResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.AddImage"></a>

### UserDefinedResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Activate"></a>

### UserDefinedResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CopyTo"></a>

### UserDefinedResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Duplicate"></a>

### UserDefinedResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GroupAllSimilarChildren"></a>

### UserDefinedResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GroupSimilarObjects"></a>

### UserDefinedResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PropertyByName"></a>

### UserDefinedResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PropertyByAPIName"></a>

### UserDefinedResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CreateParameter"></a>

### UserDefinedResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GetParameter"></a>

### UserDefinedResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.RemoveParameter"></a>

### UserDefinedResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

