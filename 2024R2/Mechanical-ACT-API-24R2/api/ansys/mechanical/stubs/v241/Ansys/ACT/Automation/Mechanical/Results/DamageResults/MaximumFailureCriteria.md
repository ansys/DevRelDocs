# `MaximumFailureCriteria`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MaximumFailureCriteria"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MaximumFailureCriteria

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaximumFailureCriteria.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MaximumFailureCriteria.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MaximumFailureCriteria.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MaximumFailureCriteria.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MaximumFailureCriteria.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MaximumFailureCriteria.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaximumFailureCriteria.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MaximumFailureCriteria.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MaximumFailureCriteria.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MaximumFailureCriteria.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MaximumFailureCriteria.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MaximumFailureCriteria.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MaximumFailureCriteria.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MaximumFailureCriteria.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MaximumFailureCriteria.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MaximumFailureCriteria.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MaximumFailureCriteria.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MaximumFailureCriteria.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MaximumFailureCriteria.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MaximumFailureCriteria.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MaximumFailureCriteria.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaximumFailureCriteria.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MaximumFailureCriteria.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MaximumFailureCriteria.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MaximumFailureCriteria.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MaximumFailureCriteria.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MaximumFailureCriteria.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#MaximumFailureCriteria.Average)                                                     | Gets the Average.                                                      |
| [`By`](#MaximumFailureCriteria.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#MaximumFailureCriteria.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#MaximumFailureCriteria.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#MaximumFailureCriteria.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#MaximumFailureCriteria.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#MaximumFailureCriteria.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#MaximumFailureCriteria.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DamageResultType`](#MaximumFailureCriteria.DamageResultType)                                   | Gets the DamageResultType.                                             |
| [`DataModelObjectCategory`](#MaximumFailureCriteria.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#MaximumFailureCriteria.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#MaximumFailureCriteria.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#MaximumFailureCriteria.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#MaximumFailureCriteria.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#MaximumFailureCriteria.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#MaximumFailureCriteria.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#MaximumFailureCriteria.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#MaximumFailureCriteria.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#MaximumFailureCriteria.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#MaximumFailureCriteria.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#MaximumFailureCriteria.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#MaximumFailureCriteria.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MaximumFailureCriteria.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#MaximumFailureCriteria.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#MaximumFailureCriteria.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MaximumFailureCriteria.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#MaximumFailureCriteria.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#MaximumFailureCriteria.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#MaximumFailureCriteria.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#MaximumFailureCriteria.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#MaximumFailureCriteria.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#MaximumFailureCriteria.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MaximumFailureCriteria.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MaximumFailureCriteria.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#MaximumFailureCriteria.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#MaximumFailureCriteria.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MaximumFailureCriteria.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#MaximumFailureCriteria.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#MaximumFailureCriteria.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#MaximumFailureCriteria.Path)                                                           | Path property.                                                         |
| [`Plies`](#MaximumFailureCriteria.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#MaximumFailureCriteria.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#MaximumFailureCriteria.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Properties`](#MaximumFailureCriteria.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#MaximumFailureCriteria.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MaximumFailureCriteria.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#MaximumFailureCriteria.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#MaximumFailureCriteria.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MaximumFailureCriteria.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#MaximumFailureCriteria.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#MaximumFailureCriteria.Surface)                                                     | Surface property.                                                      |
| [`Time`](#MaximumFailureCriteria.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#MaximumFailureCriteria.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#MaximumFailureCriteria.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MaximumFailureCriteria.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#MaximumFailureCriteria.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#MaximumFailureCriteria.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#MaximumFailureCriteria.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="MaximumFailureCriteria.Average"></a>

### *property* MaximumFailureCriteria.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.By"></a>

### *property* MaximumFailureCriteria.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CalculateTimeHistory"></a>

### *property* MaximumFailureCriteria.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Children"></a>

### *property* MaximumFailureCriteria.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CombinationNumber"></a>

### *property* MaximumFailureCriteria.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Comments"></a>

### *property* MaximumFailureCriteria.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CoordinateSystem"></a>

### *property* MaximumFailureCriteria.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CrackFrontNumber"></a>

### *property* MaximumFailureCriteria.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.DamageResultType"></a>

### *property* MaximumFailureCriteria.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.DataModelObjectCategory"></a>

### *property* MaximumFailureCriteria.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.DisplayOption"></a>

### *property* MaximumFailureCriteria.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.DisplayTime"></a>

### *property* MaximumFailureCriteria.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.DpfEvaluation"></a>

### *property* MaximumFailureCriteria.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Figures"></a>

### *property* MaximumFailureCriteria.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.GlobalIDs"></a>

### *property* MaximumFailureCriteria.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.GraphControlsXAxis"></a>

### *property* MaximumFailureCriteria.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Identifier"></a>

### *property* MaximumFailureCriteria.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Images"></a>

### *property* MaximumFailureCriteria.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.InternalObject"></a>

### *property* MaximumFailureCriteria.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.IsSolved"></a>

### *property* MaximumFailureCriteria.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.ItemType"></a>

### *property* MaximumFailureCriteria.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.IterationNumber"></a>

### *property* MaximumFailureCriteria.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.LoadStep"></a>

### *property* MaximumFailureCriteria.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.LoadStepForMaximumOfMaximumValues"></a>

### *property* MaximumFailureCriteria.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.LoadStepForMaximumOfMinimumValues"></a>

### *property* MaximumFailureCriteria.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.LoadStepForMinimumOfMaximumValues"></a>

### *property* MaximumFailureCriteria.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.LoadStepForMinimumOfMinimumValues"></a>

### *property* MaximumFailureCriteria.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.LoadStepNumber"></a>

### *property* MaximumFailureCriteria.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Location"></a>

### *property* MaximumFailureCriteria.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Maximum"></a>

### *property* MaximumFailureCriteria.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.MaximumOccursOn"></a>

### *property* MaximumFailureCriteria.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.MaximumOfMaximumOverTime"></a>

### *property* MaximumFailureCriteria.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.MaximumOfMinimumOverTime"></a>

### *property* MaximumFailureCriteria.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Minimum"></a>

### *property* MaximumFailureCriteria.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.MinimumOccursOn"></a>

### *property* MaximumFailureCriteria.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.MinimumOfMaximumOverTime"></a>

### *property* MaximumFailureCriteria.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.MinimumOfMinimumOverTime"></a>

### *property* MaximumFailureCriteria.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Mode"></a>

### *property* MaximumFailureCriteria.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.NamedSelections"></a>

### *property* MaximumFailureCriteria.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Path"></a>

### *property* MaximumFailureCriteria.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Plies"></a>

### *property* MaximumFailureCriteria.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.PlotData"></a>

### *property* MaximumFailureCriteria.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Ply"></a>

### *property* MaximumFailureCriteria.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Properties"></a>

### *property* MaximumFailureCriteria.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.ScopingMethod"></a>

### *property* MaximumFailureCriteria.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.SetNumber"></a>

### *property* MaximumFailureCriteria.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.SolutionCombinationDriver"></a>

### *property* MaximumFailureCriteria.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.SolverComponentIDs"></a>

### *property* MaximumFailureCriteria.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Substep"></a>

### *property* MaximumFailureCriteria.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Suppressed"></a>

### *property* MaximumFailureCriteria.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Surface"></a>

### *property* MaximumFailureCriteria.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Time"></a>

### *property* MaximumFailureCriteria.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.TimeForMaximumOfMaximumValues"></a>

### *property* MaximumFailureCriteria.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.TimeForMaximumOfMinimumValues"></a>

### *property* MaximumFailureCriteria.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.TimeForMinimumOfMaximumValues"></a>

### *property* MaximumFailureCriteria.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.TimeForMinimumOfMinimumValues"></a>

### *property* MaximumFailureCriteria.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.VisibleProperties"></a>

### *property* MaximumFailureCriteria.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.WaterfallPanelShowTextOnMosaic"></a>

### *property* MaximumFailureCriteria.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumFailureCriteria.Activate"></a>

### MaximumFailureCriteria.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.AddAlert"></a>

### MaximumFailureCriteria.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.AddComment"></a>

### MaximumFailureCriteria.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.AddConvergence"></a>

### MaximumFailureCriteria.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.AddFigure"></a>

### MaximumFailureCriteria.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.AddImage"></a>

### MaximumFailureCriteria.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.ClearGeneratedData"></a>

### MaximumFailureCriteria.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CopyTo"></a>

### MaximumFailureCriteria.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CreateParameter"></a>

### MaximumFailureCriteria.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.CreateResultsAtAllSets"></a>

### MaximumFailureCriteria.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Delete"></a>

### MaximumFailureCriteria.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.Duplicate"></a>

### MaximumFailureCriteria.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.DuplicateWithoutResults"></a>

### MaximumFailureCriteria.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.EvaluateAllResults"></a>

### MaximumFailureCriteria.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.ExportAnimation"></a>

### MaximumFailureCriteria.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.ExportToTextFile"></a>

### MaximumFailureCriteria.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.FetchRemoteResults"></a>

### MaximumFailureCriteria.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.GetChildren"></a>

### MaximumFailureCriteria.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.GetParameter"></a>

### MaximumFailureCriteria.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.GroupAllSimilarChildren"></a>

### MaximumFailureCriteria.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.GroupSimilarObjects"></a>

### MaximumFailureCriteria.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.PromoteToNamedSelection"></a>

### MaximumFailureCriteria.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.PropertyByAPIName"></a>

### MaximumFailureCriteria.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.PropertyByName"></a>

### MaximumFailureCriteria.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.RemoveParameter"></a>

### MaximumFailureCriteria.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumFailureCriteria.RenameBasedOnDefinition"></a>

### MaximumFailureCriteria.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

