# `VelocityWaterfallDiagram`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityWaterfallDiagram"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VelocityWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VelocityWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#VelocityWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#VelocityWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#VelocityWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#VelocityWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VelocityWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VelocityWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VelocityWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VelocityWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#VelocityWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#VelocityWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VelocityWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#VelocityWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VelocityWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VelocityWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#VelocityWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#VelocityWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#VelocityWaterfallDiagram.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VelocityWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VelocityWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VelocityWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VelocityWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VelocityWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VelocityWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VelocityWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VelocityWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#VelocityWaterfallDiagram.Average)                                                     | Gets the Average.                                                      |
| [`By`](#VelocityWaterfallDiagram.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#VelocityWaterfallDiagram.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#VelocityWaterfallDiagram.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#VelocityWaterfallDiagram.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#VelocityWaterfallDiagram.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#VelocityWaterfallDiagram.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#VelocityWaterfallDiagram.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#VelocityWaterfallDiagram.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#VelocityWaterfallDiagram.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayPanel`](#VelocityWaterfallDiagram.DisplayPanel)                                           | Gets or sets the DisplayPanel.                                         |
| [`DisplayTime`](#VelocityWaterfallDiagram.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#VelocityWaterfallDiagram.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#VelocityWaterfallDiagram.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#VelocityWaterfallDiagram.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#VelocityWaterfallDiagram.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#VelocityWaterfallDiagram.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#VelocityWaterfallDiagram.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#VelocityWaterfallDiagram.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#VelocityWaterfallDiagram.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#VelocityWaterfallDiagram.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#VelocityWaterfallDiagram.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#VelocityWaterfallDiagram.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#VelocityWaterfallDiagram.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#VelocityWaterfallDiagram.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#VelocityWaterfallDiagram.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#VelocityWaterfallDiagram.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#VelocityWaterfallDiagram.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VelocityWaterfallDiagram.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VelocityWaterfallDiagram.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#VelocityWaterfallDiagram.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#VelocityWaterfallDiagram.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VelocityWaterfallDiagram.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#VelocityWaterfallDiagram.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`NormalOrientation`](#VelocityWaterfallDiagram.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`PanelContribution`](#VelocityWaterfallDiagram.PanelContribution)                                 | Gets or sets the PanelContribution.                                    |
| [`PanelsToDisplay`](#VelocityWaterfallDiagram.PanelsToDisplay)                                     | Gets or sets the PanelsToDisplay.                                      |
| [`Path`](#VelocityWaterfallDiagram.Path)                                                           | Path property.                                                         |
| [`PlotData`](#VelocityWaterfallDiagram.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#VelocityWaterfallDiagram.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#VelocityWaterfallDiagram.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VelocityWaterfallDiagram.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#VelocityWaterfallDiagram.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#VelocityWaterfallDiagram.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`SpatialResolution`](#VelocityWaterfallDiagram.SpatialResolution)                                 | Gets or sets the SpatialResolution.                                    |
| [`Substep`](#VelocityWaterfallDiagram.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#VelocityWaterfallDiagram.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#VelocityWaterfallDiagram.Surface)                                                     | Surface property.                                                      |
| [`Time`](#VelocityWaterfallDiagram.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#VelocityWaterfallDiagram.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#VelocityWaterfallDiagram.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="VelocityWaterfallDiagram.Average"></a>

### *property* VelocityWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.By"></a>

### *property* VelocityWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CalculateTimeHistory"></a>

### *property* VelocityWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Children"></a>

### *property* VelocityWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CombinationNumber"></a>

### *property* VelocityWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Comments"></a>

### *property* VelocityWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CoordinateSystem"></a>

### *property* VelocityWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CrackFrontNumber"></a>

### *property* VelocityWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DataModelObjectCategory"></a>

### *property* VelocityWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayOption"></a>

### *property* VelocityWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayPanel"></a>

### *property* VelocityWaterfallDiagram.DisplayPanel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayTime"></a>

### *property* VelocityWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DpfEvaluation"></a>

### *property* VelocityWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Figures"></a>

### *property* VelocityWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GlobalIDs"></a>

### *property* VelocityWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GraphControlsXAxis"></a>

### *property* VelocityWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Identifier"></a>

### *property* VelocityWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Images"></a>

### *property* VelocityWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.InternalObject"></a>

### *property* VelocityWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IsSolved"></a>

### *property* VelocityWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ItemType"></a>

### *property* VelocityWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IterationNumber"></a>

### *property* VelocityWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStep"></a>

### *property* VelocityWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepNumber"></a>

### *property* VelocityWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Location"></a>

### *property* VelocityWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Maximum"></a>

### *property* VelocityWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MaximumOccursOn"></a>

### *property* VelocityWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* VelocityWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* VelocityWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Minimum"></a>

### *property* VelocityWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MinimumOccursOn"></a>

### *property* VelocityWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* VelocityWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* VelocityWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.NamedSelections"></a>

### *property* VelocityWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.NormalOrientation"></a>

### *property* VelocityWaterfallDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PanelContribution"></a>

### *property* VelocityWaterfallDiagram.PanelContribution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PanelsToDisplay"></a>

### *property* VelocityWaterfallDiagram.PanelsToDisplay *: [Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType](../../../../../Mechanical/DataModel/Enums/PanelsToDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Path"></a>

### *property* VelocityWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PlotData"></a>

### *property* VelocityWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Properties"></a>

### *property* VelocityWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ScopingMethod"></a>

### *property* VelocityWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SetNumber"></a>

### *property* VelocityWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* VelocityWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SolverComponentIDs"></a>

### *property* VelocityWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SpatialResolution"></a>

### *property* VelocityWaterfallDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Substep"></a>

### *property* VelocityWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Suppressed"></a>

### *property* VelocityWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Surface"></a>

### *property* VelocityWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Time"></a>

### *property* VelocityWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.VisibleProperties"></a>

### *property* VelocityWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallPanelShowTextOnMosaic"></a>

### *property* VelocityWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VelocityWaterfallDiagram.Activate"></a>

### VelocityWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddAlert"></a>

### VelocityWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddComment"></a>

### VelocityWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddConvergence"></a>

### VelocityWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddFigure"></a>

### VelocityWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddImage"></a>

### VelocityWaterfallDiagram.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ClearGeneratedData"></a>

### VelocityWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CopyTo"></a>

### VelocityWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CreateParameter"></a>

### VelocityWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CreateResultsAtAllSets"></a>

### VelocityWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Delete"></a>

### VelocityWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Duplicate"></a>

### VelocityWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DuplicateWithoutResults"></a>

### VelocityWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.EvaluateAllResults"></a>

### VelocityWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ExportAnimation"></a>

### VelocityWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ExportToTextFile"></a>

### VelocityWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.FetchRemoteResults"></a>

### VelocityWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetChildren"></a>

### VelocityWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetParameter"></a>

### VelocityWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GroupAllSimilarChildren"></a>

### VelocityWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GroupSimilarObjects"></a>

### VelocityWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PromoteToNamedSelection"></a>

### VelocityWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PropertyByAPIName"></a>

### VelocityWaterfallDiagram.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PropertyByName"></a>

### VelocityWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RemoveParameter"></a>

### VelocityWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RenameBasedOnDefinition"></a>

### VelocityWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

