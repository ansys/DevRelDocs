# `BeamToolResult`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.BeamToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BeamToolResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#id0)                                                                 | Gets the internal object. For advanced usage only.                     |
| [`BeamToolStressResultType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.BeamToolStressResultType)                   | Gets or sets the BeamToolStressResultType.                             |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#BeamToolResult.WaterfallPanelShowTextOnMosaic)                                                                                                          | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#id0)                                                                 | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BeamToolResults/BeamToolResult.md#BeamToolResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="BeamToolResult.InternalObject"></a>

### *property* BeamToolResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.BeamToolStressResultType"></a>

### *property* BeamToolResult.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.DataModelObjectCategory"></a>

### *property* BeamToolResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.PlotData"></a>

### *property* BeamToolResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Location"></a>

### *property* BeamToolResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.TimeForMinimumOfMinimumValues"></a>

### *property* BeamToolResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.TimeForMinimumOfMaximumValues"></a>

### *property* BeamToolResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* BeamToolResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* BeamToolResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.TimeForMaximumOfMinimumValues"></a>

### *property* BeamToolResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.TimeForMaximumOfMaximumValues"></a>

### *property* BeamToolResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* BeamToolResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* BeamToolResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.IsSolved"></a>

### *property* BeamToolResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CoordinateSystem"></a>

### *property* BeamToolResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.ScopingMethod"></a>

### *property* BeamToolResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.SetNumber"></a>

### *property* BeamToolResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CombinationNumber"></a>

### *property* BeamToolResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.SolutionCombinationDriver"></a>

### *property* BeamToolResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Path"></a>

### *property* BeamToolResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Surface"></a>

### *property* BeamToolResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.NamedSelections"></a>

### *property* BeamToolResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* BeamToolResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CrackFrontNumber"></a>

### *property* BeamToolResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.GlobalIDs"></a>

### *property* BeamToolResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Identifier"></a>

### *property* BeamToolResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.IterationNumber"></a>

### *property* BeamToolResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.LoadStep"></a>

### *property* BeamToolResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.MaximumOccursOn"></a>

### *property* BeamToolResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.MinimumOccursOn"></a>

### *property* BeamToolResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.LoadStepNumber"></a>

### *property* BeamToolResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.SolverComponentIDs"></a>

### *property* BeamToolResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Substep"></a>

### *property* BeamToolResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Average"></a>

### *property* BeamToolResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Maximum"></a>

### *property* BeamToolResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.MaximumOfMaximumOverTime"></a>

### *property* BeamToolResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.MaximumOfMinimumOverTime"></a>

### *property* BeamToolResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Minimum"></a>

### *property* BeamToolResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.MinimumOfMaximumOverTime"></a>

### *property* BeamToolResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.MinimumOfMinimumOverTime"></a>

### *property* BeamToolResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Time"></a>

### *property* BeamToolResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.DisplayTime"></a>

### *property* BeamToolResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.GraphControlsXAxis"></a>

### *property* BeamToolResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.DisplayOption"></a>

### *property* BeamToolResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.DpfEvaluation"></a>

### *property* BeamToolResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.By"></a>

### *property* BeamToolResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.ItemType"></a>

### *property* BeamToolResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CalculateTimeHistory"></a>

### *property* BeamToolResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Suppressed"></a>

### *property* BeamToolResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Children"></a>

### *property* BeamToolResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Comments"></a>

### *property* BeamToolResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Figures"></a>

### *property* BeamToolResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Images"></a>

### *property* BeamToolResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BeamToolResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Properties"></a>

### *property* BeamToolResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.VisibleProperties"></a>

### *property* BeamToolResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BeamToolResult.ClearGeneratedData"></a>

### BeamToolResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.EvaluateAllResults"></a>

### BeamToolResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.FetchRemoteResults"></a>

### BeamToolResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.ExportToTextFile"></a>

### BeamToolResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.ExportAnimation"></a>

### BeamToolResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.DuplicateWithoutResults"></a>

### BeamToolResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CreateResultsAtAllSets"></a>

### BeamToolResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.PromoteToNamedSelection"></a>

### BeamToolResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CreateParameter"></a>

### BeamToolResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.AddAlert"></a>

### BeamToolResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.AddConvergence"></a>

### BeamToolResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.RenameBasedOnDefinition"></a>

### BeamToolResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Delete"></a>

### BeamToolResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.GetChildren"></a>

### BeamToolResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BeamToolResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.AddComment"></a>

### BeamToolResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.AddFigure"></a>

### BeamToolResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.AddImage"></a>

### BeamToolResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Activate"></a>

### BeamToolResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.CopyTo"></a>

### BeamToolResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.Duplicate"></a>

### BeamToolResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.GroupAllSimilarChildren"></a>

### BeamToolResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.GroupSimilarObjects"></a>

### BeamToolResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.PropertyByName"></a>

### BeamToolResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.PropertyByAPIName"></a>

### BeamToolResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.GetParameter"></a>

### BeamToolResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResult.RemoveParameter"></a>

### BeamToolResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

