# `AccelerationWaterfallDiagram`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AccelerationWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AccelerationWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#AccelerationWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#AccelerationWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#AccelerationWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#AccelerationWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AccelerationWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#AccelerationWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#AccelerationWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AccelerationWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#AccelerationWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#AccelerationWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AccelerationWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#AccelerationWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#AccelerationWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#AccelerationWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#AccelerationWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#AccelerationWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#AccelerationWaterfallDiagram.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AccelerationWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AccelerationWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AccelerationWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AccelerationWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AccelerationWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AccelerationWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AccelerationWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AccelerationWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#AccelerationWaterfallDiagram.Average)                                                     | Gets the Average.                                                      |
| [`By`](#AccelerationWaterfallDiagram.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#AccelerationWaterfallDiagram.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#AccelerationWaterfallDiagram.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#AccelerationWaterfallDiagram.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#AccelerationWaterfallDiagram.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#AccelerationWaterfallDiagram.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#AccelerationWaterfallDiagram.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#AccelerationWaterfallDiagram.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#AccelerationWaterfallDiagram.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayPanel`](#AccelerationWaterfallDiagram.DisplayPanel)                                           | Gets or sets the DisplayPanel.                                         |
| [`DisplayTime`](#AccelerationWaterfallDiagram.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#AccelerationWaterfallDiagram.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#AccelerationWaterfallDiagram.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#AccelerationWaterfallDiagram.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#AccelerationWaterfallDiagram.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#AccelerationWaterfallDiagram.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#AccelerationWaterfallDiagram.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#AccelerationWaterfallDiagram.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#AccelerationWaterfallDiagram.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#AccelerationWaterfallDiagram.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#AccelerationWaterfallDiagram.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#AccelerationWaterfallDiagram.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#AccelerationWaterfallDiagram.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#AccelerationWaterfallDiagram.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AccelerationWaterfallDiagram.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#AccelerationWaterfallDiagram.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#AccelerationWaterfallDiagram.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#AccelerationWaterfallDiagram.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#AccelerationWaterfallDiagram.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#AccelerationWaterfallDiagram.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#AccelerationWaterfallDiagram.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AccelerationWaterfallDiagram.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AccelerationWaterfallDiagram.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#AccelerationWaterfallDiagram.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#AccelerationWaterfallDiagram.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AccelerationWaterfallDiagram.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#AccelerationWaterfallDiagram.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`NormalOrientation`](#AccelerationWaterfallDiagram.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`PanelContribution`](#AccelerationWaterfallDiagram.PanelContribution)                                 | Gets or sets the PanelContribution.                                    |
| [`PanelsToDisplay`](#AccelerationWaterfallDiagram.PanelsToDisplay)                                     | Gets or sets the PanelsToDisplay.                                      |
| [`Path`](#AccelerationWaterfallDiagram.Path)                                                           | Path property.                                                         |
| [`PlotData`](#AccelerationWaterfallDiagram.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#AccelerationWaterfallDiagram.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#AccelerationWaterfallDiagram.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AccelerationWaterfallDiagram.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#AccelerationWaterfallDiagram.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#AccelerationWaterfallDiagram.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`SpatialResolution`](#AccelerationWaterfallDiagram.SpatialResolution)                                 | Gets or sets the SpatialResolution.                                    |
| [`Substep`](#AccelerationWaterfallDiagram.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#AccelerationWaterfallDiagram.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#AccelerationWaterfallDiagram.Surface)                                                     | Surface property.                                                      |
| [`Time`](#AccelerationWaterfallDiagram.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#AccelerationWaterfallDiagram.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#AccelerationWaterfallDiagram.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AccelerationWaterfallDiagram.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#AccelerationWaterfallDiagram.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#AccelerationWaterfallDiagram.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#AccelerationWaterfallDiagram.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="AccelerationWaterfallDiagram.Average"></a>

### *property* AccelerationWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.By"></a>

### *property* AccelerationWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CalculateTimeHistory"></a>

### *property* AccelerationWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Children"></a>

### *property* AccelerationWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CombinationNumber"></a>

### *property* AccelerationWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Comments"></a>

### *property* AccelerationWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CoordinateSystem"></a>

### *property* AccelerationWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CrackFrontNumber"></a>

### *property* AccelerationWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DataModelObjectCategory"></a>

### *property* AccelerationWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DisplayOption"></a>

### *property* AccelerationWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DisplayPanel"></a>

### *property* AccelerationWaterfallDiagram.DisplayPanel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DisplayTime"></a>

### *property* AccelerationWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DpfEvaluation"></a>

### *property* AccelerationWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Figures"></a>

### *property* AccelerationWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GlobalIDs"></a>

### *property* AccelerationWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GraphControlsXAxis"></a>

### *property* AccelerationWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Identifier"></a>

### *property* AccelerationWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Images"></a>

### *property* AccelerationWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.InternalObject"></a>

### *property* AccelerationWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.IsSolved"></a>

### *property* AccelerationWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ItemType"></a>

### *property* AccelerationWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.IterationNumber"></a>

### *property* AccelerationWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStep"></a>

### *property* AccelerationWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepNumber"></a>

### *property* AccelerationWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Location"></a>

### *property* AccelerationWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Maximum"></a>

### *property* AccelerationWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MaximumOccursOn"></a>

### *property* AccelerationWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Minimum"></a>

### *property* AccelerationWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MinimumOccursOn"></a>

### *property* AccelerationWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.NamedSelections"></a>

### *property* AccelerationWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.NormalOrientation"></a>

### *property* AccelerationWaterfallDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PanelContribution"></a>

### *property* AccelerationWaterfallDiagram.PanelContribution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PanelsToDisplay"></a>

### *property* AccelerationWaterfallDiagram.PanelsToDisplay *: [Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType](../../../../../Mechanical/DataModel/Enums/PanelsToDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Path"></a>

### *property* AccelerationWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PlotData"></a>

### *property* AccelerationWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Properties"></a>

### *property* AccelerationWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ScopingMethod"></a>

### *property* AccelerationWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SetNumber"></a>

### *property* AccelerationWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* AccelerationWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SolverComponentIDs"></a>

### *property* AccelerationWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SpatialResolution"></a>

### *property* AccelerationWaterfallDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Substep"></a>

### *property* AccelerationWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Suppressed"></a>

### *property* AccelerationWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Surface"></a>

### *property* AccelerationWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Time"></a>

### *property* AccelerationWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.VisibleProperties"></a>

### *property* AccelerationWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.WaterfallPanelShowTextOnMosaic"></a>

### *property* AccelerationWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AccelerationWaterfallDiagram.Activate"></a>

### AccelerationWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddAlert"></a>

### AccelerationWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddComment"></a>

### AccelerationWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddConvergence"></a>

### AccelerationWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddFigure"></a>

### AccelerationWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddImage"></a>

### AccelerationWaterfallDiagram.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ClearGeneratedData"></a>

### AccelerationWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CopyTo"></a>

### AccelerationWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CreateParameter"></a>

### AccelerationWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CreateResultsAtAllSets"></a>

### AccelerationWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Delete"></a>

### AccelerationWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Duplicate"></a>

### AccelerationWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DuplicateWithoutResults"></a>

### AccelerationWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.EvaluateAllResults"></a>

### AccelerationWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ExportAnimation"></a>

### AccelerationWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ExportToTextFile"></a>

### AccelerationWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.FetchRemoteResults"></a>

### AccelerationWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GetChildren"></a>

### AccelerationWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GetParameter"></a>

### AccelerationWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GroupAllSimilarChildren"></a>

### AccelerationWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GroupSimilarObjects"></a>

### AccelerationWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PromoteToNamedSelection"></a>

### AccelerationWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PropertyByAPIName"></a>

### AccelerationWaterfallDiagram.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PropertyByName"></a>

### AccelerationWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.RemoveParameter"></a>

### AccelerationWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.RenameBasedOnDefinition"></a>

### AccelerationWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

