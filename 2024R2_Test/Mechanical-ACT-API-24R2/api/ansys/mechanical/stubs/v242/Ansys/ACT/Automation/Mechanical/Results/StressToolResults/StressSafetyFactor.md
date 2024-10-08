# `StressSafetyFactor`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyFactor"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyFactor

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#StressSafetyFactor.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#StressSafetyFactor.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#StressSafetyFactor.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#StressSafetyFactor.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#StressSafetyFactor.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StressSafetyFactor.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#StressSafetyFactor.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#StressSafetyFactor.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#StressSafetyFactor.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#StressSafetyFactor.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#StressSafetyFactor.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#StressSafetyFactor.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#StressSafetyFactor.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#StressSafetyFactor.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#StressSafetyFactor.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#StressSafetyFactor.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#StressSafetyFactor.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#StressSafetyFactor.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#StressSafetyFactor.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#StressSafetyFactor.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressSafetyFactor.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#StressSafetyFactor.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#StressSafetyFactor.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#StressSafetyFactor.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#StressSafetyFactor.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#StressSafetyFactor.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#StressSafetyFactor.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#StressSafetyFactor.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#StressSafetyFactor.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#StressSafetyFactor.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#StressSafetyFactor.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#StressSafetyFactor.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#StressSafetyFactor.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#StressSafetyFactor.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#StressSafetyFactor.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#StressSafetyFactor.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#StressSafetyFactor.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#StressSafetyFactor.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#StressSafetyFactor.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#StressSafetyFactor.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#StressSafetyFactor.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#StressSafetyFactor.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#StressSafetyFactor.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#StressSafetyFactor.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#StressSafetyFactor.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#StressSafetyFactor.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#StressSafetyFactor.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#StressSafetyFactor.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#StressSafetyFactor.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#StressSafetyFactor.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#StressSafetyFactor.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#StressSafetyFactor.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#StressSafetyFactor.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#StressSafetyFactor.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#StressSafetyFactor.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#StressSafetyFactor.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#StressSafetyFactor.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#StressSafetyFactor.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#StressSafetyFactor.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#StressSafetyFactor.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#StressSafetyFactor.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#StressSafetyFactor.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#StressSafetyFactor.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#StressSafetyFactor.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#StressSafetyFactor.Path)                                                           | Path property.                                                         |
| [`PlotData`](#StressSafetyFactor.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#StressSafetyFactor.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#StressSafetyFactor.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#StressSafetyFactor.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#StressSafetyFactor.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#StressSafetyFactor.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#StressSafetyFactor.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#StressSafetyFactor.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#StressSafetyFactor.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#StressSafetyFactor.SurfaceCoating)                                                                                                                                                | SurfaceCoating property.                                               |
| [`Time`](#StressSafetyFactor.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#StressSafetyFactor.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#StressSafetyFactor.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#StressSafetyFactor.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#StressSafetyFactor.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#StressSafetyFactor.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#StressSafetyFactor.WaterfallShowTextOnMosaic)                                                                                                                          | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="StressSafetyFactor.Average"></a>

### *property* StressSafetyFactor.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.AverageAcrossBodies"></a>

### *property* StressSafetyFactor.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.By"></a>

### *property* StressSafetyFactor.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CalculateTimeHistory"></a>

### *property* StressSafetyFactor.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Children"></a>

### *property* StressSafetyFactor.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CombinationNumber"></a>

### *property* StressSafetyFactor.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Comments"></a>

### *property* StressSafetyFactor.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CoordinateSystem"></a>

### *property* StressSafetyFactor.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CrackFrontNumber"></a>

### *property* StressSafetyFactor.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.DataModelObjectCategory"></a>

### *property* StressSafetyFactor.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.DisplayOption"></a>

### *property* StressSafetyFactor.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.DisplayTime"></a>

### *property* StressSafetyFactor.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.DpfEvaluation"></a>

### *property* StressSafetyFactor.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Figures"></a>

### *property* StressSafetyFactor.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.GlobalIDs"></a>

### *property* StressSafetyFactor.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.GraphControlsXAxis"></a>

### *property* StressSafetyFactor.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Identifier"></a>

### *property* StressSafetyFactor.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Images"></a>

### *property* StressSafetyFactor.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.InternalObject"></a>

### *property* StressSafetyFactor.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.IsSolved"></a>

### *property* StressSafetyFactor.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.ItemType"></a>

### *property* StressSafetyFactor.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.IterationNumber"></a>

### *property* StressSafetyFactor.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.LoadStep"></a>

### *property* StressSafetyFactor.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.LoadStepForMaximumOfMaximumValues"></a>

### *property* StressSafetyFactor.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.LoadStepForMaximumOfMinimumValues"></a>

### *property* StressSafetyFactor.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.LoadStepForMinimumOfMaximumValues"></a>

### *property* StressSafetyFactor.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.LoadStepForMinimumOfMinimumValues"></a>

### *property* StressSafetyFactor.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.LoadStepNumber"></a>

### *property* StressSafetyFactor.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Location"></a>

### *property* StressSafetyFactor.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Maximum"></a>

### *property* StressSafetyFactor.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.MaximumOccursOn"></a>

### *property* StressSafetyFactor.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.MaximumOfMaximumOverTime"></a>

### *property* StressSafetyFactor.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.MaximumOfMinimumOverTime"></a>

### *property* StressSafetyFactor.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Minimum"></a>

### *property* StressSafetyFactor.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.MinimumOccursOn"></a>

### *property* StressSafetyFactor.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.MinimumOfMaximumOverTime"></a>

### *property* StressSafetyFactor.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.MinimumOfMinimumOverTime"></a>

### *property* StressSafetyFactor.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.NamedSelections"></a>

### *property* StressSafetyFactor.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Path"></a>

### *property* StressSafetyFactor.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.PlotData"></a>

### *property* StressSafetyFactor.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Properties"></a>

### *property* StressSafetyFactor.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.ScopingMethod"></a>

### *property* StressSafetyFactor.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.SetNumber"></a>

### *property* StressSafetyFactor.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.SolutionCombinationDriver"></a>

### *property* StressSafetyFactor.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.SolverComponentIDs"></a>

### *property* StressSafetyFactor.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Substep"></a>

### *property* StressSafetyFactor.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Suppressed"></a>

### *property* StressSafetyFactor.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Surface"></a>

### *property* StressSafetyFactor.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.SurfaceCoating"></a>

### *property* StressSafetyFactor.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Time"></a>

### *property* StressSafetyFactor.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.TimeForMaximumOfMaximumValues"></a>

### *property* StressSafetyFactor.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.TimeForMaximumOfMinimumValues"></a>

### *property* StressSafetyFactor.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.TimeForMinimumOfMaximumValues"></a>

### *property* StressSafetyFactor.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.TimeForMinimumOfMinimumValues"></a>

### *property* StressSafetyFactor.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.VisibleProperties"></a>

### *property* StressSafetyFactor.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.WaterfallShowTextOnMosaic"></a>

### *property* StressSafetyFactor.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressSafetyFactor.Activate"></a>

### StressSafetyFactor.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.AddAlert"></a>

### StressSafetyFactor.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.AddComment"></a>

### StressSafetyFactor.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.AddConvergence"></a>

### StressSafetyFactor.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.AddFigure"></a>

### StressSafetyFactor.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.AddImage"></a>

### StressSafetyFactor.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.ClearGeneratedData"></a>

### StressSafetyFactor.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CopyTo"></a>

### StressSafetyFactor.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CreateParameter"></a>

### StressSafetyFactor.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.CreateResultsAtAllSets"></a>

### StressSafetyFactor.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Delete"></a>

### StressSafetyFactor.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.Duplicate"></a>

### StressSafetyFactor.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.DuplicateWithoutResults"></a>

### StressSafetyFactor.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.EvaluateAllResults"></a>

### StressSafetyFactor.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.ExportAnimation"></a>

### StressSafetyFactor.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.ExportToTextFile"></a>

### StressSafetyFactor.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.FetchRemoteResults"></a>

### StressSafetyFactor.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.GetChildren"></a>

### StressSafetyFactor.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.GetParameter"></a>

### StressSafetyFactor.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.GroupAllSimilarChildren"></a>

### StressSafetyFactor.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.GroupSimilarObjects"></a>

### StressSafetyFactor.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.PromoteToNamedSelection"></a>

### StressSafetyFactor.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.PropertyByAPIName"></a>

### StressSafetyFactor.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.PropertyByName"></a>

### StressSafetyFactor.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.RemoveParameter"></a>

### StressSafetyFactor.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyFactor.RenameBasedOnDefinition"></a>

### StressSafetyFactor.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

