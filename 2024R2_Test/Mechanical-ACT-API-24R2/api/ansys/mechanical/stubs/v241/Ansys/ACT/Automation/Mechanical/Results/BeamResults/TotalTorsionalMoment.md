# `TotalTorsionalMoment`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalTorsionalMoment"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalTorsionalMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalTorsionalMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalTorsionalMoment.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalTorsionalMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalTorsionalMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalTorsionalMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalTorsionalMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalTorsionalMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalTorsionalMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalTorsionalMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalTorsionalMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalTorsionalMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalTorsionalMoment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalTorsionalMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalTorsionalMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalTorsionalMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalTorsionalMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalTorsionalMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalTorsionalMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalTorsionalMoment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalTorsionalMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalTorsionalMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalTorsionalMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalTorsionalMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalTorsionalMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalTorsionalMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalTorsionalMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalTorsionalMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#TotalTorsionalMoment.Average)                                                     | Gets the Average.                                                      |
| [`By`](#TotalTorsionalMoment.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#TotalTorsionalMoment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#TotalTorsionalMoment.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#TotalTorsionalMoment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#TotalTorsionalMoment.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#TotalTorsionalMoment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#TotalTorsionalMoment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#TotalTorsionalMoment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#TotalTorsionalMoment.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#TotalTorsionalMoment.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#TotalTorsionalMoment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#TotalTorsionalMoment.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#TotalTorsionalMoment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#TotalTorsionalMoment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#TotalTorsionalMoment.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#TotalTorsionalMoment.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#TotalTorsionalMoment.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#TotalTorsionalMoment.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#TotalTorsionalMoment.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#TotalTorsionalMoment.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalTorsionalMoment.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#TotalTorsionalMoment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#TotalTorsionalMoment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalTorsionalMoment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#TotalTorsionalMoment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#TotalTorsionalMoment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#TotalTorsionalMoment.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#TotalTorsionalMoment.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#TotalTorsionalMoment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#TotalTorsionalMoment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalTorsionalMoment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalTorsionalMoment.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#TotalTorsionalMoment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#TotalTorsionalMoment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalTorsionalMoment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#TotalTorsionalMoment.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#TotalTorsionalMoment.Path)                                                           | Path property.                                                         |
| [`PlotData`](#TotalTorsionalMoment.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#TotalTorsionalMoment.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#TotalTorsionalMoment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalTorsionalMoment.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#TotalTorsionalMoment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#TotalTorsionalMoment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalTorsionalMoment.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#TotalTorsionalMoment.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#TotalTorsionalMoment.Surface)                                                     | Surface property.                                                      |
| [`Time`](#TotalTorsionalMoment.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#TotalTorsionalMoment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#TotalTorsionalMoment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalTorsionalMoment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#TotalTorsionalMoment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#TotalTorsionalMoment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#TotalTorsionalMoment.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="TotalTorsionalMoment.Average"></a>

### *property* TotalTorsionalMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.By"></a>

### *property* TotalTorsionalMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CalculateTimeHistory"></a>

### *property* TotalTorsionalMoment.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Children"></a>

### *property* TotalTorsionalMoment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CombinationNumber"></a>

### *property* TotalTorsionalMoment.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Comments"></a>

### *property* TotalTorsionalMoment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CoordinateSystem"></a>

### *property* TotalTorsionalMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CrackFrontNumber"></a>

### *property* TotalTorsionalMoment.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DataModelObjectCategory"></a>

### *property* TotalTorsionalMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DisplayOption"></a>

### *property* TotalTorsionalMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DisplayTime"></a>

### *property* TotalTorsionalMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DpfEvaluation"></a>

### *property* TotalTorsionalMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Figures"></a>

### *property* TotalTorsionalMoment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GlobalIDs"></a>

### *property* TotalTorsionalMoment.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GraphControlsXAxis"></a>

### *property* TotalTorsionalMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Identifier"></a>

### *property* TotalTorsionalMoment.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Images"></a>

### *property* TotalTorsionalMoment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.InternalObject"></a>

### *property* TotalTorsionalMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IsSolved"></a>

### *property* TotalTorsionalMoment.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ItemType"></a>

### *property* TotalTorsionalMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IterationNumber"></a>

### *property* TotalTorsionalMoment.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStep"></a>

### *property* TotalTorsionalMoment.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepNumber"></a>

### *property* TotalTorsionalMoment.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Location"></a>

### *property* TotalTorsionalMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Maximum"></a>

### *property* TotalTorsionalMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MaximumOccursOn"></a>

### *property* TotalTorsionalMoment.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MaximumOfMaximumOverTime"></a>

### *property* TotalTorsionalMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MaximumOfMinimumOverTime"></a>

### *property* TotalTorsionalMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Minimum"></a>

### *property* TotalTorsionalMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MinimumOccursOn"></a>

### *property* TotalTorsionalMoment.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MinimumOfMaximumOverTime"></a>

### *property* TotalTorsionalMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MinimumOfMinimumOverTime"></a>

### *property* TotalTorsionalMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.NamedSelections"></a>

### *property* TotalTorsionalMoment.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Path"></a>

### *property* TotalTorsionalMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PlotData"></a>

### *property* TotalTorsionalMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Properties"></a>

### *property* TotalTorsionalMoment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ScopingMethod"></a>

### *property* TotalTorsionalMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SetNumber"></a>

### *property* TotalTorsionalMoment.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SolutionCombinationDriver"></a>

### *property* TotalTorsionalMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SolverComponentIDs"></a>

### *property* TotalTorsionalMoment.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Substep"></a>

### *property* TotalTorsionalMoment.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Suppressed"></a>

### *property* TotalTorsionalMoment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Surface"></a>

### *property* TotalTorsionalMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Time"></a>

### *property* TotalTorsionalMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMaximumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMaximumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMinimumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMinimumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.VisibleProperties"></a>

### *property* TotalTorsionalMoment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallPanelShowTextOnMosaic"></a>

### *property* TotalTorsionalMoment.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalTorsionalMoment.Activate"></a>

### TotalTorsionalMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddAlert"></a>

### TotalTorsionalMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddComment"></a>

### TotalTorsionalMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddConvergence"></a>

### TotalTorsionalMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddFigure"></a>

### TotalTorsionalMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddImage"></a>

### TotalTorsionalMoment.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ClearGeneratedData"></a>

### TotalTorsionalMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CopyTo"></a>

### TotalTorsionalMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CreateParameter"></a>

### TotalTorsionalMoment.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CreateResultsAtAllSets"></a>

### TotalTorsionalMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Delete"></a>

### TotalTorsionalMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Duplicate"></a>

### TotalTorsionalMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DuplicateWithoutResults"></a>

### TotalTorsionalMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.EvaluateAllResults"></a>

### TotalTorsionalMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ExportAnimation"></a>

### TotalTorsionalMoment.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ExportToTextFile"></a>

### TotalTorsionalMoment.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.FetchRemoteResults"></a>

### TotalTorsionalMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetChildren"></a>

### TotalTorsionalMoment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetParameter"></a>

### TotalTorsionalMoment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GroupAllSimilarChildren"></a>

### TotalTorsionalMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GroupSimilarObjects"></a>

### TotalTorsionalMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PromoteToNamedSelection"></a>

### TotalTorsionalMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PropertyByAPIName"></a>

### TotalTorsionalMoment.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PropertyByName"></a>

### TotalTorsionalMoment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RemoveParameter"></a>

### TotalTorsionalMoment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RenameBasedOnDefinition"></a>

### TotalTorsionalMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

