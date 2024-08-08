# `VariableGraph`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.VariableGraph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VariableGraph.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#id0)                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#VariableGraph.WaterfallPanelShowTextOnMosaic)                                                                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#id0)                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="VariableGraph.InternalObject"></a>

### *property* VariableGraph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DataModelObjectCategory"></a>

### *property* VariableGraph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.PlotData"></a>

### *property* VariableGraph.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* VariableGraph.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.ScopingMethod"></a>

### *property* VariableGraph.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* VariableGraph.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Path"></a>

### *property* VariableGraph.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Surface"></a>

### *property* VariableGraph.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.NamedSelections"></a>

### *property* VariableGraph.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.WaterfallPanelShowTextOnMosaic"></a>

### *property* VariableGraph.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

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

### *property* VariableGraph.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DisplayOption"></a>

### *property* VariableGraph.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.DpfEvaluation"></a>

### *property* VariableGraph.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.By"></a>

### *property* VariableGraph.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.ItemType"></a>

### *property* VariableGraph.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* VariableGraph.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Figures"></a>

### *property* VariableGraph.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VariableGraph.Images"></a>

### *property* VariableGraph.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### VariableGraph.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

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

### VariableGraph.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

