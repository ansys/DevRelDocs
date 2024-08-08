# `VariableGraph`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.VariableGraph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VariableGraph.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#VariableGraph.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#VariableGraph.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#VariableGraph.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#VariableGraph.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#VariableGraph.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#VariableGraph.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#VariableGraph.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#VariableGraph.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#VariableGraph.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#VariableGraph.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#VariableGraph.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#VariableGraph.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#VariableGraph.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VariableGraph.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VariableGraph.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VariableGraph.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VariableGraph.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VariableGraph.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VariableGraph.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VariableGraph.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VariableGraph.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VariableGraph.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VariableGraph.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#VariableGraph.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VariableGraph.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#VariableGraph.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](#VariableGraph.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#VariableGraph.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#VariableGraph.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VariableGraph.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#VariableGraph.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VariableGraph.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#VariableGraph.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#VariableGraph.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#VariableGraph.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#VariableGraph.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#VariableGraph.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#VariableGraph.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#VariableGraph.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VariableGraph.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#VariableGraph.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#VariableGraph.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#VariableGraph.Path)                                                           | Path property.                                                         |
| [`Surface`](#VariableGraph.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#VariableGraph.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#VariableGraph.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#VariableGraph.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#VariableGraph.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#VariableGraph.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#VariableGraph.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#VariableGraph.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#VariableGraph.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#VariableGraph.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#VariableGraph.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#VariableGraph.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#VariableGraph.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VariableGraph.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#VariableGraph.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#VariableGraph.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#VariableGraph.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VariableGraph.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VariableGraph.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#VariableGraph.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VariableGraph.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#VariableGraph.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#VariableGraph.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#VariableGraph.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#VariableGraph.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#VariableGraph.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#VariableGraph.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#VariableGraph.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#VariableGraph.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#VariableGraph.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#VariableGraph.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#VariableGraph.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#VariableGraph.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#VariableGraph.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#VariableGraph.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#VariableGraph.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="VariableGraph.InternalObject"></a>

### *property* VariableGraph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DataModelObjectCategory"></a>

### *property* VariableGraph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.PlotData"></a>

### *property* VariableGraph.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Location"></a>

### *property* VariableGraph.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.TimeForMinimumOfMinimumValues"></a>

### *property* VariableGraph.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.TimeForMinimumOfMaximumValues"></a>

### *property* VariableGraph.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.LoadStepForMinimumOfMinimumValues"></a>

### *property* VariableGraph.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.LoadStepForMinimumOfMaximumValues"></a>

### *property* VariableGraph.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.TimeForMaximumOfMinimumValues"></a>

### *property* VariableGraph.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.TimeForMaximumOfMaximumValues"></a>

### *property* VariableGraph.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.LoadStepForMaximumOfMinimumValues"></a>

### *property* VariableGraph.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.LoadStepForMaximumOfMaximumValues"></a>

### *property* VariableGraph.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.IsSolved"></a>

### *property* VariableGraph.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CoordinateSystem"></a>

### *property* VariableGraph.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.ScopingMethod"></a>

### *property* VariableGraph.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.SetNumber"></a>

### *property* VariableGraph.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CombinationNumber"></a>

### *property* VariableGraph.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.SolutionCombinationDriver"></a>

### *property* VariableGraph.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Path"></a>

### *property* VariableGraph.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Surface"></a>

### *property* VariableGraph.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.SurfaceCoating"></a>

### *property* VariableGraph.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.NamedSelections"></a>

### *property* VariableGraph.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.WaterfallShowTextOnMosaic"></a>

### *property* VariableGraph.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CrackFrontNumber"></a>

### *property* VariableGraph.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.GlobalIDs"></a>

### *property* VariableGraph.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Identifier"></a>

### *property* VariableGraph.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.IterationNumber"></a>

### *property* VariableGraph.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.LoadStep"></a>

### *property* VariableGraph.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.MaximumOccursOn"></a>

### *property* VariableGraph.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.MinimumOccursOn"></a>

### *property* VariableGraph.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.LoadStepNumber"></a>

### *property* VariableGraph.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.SolverComponentIDs"></a>

### *property* VariableGraph.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Substep"></a>

### *property* VariableGraph.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Average"></a>

### *property* VariableGraph.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Maximum"></a>

### *property* VariableGraph.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.MaximumOfMaximumOverTime"></a>

### *property* VariableGraph.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.MaximumOfMinimumOverTime"></a>

### *property* VariableGraph.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Minimum"></a>

### *property* VariableGraph.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.MinimumOfMaximumOverTime"></a>

### *property* VariableGraph.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.MinimumOfMinimumOverTime"></a>

### *property* VariableGraph.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Time"></a>

### *property* VariableGraph.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DisplayTime"></a>

### *property* VariableGraph.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.GraphControlsXAxis"></a>

### *property* VariableGraph.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DisplayOption"></a>

### *property* VariableGraph.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DpfEvaluation"></a>

### *property* VariableGraph.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.By"></a>

### *property* VariableGraph.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.ItemType"></a>

### *property* VariableGraph.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CalculateTimeHistory"></a>

### *property* VariableGraph.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Suppressed"></a>

### *property* VariableGraph.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Children"></a>

### *property* VariableGraph.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Comments"></a>

### *property* VariableGraph.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Figures"></a>

### *property* VariableGraph.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Images"></a>

### *property* VariableGraph.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* VariableGraph.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Properties"></a>

### *property* VariableGraph.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.VisibleProperties"></a>

### *property* VariableGraph.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VariableGraph.ClearGeneratedData"></a>

### VariableGraph.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.EvaluateAllResults"></a>

### VariableGraph.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.FetchRemoteResults"></a>

### VariableGraph.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.ExportToTextFile"></a>

### VariableGraph.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.ExportAnimation"></a>

### VariableGraph.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DuplicateWithoutResults"></a>

### VariableGraph.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CreateResultsAtAllSets"></a>

### VariableGraph.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.PromoteToNamedSelection"></a>

### VariableGraph.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CreateParameter"></a>

### VariableGraph.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.AddAlert"></a>

### VariableGraph.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.AddConvergence"></a>

### VariableGraph.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.RenameBasedOnDefinition"></a>

### VariableGraph.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Delete"></a>

### VariableGraph.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.GetChildren"></a>

### VariableGraph.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### VariableGraph.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.AddComment"></a>

### VariableGraph.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.AddFigure"></a>

### VariableGraph.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.AddImage"></a>

### VariableGraph.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Activate"></a>

### VariableGraph.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.CopyTo"></a>

### VariableGraph.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Duplicate"></a>

### VariableGraph.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.GroupAllSimilarChildren"></a>

### VariableGraph.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.GroupSimilarObjects"></a>

### VariableGraph.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.PropertyByName"></a>

### VariableGraph.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.PropertyByAPIName"></a>

### VariableGraph.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.GetParameter"></a>

### VariableGraph.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.RemoveParameter"></a>

### VariableGraph.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

