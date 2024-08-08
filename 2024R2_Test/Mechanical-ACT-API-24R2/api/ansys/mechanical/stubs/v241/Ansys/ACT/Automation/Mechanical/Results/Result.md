# `Result`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.Result

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Result.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`PlotData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#Result.WaterfallPanelShowTextOnMosaic)                                                                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#id0)                                                         | Gets the internal object. For advanced usage only.                     |
| [`CrackFrontNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#id0)                                                         | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/Result.md#Result.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="Result.PlotData"></a>

### *property* Result.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="Result.Location"></a>

### *property* Result.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Result.TimeForMinimumOfMinimumValues"></a>

### *property* Result.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.TimeForMinimumOfMaximumValues"></a>

### *property* Result.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.LoadStepForMinimumOfMinimumValues"></a>

### *property* Result.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.LoadStepForMinimumOfMaximumValues"></a>

### *property* Result.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.TimeForMaximumOfMinimumValues"></a>

### *property* Result.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.TimeForMaximumOfMaximumValues"></a>

### *property* Result.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.LoadStepForMaximumOfMinimumValues"></a>

### *property* Result.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.LoadStepForMaximumOfMaximumValues"></a>

### *property* Result.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="Result.IsSolved"></a>

### *property* Result.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="Result.CoordinateSystem"></a>

### *property* Result.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="Result.ScopingMethod"></a>

### *property* Result.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Result.SetNumber"></a>

### *property* Result.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="Result.CombinationNumber"></a>

### *property* Result.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="Result.SolutionCombinationDriver"></a>

### *property* Result.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="Result.Path"></a>

### *property* Result.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="Result.Surface"></a>

### *property* Result.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="Result.NamedSelections"></a>

### *property* Result.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="Result.WaterfallPanelShowTextOnMosaic"></a>

### *property* Result.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="Result.InternalObject"></a>

### *property* Result.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Result.CrackFrontNumber"></a>

### *property* Result.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="Result.GlobalIDs"></a>

### *property* Result.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="Result.Identifier"></a>

### *property* Result.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="Result.IterationNumber"></a>

### *property* Result.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="Result.LoadStep"></a>

### *property* Result.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="Result.MaximumOccursOn"></a>

### *property* Result.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="Result.MinimumOccursOn"></a>

### *property* Result.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="Result.LoadStepNumber"></a>

### *property* Result.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="Result.SolverComponentIDs"></a>

### *property* Result.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="Result.Substep"></a>

### *property* Result.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="Result.Average"></a>

### *property* Result.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Result.Maximum"></a>

### *property* Result.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Result.MaximumOfMaximumOverTime"></a>

### *property* Result.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="Result.MaximumOfMinimumOverTime"></a>

### *property* Result.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="Result.Minimum"></a>

### *property* Result.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Result.MinimumOfMaximumOverTime"></a>

### *property* Result.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="Result.MinimumOfMinimumOverTime"></a>

### *property* Result.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="Result.Time"></a>

### *property* Result.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="Result.DisplayTime"></a>

### *property* Result.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="Result.GraphControlsXAxis"></a>

### *property* Result.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Result.DisplayOption"></a>

### *property* Result.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="Result.DpfEvaluation"></a>

### *property* Result.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="Result.By"></a>

### *property* Result.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="Result.ItemType"></a>

### *property* Result.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="Result.CalculateTimeHistory"></a>

### *property* Result.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="Result.Suppressed"></a>

### *property* Result.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Result.DataModelObjectCategory"></a>

### *property* Result.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Result.Children"></a>

### *property* Result.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Result.Comments"></a>

### *property* Result.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Result.Figures"></a>

### *property* Result.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Result.Images"></a>

### *property* Result.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Result.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Result.Properties"></a>

### *property* Result.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Result.VisibleProperties"></a>

### *property* Result.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Result.ClearGeneratedData"></a>

### Result.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Result.EvaluateAllResults"></a>

### Result.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="Result.FetchRemoteResults"></a>

### Result.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="Result.ExportToTextFile"></a>

### Result.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="Result.ExportAnimation"></a>

### Result.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="Result.DuplicateWithoutResults"></a>

### Result.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="Result.CreateResultsAtAllSets"></a>

### Result.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="Result.PromoteToNamedSelection"></a>

### Result.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Result.CreateParameter"></a>

### Result.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Result.AddAlert"></a>

### Result.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="Result.AddConvergence"></a>

### Result.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="Result.RenameBasedOnDefinition"></a>

### Result.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Result.Delete"></a>

### Result.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Result.GetChildren"></a>

### Result.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Result.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Result.AddComment"></a>

### Result.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Result.AddFigure"></a>

### Result.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Result.AddImage"></a>

### Result.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Result.Activate"></a>

### Result.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Result.CopyTo"></a>

### Result.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Result.Duplicate"></a>

### Result.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Result.GroupAllSimilarChildren"></a>

### Result.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Result.GroupSimilarObjects"></a>

### Result.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Result.PropertyByName"></a>

### Result.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Result.PropertyByAPIName"></a>

### Result.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Result.GetParameter"></a>

### Result.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Result.RemoveParameter"></a>

### Result.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

