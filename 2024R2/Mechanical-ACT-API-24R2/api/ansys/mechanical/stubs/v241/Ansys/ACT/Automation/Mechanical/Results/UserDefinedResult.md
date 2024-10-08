# `UserDefinedResult`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.UserDefinedResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.UserDefinedResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a UserDefinedResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#UserDefinedResult.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#UserDefinedResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#UserDefinedResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#UserDefinedResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#UserDefinedResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#UserDefinedResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#UserDefinedResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`CreateResultsAtAllSets`](#UserDefinedResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#UserDefinedResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#UserDefinedResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#UserDefinedResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#UserDefinedResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#UserDefinedResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#UserDefinedResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#UserDefinedResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#UserDefinedResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#UserDefinedResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#UserDefinedResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#UserDefinedResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#UserDefinedResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#UserDefinedResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#UserDefinedResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#UserDefinedResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#UserDefinedResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#UserDefinedResult.Average)                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#UserDefinedResult.AverageAcrossBodies)             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#UserDefinedResult.By)                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#UserDefinedResult.CalculateTimeHistory)           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#UserDefinedResult.Children)                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#UserDefinedResult.CombinationNumber)                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#UserDefinedResult.Comments)                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#UserDefinedResult.CoordinateSystem)                   | Gets or sets the Coordinate System.                                    |
| [`CyclicMode`](#UserDefinedResult.CyclicMode)                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#UserDefinedResult.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#UserDefinedResult.DisplayOption)                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#UserDefinedResult.DisplayTime)                             | Gets or sets the DisplayTime.                                          |
| [`Expression`](#UserDefinedResult.Expression)                               | Gets or sets the Expression.                                           |
| [`Figures`](#UserDefinedResult.Figures)                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#UserDefinedResult.GlobalIDs)                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#UserDefinedResult.GraphControlsXAxis)               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#UserDefinedResult.Identifier)                               | Gets or sets the Identifier.                                           |
| [`Images`](#UserDefinedResult.Images)                                       | Gets the list of associated images.                                    |
| [`InputUnitSystem`](#UserDefinedResult.InputUnitSystem)                     | Gets the InputUnitSystem.                                              |
| [`InternalObject`](#UserDefinedResult.InternalObject)                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#UserDefinedResult.IsSolved)                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#UserDefinedResult.ItemType)                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#UserDefinedResult.IterationNumber)                     | Gets the IterationNumber.                                              |
| [`Layer`](#UserDefinedResult.Layer)                                         | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#UserDefinedResult.LoadMultiplier)                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#UserDefinedResult.LoadStep)                                   | Gets the LoadStep.                                                     |
| [`LoadStepNumber`](#UserDefinedResult.LoadStepNumber)                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#UserDefinedResult.Location)                                   | Gets or sets the Location.                                             |
| [`Maximum`](#UserDefinedResult.Maximum)                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#UserDefinedResult.MaximumOccursOn)                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#UserDefinedResult.MaximumOfMaximumOverTime)   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#UserDefinedResult.MaximumOfMinimumOverTime)   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#UserDefinedResult.Minimum)                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#UserDefinedResult.MinimumOccursOn)                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#UserDefinedResult.MinimumOfMaximumOverTime)   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#UserDefinedResult.MinimumOfMinimumOverTime)   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#UserDefinedResult.Mode)                                           | Gets or sets the Mode (Result Set Number).                             |
| [`OutputUnit`](#UserDefinedResult.OutputUnit)                               | Gets or sets the OutputUnit.                                           |
| [`PhaseIncrement`](#UserDefinedResult.PhaseIncrement)                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#UserDefinedResult.Plies)                                         | Plies property.                                                        |
| [`PlotData`](#UserDefinedResult.PlotData)                                   | Gets the result table.                                                 |
| [`Ply`](#UserDefinedResult.Ply)                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#UserDefinedResult.Position)                                   | Gets or sets the Position.                                             |
| [`Properties`](#UserDefinedResult.Properties)                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#UserDefinedResult.ReportedFrequency)                 | Gets the ReportedFrequency.                                            |
| [`RequestedFrequency`](#UserDefinedResult.RequestedFrequency)               | Gets or sets the RequestedFrequency.                                   |
| [`ResponseType`](#UserDefinedResult.ResponseType)                           | Gets or sets the ResponseType.                                         |
| [`ScaleFactor`](#UserDefinedResult.ScaleFactor)                             | Gets or sets the ScaleFactor.                                          |
| [`ScaleFactorValue`](#UserDefinedResult.ScaleFactorValue)                   | Gets or sets the ScaleFactorValue.                                     |
| [`ScopingMethod`](#UserDefinedResult.ScopingMethod)                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#UserDefinedResult.SetNumber)                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#UserDefinedResult.SolutionCombinationDriver) | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#UserDefinedResult.SolverComponentIDs)               | Gets or sets the SolverComponentIDs.                                   |
| [`SubScopeBy`](#UserDefinedResult.SubScopeBy)                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#UserDefinedResult.Substep)                                     | Gets the Substep.                                                      |
| [`Suppressed`](#UserDefinedResult.Suppressed)                               | Gets or sets the Suppressed.                                           |
| [`SweepingPhase`](#UserDefinedResult.SweepingPhase)                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#UserDefinedResult.Time)                                           | Gets the Time.                                                         |
| [`Type`](#UserDefinedResult.Type)                                           | Gets the Type.                                                         |
| [`VisibleProperties`](#UserDefinedResult.VisibleProperties)                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="UserDefinedResult.Average"></a>

### *property* UserDefinedResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.AverageAcrossBodies"></a>

### *property* UserDefinedResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.By"></a>

### *property* UserDefinedResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CalculateTimeHistory"></a>

### *property* UserDefinedResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Children"></a>

### *property* UserDefinedResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CombinationNumber"></a>

### *property* UserDefinedResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Comments"></a>

### *property* UserDefinedResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CoordinateSystem"></a>

### *property* UserDefinedResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CyclicMode"></a>

### *property* UserDefinedResult.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DataModelObjectCategory"></a>

### *property* UserDefinedResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DisplayOption"></a>

### *property* UserDefinedResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DisplayTime"></a>

### *property* UserDefinedResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Expression"></a>

### *property* UserDefinedResult.Expression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Expression.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Figures"></a>

### *property* UserDefinedResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GlobalIDs"></a>

### *property* UserDefinedResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GraphControlsXAxis"></a>

### *property* UserDefinedResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Identifier"></a>

### *property* UserDefinedResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Images"></a>

### *property* UserDefinedResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.InputUnitSystem"></a>

### *property* UserDefinedResult.InputUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InputUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.InternalObject"></a>

### *property* UserDefinedResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCustomResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.IsSolved"></a>

### *property* UserDefinedResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ItemType"></a>

### *property* UserDefinedResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

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

<a id="UserDefinedResult.LoadStepNumber"></a>

### *property* UserDefinedResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Location"></a>

### *property* UserDefinedResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Maximum"></a>

### *property* UserDefinedResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MaximumOccursOn"></a>

### *property* UserDefinedResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

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

<a id="UserDefinedResult.MinimumOccursOn"></a>

### *property* UserDefinedResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MinimumOfMaximumOverTime"></a>

### *property* UserDefinedResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.MinimumOfMinimumOverTime"></a>

### *property* UserDefinedResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Mode"></a>

### *property* UserDefinedResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode (Result Set Number).

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.OutputUnit"></a>

### *property* UserDefinedResult.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PhaseIncrement"></a>

### *property* UserDefinedResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Plies"></a>

### *property* UserDefinedResult.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PlotData"></a>

### *property* UserDefinedResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Ply"></a>

### *property* UserDefinedResult.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Position"></a>

### *property* UserDefinedResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Properties"></a>

### *property* UserDefinedResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ReportedFrequency"></a>

### *property* UserDefinedResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.RequestedFrequency"></a>

### *property* UserDefinedResult.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ResponseType"></a>

### *property* UserDefinedResult.ResponseType *: [Ansys.Mechanical.DataModel.Enums.CoreResultType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/CoreResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CoreResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResponseType.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ScaleFactor"></a>

### *property* UserDefinedResult.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ScaleFactorValue"></a>

### *property* UserDefinedResult.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ScopingMethod"></a>

### *property* UserDefinedResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SetNumber"></a>

### *property* UserDefinedResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SolutionCombinationDriver"></a>

### *property* UserDefinedResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SolverComponentIDs"></a>

### *property* UserDefinedResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SubScopeBy"></a>

### *property* UserDefinedResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Substep"></a>

### *property* UserDefinedResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Suppressed"></a>

### *property* UserDefinedResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.SweepingPhase"></a>

### *property* UserDefinedResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Time"></a>

### *property* UserDefinedResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Type"></a>

### *property* UserDefinedResult.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.VisibleProperties"></a>

### *property* UserDefinedResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="UserDefinedResult.Activate"></a>

### UserDefinedResult.Activate()

Activate the current object.

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ClearGeneratedData"></a>

### UserDefinedResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CopyTo"></a>

### UserDefinedResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CreateParameter"></a>

### UserDefinedResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.CreateResultsAtAllSets"></a>

### UserDefinedResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Delete"></a>

### UserDefinedResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.Duplicate"></a>

### UserDefinedResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.DuplicateWithoutResults"></a>

### UserDefinedResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.EvaluateAllResults"></a>

### UserDefinedResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ExportAnimation"></a>

### UserDefinedResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.ExportToTextFile"></a>

### UserDefinedResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.FetchRemoteResults"></a>

### UserDefinedResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GetChildren"></a>

### UserDefinedResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GetParameter"></a>

### UserDefinedResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GroupAllSimilarChildren"></a>

### UserDefinedResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.GroupSimilarObjects"></a>

### UserDefinedResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PromoteToNamedSelection"></a>

### UserDefinedResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PropertyByAPIName"></a>

### UserDefinedResult.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.PropertyByName"></a>

### UserDefinedResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.RemoveParameter"></a>

### UserDefinedResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedResult.RenameBasedOnDefinition"></a>

### UserDefinedResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

